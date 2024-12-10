import react, { useEffect, useState } from "react";
import apiClient from "./Services/api-client";
import { Text } from "@chakra-ui/react";
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState(" ");

  interface Game {
    id: number;
    name: string;
  }

  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/xgames")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>};
      <ul>
        {games.map((items) => (
          <li key={items.id}>{items.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
