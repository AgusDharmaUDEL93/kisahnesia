import Layouts from "@/layouts/Layouts";
import { Box, Center, Heading } from "@chakra-ui/react";

export default function List() {
  return (
    <Layouts title="Daftar Cerita | Kisahnesia">
      <Box>
        <Center height={"100vh"}>
          <Heading>List Page</Heading>
        </Center>
      </Box>
    </Layouts>
  );
}
