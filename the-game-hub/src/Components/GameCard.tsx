import { Card, Image, CardBody, Heading } from "@chakra-ui/react";
import { Game } from "../hooks/useFetchGames";

interface props {
    game: Game
}


const GameCard = ({game}: props) => {
    return (
    <Card overflow='hidden' borderRadius='10px'>
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize='2xl'>{ game.name }</Heading>
            </CardBody>
                
    </Card>);
};

export default GameCard;
