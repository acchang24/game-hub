import { GameQuery } from "../App";
import { Game } from "../components/GameGrid";
import fetchData from "./fetchData";

const fetchGames = (gameQuery: GameQuery) => {
  const { data, error, isLoading } = fetchData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

  return { data, error, isLoading };
};

export default fetchGames;
