import useData from "./useData";

// Interface describing platform info
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// Hook to return platforms
const usePlatforms = () => {
  const { data, error, isLoading } = useData<Platform>(
    "/platforms/lists/parents"
  );

  return { data, error, isLoading };
};

export default usePlatforms;
