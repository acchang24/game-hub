import "./App.css";
import "normalize.css";
import NavBar from "./components/NavBar";
import GenresList from "./components/GenresList";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="grid-container">
        <div className="grid-item side-panel">
          <GenresList></GenresList>
        </div>
        <div className="grid-item main">main</div>
      </div>
    </>
  );
}

export default App;
