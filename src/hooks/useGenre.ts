import useData, { FetchResponse } from "./useData";
import apiClient from "../utility/apiClient";
import { useQuery } from "@tanstack/react-query";

// Interface describing game genre info
export interface Genre {
  id: number;
  image_background: string;
  name: string;
}

// Hook to fetches genres
// const useGenre = () => {
//   const { data, error, isLoading } = useData<Genre>("/genres");

//   return { data, error, isLoading };
// };

// Fetching data with ReactQuery
const useGenre = () =>
  // calls useQuery hook, passing in a config object
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    // Query function calls apiClient to fetch data
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genre>>("/genres")
        .then((response) => response.data),
    staleTime: 24 * 60 * 60 * 1000, // 24hr to consider stale
  });

export default useGenre;
