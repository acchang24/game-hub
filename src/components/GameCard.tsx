import { Game } from "./GameGrid";
import getCroppedImage from "./GetCroppedImage";
import "./GameCard.css";

// Pass in Game prop for GameCards
interface Props {
  game: Game;
}

// GameCard component returns info about a game in a card
const GameCard = ({ game }: Props) => {
  return (
    <div className="game-card" key={game.id}>
      <img
        className="game-img"
        src={getCroppedImage(game.background_image)}
        alt={game.name + " image"}
      />
      <div className="game-info">{game.name}</div>
    </div>
  );
};

export default GameCard;
