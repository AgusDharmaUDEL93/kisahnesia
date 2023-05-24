import ThemeButton from "@/components/widgets/themeButton/ThemeButton";
import { linkRedirection } from "@/utils/linkRedirection";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  Image,
} from "@chakra-ui/react";
import { RiInstagramFill, RiWhatsappFill, RiYoutubeFill } from "react-icons/ri";

export default function HeroLanding() {
  return (
    <Box
      height={"100vh"}
      fontFamily={"Lato"}
      color={"#516371"}
      bgImage={`/assets/img/bg/landingBg.png`}
      bgPosition={"center"}
      bgSize={"cover"}
    >
      <Stack
        align={"center"}
        height={"90vh"}
        justify={"center"}
        spacing={"1.5rem"}
        fontSize={"12px"}
      >
        <Text>Halo, selamat datang di....</Text>
        <Heading
          fontSize={"68px"}
          color={"#2D2D2D"}
          maxW={"750"}
          textAlign={"center"}
        >
          Perpustakaan Digital Dongeng Nusantara
        </Heading>
        <Text maxW={"550px"} textAlign={"center"}>
          Kisahnesia mengumpulkan lebih dari 100 dongeng dari seluruh penjuru
          nusantara. Temukan uniknya keragaman kisah nusantara disini.
        </Text>
        <UnorderedList>
          <HStack spacing={"3rem"}>
            <ListItem fontWeight={"bold"}>Legenda</ListItem>
            <ListItem fontWeight={"bold"}>Mitos</ListItem>
            <ListItem fontWeight={"bold"}>Fabel</ListItem>
            <ListItem fontWeight={"bold"}>Saga</ListItem>
            <ListItem fontWeight={"bold"}>Roman</ListItem>
            <ListItem fontWeight={"bold"}>Cerita Rakyat</ListItem>
          </HStack>
        </UnorderedList>
        <ThemeButton>Mulai Bacaan Pertamamu!</ThemeButton>
        <Box />
        <HStack spacing={"2rem"}>
          <Button
            padding={0}
            variant={"unstyled"}
            borderRadius={"full"}
            onClick={() => {
              linkRedirection(
                "https://instagram.com/decube_it?igshid=MzRlODBiNWFlZA=="
              );
            }}
          >
            <Box bgColor={"white"} borderRadius={"full"} padding={2}>
              <RiInstagramFill size={25} color="#464646" />
            </Box>
          </Button>
          <Button
            padding={0}
            variant={"unstyled"}
            borderRadius={"full"}
            onClick={() => {
              linkRedirection(
                "https://instagram.com/decube_it?igshid=MzRlODBiNWFlZA=="
              );
            }}
          >
            <Box bgColor={"white"} borderRadius={"full"} padding={2}>
              <RiWhatsappFill size={25} color="#464646" />
            </Box>
          </Button>
          <Button
            padding={0}
            variant={"unstyled"}
            borderRadius={"full"}
            onClick={() => {
              linkRedirection(
                "https://instagram.com/decube_it?igshid=MzRlODBiNWFlZA=="
              );
            }}
          >
            <Box bgColor={"white"} borderRadius={"full"} padding={2}>
              <RiYoutubeFill size={25} color="#464646" />
            </Box>
          </Button>
        </HStack>
      </Stack>
      <Stack align={"center"} spacing={"1rem"} my={"-3rem"}>
        <Text fontFamily={"Asap"} fontSize={"12px"}>
          Trusted Partner
        </Text>
        <HStack spacing={"2rem"}>
          <Image
            maxHeight={"1.2rem"}
            src={`/assets/img/logo/dontol.png`}
            alt=""
          />
          <Image
            maxHeight={"2rem"}
            src={`/assets/img/logo/decube.png`}
            alt=""
          />
        </HStack>
      </Stack>
    </Box>
  );
}
