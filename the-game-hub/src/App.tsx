import { Grid, GridItem, Show, list } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          md: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "300px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>

        <GridItem area="main">
          <PlatformSelector/>
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList selectedGenre= {selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
          </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
