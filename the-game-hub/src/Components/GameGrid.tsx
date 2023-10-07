import { SimpleGrid, Text } from "@chakra-ui/react";
import useFetchGames from "../hooks/useFetchGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useFetchGames();
  const skeletons = [1,2,3,4,5,6]

  return (
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing = "10" padding= "10"  >
      {error && <Text>{error}</Text>}
      {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/> )}

      {games.map((game) => (
        <GameCard key = {game.id} game={game} />
      ))}


    </SimpleGrid>
  );
};

export default GameGrid;
