import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import getCroppedImage from "./getCroppedImage";
import fetchData from "./fetchData";
import Loader from "./Loader";
import "./GenresList.css";

// Interface describing game genre info
interface Genre {
  id: number;
  image_background: string;
  name: string;
}

// Returns a list of game genres for the sidebar
const GenresList = () => {
  // Call fetch data to get array of data, error string, and loading status
  const { data, error, isLoading } = fetchData<Genre>("/genres");
  // Keep track of when to show genres list as collapsible
  const [genresActive, setGenresActive] = useState<boolean>(false);

  // Handles collapsibles when resizing
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        setGenresActive(true);
      } else if (window.innerWidth < 768 && genresActive) {
        setGenresActive(false);
      }
    });
  });

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
      {(genresActive || window.innerWidth >= 768) && (
        <>
          <h2 className="genre-header">Genres</h2>
          {error && <p>{error}</p>}
          {isLoading && (
            <div className="genre-loader">
              <Loader></Loader>
            </div>
          )}
          <ul className="genre-list">
            {data.map((genre) => (
              <li className="list-item" key={genre.id}>
                <button
                  className="genre-btn"
                  onClick={() => {
                    // TODO: handle this when game data fetching is ready
                    console.log(genre.name);
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
        </>
      )}
    </div>
  );
};

export default GenresList;
