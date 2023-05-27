"use client";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Image,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import TechStack from "./TechStack";

export default function Home() {
  const technologies = [
    "Next.js",
    "Chakra UI",
    "MongoDB",
    "Node.js",
    "React",
    "Aws S3",
    "Vercel",
    "Notion",
  ];
  // const icons = [
  //   "/techstack/nextjs-icon.jpeg",
  //   "/techstack/chakraui-icon.png",
  //   "/techstack//mongodb-icon.png",
  //   "/techstack/graphql-icon.png",
  // ];
  const icons = [
    "/techstack/nextjs.png",
    "/techstack/chakraui-icon.jpg",
    "/techstack/mongo.jpg",
    "/techstack/nodejs.png",
    "/techstack/react.png",
    "/techstack/s3.webp",
    "/techstack/vercel.webp",
    "/techstack/notion.webp",
  ];

  return (
    <>
      {/* 메인 페이지 헤드 카드 */}
      <Card
        maxW="700px"
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="/rice.jpg"
          alt="rice"
        />

        <Stack>
          <CardBody>
            <Heading size="xl">고봉밥 블로그</Heading>

            <Text py="2">
              백엔드 개발자지만 남몰래 프론트 공부중인 개발자. 남몰래 이것저것
              고봉밥으로 떠먹여준다는 소문이 있다.
            </Text>
          </CardBody>

          <CardFooter className="sns-icons">
            <Flex direction="row" align="center">
              <Box mr={2} _hover={{ opacity: "0.7" }}>
                <a
                  href="https://github.com/YangDongsuk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/icons/github.svg" alt="GitHub" />
                </a>
              </Box>
              <Box _hover={{ opacity: "0.7" }}>
                <a
                  href="https://www.instagram.com/import_dsy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/icons/instagram.svg" alt="Instagram" />
                </a>
              </Box>
            </Flex>
          </CardFooter>
        </Stack>
      </Card>
      <TechStack technologies={technologies} icons={icons} />
    </>
  );
}
