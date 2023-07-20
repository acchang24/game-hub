import { useParams } from "react-router-dom";
import useGetGame from "../hooks/useGetGame";
import ExpandableText from "../components/ExpandableText";
import DefinitionItem from "../components/DefinitionItem";
import GameTrailer from "../components/GameTrailer";
import "./css/GameDetailsPage.css";

const GameDetailPage = () => {
  const { id } = useParams();

  // Get the game based on id/slug name
  const { data: game, error } = useGetGame(id!);

  if (error || !game) return null;

  return (
    <>
      <div className="game-detail">
        <h1>{game.name}</h1>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <div className="info-grid">
          <DefinitionItem name="Platforms">
            {game.parent_platforms.map((p) => (
              <p key={p.platform.id}>{p.platform.name}</p>
            ))}
          </DefinitionItem>
          <DefinitionItem name="Genres">
            {game.genres.map((g) => (
              <p key={g.id}>{g.name}</p>
            ))}
          </DefinitionItem>
          <DefinitionItem name="ESRB Rating">
            {game.esrb_rating?.name || "None"}
          </DefinitionItem>
          <DefinitionItem name="Metacritic Rating">
            {game.metacritic || "None"}
          </DefinitionItem>
          <DefinitionItem name="Release Date">
            {game.released || "None"}
          </DefinitionItem>
          <DefinitionItem name="Publishers">
            {game.publishers.map((p) => (
              <p key={p.id}>{p.name}</p>
            ))}
          </DefinitionItem>
        </div>
        <GameTrailer gameId={game.id}></GameTrailer>
      </div>
    </>
  );
};

export default GameDetailPage;
