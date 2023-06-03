import HeroList from "@/components/views/list/HeroList";
import MainList from "@/components/views/list/MainList";
import Loading from "@/components/views/loading/Loading";
import Layouts from "@/layouts/Layouts";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function List() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDomLoaded(true);
    }, 1000);
  }, []);
  return (
    <>
      {domLoaded ? (
        <Layouts title="Daftar Cerita | Kisahnesia">
          <Box height={"8rem"} />
          <HeroList />
          <MainList />
        </Layouts>
      ) : (
        <Loading />
      )}
    </>
  );
}
