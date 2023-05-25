import { Box, Heading, Stack, Text } from "@chakra-ui/react";

export default function HeroStory() {
  return (
    <Box px={{ base: 4, md: "10%" }}>
      <Stack spacing={"1rem"}>
        <Text fontSize={"12px"} color={"textBody"}>
          Jawa Barat
        </Text>
        <Heading fontSize={"36px"} color={"textHeading"} fontWeight={"bold"}>
          Legenda Tangkuban Perahu (Sangkuriang)
        </Heading>
        <Text fontSize={"12px"} color={"textBody"}>
          Posted in <b>Legenda, Cerita Rakyat</b>
        </Text>
        <Text fontSize={"12px"} color={"textBody"}>
          Legenda ini merupakan lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </Stack>
    </Box>
  );
}
