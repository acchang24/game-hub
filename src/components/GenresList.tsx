import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";
import getCroppedImage from "../utility/getCroppedImage";
import Loader from "./Loader";
import "./css/GenresList.css";

// Returns a list of game genres for the sidebar
const GenresList = () => {
  // Call use data hook to get array of data, error string, and loading status
  const { data, error, isLoading } = useGenres();

  // Keep track of when to show genres list as collapsible
  const [genresActive, setGenresActive] = useState<boolean>(false);

  // State's genre id
  // const genreId = useGameQueryStore(state => state.gameQuery.genreId);

  // get state's setGenreId function
  const setGenreId = useGameQueryStore((state) => state.setGenreId);

  return (
    <div>
      <div className="genre-collapsible">
        <AiOutlineMenu
          className="menu-icon"
          onClick={() => {
            setGenresActive(!genresActive);
          }}
        ></AiOutlineMenu>
      </div>
      <div className={genresActive ? "side-menu expanded" : "side-menu"}>
        <h2 className="genre-header">Genres</h2>
        {error && <p>{error.message}</p>}
        {isLoading && (
          <div className="genre-loader">
            <Loader></Loader>
          </div>
        )}
        <ul className="genre-list">
          {data?.results.map((genre) => (
            <li className="list-item" key={genre.id}>
              <button
                className="genre-btn"
                onClick={() => {
                  // set the state's genre id to the selected one
                  setGenreId(genre.id);
                  // Collapse the genre menu
                  setGenresActive(false);
                }}
              >
                <img
                  className="genre-image"
                  src={getCroppedImage(genre.image_background)}
                  alt="genre image"
                />
                {genre.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GenresList;
