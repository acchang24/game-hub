import useData from "../hooks/useData";
import Selector from "./Selector";

// Interface describing platform info
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// onSelect prop to pass data to App component
interface Props {
  onSelect: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

// Returns a drop down selector to filter game platforms
const PlatformSelector = ({ onSelect, selectedPlatform }: Props) => {
  // Call use data hook to list of platforms
  const { data } = useData<Platform>("/platforms/lists/parents");

  return (
    <Selector
      data={data}
      selectedName={selectedPlatform?.name || "Platforms"}
      onSelect={onSelect}
    ></Selector>
  );
};

export default PlatformSelector;
