import GenreLanding from "@/components/views/landing/GenreLanding";
import HeroLanding from "@/components/views/landing/HeroLanding";
import PartnerLanding from "@/components/views/landing/PartnerLanding";
import SliderLanding from "@/components/views/landing/SliderLanding";
import TestimoniLanding from "@/components/views/landing/TestimoniLanding";
import Layouts from "@/layouts/Layouts";
import { Box, Center, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layouts title="Kisahnesia | Cerita Rakyat Indonesia">
      <HeroLanding />
      <GenreLanding />
      <SliderLanding />
      <TestimoniLanding />
      <PartnerLanding />
    </Layouts>
  );
}
