import Layouts from "@/layouts/Layouts";
import { Center, Stack, Heading, Box, Text } from "@chakra-ui/react";
import Lottie from "react-lottie-player";
import errorLottie from "../../public/assets/lottie/error.json";
import { useEffect, useState } from "react";
import Loading from "@/components/views/loading/Loading";

export default function Error() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDomLoaded(true);
    }, 1000);
  }, []);

  return (
    <>
      {domLoaded ? (
        <Layouts>
          <Box as={"section"}>
            <Center height={"100vh"}>
              <Stack
                alignItems={"center"}
                direction={"column"}
                spacing={"30px"}
              >
                <Lottie animationData={errorLottie} play loop />
                <Box height={"2rem"} />
                <Heading letterSpacing={"7px"}>
                  <Heading as={"span"} color={"blue.400"}>
                    Opps
                  </Heading>
                  , your page not found !
                </Heading>
                <Text fontSize={"lg"} maxWidth={"35rem"} textAlign={"center"}>
                  The page you are looking for might have been removed, had its
                  name changed or is temporarily unavailable
                </Text>
              </Stack>
            </Center>
          </Box>
        </Layouts>
      ) : (
        <Loading />
      )}
    </>
  );
}
