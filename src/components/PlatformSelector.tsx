import fetchData from "../utility/fetchData";
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
  // Keep track/fetch platform data
  const { data } = fetchData<Platform>("/platforms/lists/parents");

  return (
    <Selector
      data={data}
      selectedName={selectedPlatform?.name || "Platforms"}
      onSelect={onSelect}
    ></Selector>
  );
};

export default PlatformSelector;
