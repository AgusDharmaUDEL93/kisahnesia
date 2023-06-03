import { left } from "@/animations/linear";
import ThemeButton from "@/components/widgets/themeButton/ThemeButton";
import { Box, Flex, Heading, Stack, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Item from "../../../data/static/slider/intro.json";
import navigate from "@/utils/navigate";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SliderLanding() {
  const router = useRouter();
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
      <Box>
        <Box px={{ base: 4, md: "10%" }} py={"0.8rem"}>
          <Stack
            color={"textBody"}
            as={motion.div}
            variants={left}
            initial="init"
            whileInView="animate"
          >
            <Text fontFamily={"Asap"} fontSize={"12px"}>
              Daftar Cerita
            </Text>
            <Heading
              color={"textHeading"}
              fontFamily={"Lato"}
              fontSize={"36px"}
            >
              Dari Sabang sampai Merauke
            </Heading>
            <Flex justifyContent={"space-between"}>
              <Text fontFamily={"Asap"} maxW={"500px"} fontSize={"12px"}>
                Tim kami telah mengumpulkan lebih dari ribuan cerita yang
                berasal dari Nusantara. Tentunya semua itu dapat dibaca secara
                gratis!
              </Text>
              <ThemeButton
                onTap={() => {
                  navigate(router, "/reading");
                }}
              >
                Mulai Membaca
              </ThemeButton>
            </Flex>
          </Stack>
        </Box>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 4,
            },
          }}
          style={{
            paddingTop: 20,
            paddingBottom: 20,
          }}
          slidesPerView={4}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
        >
          {Item.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  alt=""
                  src={`/assets/img/introItem/${data.image}`}
                  height={"230px"}
                  objectFit={"contain"}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 4,
            },
          }}
          slidesPerView={4}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          style={{
            paddingTop: 20,
            paddingBottom: 20,
          }}
        >
          {Item.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  alt=""
                  src={`/assets/img/introItem/${data.image}`}
                  height={"230px"}
                  objectFit={"contain"}
                />
              </SwiperSlide>
            );
          }).reverse()}
        </Swiper>
      </Box>
    </>
  );
}
