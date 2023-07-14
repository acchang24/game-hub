import "./App.css";
import "normalize.css";
import NavBar from "./components/NavBar";
import GenresList from "./components/GenresList";
import GameGrid from "./components/GameGrid";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="grid-container">
        <GenresList></GenresList>
        <div>
          <div className="main-header">
            <h1 className="games-header">Games</h1>
            <PlatformSelector></PlatformSelector>
          </div>
          <GameGrid></GameGrid>
        </div>
      </div>
    </>
  );
}

export default App;
