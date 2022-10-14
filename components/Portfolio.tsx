import { Box, Flex, Heading } from "@chakra-ui/react";
import { projects } from "../data/projects";
import useMediaQuery from "../hooks/useMediaQuery";
import Project from "./common/Project";

const Portfolio = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Box mb="5rem" id="portfolio">
      <Flex
        justifyContent={isMobile ? "center" : "flex-start"}
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
            bottom: isMobile ? "-4" : "4",
            display: isMobile ? "block" : "inline-block",
            border: "0.5px #EAE3D2 solid",
            ml: isMobile ? 0 : 4,
            w: "100%",
          }}
        >
          Portfolio
        </Heading>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        w="100%"
      >
        {projects.map((project) => {
          const { id, title, description, github, live } = project;
          return (
            <Project
              key={id}
              title={title}
              description={description}
              github={github}
              live={live}
            />
          );
        })}
      </Flex>
    </Box>
  );
};

export default Portfolio;