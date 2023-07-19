import usePlatforms from "./usePlatforms";

const useGetPlatform = (id?: number) => {
  // Call use data hook to list of platforms
  const { data: platforms } = usePlatforms();

  return platforms?.results.find((p) => p.id === id);
};

export default useGetPlatform;
