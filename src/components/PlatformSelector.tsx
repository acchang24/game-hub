import fetchData from "../utility/fetchData";
import { Platform } from "./GameGrid";
import Selector from "./Selector";

// onSelect prop to pass data to App component
interface Props {
  onSelect: (platform: Platform) => void;
  selectedPlatform: Platform;
}

// Returns a drop down selector to filter game platforms
const PlatformSelector = ({ onSelect, selectedPlatform }: Props) => {
  // Keep track/fetch platform data
  const { data } = fetchData<Platform>("/platforms/lists/parents");

  let selectedName = "";
  if (
    selectedPlatform === undefined ||
    Object.keys(selectedPlatform).length === 0
  ) {
    selectedName = "Platform";
  } else {
    selectedName = selectedPlatform.name;
  }

  return (
    <Selector
      data={data}
      selectedName={selectedName}
      onSelect={onSelect}
    ></Selector>
  );
};

export default PlatformSelector;
