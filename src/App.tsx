import { useState } from "react";
import NavBar from "./components/NavBar";
import GenresList, { Genre } from "./components/GenresList";
import PlatformSelector, { Platform } from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameGrid from "./components/GameGrid";
import "./App.css";
import "normalize.css";

// Interface describing queries for searching/filtering through games
export interface GameQuery {
  genre: Genre;
  platform: Platform | null;
  searchText: string;
  sortOrder: string;
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
          setGameQuery({ ...gameQuery, searchText: searchText });
        }}
      ></NavBar>
      <div className="grid-container">
        <GenresList
          onSelect={(genre) => {
            setGameQuery({ ...gameQuery, genre: genre });
          }}
        ></GenresList>
        <div>
          <div className="main-header">
            <h1 className="games-header">{heading}</h1>
            <div className="selectors">
              <PlatformSelector
                onSelect={(platform) => {
                  setGameQuery({ ...gameQuery, platform: platform });
                }}
                selectedPlatform={gameQuery.platform}
              ></PlatformSelector>
              <SortSelector
                onSelect={(order) => {
                  setGameQuery({
                    ...gameQuery,
                    sortOrder: order.value,
                  });
                }}
                sortOrder={gameQuery.sortOrder}
              ></SortSelector>
            </div>
          </div>
          <GameGrid gameQuery={gameQuery}></GameGrid>
        </div>
      </div>
    </>
  );
}

export default App;
