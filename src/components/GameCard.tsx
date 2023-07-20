import { Link } from "react-router-dom";
import { Game } from "../interfaces/Game";
import getCroppedImage from "../utility/getCroppedImage";
import PlatformsList from "./PlatformsList";
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
        <span className="game-name">
          <Link className="game-link" to={`/games/` + game.slug}>
            {game.name}
          </Link>
        </span>
        <PlatformsList
          platforms={game.parent_platforms?.map((p) => p.platform)}
        ></PlatformsList>
      </div>
    </div>
  );
};

export default GameCard;
