import { useQuery } from "@tanstack/react-query";
import ApiClient from "../utility/apiClient";
import { Game } from "../interfaces/Game";

const apiClient = new ApiClient<Game>("/games");

const useGetGame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGetGame;
