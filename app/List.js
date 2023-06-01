"use client";
import { Text, useColorModeValue } from "@chakra-ui/react";

export default function List() {
  const color = useColorModeValue("black", "white");

  return <Text color={color}>List</Text>;
}
