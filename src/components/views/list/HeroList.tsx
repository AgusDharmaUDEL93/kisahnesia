import { Box, Heading, Stack, Text } from "@chakra-ui/react";

export default function HeroList() {
  return (
    <Box px={{ base: 4, md: "10%" }} paddingBottom={"2rem"}>
      <Stack spacing={"1.5rem"}>
        <Heading fontSize={"36px"}>Daftar Cerita</Heading>
        <Text fontSize={"16px"}>
          Berikut adalah cerita-cerita yang telah dikumpulkan oleh Tim
          Kisahnesia dan komunitasnya.
        </Text>
      </Stack>
    </Box>
  );
}
