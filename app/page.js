"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Button,
  Image,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      {/* 메인 페이지 헤드 카드 */}
      <Card
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

            <Text py="2">백엔드 개발자지만 남 몰래 프론트 공부중인 개발자</Text>
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
    </>
  );
}
