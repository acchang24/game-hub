import { Game } from "./GameGrid";
import Platforms from "./Platforms";
import getCroppedImage from "../utility/getCroppedImage";
import "./css/GameCard.css";

// Pass in Game prop for GameCards
interface Props {
  game: Game;
}

// GameCard component returns info about a game in a card
const GameCard = ({ game }: Props) => {
  return (
    <div className="game-card">
      <img
        className="game-img"
        src={getCroppedImage(game.background_image)}
        alt={game.name + " image"}
      />
      <div className="game-info">
        <span className="game-name">{game.name}</span>
        <Platforms
          game_id={game.id}
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></Platforms>
      </div>
    </div>
  );
};

export default GameCard;
