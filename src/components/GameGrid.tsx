import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";
import GameCard from "./GameCard";
import "./GameGrid.css";

// Interface describing game info
export interface Game {
  id: number;
  name: string;
  background_image: string;
}

// GameGrid component returns a component that displays game content in a grid
const GameGrid = () => {
  // Keep track of games data/errors that are fetched
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>("");

  // Fetch game data
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get("/games", { signal: controller.signal })
      .then((results) => {
        console.log(results.data.results);
        setGames(results.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        else {
          setError(err.message);
        }
      });
    return () => controller.abort();
  }, []);

  // Return the grid of games
  return (
    <>
      {error && <p>{error}</p>}
      <div className="grid">
        <h1 className="games-header">Games</h1>
        <div className="game-grid">
          {games.map((g) => {
            return <GameCard game={g}></GameCard>;
          })}
        </div>
      </div>
    </>
  );
};

export default GameGrid;
