import navigate from "@/utils/navigate";
import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  return (
    <Box px={{ base: 4, md: "10%" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate(router, "/search/" + keyword);
        }}
      >
        <InputGroup size={"lg"} variant={"filled"}>
          <InputLeftElement height={"full"}>
            <button type="submit">
              <Search2Icon color={"secondary"} />
            </button>
          </InputLeftElement>
          <Input
            placeholder="Cari judul cerita di sini...."
            fontSize={24}
            fontFamily={"Lato"}
            fontWeight={"normal"}
            py={"2rem"}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
        </InputGroup>
      </form>
    </Box>
  );
}
