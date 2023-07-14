import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import fetchData from "../utility/fetchData";
import { Platform } from "./GameGrid";
import "./PlatformSelector.css";

// Returns a drop down selector to filter game platforms
const PlatformSelector = () => {
  // Keep track of platform data, when to show it, and the currently selected platform
  const { data } = fetchData<Platform>("/platforms/lists/parents");
  const [platformsShown, setPlatformsShown] = useState<boolean>(false);
  const [currentPlatform, setCurrentPlatform] = useState<string>("");

  return (
    <>
      <button
        className="selector-btn"
        onClick={() => {
          setPlatformsShown(!platformsShown);
        }}
      >
        <div className="selector">
          <div>{currentPlatform === "" ? "Platforms" : currentPlatform}</div>
          <div className="chevron">
            <BsChevronDown></BsChevronDown>
          </div>
        </div>
      </button>
      {platformsShown && (
        <div className="platform-dropdown">
          <ul className="platform-list">
            <li key={0}>
              <button
                className="platform-btn"
                onClick={() => {
                  setCurrentPlatform("");
                  setPlatformsShown(false);
                }}
              >
                <div>None</div>
              </button>
            </li>
            {data.map((platform) => {
              return (
                <li key={platform.id}>
                  <button
                    className="platform-btn"
                    onClick={() => {
                      setPlatformsShown(false);
                      setCurrentPlatform(platform.name);
                    }}
                  >
                    <div>{platform.name}</div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default PlatformSelector;
