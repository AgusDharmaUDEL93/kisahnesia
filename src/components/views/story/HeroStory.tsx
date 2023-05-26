import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import List from "../../../data/static/story/list.json";

export default function HeroStory() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Box px={{ base: 4, md: "10%" }}>
      <Stack spacing={"1rem"}>
        <Text fontSize={"16px"} color={"textBody"}>
          {List.find((data) => data.id == Number(id))?.region}
        </Text>
        <Heading fontSize={"36px"} color={"textHeading"} fontWeight={"bold"}>
          {List.find((data) => data.id == Number(id))?.title}
        </Heading>
        <Text fontSize={"16px"} color={"textBody"}>
          Posted in <b>{List.find((data) => data.id == Number(id))?.genre}</b>
        </Text>
      </Stack>
    </Box>
  );
}
