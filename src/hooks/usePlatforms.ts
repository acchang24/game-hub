import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../utility/apiClient";
import platforms from "../static-data/platforms";
import { Platform } from "../interfaces/Platform";

// Instance of ApiClient
const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

// Fetch using react query
const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24hrs to stale data
    initialData: platforms,
  });

export default usePlatforms;
