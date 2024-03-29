import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import Headline from "./common/Headline";
import Parallax from "./common/Parallax";
import Image from "next/image";

const content = {
  heading: "About me",
  description:
    "I am a front-end developer with a strong foundation in JavaScript specialized in React with NextJS framework.I graduated the postgraduate program in Applied Informatics and Programming at Technical University of Cluj-Napoca, where I learned the basics of programming in C++, relational databases with Oracle SQL, and web technologies such as HTML, CSS, and JavaScript. I also gained an understanding of computer systems and networks, object-oriented programming concepts, and fundamental algorithms. I am passionate about creating intuitive and engaging user experiences and am always looking for new opportunities to grow and learn as a developer.",
};

const About = () => {
  return (
    <Box mb="5rem" id="about">
      <Flex
        justifyContent={{ base: "center", md: "flex-start" }}
        my={{ base: 4, md: 12 }}
      >
        <Heading
          as="h1"
          fontSize={{ base: "5xl", md: "7xl" }}
          fontWeight="bold"
          position="relative"
          _after={{
            content: "''",
            position: "absolute",
            bottom: { base: "0", md: "-10px" },
            display: { base: "block", md: "inline-block" },
            border: "0.5px #EAE3D2 solid",
            w: "100%",
          }}
        >
          {content.heading}
        </Heading>
      </Flex>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flexDir="column"
        gap={7}
      >
        <Flex flexDir="column" my={{ base: 7, md: 12 }}>
          <Headline
            text="PASSIONATE"
            fontSize={{ base: "4xl", md: "6xl" }}
            lineHeight="0.76"
          />
          <Headline
            text="FRONT-END"
            fontSize={{ base: "4xl", md: "6xl" }}
            lineHeight="0.76"
          />
          <Headline
            text="DEVELOPER"
            fontSize={{ base: "4xl", md: "6xl" }}
            lineHeight="0.76"
          />
        </Flex>
        <Box maxH="500px" overflow="hidden">
          <Parallax>
            <Image
              src="/pic-1.jpg"
              alt="office desk"
              width={500}
              height={700}
            />
          </Parallax>
        </Box>
        <Box maxW="500px">
          <Text
            lineHeight="1.32"
            fontWeight="300"
            fontSize="2xl"
            textAlign="left"
            textColor="#D4D4D4"
            opacity={0.9}
          >
            {content.description}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
