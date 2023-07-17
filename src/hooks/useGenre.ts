import useData from "./useData";

// Interface describing game genre info
export interface Genre {
  id: number;
  image_background: string;
  name: string;
}

// Hook to fetches genres
const useGenre = () => {
  const { data, error, isLoading } = useData<Genre>("/genres");

  return { data, error, isLoading };
};

export default useGenre;
