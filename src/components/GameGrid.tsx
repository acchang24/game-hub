import React from "react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGame";
import GameCard from "./GameCard";
import "./css/GameGrid.css";

interface Props {
  gameQuery: GameQuery;
}

// GameGrid component returns a component that displays game content in a grid
const GameGrid = ({ gameQuery }: Props) => {
  // Call fetchGame to get array of games, error string, and loading status
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);

  // Return the grid of games
  return (
    <>
      {error && <p>{error.message}</p>}
      {!isLoading && (
        <>
          <div className="game-grid">
            {data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map((game) => (
                  <GameCard game={game} key={game.id}></GameCard>
                ))}
              </React.Fragment>
            ))}
            {/* {data?.results.map((games) => {
            return <GameCard game={games} key={games.id}></GameCard>;
          })} */}
          </div>
          {hasNextPage && (
            <button onClick={() => fetchNextPage()}>
              {isFetchingNextPage ? "Loading..." : "Load More"}
            </button>
          )}
        </>
      )}
    </>
  );
};

export default GameGrid;
