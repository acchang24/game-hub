import useGetGenre from "../hooks/useGetGenre";
import useGetPlatform from "../hooks/useGetPlatform";
import useGameQueryStore from "../store";
import "./css/GamesHeading.css";

// Returns heading based on selected parameters
const GamesHeading = () => {
  // Get the state's genre id
  const genreId = useGameQueryStore(state => state.gameQuery.genreId);
  // Get the selected genre based on the state's genre id
  const genre = useGetGenre(genreId);

  // Get the state's platform id
  const platformId = useGameQueryStore(state => state.gameQuery.platformId);
  // Get the selected platform based on the state's platform id
  const platform = useGetPlatform(platformId);

  // Get the heading based on selected parameters
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return <h1 className="games-header">{heading}</h1>;
};

export default GamesHeading;
