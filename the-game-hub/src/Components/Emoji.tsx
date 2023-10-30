import { Image, ImageProps } from "@chakra-ui/react";
import bull from "../assets/emojis/bulls-eye.webp";
import meh from "../assets/emojis/meh.webp";
import thumb from "../assets/emojis/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumb, alt: "recommended", boxSize: "25px" },
    5: { src: bull, alt: "exceptional", boxSize: "31px" },
  };

  return <Image marginTop={2} {...emojiMap[rating]} />;
};

export default Emoji;
