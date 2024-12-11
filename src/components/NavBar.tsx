import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/freepik/logoDark.png";
import ColorModeSwitch from "./olorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="20px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
