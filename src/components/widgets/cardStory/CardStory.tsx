import { Box, Heading, Stack, Image, Text } from "@chakra-ui/react";

export default function CardStory() {
  return (
    <Box
      onClick={() => {
        console.log("agung tolol");
      }}
      transition={"all 0.2s"}
      _hover={{
        cursor: "pointer",
        filter: "brightness(50%)",
      }}
      maxW={"18rem"}
      paddingBottom={"1rem"}
    >
      <Stack maxW={"18rem"} spacing={"1.5rem"}>
        <Image
          src={`/assets/img/data/cerita/bawang.png`}
          alt="bawang"
          maxW={"18rem"}
          objectFit={"contain"}
        />
        <Stack>
          <Heading fontSize={24} color={"textHeading"}>
            Bawang Merah dan Bawang Putih
          </Heading>
          <Text>Yogyakarta</Text>
          <Text>10 hari yang lalu</Text>
        </Stack>
      </Stack>
    </Box>
  );
}
