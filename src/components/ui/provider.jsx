"use client";

import { ChakraProvider } from "@chakra-ui/react";
// import { ColorModeProvider } from "./color-mode";

export function Provider() {
  return (
    <ChakraProvider
    // value={defaultSystem}
    >
      {/* <ColorModeProvider {...props} /> */}
    </ChakraProvider>
  );
}
