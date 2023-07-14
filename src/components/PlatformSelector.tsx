import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import "./PlatformSelector.css";

const PlatformSelector = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  return (
    <>
      <button
        className="selector-btn"
        onClick={() => {
          console.log("Clicked");
          setIsClicked(!isClicked);
        }}
      >
        <div className="selector">
          <div>Platforms</div>
          <div className="chevron">
            <BsChevronDown></BsChevronDown>
          </div>
        </div>
      </button>
      {isClicked && (
        <div className="platform-dropdown">
          <ul className="platform-list">
            <li><button className="platform-btn"><div>Testing</div></button></li>
            <li><button className="platform-btn"><div>Testing</div></button></li>
            <li><button className="platform-btn"><div>Testing</div></button></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default PlatformSelector;
