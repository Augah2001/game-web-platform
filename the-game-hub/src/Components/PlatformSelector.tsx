import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { platform } from "../hooks/useData";

interface Props {
    onSelectPlatform: (platform: platform | null) => void;
}

const PlatformSelector = ({onSelectPlatform}: Props) => {
  const { data, error, isLoading } = usePlatforms();
    if (isLoading) return <Spinner />;
    if (error) return null

  return (
    <Menu>
      <MenuButton marginLeft= "9px" as={Button} rightIcon={<BsChevronDown />}>
        Platiform
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem onClick={()=> onSelectPlatform(platform)} key = {platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
