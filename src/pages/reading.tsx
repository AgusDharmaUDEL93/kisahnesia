import Layouts from "@/layouts/Layouts";
import { Box, Center, Heading } from "@chakra-ui/react";

export default function List() {
  return (
    <Layouts title="Mulai Membaca | Kisahnesia">
      <Box>
        <Center height={"100vh"}>
          <Heading>Reading Page</Heading>
        </Center>
      </Box>
    </Layouts>
  );
}
