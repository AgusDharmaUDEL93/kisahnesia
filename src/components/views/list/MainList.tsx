import CardStory from "@/components/widgets/cardStory/CardStory";
import { Box, Button, Center, SimpleGrid } from "@chakra-ui/react";
import Story from "../../../data/static/story/list.json";

export default function MainList() {
  return (
    <Box px={{ base: 4, md: "10%" }}>
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
              time_upload={data.time_upload}
              id={index +1}
            />
          );
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
