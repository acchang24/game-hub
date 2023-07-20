import { useParams } from "react-router-dom";
import useGetGame from "../hooks/useGetGame";
import "./css/GameDetailsPage.css"

const GameDetailPage = () => {
  const { id } = useParams();

  const { data: game, error} = useGetGame(id!);

  if (error) throw error;

  return <div className="game-detail">
    <h1>{game?.name}</h1>
    <p>{game?.description_raw}</p>
  </div>;
};

export default GameDetailPage;
