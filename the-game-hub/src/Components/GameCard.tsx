import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useFetchGames";
import PlatformListIcons from "./PlatformListIcons";
import CriticScore from "./CriticScore";

export interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {
  return (
    <Card overflow="hidden" borderRadius="10px">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack marginTop={1} justifyContent="space-between">
          <HStack>
            {game.parent_platforms.map(({ platform }) => (
              <PlatformListIcons platform={platform}></PlatformListIcons>
            ))}
          </HStack>

          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
