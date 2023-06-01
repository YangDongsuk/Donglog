"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";

export function Providers({ children }) {
  return (
    <CacheProvider>
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}

      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
}
