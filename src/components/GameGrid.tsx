import fetchData from "../utility/fetchData";
import GameCard from "./GameCard";
import PlatformSelector from "./PlatformSelector";
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

// GameGrid component returns a component that displays game content in a grid
const GameGrid = () => {
  // Call fetchGame to get array of games, error string, and loading status
  const { data, error } = fetchData<Game>("/games");

  // Return the grid of games
  return (
    <>
      {error && <p>{error}</p>}
      <div className="grid">
        <h1 className="games-header">Games</h1>
        <PlatformSelector></PlatformSelector>
        <div className="game-grid">
          {data.map((games) => {
            return <GameCard game={games} key={games.id}></GameCard>;
          })}
        </div>
      </div>
    </>
  );
};

export default GameGrid;
