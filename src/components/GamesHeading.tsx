import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatforms from "../hooks/usePlatforms";
import "./css/GamesHeading.css";

interface Props {
  gameQuery: GameQuery;
}

const GamesHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenre();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find((p) => p.id === gameQuery.platformId);

  // Get the heading based on selected parameters
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return <h1 className="games-header">{heading}</h1>;
};

export default GamesHeading;
