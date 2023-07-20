import useTrailers from "../hooks/useTrailers";
import "./css/GameTrailer.css";

// Pass in gameId as prop
interface Props {
  gameId: number;
}

// Returns trailer of game as a video
const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const first = data?.results[0];
  return first ? (
    <video
      className="game-trailer"
      src={first.data[480]}
      poster={first.preview}
      controls
    />
  ) : null;
};

export default GameTrailer;
