import { left } from "@/animations/linear";
import CardStory from "@/components/widgets/cardStory/CardStory";
import { Stack, Heading, SimpleGrid, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import List from "../../../data/static/story/list.json";

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
          {List.map((data, index) => {
            return (
              <CardStory
                id={index + 1}
                key={index}
                image={data.image}
                title={data.title}
                region={data.region}
                time_upload={data.time_upload}
              />
            );
          })
            .sort((a, b) => Math.random() - 0.5)
            .slice(0, 4)}
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
