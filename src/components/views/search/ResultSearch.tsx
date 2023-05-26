import CardStory from "@/components/widgets/cardStory/CardStory";
import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Story from "../../../data/static/story/list.json";

export default function ResultSearch() {
  const router = useRouter();
  const { key } = router.query;

  return (
    <Box px={{ base: 4, md: "10%" }}>
      <Stack py={"2rem"}>
        <Heading>Hasil pencarian {key}</Heading>
        <Text>1 hasil ditemukan</Text>
      </Stack>
      <SimpleGrid
        columns={{ base: 1, lg: 2, xl: 4 }}
        spacing={"2rem"}
        width={"100%"}
      >
        {Story.map((data, index) => {
          return (
            <CardStory
              id={index + 1}
              key={index}
              image={data.image}
              title={data.title}
              region={data.region}
              time_upload={data.time_upload}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
