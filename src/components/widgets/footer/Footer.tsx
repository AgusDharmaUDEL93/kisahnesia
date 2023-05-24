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
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
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
            <ListHeader>Office</ListHeader>
            <Text textAlign={"justify"}>
              Prebör domisaning. Kemkastrering. Fagt kaskade. Bist decissa.
              Stereodiktisk vasyns att preteng. Mons byning fihör. Pore tolig.
              Epire kanesk. Monosa medelgam tisk.
            </Text>

            <Box height={5} />
            <HStack>
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
                <RiInstagramFill size={25} color="black" />
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
                <RiWhatsappFill size={25} color="black" />
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
                <RiYoutubeFill size={25} color="black" />
              </Button>
            </HStack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Menu</ListHeader>
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
                navigate(router, "/about");
              }}
            >
              Bagikan Ceritamu!
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
              Galeri
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
              Tentang Kami
            </Button>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Daftar Cerita</ListHeader>
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
            </Button>
          </Stack>
          <Stack align={"flex-start"} padding={0}>
            <ListHeader>Follow Us</ListHeader>
            <HStack>
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
                <MdCall size={25} color="black" />
              </Button>
              <Text>(406) 555-0120</Text>
            </HStack>
            <HStack>
              <Button padding={0} variant={"unstyled"} borderRadius={"full"}>
                <MdEmail size={25} color="black" />
              </Button>
              <Text
                maxWidth={{ base: "13rem", md: "20rem" }}
                onClick={() => {
                  linkRedirection("mailto:kisahnesia@gmail.com");
                }}
              >
                kisahnesia@gmail.com
              </Text>
            </HStack>
            <HStack>
              <Button
                padding={0}
                variant={"unstyled"}
                borderRadius={"full"}
                onClick={() => {
                  navigate(router, "/");
                }}
              >
                <MdLocationOn size={25} color="black" />
              </Button>
              <Text>2972 Westheimer Rd. Santa Ana, Illinois 85486 </Text>
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
