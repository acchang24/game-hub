import fetchData from "../utility/fetchData";
import { Platform } from "./GameGrid";
import Selector from "./Selector";

// onSelect prop to pass data to App component
interface Props {
  onSelect: (platform: string) => void;
}

// Returns a drop down selector to filter game platforms
const PlatformSelector = ({ onSelect }: Props) => {
  // Keep track/fetch platform data
  const { data } = fetchData<Platform>("/platforms/lists/parents");

  // Create an array of platforms to pass to the selector
  const platforms = data.map((platform) => ({
    id: platform.id,
    name: platform.name,
  }));

  return (
    <Selector
      data={platforms}
      placeHolder="Platforms"
      onSelect={onSelect}
    ></Selector>
  );
};

export default PlatformSelector;
