import {
  FaAndroid,
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface props {
  platform: platform;
}

const PlatformListIcons = ({ platform }: props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    xbox: FaXbox,
    web: BsGlobe,
  };

  return <Icon as={iconMap[platform.slug]} color="gray.500" />;
};

export default PlatformListIcons;
