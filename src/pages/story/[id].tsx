import Loading from "@/components/views/loading/Loading";
import HeroStory from "@/components/views/story/HeroStory";
import MainStory from "@/components/views/story/MainStory";
import OtherStory from "@/components/views/story/OtherStory";
import Layouts from "@/layouts/Layouts";
import { Box, Center, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function StorySet() {
  const router = useRouter();
  const { id } = router.query;
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDomLoaded(true);
    }, 1000);
  }, []);

  return (
    <>
      {domLoaded ? (
        <Layouts title={"Read our beloved story | kisahnesia"}>
          <Box height={"8rem"} />
          <HeroStory />
          <MainStory />
          <OtherStory />
        </Layouts>
      ) : (
        <Loading />
      )}
    </>
  );
}
