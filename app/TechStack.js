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
        <Flex align="center" flexWrap="wrap" justify="center">
          {technologies.map((tech, index) => (
            <Box key={index} display="flex" alignItems="center" mb={2}>
              <Box
                display="flex"
                alignItems="center"
                mb={2}
                borderRadius="50%"
                overflow="hidden"
                boxShadow="md"
                width={100}
                height={100}
                position="relative" // 상대적 위치 설정
                mr={4}
              >
                <Image
                  src={icons[index]}
                  alt={tech}
                  boxSize="100%"
                  objectFit="cover"
                />
              </Box>
            </Box>
          ))}
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
