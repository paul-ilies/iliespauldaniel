import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children?: ReactNode;
  navHeight: any;
};

const Layout = ({ children, navHeight }: Props) => {
  return (
    <Box
      m={{ base: "0 0.5rem", sm: "0 2rem", md: "0 5rem", lg: "0 10rem" }}
      minH="100vh"
    >
      <Header navHeight={navHeight} />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
