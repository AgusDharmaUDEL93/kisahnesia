import { bottom } from "@/animations/linear";
import { Box, Heading, Stack, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function CardStory() {
  return (
    <Box
      as={motion.div}
      variants={bottom}
      initial="init"
      whileInView="animate"
      onClick={() => {
        console.log("agung tolol");
      }}
      transition={"all 0.2s"}
      _hover={{
        cursor: "pointer",
        filter: "brightness(50%)",
      }}
      maxW={"15rem"}
      paddingBottom={"1rem"}
    >
      <Stack maxW={"15rem"} spacing={"1.5rem"}>
        <Image
          src={`/assets/img/data/cerita/bawang.png`}
          alt="bawang"
          maxW={"18rem"}
          objectFit={"contain"}
        />
        <Stack>
          <Heading fontSize={24} color={"textHeading"}>
            Bawang Merah dan Bawang Putih
          </Heading>
          <Text>Yogyakarta</Text>
          <Text>10 hari yang lalu</Text>
        </Stack>
      </Stack>
    </Box>
  );
}
