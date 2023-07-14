import { AiFillApple, AiFillWindows } from "react-icons/ai";
import { BsAndroid, BsPlaystation, BsXbox } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { Game } from "./GameGrid";
import getCroppedImage from "./GetCroppedImage";
import "./GameCard.css";

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
    <div
      className="game-card"
      onClick={() => {
        console.log(game.parent_platforms);
      }}
    >
      <img
        className="game-img"
        src={getCroppedImage(game.background_image)}
        alt={game.name + " image"}
      />
      <div className="game-info">
        {game.name}
        <div className="platform-list">
          {game.parent_platforms.map((p) => {
            return (
              <span className="platform" key={p.platform.id}>
                {platformMap.get(p.platform.slug)}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
