import { useParams } from "react-router-dom";
import useGetGame from "../hooks/useGetGame";
import ExpandableText from "../components/ExpandableText";
import "./css/GameDetailsPage.css";

const GameDetailPage = () => {
  const { id } = useParams();

  // Get the game based on id/slug name
  const { data: game, error } = useGetGame(id!);

  return (
    <>
      {error ? (
        <p>{error.message}</p>
      ) : (
        <div className="game-detail">
          <h1>{game?.name}</h1>
          <ExpandableText>{game?.description_raw}</ExpandableText>
        </div>
      )}
    </>
  );
};

export default GameDetailPage;
