import { useQuery } from "@tanstack/react-query";
import apiClient from "../utility/apiClient";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import { FetchResponse } from "../utility/apiClient";
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

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery], // Everytime gameQuery changes, it will fetch new data
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            search: gameQuery.searchText,
            ordering: gameQuery.sortOrder,
          },
        })
        .then((response) => response.data),
  });

export default useGames;
