import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../utility/apiClient";
import genres from "../static-data/genres";
import { Genre } from "../interfaces/Genre";

// Instance of ApiClient
const apiClient = new ApiClient<Genre>("/genres");

// Fetching data with ReactQuery
const useGenres = () =>
  // calls useQuery hook, passing in a config object
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    // Query function calls apiClient to fetch data
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24hr to consider stale
    initialData: genres,
  });

export default useGenres;
