import { useQuery } from "@tanstack/react-query";
import { Screenshot } from "../interfaces/Screenshot";
import ApiClient from "../utility/apiClient";

const useScreenShot = (gameId: number) => {
  const apiClient = new ApiClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenShot;
