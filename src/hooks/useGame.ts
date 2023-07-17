import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import useData from "./useData";

// Interface describing game info
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

// Hook to fetch games based on game queries
const useGames = (gameQuery: GameQuery) => {
  const { data, error, isLoading } = useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        search: gameQuery.searchText,
        ordering: gameQuery.sortOrder,
      },
    },
    [gameQuery]
  );

  return { data, error, isLoading };
};

export default useGames;
