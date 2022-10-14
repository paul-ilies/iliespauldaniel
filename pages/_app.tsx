import "reset-css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme/theme";
import Layout from "../components/Layout";
import { useRef } from "react";
import useDimension from "../hooks/useDimension";

function MyApp({ Component, pageProps }: AppProps) {
  const navHeight = useRef();
  const { height } = useDimension(navHeight);

  return (
    <ChakraProvider theme={theme}>
      <Layout navHeight={navHeight}>
        <Component {...pageProps} navHeight={height} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
