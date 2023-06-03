import Loading from "@/components/views/loading/Loading";
import ResultSearch from "@/components/views/search/ResultSearch";
import Layouts from "@/layouts/Layouts";
import { Box, Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Search() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDomLoaded(true);
    }, 1000);
  }, []);
  return (
    <>
      {domLoaded ? (
        <Layouts title="Search | Kisahnesia">
          <Box height={"8rem"} />
          <ResultSearch />
        </Layouts>
      ) : (
        <Loading />
      )}
    </>
  );
}
