import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useFetchGenres from "../hooks/useFetchGenres";
import { getCroppedImage } from "../services/getCroppedImage";

const GenreCard = () => {
  const { genres, isLoading, error } = useFetchGenres();

  if (error) return null;
  if (isLoading == true) return <Spinner/>

  
  

  return (
    <List>
      {genres?.map((genre) => (
        <ListItem  paddingY= '4px'  key={genre.id}>
          <HStack>
            <Image  borderRadius = "5px" boxSize= "32px" src={getCroppedImage(genre.image_background)} alt={genre.name} />
            <Text fontSize= "lg" >{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreCard;
