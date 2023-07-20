import useScreenShot from "../hooks/useScreenshot";
import "./css/GameScreenshots.css";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShot(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <div className="screenshots-grid">
      {data?.results.map((file) => (
        <img className="screenshot" src={file.image} key={file.id} />
      ))}
    </div>
  );
};

export default GameScreenshots;
