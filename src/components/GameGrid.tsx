import GameCard from "./GameCard";
import Loader from "./Loader";
import fetchData from "./fetchData";
import "./GameGrid.css";

// Interface describing platform info
export interface Platform {
  platform: { id: number; name: string; slug: string };
}

// Interface describing game info
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: Platform[];
}

// GameGrid component returns a component that displays game content in a grid
const GameGrid = () => {
  // Call fetchGame to get array of games, error string, and loading status
  const { data, error, isLoading } = fetchData<Game>("/games");

  // Return the grid of games
  return (
    <>
      {isLoading && (
        <div className="games-loader">
          <Loader></Loader>
        </div>
      )}
      {error && <p>{error}</p>}
      <div className="grid">
        <h1 className="games-header">Games</h1>
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
