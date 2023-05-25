import HeroStory from "@/components/views/story/HeroStory";
import MainStory from "@/components/views/story/MainStory";
import OtherStory from "@/components/views/story/OtherStory";
import Layouts from "@/layouts/Layouts";
import { Box, Center, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function StorySet() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layouts title={"Read our beloved story | kisahnesia"}>
      <Box height={"8rem"} />
      <HeroStory />
      <MainStory />
      <OtherStory />
    </Layouts>
  );
}
