import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
} from "@chakra-ui/react";
import Region from "../../../data/static/region/region.json";
import { useRouter } from "next/router";
import { useState } from "react";
import navigate from "@/utils/navigate";

export default function FilterList() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [type, setType] = useState("");
  const [province, setProvince] = useState("");
  const [order, setOrder] = useState("");

  return (
    <Box px={{ base: 4, md: "10%" }}>
      <form onSubmit={() => {}}>
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
        <Box py={"2rem"}>
          <Flex justifyContent={"space-around"} gap={"1rem"}>
            <Select
              variant={"filled"}
              placeholder="Pilih genre cerita"
              onChange={(event) => {
                setType(event.target.value);
              }}
              maxW={"45%"}
            >
              <option value="Fabel">Legenda</option>
              <option value="Mitos">Mitos</option>
              <option value="Saga">Saga</option>
              <option value="Roman">Roman</option>
              <option value="Cerita Rakyat">Cerita Rakyat</option>
            </Select>
            <Select
              variant={"filled"}
              placeholder="Urutkan berdasarkan"
              onChange={(event) => {
                setOrder(event.target.value);
              }}
            >
              <option value="Terpopuler">Terpopuler</option>
              <option value="as">A - Z</option>
              <option value="ds">Z - A</option>
            </Select>
            <Select
              variant={"filled"}
              placeholder="Pilih asal cerita"
              onChange={(event) => {
                setProvince(event.target.value);
              }}
            >
              {Region.map((data, index) => {
                return (
                  <option key={index} value={data}>
                    {data}
                  </option>
                );
              })}
            </Select>
          </Flex>
        </Box>
      </form>
    </Box>
  );
}
