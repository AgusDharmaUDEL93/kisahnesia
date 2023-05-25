import { bottom } from "@/animations/linear";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function PartnerLanding() {
  return (
    <Box px={{ base: 4, md: "10%" }} paddingBottom={"10rem"}>
      <Box
        as={motion.div}
        variants={bottom}
        initial="init"
        whileInView="animate"
        width={"full"}
        bgColor={"primary"}
        px={"2rem"}
        py={"2.5rem"}
        borderRadius={"1.5rem"}
        bgImage={`/assets/img/bg/line.png`}
        bgSize={"cover"}
        bgPosition={"center"}
      >
        <Flex align={"center"} justifyContent={"space-between"}>
          <Stack color={"white"}>
            <Heading fontSize={"28px"}>Jadilah Partner Kisahnesia!</Heading>
            <Text fontSize={"12px"} maxW={"600px"}>
              Memiliki cerita yang menarik di daerahmu? Bagikan cerita tersebut
              kepada tim Kisahnesia dan dapatkan peluang untuk mendapatkan
              hadiah menarik!
            </Text>
          </Stack>
          <Button>Bagikan Cerita</Button>
        </Flex>
      </Box>
    </Box>
  );
}
