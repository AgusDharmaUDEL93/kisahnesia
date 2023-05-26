import { bottom } from "@/animations/linear";
import navigate from "@/utils/navigate";
import {
  Box,
  Heading,
  Stack,
  Image,
  Text,
  AspectRatio,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

type props = {
  image: string;
  title: string;
  region: string;
  time_upload: number;
  id: number;
  views?: number;
  genre?: string;
};

export default function CardStory({
  image,
  title,
  region,
  time_upload,
  id,
  views,
  genre,
}: props) {
  const router = useRouter();
  return (
    <Box
      as={motion.div}
      variants={bottom}
      initial="init"
      whileInView="animate"
      onClick={() => {
        navigate(router, "/story/" + id);
      }}
      transition={"all 0.2s"}
      _hover={{
        cursor: "pointer",
        filter: "brightness(50%)",
      }}
      maxW={"15rem"}
      paddingBottom={"1rem"}
    >
      <Stack maxW={"15rem"} spacing={"1.5rem"}>
        <AspectRatio ratio={4 / 5}>
          <Image
            src={image}
            alt="bawang"
            maxW={"18rem"}
            objectFit={"contain"}
          />
        </AspectRatio>
        <Stack>
          <Heading fontSize={24} color={"textHeading"}>
            {title}
          </Heading>
          <Text>{region}</Text>
          <Text>{time_upload} hari yang lalu</Text>
        </Stack>
      </Stack>
    </Box>
  );
}
