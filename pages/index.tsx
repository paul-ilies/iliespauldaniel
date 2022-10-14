import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";

interface Props {
  navHeight?: number;
}

const Home: NextPage = ({ navHeight }: Props) => {
  const [containerMarginTop, setContainerMarginTop] = useState("");
  const containerRef = useRef<any>();

  useEffect(() => {
    if (window !== undefined) {
      const handleResize = () => {
        const target = window.getComputedStyle(containerRef?.current);
        setContainerMarginTop(target.getPropertyValue("margin-top"));
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <Box minH="100vh" w="100%" mt={{ base: 4, md: 20 }} ref={containerRef}>
      <Head>
        <title>Ilies Paul Daniel</title>
        <meta
          name="description"
          content="Front end developer with Javascript specialized in React and Node.js"
        />
      </Head>
      <Hero navHeight={navHeight} containerMarginTop={containerMarginTop} />
      <About />
      <Portfolio />
    </Box>
  );
};

export default Home;
