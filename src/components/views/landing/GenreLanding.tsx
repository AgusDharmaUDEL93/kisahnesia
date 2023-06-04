import { left, right, top } from "@/animations/linear";
import ThemeButton from "@/components/widgets/themeButton/ThemeButton";
import navigate from "@/utils/navigate";
import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function GenreLanding() {
  const router = useRouter();
  return (
    <Box id="genre" px={{ base: 4, md: "10%" }}>
      <Stack align={"center"} spacing={"1rem"} color={"textBody"} py={"3rem"}>
        <Text
          fontFamily={"Asap"}
          fontSize={"16px"}
          as={motion.div}
          variants={left}
          initial="init"
          whileInView="animate"
        >
          Daftar Cerita
        </Text>
        <Heading
          fontFamily={"Lato"}
          color={"textHeading"}
          fontSize={"36px"}
          as={motion.div}
          variants={top}
          initial="init"
          whileInView="animate"
        >
          Dari Semua Genre
        </Heading>
        <Text
          fontFamily={"Asap"}
          fontSize={"16px"}
          as={motion.div}
          variants={right}
          initial="init"
          whileInView="animate"
        >
          Kami menyediakan bergam cerita dari beragam genre yang ada dan berasal
          dari seluruh wilayah Indonesia.
        </Text>
      </Stack>
      <Stack color={"white"} display={{ lg: "none" }}>
        <Stack
          justify={"end"}
          height={"600px"}
          borderRadius={20}
          py={"3rem"}
          px={"3rem"}
          bgSize={"cover"}
          bgPos={"right"}
          bgImage={`/assets/img/item/cerita.png`}
        >
          <Heading fontSize={"28px"} fontFamily={"Lato"}>
            Cerita Rakyat
          </Heading>
          <Text fontSize={"16px"} fontFamily={"Asap"}>
            Cerita yang menceritakan asal-usul, legenda, atau kepercayaan yang
            diyakini oleh suatu kelompok masyarakat.
          </Text>
        </Stack>
        <Stack
          justify={"end"}
          borderRadius={20}
          py={"2rem"}
          px={"2rem"}
          height={"600px"}
          bgSize={"cover"}
          bgPos={"right"}
          bgImage={`/assets/img/item/legenda.png`}
        >
          <Heading fontSize={"28px"} fontFamily={"Lato"}>
            Legenda
          </Heading>
          <Text fontSize={"16px"} fontFamily={"Asap"}>
            Cerita yang mencakup elemen-elemen mitos dan sejarah yang dianggap
            bermakna penting dalam budaya suatu masyarakat.
          </Text>
        </Stack>
        <Stack
          justify={"end"}
          borderRadius={20}
          py={"2rem"}
          px={"2rem"}
          height={"600px"}
          bgSize={"cover"}
          bgPos={"right"}
          bgImage={`/assets/img/item/fabel.png`}
        >
          <Heading fontSize={"28px"} fontFamily={"Lato"}>
            Fabel
          </Heading>
          <Text fontSize={"16px"} fontFamily={"Asap"}>
            Cerita yang menggunakan hewan untuk menggambarkan nilai-nilai moral
            dalam kehidupan manusia.
          </Text>
        </Stack>
      </Stack>
      <Grid
        display={{ base: "none", md: "grid" }}
        height={"500px"}
        gap={4}
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        color={"white"}
      >
        <GridItem
          display={"flex"}
          rowSpan={2}
          as={motion.div}
          variants={left}
          initial="init"
          whileInView="animate"
        >
          <Stack
            justify={"end"}
            borderRadius={20}
            py={"3rem"}
            px={"3rem"}
            bgSize={"cover"}
            bgImage={`/assets/img/item/cerita.png`}
          >
            <Heading fontSize={"28px"} fontFamily={"Lato"}>
              Cerita Rakyat
            </Heading>
            <Text fontSize={"16px"} fontFamily={"Asap"}>
              Cerita yang menceritakan asal-usul, legenda, atau kepercayaan yang
              diyakini oleh suatu kelompok masyarakat.
            </Text>
          </Stack>
        </GridItem>
        <GridItem
          display={"flex"}
          as={motion.div}
          variants={right}
          initial="init"
          whileInView="animate"
        >
          <Stack
            justify={"end"}
            borderRadius={20}
            py={"2rem"}
            px={"2rem"}
            bgSize={"cover"}
            bgImage={`/assets/img/item/legenda.png`}
          >
            <Heading fontSize={"28px"} fontFamily={"Lato"}>
              Legenda
            </Heading>
            <Text fontSize={"16px"} fontFamily={"Asap"}>
              Cerita yang mencakup elemen-elemen mitos dan sejarah yang dianggap
              bermakna penting dalam budaya suatu masyarakat.
            </Text>
          </Stack>
        </GridItem>
        <GridItem
          display={"flex"}
          as={motion.div}
          variants={right}
          initial="init"
          whileInView="animate"
        >
          <Stack
            justify={"end"}
            borderRadius={20}
            py={"2rem"}
            px={"2rem"}
            bgSize={"cover"}
            bgImage={`/assets/img/item/fabel.png`}
          >
            <Heading fontSize={"28px"} fontFamily={"Lato"}>
              Fabel
            </Heading>
            <Text fontSize={"16px"} fontFamily={"Asap"}>
              Cerita yang menggunakan hewan untuk menggambarkan nilai-nilai
              moral dalam kehidupan manusia.
            </Text>
          </Stack>
        </GridItem>
      </Grid>
      <Center height={"10rem"}>
        <ThemeButton
          onTap={() => {
            navigate(router, "/list");
          }}
        >
          Lihat Daftar Cerita
        </ThemeButton>
      </Center>
    </Box>
  );
}
