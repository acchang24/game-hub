import useGetPlatform from "../hooks/useGetPlatform";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import useGameQueryStore from "../store";
import Selector from "./Selector";

// Returns a drop down selector to filter game platforms
const PlatformSelector = () => {
  // Call use data hook to get list of platforms
  const { data } = usePlatforms();

  // Get the state's setPlatformId function
  const setPlatformId = useGameQueryStore((state) => state.setPlatformId);

  // Get the state's platform id
  const platformId = useGameQueryStore((state) => state.gameQuery.platformId);

  // Get the selected platform based on the state's platform id
  const selectedPlatform = useGetPlatform(platformId);

  return (
    <Selector
      data={data?.results}
      selectedName={selectedPlatform?.name || "Platforms"}
      onSelect={(platform: Platform) => {
        // set the state's selected platform to the selected one
        setPlatformId(platform.id);
      }}
    ></Selector>
  );
};

export default PlatformSelector;
