import useGetPlatform from "../hooks/useGetPlatform";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import Selector from "./Selector";

// onSelect prop to pass data to App component
interface Props {
  onSelect: (platform: Platform) => void;
  selectedPlatformId?: number;
}

// Returns a drop down selector to filter game platforms
const PlatformSelector = ({ onSelect, selectedPlatformId }: Props) => {
  // Call use data hook to list of platforms
  const { data } = usePlatforms();

  const selectedPlatform = useGetPlatform(selectedPlatformId);

  return (
    <Selector
      data={data?.results}
      selectedName={selectedPlatform?.name || "Platforms"}
      onSelect={onSelect}
    ></Selector>
  );
};

export default PlatformSelector;
