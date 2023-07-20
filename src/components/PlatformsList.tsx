import { AiFillApple, AiFillWindows } from "react-icons/ai";
import { BsAndroid, BsPlaystation, BsXbox, BsGlobe } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { Platform } from "../interfaces/Platform";
import "./css/Platforms.css";

// Pass in game's id and platform info for platform's props
interface Props {
  platforms: Platform[];
}

// Map icons to platforms
const platformMap = new Map();
platformMap.set("pc", <AiFillWindows></AiFillWindows>);
platformMap.set("playstation", <BsPlaystation></BsPlaystation>);
platformMap.set("xbox", <BsXbox></BsXbox>);
platformMap.set("nintendo", <SiNintendo></SiNintendo>);
platformMap.set("mac", <AiFillApple></AiFillApple>);
platformMap.set("linux", <FaLinux></FaLinux>);
platformMap.set("android", <BsAndroid></BsAndroid>);
platformMap.set("ios", <MdPhoneIphone></MdPhoneIphone>);
platformMap.set("web", <BsGlobe></BsGlobe>);

// Platforms component returns a game's platform info as icons
const PlatformsList = ({ platforms = [] }: Props) => {
  return (
    <div className="platform-list">
      {platforms.map((p) => {
        return (
          <span className="platform" key={p.id}>
            {platformMap.get(p.slug)}
          </span>
        );
      })}
    </div>
  );
};

export default PlatformsList;
