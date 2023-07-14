import { AiFillApple, AiFillWindows } from "react-icons/ai";
import { BsAndroid, BsPlaystation, BsXbox } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { Game } from "./GameGrid";
import getCroppedImage from "./GetCroppedImage";
import "./GameCard.css";
import Platforms from "./Platforms";

// Pass in Game prop for GameCards
interface Props {
  game: Game;
}

const platformMap = new Map();
platformMap.set("pc", <AiFillWindows></AiFillWindows>);
platformMap.set("playstation", <BsPlaystation></BsPlaystation>);
platformMap.set("xbox", <BsXbox></BsXbox>);
platformMap.set("nintendo", <SiNintendo></SiNintendo>);
platformMap.set("mac", <AiFillApple></AiFillApple>);
platformMap.set("linux", <FaLinux></FaLinux>);
platformMap.set("android", <BsAndroid></BsAndroid>);
platformMap.set("ios", <MdPhoneIphone></MdPhoneIphone>);

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
          platforms={game.parent_platforms}
        ></Platforms>
      </div>
    </div>
  );
};

export default GameCard;
