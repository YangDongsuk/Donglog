"use client";
import { ColorModeScript, Button, useColorMode } from "@chakra-ui/react";
import theme from "./theme";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DarkMode2({ res }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  useEffect(() => {
    if (res == undefined) {
      document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
      console.log("쿠키값이 없습니다.");
    }
  }, []);

  const handleClick = () => {
    toggleColorMode();
    const newMode = colorMode === "light" ? "dark" : "light";
    document.cookie = `mode=${newMode}; max-age=${3600 * 24 * 400}`;
    router.refresh();
  };

  return (
    <>
      <Button onClick={handleClick}>
        {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </>
  );
}
