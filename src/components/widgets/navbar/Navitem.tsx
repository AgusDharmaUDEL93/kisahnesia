import navigate from "@/utils/navigate";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

type props = {
  children?: React.ReactNode;
  path: string;
};

export default function Navitem({ children, path }: props) {
  const router = useRouter();

  var isSelected = router.asPath == path;
  return (
    <Button
      fontFamily={"Lato"}
      variant={"nav"}
      fontWeight={isSelected ? "bold" : "regular"}
      transition={"color 0.5s"}
      fontSize={12}
      onClick={() => navigate(router, path)}
      color={isSelected ? "primary" : "secondary"}
      _hover={{
        color: "primary",
        _after: {
          transform: "scaleX(1)",
          transformOrigin: "bottom left",
        },
        fontWeight: "bold",
      }}
      _after={{
        content: '""',
        position: "absolute",
        width: "100%",
        transform: "scaleX(0)",
        height: "2px",
        bottom: 0,
        left: 0,
        bgColor: "primary",
        transformOrigin: "bottom right",
        transition: "transform 0.25s ease-out",
      }}
    >
      {children}
    </Button>
  );
}
