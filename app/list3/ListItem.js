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
  // console.log(projects.results[0].properties);

  // const projectNames = projects.results.map(
  //   (aProject) => aProject.properties.Name.title[0].plain_text
  // );
  // const tags = projects.results.map(
  //   (aProject) => aProject.properties.카테고리.select.name
  // );

  // const status = projects.results.map(
  //   (aProject) => aProject.properties.Status.status.name
  // );

  // const discription = projects.results.map(
  //   (aProject) => aProject.properties.설명.rich_text[0].plain_text
  // );
  // const ids = projects.results.map((aProject) => aProject.id);
  // console.log(`projectNames : ${projectNames}`);
  // console.log(`tags : ${tags}`);
  // console.log(`status : ${status}`);
  // console.log(`discription : ${discription}`);
  // console.log(`ids : ${ids}`);

  return (
    <div>
      <Card maxW="800px">
        {/* <CardHeader>
          <Heading size="md">ALL</Heading>
        </CardHeader> */}

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
