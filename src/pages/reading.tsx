import Loading from "@/components/views/loading/Loading";
import OtherReading from "@/components/views/reading/OtherReading";
import PopularReading from "@/components/views/reading/PopularReading";
import SearchBar from "@/components/views/reading/SearchBar";
import Layouts from "@/layouts/Layouts";
import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Reading() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDomLoaded(true);
    }, 1000);
  }, []);
  return (
    <>
      {domLoaded ? (
        <Layouts title="Mulai Membaca | Kisahnesia">
          <Box height={"10rem"} />
          <SearchBar />
          <PopularReading />
          <OtherReading />
        </Layouts>
      ) : (
        <Loading />
      )}
    </>
  );
}
