import usePlatforms, { Platform } from "../hooks/usePlatforms";
import Selector from "./Selector";

// onSelect prop to pass data to App component
interface Props {
  onSelect: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

// Returns a drop down selector to filter game platforms
const PlatformSelector = ({ onSelect, selectedPlatform }: Props) => {
  // Call use data hook to list of platforms
  const { data } = usePlatforms();

  return (
    <Selector
      data={data?.results}
      selectedName={selectedPlatform?.name || "Platforms"}
      onSelect={onSelect}
    ></Selector>
  );
};

export default PlatformSelector;
