import ThemeButton from "@/components/widgets/themeButton/ThemeButton";
import { Box, Flex, Heading, Stack, Text, Image } from "@chakra-ui/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function SliderLanding() {
  return (
    <>
      <Box px={{ base: 4, md: "10%" }} py={"0.8rem"}>
        <Stack color={"textBody"}>
          <Text fontFamily={"Asap"} fontSize={"12px"}>
            Daftar Cerita
          </Text>
          <Heading color={"textHeading"} fontFamily={"Lato"} fontSize={"36px"}>
            Dari Sabang sampai Merauke
          </Heading>
          <Flex justifyContent={"space-between"}>
            <Text fontFamily={"Asap"} maxW={"500px"} fontSize={"12px"}>
              Tim kami telah mengumpulkan lebih dari ribuan cerita yang berasal
              dari Nusantara. Tentunya semua itu dapat dibaca secara gratis!
            </Text>
            <ThemeButton>Mulai Membaca</ThemeButton>
          </Flex>
        </Stack>
      </Box>
      <Swiper
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
        <SwiperSlide>
          <Image
            alt=""
            src={`/assets/img/introItem/malin.png`}
            height={"230px"}
            objectFit={"contain"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt=""
            src={`/assets/img/introItem/malin.png`}
            height={"230px"}
            objectFit={"contain"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt=""
            src={`/assets/img/introItem/malin.png`}
            height={"230px"}
            objectFit={"contain"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt=""
            src={`/assets/img/introItem/malin.png`}
            height={"230px"}
            objectFit={"contain"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt=""
            src={`/assets/img/introItem/malin.png`}
            height={"230px"}
            objectFit={"contain"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt=""
            src={`/assets/img/introItem/malin.png`}
            height={"230px"}
            objectFit={"contain"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt=""
            src={`/assets/img/introItem/malin.png`}
            height={"230px"}
            objectFit={"contain"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt=""
            src={`/assets/img/introItem/malin.png`}
            height={"230px"}
            objectFit={"contain"}
          />
        </SwiperSlide>
      </Swiper>

      <Swiper
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
        <SwiperSlide>
          <Image
            alt=""
            src={`/assets/img/introItem/malin.png`}
            height={"230px"}
            objectFit={"contain"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt=""
            src={`/assets/img/introItem/malin.png`}
            height={"230px"}
            objectFit={"contain"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt=""
            src={`/assets/img/introItem/malin.png`}
            height={"230px"}
            objectFit={"contain"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt=""
            src={`/assets/img/introItem/malin.png`}
            height={"230px"}
            objectFit={"contain"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt=""
            src={`/assets/img/introItem/malin.png`}
            height={"230px"}
            objectFit={"contain"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt=""
            src={`/assets/img/introItem/malin.png`}
            height={"230px"}
            objectFit={"contain"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt=""
            src={`/assets/img/introItem/malin.png`}
            height={"230px"}
            objectFit={"contain"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt=""
            src={`/assets/img/introItem/malin.png`}
            height={"230px"}
            objectFit={"contain"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
