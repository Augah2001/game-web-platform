import useData from "./useData";
import { Genre } from "./useGenres";


export interface Platform {
  id: string;
  name: string;
  slug: string;
}

export interface Game {
  name: string;
  id: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatforms: Platform | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatforms?.id } },
    [selectedGenre, selectedPlatforms]
  );

export default useGames;
