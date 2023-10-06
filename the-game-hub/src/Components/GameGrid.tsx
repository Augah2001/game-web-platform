import { SimpleGrid, Text } from "@chakra-ui/react";
import useFetchGames from "../hooks/useFetchGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useFetchGames();

  return (
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing = "10" padding= "10"  >
      {error && <Text>{error}</Text>}
      {games.map((game) => (
        <GameCard key = {game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
