import { Box, Flex, Heading } from "@chakra-ui/react";
import { projects } from "../data/projects";
import Project from "./common/Project";

const Portfolio = () => {
  return (
    <Box mb="5rem" id="portfolio">
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
              currentProject={project?.currentProject}
            />
          );
        })}
      </Flex>
    </Box>
  );
};

export default Portfolio;
