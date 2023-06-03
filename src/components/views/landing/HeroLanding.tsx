import { bottom, left, right, top } from "@/animations/linear";
import ThemeButton from "@/components/widgets/themeButton/ThemeButton";
import useGotoSection from "@/hooks/helpers/useGoToSection";
import { linkRedirection } from "@/utils/linkRedirection";
import { scrollToSection } from "@/utils/scroll";
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
import { motion } from "framer-motion";
import { RiInstagramFill, RiWhatsappFill, RiYoutubeFill } from "react-icons/ri";

export default function HeroLanding() {
  const [explore] = useGotoSection("genre");

  return (
    <Box
      height={"100vh"}
      fontFamily={"Lato"}
      color={"#516371"}
      bgImage={`/assets/img/bg/landingBg.webp`}
      bgPosition={"center"}
      bgSize={"cover"}
    >
      <Stack
        align={"center"}
        height={"90vh"}
        justify={"center"}
        spacing={"1.5rem"}
        fontSize={"16px"}
      >
        <Text
          as={motion.div}
          variants={left}
          initial="init"
          whileInView="animate"
        >
          Halo, selamat datang di....
        </Text>
        <Heading
          fontSize={{ base: "40px", lg: "68px" }}
          color={"#2D2D2D"}
          maxW={"750"}
          textAlign={"center"}
          as={motion.div}
          variants={top}
          initial="init"
          whileInView="animate"
        >
          Perpustakaan Digital Dongeng Nusantara
        </Heading>
        <Text
          maxW={"550px"}
          textAlign={"center"}
          as={motion.div}
          variants={bottom}
          initial="init"
          whileInView="animate"
        >
          Kisahnesia mengumpulkan lebih dari 100 dongeng dari seluruh penjuru
          nusantara. Temukan uniknya keragaman kisah nusantara disini.
        </Text>
        <UnorderedList>
          <HStack spacing={{ base: "10px", lg: "3rem" }}>
            <ListItem
              fontWeight={"bold"}
              as={motion.div}
              variants={left}
              initial="init"
              whileInView="animate"
            >
              Legenda
            </ListItem>
            <ListItem
              fontWeight={"bold"}
              as={motion.div}
              variants={left}
              initial="init"
              whileInView="animate"
            >
              Mitos
            </ListItem>
            <ListItem
              fontWeight={"bold"}
              as={motion.div}
              variants={left}
              initial="init"
              whileInView="animate"
            >
              Fabel
            </ListItem>
            <ListItem
              fontWeight={"bold"}
              as={motion.div}
              variants={left}
              initial="init"
              whileInView="animate"
            >
              Saga
            </ListItem>
            <ListItem
              fontWeight={"bold"}
              as={motion.div}
              variants={left}
              initial="init"
              whileInView="animate"
            >
              Roman
            </ListItem>
            <ListItem
              fontWeight={"bold"}
              as={motion.div}
              variants={left}
              initial="init"
              whileInView="animate"
            >
              Cerita Rakyat
            </ListItem>
          </HStack>
        </UnorderedList>
        <ThemeButton
          onTap={() => {
            scrollToSection(explore - 50);
          }}
        >
          Mulai Bacaan Pertamamu!
        </ThemeButton>
        <Box />
        <HStack spacing={"2rem"}>
          <Button
            as={motion.div}
            variants={left}
            initial="init"
            whileInView="animate"
            _hover={{ filter: "brightness(90%)", cursor: "pointer" }}
            padding={0}
            variant={"unstyled"}
            borderRadius={"full"}
            onClick={() => {
              linkRedirection("https://instagram.com/kisahnesia");
            }}
          >
            <Box bgColor={"white"} borderRadius={"full"} padding={2}>
              <RiInstagramFill size={25} color="#464646" />
            </Box>
          </Button>
          <Button
            as={motion.div}
            variants={bottom}
            initial="init"
            whileInView="animate"
            _hover={{ filter: "brightness(90%)", cursor: "pointer" }}
            padding={0}
            variant={"unstyled"}
            borderRadius={"full"}
            onClick={() => {
              linkRedirection("https://wa.me/6281339585537");
            }}
          >
            <Box bgColor={"white"} borderRadius={"full"} padding={2}>
              <RiWhatsappFill size={25} color="#464646" />
            </Box>
          </Button>
          <Button
            as={motion.div}
            variants={right}
            initial="init"
            whileInView="animate"
            padding={0}
            variant={"unstyled"}
            borderRadius={"full"}
            _hover={{ filter: "brightness(90%)", cursor: "pointer" }}
            onClick={() => {
              linkRedirection(
                "https://www.youtube.com/channel/UC1X5wwKU4z69ec1gCNZP8MA"
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
        <Text
          fontFamily={"Asap"}
          fontSize={"12px"}
          as={motion.div}
          variants={top}
          initial="init"
          whileInView="animate"
        >
          Trusted Partner
        </Text>
        <HStack
          spacing={"2rem"}
          as={motion.div}
          variants={bottom}
          initial="init"
          whileInView="animate"
        >
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
