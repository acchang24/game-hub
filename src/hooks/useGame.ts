import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import ApiClient, { FetchResponse } from "../utility/apiClient";
// import useData, { FetchResponse } from "./useData";

// Interface describing game info
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

// Hook to fetch games based on game queries
// const useGames = (gameQuery: GameQuery) => {
//   const { data, error, isLoading } = useData<Game>(
//     "/games",
// {
//   params: {
//     genres: gameQuery.genre?.id,
//     parent_platforms: gameQuery.platform?.id,
//     search: gameQuery.searchText,
//     ordering: gameQuery.sortOrder,
//   },
// },
//     [gameQuery]
//   );

//   return { data, error, isLoading };
// };

// Instance of ApiClient
const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery], // Everytime gameQuery changes, it will fetch new data
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          search: gameQuery.searchText,
          ordering: gameQuery.sortOrder,
        },
      }),
  });

export default useGames;
