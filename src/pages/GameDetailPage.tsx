import { useParams } from "react-router-dom";
import useGetGame from "../hooks/useGetGame";
import ExpandableText from "../components/ExpandableText";
import DefinitionItem from "../components/DefinitionItem";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";
import "./css/GameDetailsPage.css";

// Returns details about a game
const GameDetailPage = () => {
  // Get the game's id through url params
  const { id } = useParams();

  // Get the game based on id/slug name
  const { data: game, isLoading, error } = useGetGame(id!);

  if (isLoading) return null;
  if (error || !game) throw error;

  return (
    <>
      <div className="game-detail">
        <div className="game-attributes">
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
        </div>
        <div className="media">
          <GameTrailer gameId={game.id}></GameTrailer>
          <GameScreenshots gameId={game.id}></GameScreenshots>
        </div>
      </div>
    </>
  );
};

export default GameDetailPage;
