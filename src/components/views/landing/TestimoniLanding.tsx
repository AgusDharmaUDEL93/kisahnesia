import { Box, Stack, Text, Image, Heading } from "@chakra-ui/react";

export default function TestimoniLanding() {
  return (
    <Box py={"10rem"}>
      <Stack spacing={"2.5rem"} align={"center"} fontFamily={"Lato"}>
        <Text
          fontSize={"12px"}
          fontFamily={"Asap"}
          color={"textBody"}
          textAlign={"center"}
        >
          Reliabilitas
        </Text>
        <Heading
          color={"textHeading"}
          fontWeight={"bold"}
          fontSize={"36px"}
          textAlign={"center"}
        >
          Testimonial
        </Heading>
        <Text
          fontSize={"12px"}
          fontFamily={"Asap"}
          color={"textBody"}
          textAlign={"center"}
        >
          Cerita kami telah direview oleh para ahli untuk menjamin keasliannya
        </Text>
        <Image
          alt=""
          src={`/assets/img/particle/quote.png`}
          maxHeight={"50px"}
          objectFit={"contain"}
        />
        <Text
          fontSize={"28px"}
          color={"textHeading"}
          maxW={"800px"}
          textAlign={"center"}
        >
          “Saya awalnya tidak percaya. Namun, tim Kisahnesia berhasil
          mengumpulkan begitu banyak cerita yang menakjubkan. Saya harap hal ini
          bisa melestarikan budaya kita“
        </Text>
        <Stack>
          <Text
            fontSize={"16px"}
            fontFamily={"Lato"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Putu Agus Dharma Kusuma
          </Text>
          <Text
            fontSize={"10px"}
            fontFamily={"Lato"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Ketua Tim Teknisi Galau
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
}
