import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors : {
    primary: "#464646",
    secondary: "#8FA0AD",
    textHeading:"#202020",
    textBody:"#6B6666"
  },
  fonts: {
    heading: `"Lato", sans-serif`,
    body: `"Asap", sans-serif`,
  },
});

export default theme;
