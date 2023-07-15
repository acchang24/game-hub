import { GameQuery } from "../App";
import fetchGames from "../utility/fetchGame";
import GameCard from "./GameCard";
import "./GameGrid.css";

// Interface describing platform info
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// Interface describing game info
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

interface Props {
  gameQuery: GameQuery;
}

// GameGrid component returns a component that displays game content in a grid
const GameGrid = ({ gameQuery }: Props) => {
  // Call fetchGame to get array of games, error string, and loading status
  const { data, error, isLoading } = fetchGames(gameQuery);

  // Return the grid of games
  return (
    <>
      {error && <p>{error}</p>}
      {!isLoading && (
        <div className="game-grid">
          {data.map((games) => {
            return <GameCard game={games} key={games.id}></GameCard>;
          })}
        </div>
      )}
    </>
  );
};

export default GameGrid;
