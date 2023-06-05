"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  useMediaQuery,
  ButtonGroup,
  Spacer,
} from "@chakra-ui/react";

export default function ListItem({ result }) {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isSortedNewestFirst, setSortedNewestFirst] = useState(true);

  const sortedResult = [...result].sort((a, b) => {
    if (isSortedNewestFirst) {
      return (
        new Date(b.properties.Date.date.start) -
        new Date(a.properties.Date.date.start)
      );
    } else {
      return (
        new Date(a.properties.Date.date.start) -
        new Date(b.properties.Date.date.start)
      );
    }
  });

  const toggleSorting = () => {
    setSortedNewestFirst(!isSortedNewestFirst);
  };

  return (
    <div>
      <ButtonGroup spacing={4}>
        <Button
          onClick={toggleSorting}
          colorScheme={isSortedNewestFirst ? "teal" : "gray"}
          width="100px"
        >
          {isSortedNewestFirst ? "최신순" : "오래된순"}
        </Button>

        <Spacer />
      </ButtonGroup>

      <Card w={isLargerThan800 ? "768px" : "97%"}>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {sortedResult.map((item, i) => {
              return (
                <Box key={i}>
                  <Link href={"posting2/" + item.id}>
                    <Heading size="xxl">
                      {item.properties.Name.title[0].text.content}
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      {item.properties.설명.rich_text[0].text.content}
                    </Text>
                  </Link>

                  {item.properties.Date.date.start}
                </Box>
              );
            })}
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}
