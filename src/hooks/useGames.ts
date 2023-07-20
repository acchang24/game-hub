import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../utility/apiClient";
import useGameQueryStore from "../store";
import { Game } from "../interfaces/Game";

// Instance of ApiClient
const apiClient = new ApiClient<Game>("/games");

const useGames = () => {
  // Get the state's game query
  const gameQuery = useGameQueryStore((state) => state.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery], // Everytime the state's gameQuery changes, it will fetch new data
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
};

export default useGames;
