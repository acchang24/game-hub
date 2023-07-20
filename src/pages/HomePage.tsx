import GameGrid from "../components/GameGrid";
import GamesHeading from "../components/GamesHeading";
import GenresList from "../components/GenresList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import "./css/HomePage.css";

const HomePage = () => {
  return (
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
  );
};

export default HomePage;
