"use client";
import {
  Box,
  Flex,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Heading,
  Image,
  Icon,
} from "@chakra-ui/react";
import { FaCode } from "react-icons/fa";

const TechStack = ({ technologies, icons }) => {
  return (
    <Card maxW="700px" mt={5}>
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

            <Box>
              <Heading size="sm">
                주인장이 블로그 만들기 위해 사용한 기술 스택
              </Heading>
              <Text>Creator, Chakra UI</Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex align="center">
          <Flex flexDir="row" mr={4}>
            {technologies.map((tech, index) => (
              <Box key={index} display="flex" alignItems="center" mb={2}>
                <Flex flexDir="column" mr={4}>
                  <Box
                    key={index}
                    display="flex"
                    alignItems="center"
                    mb={2}
                    borderRadius="50%"
                    overflow="hidden"
                    boxShadow="md"
                    width="100"
                    height="100"
                  >
                    <Image src={icons[index]} alt={tech} boxSize="full" />
                  </Box>{" "}
                  <Box
                    key={index}
                    display="inline-flex"
                    alignItems="center"
                    bg="gray.200"
                    color="gray.700"
                    px={2}
                    py={1}
                    rounded="md"
                    fontSize="sm"
                    mr={2}
                    mb={2}
                    width={100}
                  >
                    <Icon as={FaCode} mr={1} />
                    {tech}
                  </Box>
                </Flex>
              </Box>
            ))}
          </Flex>
        </Flex>
      </CardBody>

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      ></CardFooter>
    </Card>
  );
};

export default TechStack;
