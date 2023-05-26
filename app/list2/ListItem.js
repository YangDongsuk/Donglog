"use client";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";

export default function ListItem({ result }) {
  return (
    <div>
      <Card maxW="800px">
        <CardHeader>
          <Heading size="md">ALL</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {result.map((item, i) => {
              return (
                <Box key={i}>
                  <Link href={"posting/" + result[i].id}>
                    <Heading size="xxl">{result[i].title}</Heading>
                    <Text pt="2" fontSize="sm">
                      View a summary of all your clients over the last month.
                      View a summary of all your clients over the last month.
                      View a summary of all your clients over the last month.
                      View a summary of all your clients over the last month.
                    </Text>
                  </Link>

                  <p>1월 1일</p>
                </Box>
              );
            })}
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}
