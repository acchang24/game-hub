import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import "./css/GameGrid.css";

// GameGrid component returns a component that displays game content in a grid
const GameGrid = () => {
  const { data, error, fetchNextPage, hasNextPage } = useGames();

  // Get the number of games that were fetched
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  // Return the grid of games
  return (
    <>
      {error && <p>{error.message}</p>}
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={null}
      >
        <div className="game-grid">
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCard game={game} key={game.id}></GameCard>
              ))}
            </React.Fragment>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
