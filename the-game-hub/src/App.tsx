import { Grid, GridItem, HStack, Show, list } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { platform } from "./hooks/useData";
import SortSelector from "./Components/SortSelector";


export interface GameQuery {

  genre: Genre | null;
  platform: platform | null;
  sortOrder: string;
  searchText: string | null;

}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)



  return (
    <>
      <Grid marginTop={2}
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
          <NavBar onSearch = {(searchItem: string) => {
    setGameQuery({...gameQuery, searchText: searchItem})
  }} />
        </GridItem>

        <GridItem marginTop={5} area="main">
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              onSelectPlatform={(platform: platform | null) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector gameQuery={gameQuery} onSortSelect={ (sortOrder) => setGameQuery({...gameQuery, sortOrder }) } />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
