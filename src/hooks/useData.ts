import { useEffect, useState } from "react";
import { AxiosRequestConfig, CanceledError } from "axios";
import apiClient from "../utility/apiClient";

// Interface to pass a type in
// when calling .get with axios
interface FetchResponse<T> {
  results: T[];
}

// Generic function to help fetch data by passing in an endpoint.
// Returns an array of data, error string, and loading status
const useData = <T>(
  endPoint: string,
  requestConfigs?: AxiosRequestConfig,
  dependencies?: any[]
) => {
  // States to keep track of the array of data, errors, and loading status
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(
    () => {
      setIsLoading(true);
      // AbortController for cancelling fetch requests
      const controller = new AbortController();

      // Fetch data
      apiClient
        .get<FetchResponse<T>>(endPoint, {
          signal: controller.signal,
          ...requestConfigs,
        })
        .then((response) => {
          setData(response.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          else {
            setError(err.message);
          }
          setIsLoading(false);
        });
      return () => controller.abort();
    },
    dependencies ? [...dependencies] : []
  );

  return { data, error, isLoading };
};

export default useData;
