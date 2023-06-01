"use client";
import { Button, useColorMode } from "@chakra-ui/react";

export default function DarkMode3() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </>
  );
}
