import { Badge } from "@chakra-ui/react"
interface props {
  score: number;
}

const CriticScore = ({ score }: props) => {
  let color =
    score > 90
      ? "green"
      : score > 75
      ? "orange"
      : score > 50
      ? "yellow"
      : "red";

  return (
    <Badge
      fontSize="14px"
      paddingX="5px"
      borderRadius="4px"
      colorScheme={color}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
