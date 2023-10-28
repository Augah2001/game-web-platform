import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import { getCroppedImage } from "../services/getCroppedImage";

interface props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading == true) return <Spinner />;

  return (
    <List marginTop={5}>
      {data?.map((genre) => (
        <ListItem paddingY="4px" key={genre.id}>
          <HStack>
            <Image
              borderRadius="5px"
              boxSize="32px"
              src={getCroppedImage(genre.image_background)}
              alt={genre.name}
            />
            <Button
              backgroundColor={
                genre.id === selectedGenre?.id ? "blackAlpha.400" : "normal"
              }
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="list"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
