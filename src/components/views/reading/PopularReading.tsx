import CardStory from "@/components/widgets/cardStory/CardStory";
import ThemeButton from "@/components/widgets/themeButton/ThemeButton";
import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";

export default function PopularReading() {
  return (
    <Box px={{ base: 4, md: "10%" }} paddingTop={"4rem"}>
      <Stack color={"textBody"} spacing={"1.5rem"}>
        <Text>Mulai Membaca</Text>
        <Heading fontFamily={"Lato"} color={"textHeading"}>
          Cerita Terpopuler
        </Heading>
        <Text maxW={"35rem"}>
          Tim kami telah mengumpulkan lebih dari ribuan cerita yang berasal dari
          Nusantara. Tentunya semua itu dapat dibaca secara gratis!
        </Text>
        <Box />
        <SimpleGrid
          columns={{ base: 1, lg: 2, xl: 4 }}
          spacing={"2rem"}
          width={"100%"}
        >
          <CardStory />
          <CardStory />
          <CardStory />
          <CardStory />
        </SimpleGrid>
      </Stack>
      <Center height={"12rem"}>
        <ThemeButton>Lihat Lainnya</ThemeButton>
      </Center>
    </Box>
  );
}
