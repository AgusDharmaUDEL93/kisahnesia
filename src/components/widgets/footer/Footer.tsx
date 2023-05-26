import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  useColorModeValue,
  HStack,
  Button,
  Image,
  Heading,
} from "@chakra-ui/react";
import { ReactNode } from "react";

import { ImLocation2 } from "react-icons/im";
import { MdEmail, MdCall, MdLocationOn } from "react-icons/md";

import { motion } from "framer-motion";

import { useRouter } from "next/router";
import { bottom } from "@/animations/linear";
import navigate from "@/utils/navigate";
import { linkRedirection } from "@/utils/linkRedirection";
import { RiInstagramFill, RiWhatsappFill, RiYoutubeFill } from "react-icons/ri";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
        {children}
      </Text>
    </Box>
  );
};

export default function Footer() {
  const router = useRouter();

  return (
    <Box
      as={motion.div}
      variants={bottom}
      initial="init"
      whileInView="animate"
      color={"secondary"}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>
              <Heading
                fontFamily={"Lato"}
                fontWeight={"bold"}
                fontSize={"24px"}
                color={"primary"}
              >
                Kisahnesia
              </Heading>
            </ListHeader>
            <Text textAlign={"justify"}>
              Kisahnesia adalah platform yang mengkurasi cerita rakyat
              Indonesia. Ini menyediakan koleksi lengkap cerita rakyat dari
              berbagai daerah di Indonesia. Kisahnesia adalah tempat digital
              untuk menjaga dan berbagi warisan budaya ini dengan penonton lokal
              dan global.
            </Text>
            <Box height={5} />
            <HStack>
              <Button
                padding={0}
                variant={"unstyled"}
                borderRadius={"full"}
                onClick={() => {
                  linkRedirection("https://www.instagram.com/kisahnesia/");
                }}
              >
                <RiInstagramFill size={25} color="black" />
              </Button>
              <Button
                padding={0}
                variant={"unstyled"}
                borderRadius={"full"}
                onClick={() => {
                  linkRedirection("https://wa.me/6281339585537");
                }}
              >
                <RiWhatsappFill size={25} color="black" />
              </Button>
              <Button
                padding={0}
                variant={"unstyled"}
                borderRadius={"full"}
                onClick={() => {
                  linkRedirection(
                    "https://www.youtube.com/channel/UC1X5wwKU4z69ec1gCNZP8MA"
                  );
                }}
              >
                <RiYoutubeFill size={25} color="black" />
              </Button>
            </HStack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>
              <Heading
                fontFamily={"Lato"}
                fontWeight={"bold"}
                fontSize={"16px"}
                color={"primary"}
              >
                Menu
              </Heading>
            </ListHeader>
            <Button
              variant={"unstyled"}
              p={0}
              fontWeight={"normal"}
              height={6}
              _hover={{ textDecoration: "underline" }}
              onClick={() => {
                navigate(router, "/");
              }}
            >
              Beranda
            </Button>
            <Button
              variant={"unstyled"}
              p={0}
              fontWeight={"normal"}
              height={6}
              _hover={{ textDecoration: "underline" }}
              onClick={() => {
                navigate(router, "/reading");
              }}
            >
              Enjoy our Story
            </Button>

            <Button
              variant={"unstyled"}
              p={0}
              fontWeight={"normal"}
              height={6}
              _hover={{ textDecoration: "underline" }}
              onClick={() => {
                navigate(router, "/list");
              }}
            >
              Explore our story
            </Button>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>
              <Heading
                fontFamily={"Lato"}
                fontWeight={"bold"}
                fontSize={"16px"}
                color={"primary"}
              >
                Daftar Cerita
              </Heading>
            </ListHeader>
            <Text>Fabel</Text>
            <Text>Mitos</Text>
            <Text>Legenda</Text>
            <Text>Saga</Text>
            <Text>Roman</Text>
            <Text>Cerita Rakyat</Text>
            {/* <Button
              variant={"unstyled"}
              p={0}
              fontWeight={"normal"}
              height={6}
              _hover={{ textDecoration: "underline" }}
              onClick={() => {
                navigate(router, "/");
              }}
            >
              Fabel
            </Button>
            <Button
              variant={"unstyled"}
              p={0}
              fontWeight={"normal"}
              height={6}
              _hover={{ textDecoration: "underline" }}
              onClick={() => {
                navigate(router, "/about");
              }}
            >
              Mitos
            </Button>
            <Button
              variant={"unstyled"}
              p={0}
              fontWeight={"normal"}
              height={6}
              _hover={{ textDecoration: "underline" }}
              onClick={() => {
                navigate(router, "/announcement");
              }}
            >
              Legenda
            </Button>
            <Button
              variant={"unstyled"}
              p={0}
              fontWeight={"normal"}
              height={6}
              _hover={{ textDecoration: "underline" }}
              onClick={() => {
                navigate(router, "/announcement");
              }}
            >
              Saga
            </Button> */}
          </Stack>
          <Stack align={"flex-start"} padding={0}>
            <ListHeader>
              <Heading
                fontFamily={"Lato"}
                fontWeight={"bold"}
                fontSize={"16px"}
                color={"primary"}
              >
                Follow Us
              </Heading>
            </ListHeader>
            <HStack>
              <Button
                padding={0}
                variant={"unstyled"}
                borderRadius={"full"}
                onClick={() => {
                  linkRedirection("https://wa.me/6281339585537");
                }}
              >
                <MdCall size={25} color="black" />
              </Button>
              <Text>+62 813-3958-5537</Text>
            </HStack>
            <HStack>
              <Button padding={0} variant={"unstyled"} borderRadius={"full"}>
                <MdEmail size={25} color="black" />
              </Button>
              <Text
                maxWidth={{ base: "13rem", md: "20rem" }}
                onClick={() => {
                  linkRedirection("mailto:kisahnesiaofficial@gmail.com");
                }}
              >
                kisahnesiaofficial@gmail.com
              </Text>
            </HStack>
            <HStack>
              <Button
                padding={0}
                variant={"unstyled"}
                borderRadius={"full"}
                onClick={() => {
                  linkRedirection("https://goo.gl/maps/guxSLe9pvd7g2EZF9");
                }}
              >
                <MdLocationOn size={25} color="black" />
              </Button>
              <Text>
                Jl. Raya Kampus Unud, Jimbaran, Kec. Kuta Sel., Kabupaten
                Badung, Bali 80361
              </Text>
            </HStack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Heading fontWeight={"black"} fontSize={24} color={"primary"}>
            Kisahnesia
          </Heading>
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2023 Kisahnesia Dev. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
