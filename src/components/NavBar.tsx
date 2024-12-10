import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/freepik/logo.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text> MARFA</Text>
    </HStack>
  );
};

export default NavBar;
