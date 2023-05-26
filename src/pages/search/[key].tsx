import ResultSearch from "@/components/views/search/ResultSearch";
import Layouts from "@/layouts/Layouts";
import { Box, Center } from "@chakra-ui/react";

export default function Search() {
  return (
    <Layouts title="Search | Kisahnesia">
      <Box height={"8rem"} />

      <ResultSearch />
    </Layouts>
  );
}
