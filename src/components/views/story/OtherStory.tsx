import { left } from "@/animations/linear";
import CardStory from "@/components/widgets/cardStory/CardStory";
import ThemeButton from "@/components/widgets/themeButton/ThemeButton";
import {
  Stack,
  Heading,
  SimpleGrid,
  Center,
  Box,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function OtherStory() {
  return (
    <Box px={{ base: 4, md: "10%" }} paddingTop={"4rem"}>
      <Stack color={"textBody"} spacing={"1.5rem"}>
        <Heading
          fontFamily={"Lato"}
          color={"textHeading"}
          as={motion.div}
          variants={left}
          initial="init"
          whileInView="animate"
        >
          Cerita Lainnya
        </Heading>
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
    </Box>
  );
}
