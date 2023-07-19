import { GameQuery } from "../App";
import useGetGenre from "../hooks/useGetGenre";
import useGetPlatform from "../hooks/useGetPlatform";
import "./css/GamesHeading.css";

interface Props {
  gameQuery: GameQuery;
}

const GamesHeading = ({ gameQuery }: Props) => {
  // Get the selected genre
  const genre = useGetGenre(gameQuery.genreId);
  // Get the selected platform
  const platform = useGetPlatform(gameQuery.platformId);

  // Get the heading based on selected parameters
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return <h1 className="games-header">{heading}</h1>;
};

export default GamesHeading;
