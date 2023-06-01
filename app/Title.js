"use client";
import { Text, useColorModeValue } from "@chakra-ui/react";

export default function Title() {
  const color = useColorModeValue("black", "white");

  return <Text color={color}>GoBongBablog</Text>;
}
