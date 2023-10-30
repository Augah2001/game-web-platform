import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformListIcons from "./PlatformListIcons";
import CriticScore from "./CriticScore";
import { getCroppedImage } from "../services/getCroppedImage";
import Emoji from "./Emoji";

export interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {
  return (
    <Card >
      <Image src={getCroppedImage(game.background_image)} />
      <CardBody>
        <HStack marginBottom={3} marginTop={1} justifyContent="space-between">
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
        <Heading fontSize="2xl">{game.name}</Heading>
        <Emoji rating={game.rating_top}/>
      </CardBody>
    </Card>
  );
};

export default GameCard;
