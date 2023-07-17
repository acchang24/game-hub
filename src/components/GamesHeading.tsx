import { GameQuery } from "../App";
import "./css/GamesHeading.css";

interface Props {
  gameQuery: GameQuery;
}

const GamesHeading = ({ gameQuery }: Props) => {
  // Get the heading based on selected parameters
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return <h1 className="games-header">{heading}</h1>;
};

export default GamesHeading;
