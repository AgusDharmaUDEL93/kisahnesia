import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

export default function SearchBar() {
  return (
    <Box px={{ base: 4, md: "10%" }}>
      <InputGroup size={"lg"} variant={"filled"}>
        <InputLeftElement height={"full"}>
          <Search2Icon color={"secondary"} />
        </InputLeftElement>
        <Input
          placeholder="Cari judul cerita di sini...."
          fontSize={24}
          fontFamily={"Lato"}
          fontWeight={"normal"}
          py={"2rem"}
        />
      </InputGroup>
    </Box>
  );
}
