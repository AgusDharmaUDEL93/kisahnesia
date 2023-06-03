import CardStory from "@/components/widgets/cardStory/CardStory";
import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import Story from "../../../data/static/story/list.json";
import { Search2Icon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useState } from "react";
import Region from "../../../data/static/region/region.json";

export default function MainList() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [type, setType] = useState("");
  const [province, setProvince] = useState("");
  const [order, setOrder] = useState("");

  return (
    <Box px={{ base: 4, md: "10%" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
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
              <option value="Legenda">Legenda</option>
              <option value="Fabel">Fabel</option>
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
      <SimpleGrid
        columns={{ base: 1, lg: 2, xl: 4 }}
        spacing={"2rem"}
        width={"100%"}
      >
        {Story.map((data, index) => {
          return (
            <CardStory
              key={index}
              image={data.image}
              title={data.title}
              region={data.region}
              id={index + 1}
              genre={data.genre}
              time_upload={data.time_upload}
              views={data.views}
            />
          );
        })
          .filter((data) => {
            return data.props.title
              .toLowerCase()
              .includes(keyword.toLowerCase());
          })
          .filter((data) => {
            return data.props.region.includes(province);
          })
          .filter((data) => {
            return data.props.genre.includes(type);
          })
          .sort((a, b) => {
            if (order === "Terpopuler") {
              return b.props.views - a.props.views;
            } else if (order === "as") {
              return a.props.title.localeCompare(b.props.title);
            } else if (order === "ds") {
              return b.props.title.localeCompare(a.props.title);
            }
          })}
      </SimpleGrid>
      <Center height={"12rem"}>
        <Button
          variant={"unstyled"}
          bgColor={"primary"}
          px={"2.5rem"}
          height={"3rem"}
          fontFamily={"Lato"}
          textColor={"white"}
          borderRadius={"20rem"}
          _hover={{
            filter: "brightness(80%)",
          }}
        >
          Lihat Lainnya
        </Button>
      </Center>
    </Box>
  );
}
