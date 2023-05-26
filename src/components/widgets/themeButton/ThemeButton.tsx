import { Box, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MouseEventHandler, ReactNode } from "react";

type props = {
  children?: ReactNode;
  onTap?: MouseEventHandler<HTMLButtonElement>;
};

export default function ThemeButton({ children, onTap }: props) {
  return (
    <Box>
      <Button
        variant={"unstyled"}
        bgColor={"primary"}
        px={"2rem"}
        height={"2.5rem"}
        fontFamily={"Lato"}
        textColor={"white"}
        borderRadius={"20rem"}
        _hover={{
          filter: "brightness(80%)",
        }}
        onClick={onTap}
        fontSize={"12px"}
      >
        {children}
      </Button>
    </Box>
  );
}
