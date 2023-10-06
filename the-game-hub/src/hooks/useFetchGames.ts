import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface platform {
  id: string;
  name: string;
  slug: string;
}

export interface Game {
  name: string;
  id: number;
  background_image: string,
  parent_platforms: { platform: platform }[],
  metacritic: number

}



export interface FetchGamesResponse {
  results: Game[];
}

const useFetchGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => {
      controller.abort();
    };
  }, []);
  return { games, error };
};

export default useFetchGames;
