import OtherReading from "@/components/views/reading/OtherReading";
import PopularReading from "@/components/views/reading/PopularReading";
import SearchBar from "@/components/views/reading/SearchBar";
import Layouts from "@/layouts/Layouts";
import { Box,  } from "@chakra-ui/react";

export default function Reading() {
  return (
    <Layouts title="Mulai Membaca | Kisahnesia">
      <Box height={"10rem"} />
      <SearchBar />
      <PopularReading />
      <OtherReading />
    </Layouts>
  );
}
