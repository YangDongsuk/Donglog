"use client";
import Link from "next/link";
import {
  Card,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

export default function ListItem({ result }) {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <div>
      <Card w={isLargerThan800 ? "750px" : "90%"}>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {result.map((item, i) => {
              return (
                <Box key={i}>
                  <Link href={"posting2/" + result[i].id}>
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
