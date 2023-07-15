import NavBar from "./components/NavBar";
import GenresList, { Genre } from "./components/GenresList";
import GameGrid, { Platform } from "./components/GameGrid";
import PlatformSelector from "./components/PlatformSelector";
import "./App.css";
import "normalize.css";
import { useState } from "react";

// Interface describing queries for searching/filtering through games
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  searchText: string;
}

function App() {
  // Keep track of the game query's state
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <>
      <NavBar
        onSubmit={(searchText) => {
          setGameQuery({ ...gameQuery, searchText });
        }}
      ></NavBar>
      <div className="grid-container">
        <GenresList
          onSelect={(genre) => {
            setGameQuery({ ...gameQuery, genre });
          }}
        ></GenresList>
        <div>
          <div className="main-header">
            <h1 className="games-header">{heading}</h1>
            <PlatformSelector
              onSelect={(platform) => {
                setGameQuery({ ...gameQuery, platform });
              }}
            ></PlatformSelector>
          </div>
          <GameGrid gameQuery={gameQuery}></GameGrid>
        </div>
      </div>
    </>
  );
}

export default App;
