"use client";
import { ColorModeScript, Button, useColorMode } from "@chakra-ui/react";
import theme from "./theme";
import { useEffect } from "react";

export default function DarkMode2({ res }) {
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    if (res == undefined) {
      document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
      console.log("쿠키값이 없습니다.");
    }
  }, []);

  return (
    <>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </>
  );
}
