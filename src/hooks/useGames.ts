import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../utility/apiClient";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";

// Interface describing game info
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

// Instance of ApiClient
const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery], // Everytime gameQuery changes, it will fetch new data
    // Pass in page number for query function
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          search: gameQuery.searchText,
          ordering: gameQuery.sortOrder,
          page: pageParam,
        },
      }),
    // Computes next page number
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24hr to consider stale
  });

export default useGames;
