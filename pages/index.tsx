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
  return (
    <Box minH="100vh" w="100%" mt={{ base: 4, md: 20 }}>
      <Head>
        <title>Ilies Paul Daniel</title>
        <meta
          name="description"
          content="Front end developer with Javascript specialized in React and Node.js"
        />
      </Head>
      <Hero />
      <About />
      <Portfolio />
    </Box>
  );
};

export default Home;
