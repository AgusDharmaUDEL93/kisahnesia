import {
  Box,
  Image,
  Button,
  Flex,
  HStack,
  Collapse,
  Stack,
  Divider,
  useDisclosure,
  Center,
  Avatar,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Heading,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import navigate from "@/utils/navigate";

const Navitem = dynamic(() => import("./Navitem"));
const NavbaritemMobile = dynamic(() => import("./NavbaritemMobile"));

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  const [scrollPosition, setScrollPosition] = useState(0);
  let sticky = scrollPosition == 0;

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isLogin = false;

  return (
    <Box as={"nav"}>
      <Box
        px={{ base: 4, md: "10%" }}
        py={"0.8rem"}
        position={"fixed"}
        width={"100%"}
        zIndex={"2"}
        bgColor={sticky ? "transparent" : "white"}
        boxShadow={sticky ? "none" : "0.5px 3px 15px rgb(0 0 0 / 12%)"}
        transition={"all 0.25s"}
      >
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Button
            p={0}
            variant={"nav"}
            _hover={{ filter: "brightness(90%)" }}
            onClick={() => navigate(router, "/")}
          >
            <Heading fontWeight={"black"} fontSize={20}>
              Kisahnesia
            </Heading>
          </Button>
          <HStack display={{ base: "none", lg: "block" }}>
            <Navitem path="/">Beranda</Navitem>
            <Navitem path="/reading">Mulai Membaca</Navitem>
            <Navitem path="/list">Daftar Cerita</Navitem>
            <Navitem path="/about">Tentang Kami</Navitem>
          </HStack>
          {isLogin ? (
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={"https://avatars.dicebear.com/api/male/username.svg"}
                />
              </MenuButton>
              <MenuList alignItems={"center"}>
                <br />
                <Center>
                  <Avatar
                    size={"2xl"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </Center>
                <br />
                <Center>
                  <p>Username</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Button
              variant={"outline"}
              borderColor={"black"}
              borderRadius={"3rem"}
              px={"1.5rem"}
              fontSize={12}
              fontFamily={"Lato"}
              onClick={() => {
                navigate(router, "/");
              }}
            >
              Masuk
            </Button>
          )}

          <Button
            display={{ lg: "none" }}
            variant={"unstyled"}
            onClick={onToggle}
          >
            <HamburgerIcon boxSize={"25px"} color={"blue.400"} />
          </Button>
        </Flex>
      </Box>
      <Box
        display={{ lg: "none" }}
        position={"fixed"}
        bgColor={"white"}
        bgSize={"cover"}
        zIndex={"1"}
      >
        <Collapse in={isOpen} animateOpacity>
          <Stack mt={"88px"}>
            <Divider />
            <NavbaritemMobile path="/about">About</NavbaritemMobile>
            <NavbaritemMobile path="/product">Product</NavbaritemMobile>
            <NavbaritemMobile path="/works">Our Works</NavbaritemMobile>
            <NavbaritemMobile path="/contact">Contact</NavbaritemMobile>
          </Stack>
        </Collapse>
      </Box>
    </Box>
  );
}
