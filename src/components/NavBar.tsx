import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/freepik/logoDark.png";
import ColorModeSwitch from "./olorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="20px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
