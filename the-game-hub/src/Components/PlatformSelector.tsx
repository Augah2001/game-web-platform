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
import { GameQuery } from "../App";

interface Props {
  onSelectPlatform: (platform: platform | null) => void;
  gameQuery: GameQuery;
}

const PlatformSelector = ({ onSelectPlatform, gameQuery }: Props) => {
  const { data, error, isLoading } = usePlatforms();
  if (isLoading) return <Spinner />;
  if (error) return null;

  const platformText = gameQuery.platform?.name;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platformText || "platform"}
      </MenuButton>
      <MenuList>
        <MenuItem
          color="gray.300"
          onClick={() => {
            onSelectPlatform(null);
          }}
        >
          platform
        </MenuItem>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
