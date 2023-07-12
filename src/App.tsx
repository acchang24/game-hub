import "./App.css";
import "normalize.css";
import NavBar from "./components/NavBar";
import GenresList from "./components/GenresList";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="grid-container">
        <GenresList></GenresList>
        <GameGrid></GameGrid>
      </div>
    </>
  );
}

export default App;
