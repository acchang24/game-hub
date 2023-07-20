import NavBar from "./components/NavBar";
import GenresList from "./components/GenresList";
import GamesHeading from "./components/GamesHeading";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameGrid from "./components/GameGrid";
import "./App.css";
import "normalize.css";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="grid-container">
        <GenresList></GenresList>
        <div>
          <div className="main-header">
            <GamesHeading></GamesHeading>
            <div className="selectors">
              <PlatformSelector></PlatformSelector>
              <SortSelector></SortSelector>
            </div>
          </div>
          <GameGrid></GameGrid>
        </div>
      </div>
    </>
  );
}

export default App;
