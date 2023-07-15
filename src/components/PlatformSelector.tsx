import fetchData from "../utility/fetchData";
import { Platform } from "./GameGrid";
import Selector from "./Selector";

// onSelect prop to pass data to App component
interface Props {
  onSelect: (platform: Platform) => void;
}

// Returns a drop down selector to filter game platforms
const PlatformSelector = ({ onSelect }: Props) => {
  // Keep track/fetch platform data
  const { data } = fetchData<Platform>("/platforms/lists/parents");

  return (
    <Selector
      data={data}
      placeHolder="Platforms"
      onSelect={onSelect}
    ></Selector>
  );
};

export default PlatformSelector;
