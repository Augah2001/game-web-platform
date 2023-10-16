import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformListIcons from "./PlatformListIcons";
import CriticScore from "./CriticScore";
import { getCroppedImage } from "../services/getCroppedImage";

export interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {
  return (
    <Card>
      <Image src={getCroppedImage(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack marginTop={1} justifyContent="space-between">
          <HStack>
            {game.parent_platforms.map(({ platform }) => (
              <PlatformListIcons
                key={platform.id}
                platform={platform}
              ></PlatformListIcons>
            ))}
          </HStack>

          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
