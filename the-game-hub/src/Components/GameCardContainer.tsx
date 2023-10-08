import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface props {
    children : ReactNode
}

const GameCardContainer = ({children}: props) => {
  return (
    <Box width="100%" overflow="hidden" borderRadius="10px">
      {children}
    </Box>
  );
}

export default GameCardContainer