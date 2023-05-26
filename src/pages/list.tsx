import HeroList from "@/components/views/list/HeroList";
import MainList from "@/components/views/list/MainList";
import Layouts from "@/layouts/Layouts";
import { Box } from "@chakra-ui/react";

export default function List() {
  return (
    <Layouts title="Daftar Cerita | Kisahnesia">
      <Box height={"8rem"} />
      <HeroList />
      <MainList />
    </Layouts>
  );
}
