import Layouts from "@/layouts/Layouts";
import { Box, Center, Heading } from "@chakra-ui/react";

export default function About() {
  return (
    <Layouts title="Tentang Kami | Kisahnesia">
      <Box>
        <Center height={"100vh"}>
          <Heading>About Page</Heading>
        </Center>
      </Box>
    </Layouts>
  );
}
