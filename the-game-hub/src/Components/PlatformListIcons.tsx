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
import { Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface props {
  platform: Platform;
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
