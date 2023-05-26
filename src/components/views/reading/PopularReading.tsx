import { left } from "@/animations/linear";
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
import { motion } from "framer-motion";
import List from "../../../data/static/story/list.json";
import navigate from "@/utils/navigate";
import { useRouter } from "next/router";

export default function PopularReading() {
  const router = useRouter();
  return (
    <Box px={{ base: 4, md: "10%" }} paddingTop={"4rem"}>
      <Stack color={"textBody"} spacing={"1.5rem"}>
        <Text
          as={motion.div}
          variants={left}
          initial="init"
          whileInView="animate"
        >
          Mulai Membaca
        </Text>
        <Heading
          fontFamily={"Lato"}
          color={"textHeading"}
          as={motion.div}
          variants={left}
          initial="init"
          whileInView="animate"
        >
          Cerita Terpopuler
        </Heading>
        <Text
          maxW={"35rem"}
          as={motion.div}
          variants={left}
          initial="init"
          whileInView="animate"
        >
          Tim kami telah mengumpulkan lebih dari ribuan cerita yang berasal dari
          Nusantara. Tentunya semua itu dapat dibaca secara gratis!
        </Text>
        <Box />
        <SimpleGrid
          columns={{ base: 1, lg: 2, xl: 4 }}
          spacing={"2rem"}
          width={"100%"}
        >
          {List.map((data, index) => {
            return (
              <CardStory
                id={index + 1}
                key={index}
                image={data.image}
                title={data.title}
                region={data.region}
                time_upload={data.time_upload}
                views={data.views}
              />
            );
          })
            .sort((a, b) => (a.props.views > b.props.views ? -1 : 1))
            .slice(0, 4)}
        </SimpleGrid>
      </Stack>
      <Center height={"12rem"}>
        <ThemeButton
          onTap={() => {
            navigate(router, "/list");
          }}
        >
          Lihat Lainnya
        </ThemeButton>
      </Center>
    </Box>
  );
}
