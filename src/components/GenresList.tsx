import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
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
  const [error, setError] = useState("");

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

  return (
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
  );
};

export default GenresList;
