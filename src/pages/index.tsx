import GenreLanding from "@/components/views/landing/GenreLanding";
import HeroLanding from "@/components/views/landing/HeroLanding";
import PartnerLanding from "@/components/views/landing/PartnerLanding";
import SliderLanding from "@/components/views/landing/SliderLanding";
import TestimoniLanding from "@/components/views/landing/TestimoniLanding";
import Loading from "@/components/views/loading/Loading";
import Layouts from "@/layouts/Layouts";
import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDomLoaded(true);
    }, 1000);
  }, []);

  return (
    <>
      {domLoaded ? (
        <Layouts title="Kisahnesia | Cerita Rakyat Indonesia">
          <HeroLanding />
          <GenreLanding />
          <SliderLanding />
          <TestimoniLanding />
          <PartnerLanding />
        </Layouts>
      ) : (
        <Loading />
      )}
    </>
  );
}
