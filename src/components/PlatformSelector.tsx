import fetchData from "../utility/fetchData";
import { Platform } from "./GameGrid";
import Selector from "./Selector";

// Returns a drop down selector to filter game platforms
const PlatformSelector = () => {
  // Keep track/fetch platform data
  const { data } = fetchData<Platform>("/platforms/lists/parents");

  // Create an array of platforms to pass to the selector
  const platforms = data.map((platform) => ({
    id: platform.id,
    name: platform.name,
  }));

  return <Selector data={platforms} placeHolder="Platforms"></Selector>;
};

export default PlatformSelector;
