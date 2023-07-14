import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
  results: T[];
}

// Generic function to help fetch data by passing in an endpoint.
// Returns an array of data, error string, and loading status
const fetchData = <T>(endPoint: string) => {
  // States to keep track of the array of data, errors, and loading status
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Fetch data
  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchResponse<T>>(endPoint, { signal: controller.signal })
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
  }, []);

  return { data, error, isLoading };
};

export default fetchData;
