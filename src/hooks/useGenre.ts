import ApiClient from "../utility/apiClient";
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../utility/apiClient";
// import useData, { FetchResponse } from "./useData";

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

// Instance of ApiClient
const apiClient = new ApiClient<Genre>("/genres");

// Fetching data with ReactQuery
const useGenre = () =>
  // calls useQuery hook, passing in a config object
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    // Query function calls apiClient to fetch data
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24hr to consider stale
  });

export default useGenre;
