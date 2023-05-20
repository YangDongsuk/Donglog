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
                  <Link href={"detail/" + result[i]._id}>
                    <Heading size="xs" textTransform="uppercase">
                      {result[i].title}
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      View a summary of all your clients over the last month.
                      View a summary of all your clients over the last month.
                      View a summary of all your clients over the last month.
                      View a summary of all your clients over the last month.
                    </Text>
                  </Link>
                  {/* 수정기능 */}
                  {/* <Link href={"/edit/" + result[i]._id} className="list-btn">
                    ✏️
                  </Link> */}
                  {/* 삭제 기능 */}
                  {/* <Button
                    onClick={(e) => {
                      console.log("삭제");
                      console.log(result[i]._id);
                      fetch("/api/post/delete/", {
                        method: "POST",
                        body: result[i]._id,
                      })
                        .then((r) => {
                          if (r.status == 200) {
                            return r.json();
                          } else {
                            //서버가 에러코드전송시 실행할코드
                            console.log("에러");
                          }
                        })
                        .then((result) => {
                          e.target.parentElement.style.opacity = 0;
                          setTimeout(() => {
                            e.target.parentElement.style.display = "none";
                          }, 1000);
                          console.log(result);
                          //성공시 실행할코드
                        })
                        .catch((error) => {
                          //인터넷문제 등으로 실패시 실행할코드
                          console.log(error);
                        });
                    }}
                  >
                    🗑️
                  </Button> */}

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
