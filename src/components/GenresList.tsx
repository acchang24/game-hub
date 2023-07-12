import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import { AiOutlineMenu } from "react-icons/ai";
import apiClient from "../services/api-client";
import "./GenresList.css";

// Interface describing game genre info
interface Genre {
  id: number;
  image_background: string;
  name: string;
}

// Returns a cropped image url given its path
function getCroppedImage(urlPath: string) {
  const target = "media/";
  const index = urlPath.indexOf(target) + target.length;
  return urlPath.slice(0, index) + "crop/600/400/" + urlPath.slice(index);
}

// Returns a list of game genres for the sidebar
const GenresList = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string>("");
  const [genresActive, setGenresActive] = useState<boolean>(false);

  // Fetch game genre data
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get("/genres", { signal: controller.signal })
      .then((results) => setGenres(results.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        else {
          setError(err.message);
        }
      });
    return () => controller.abort();
  }, []);

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
          <ul className="genre-list">
            {genres.map((g) => (
              <li className="list-item" key={g.id}>
                <button
                  className="genre-btn"
                  onClick={() => {
                    // TODO: handle this when game data fetching is ready
                    console.log(g.name);
                  }}
                >
                  <img
                    className="genre-image"
                    src={getCroppedImage(g.image_background)}
                    alt="genre image"
                  />
                  {g.name}
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
