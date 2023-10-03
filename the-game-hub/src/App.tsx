import {Grid, GridItem, Show, ThemeConfig} from '@chakra-ui/react'
import NavBar from './Components/NavBar'



function App( theme: ThemeConfig) {

 console.log(theme.initialColorMode)
  
return (
 <>

<Grid templateAreas = {{base: `"nav" "main"`,
                        md: `"nav" "main"` ,
                        lg: `"nav nav" "aside main"`}}>

    <GridItem area= 'nav' >
      <NavBar />
    </GridItem>

    <GridItem area = 'main' bg = 'orange'>
      main
    </GridItem>

    <Show above='lg'>
    <GridItem  area='aside' bg='gold'>
      Aside
    </GridItem>
    </Show>
    



</Grid>

 </>
  
  
)

}

export default App
