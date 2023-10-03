import {Grid, GridItem, Show} from '@chakra-ui/react'

function App() {


  
return (
 <>

<Grid templateAreas = {{base: `"nav" "main"`,
                        md: `"nav" "main"` ,
                        lg: `"nav nav" "aside main"`}}>

    <GridItem area= 'nav' bg= 'red'>
      Nav
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
