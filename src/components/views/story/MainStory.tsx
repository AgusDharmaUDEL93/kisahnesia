import { ViewIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import List from "../../../data/static/story/list.json";

export default function MainStory() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Box px={{ base: 4, md: "10%" }} py={"5rem"}>
      <Flex
        // justifyContent={"space-around"}
        justifyContent={"center"}
      >
        {/* <Stack align={"center"} spacing={"1rem"}>
          <Avatar
            src={
              List.find((data) => data.id == Number(id))?.avatar ||
              "https://bit.ly/dan-abramov"
            }
          />
          <Text fontFamily={"Lato"} fontSize={"16px"}>
            oleh{" "}
            <Text as={"span"} fontWeight={"bold"}>
              {List.find((data) => data.id == Number(id))?.writer || "Admin"}
            </Text>
          </Text>
          <HStack>
            <ViewIcon />
            <Text fontFamily={"Lato"} fontWeight={"bold"} fontSize={"16px"}>
              {List.find((data) => data.id == Number(id))?.views}
            </Text>
          </HStack>
        </Stack> */}
        <Stack maxW={"40rem"} spacing={"1.5rem"}>
          <Image
            src={List.find((data) => data.id == Number(id))?.ilustration}
            alt=""
          />
          {List.find((data) => data.id == Number(id))?.story.map(
            (data, index) => {
              return (
                <Text
                  key={index}
                  fontFamily={"Lato"}
                  fontSize={"16px"}
                  color={"textBody"}
                >
                  {data}
                </Text>
              );
            }
          )}
        </Stack>
        {/* <Box width={"8rem"} /> */}
      </Flex>
    </Box>
  );
}
