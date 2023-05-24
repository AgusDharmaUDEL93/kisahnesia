import ThemeButton from "@/components/widgets/themeButton/ThemeButton";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function GenreLanding() {
  return (
    <Box px={{ base: 4, md: "10%" }}>
      <Stack align={"center"} spacing={"1rem"} color={"textBody"} py={"3rem"}>
        <Text fontFamily={"Asap"} fontSize={"12px"}>
          Daftar Cerita
        </Text>
        <Heading fontFamily={"Lato"} color={"textHeading"} fontSize={"36px"}>
          Dari Semua Genre
        </Heading>
        <Text fontFamily={"Asap"} fontSize={"12px"}>
          Kami menyediakan bergam cerita dari beragam genre yang ada dan berasal
          dari seluruh wilayah Indonesia.
        </Text>
      </Stack>
      <Grid
        height={"500px"}
        gap={4}
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        color={"white"}
      >
        <GridItem display={"flex"} rowSpan={2}>
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
            <Text fontSize={"12px"} fontFamily={"Asap"}>
              Cerita yang menceritakan asal-usul, legenda, atau kepercayaan yang
              diyakini oleh suatu kelompok masyarakat.
            </Text>
          </Stack>
        </GridItem>
        <GridItem display={"flex"}>
          <Stack
            justify={"end"}
            borderRadius={20}
            py={"2rem"}
            px={"2rem"}
            bgSize={"cover"}
            bgImage={`/assets/img/item/legenda.png`}
          >
            <Heading fontSize={"28px"} fontFamily={"Lato"}>
              Cerita Rakyat
            </Heading>
            <Text fontSize={"12px"} fontFamily={"Asap"}>
              Cerita yang menceritakan asal-usul, legenda, atau kepercayaan yang
              diyakini oleh suatu kelompok masyarakat.
            </Text>
          </Stack>
        </GridItem>
        <GridItem display={"flex"}>
          <Stack
            justify={"end"}
            borderRadius={20}
            py={"2rem"}
            px={"2rem"}
            bgSize={"cover"}
            bgImage={`/assets/img/item/fabel.png`}
          >
            <Heading fontSize={"28px"} fontFamily={"Lato"}>
              Cerita Rakyat
            </Heading>
            <Text fontSize={"12px"} fontFamily={"Asap"}>
              Cerita yang menceritakan asal-usul, legenda, atau kepercayaan yang
              diyakini oleh suatu kelompok masyarakat.
            </Text>
          </Stack>
        </GridItem>
      </Grid>
      <Center height={"10rem"}>
        <ThemeButton>Lihat Daftar Cerita</ThemeButton>
      </Center>
    </Box>
  );
}
