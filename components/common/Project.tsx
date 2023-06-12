import { Button, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const Project = ({
  title,
  description,
  github,
  live,
  currentProject,
}: {
  title: string;
  description: string;
  github: string;
  live: string;
  currentProject?: boolean;
}) => {
  return (
    <Flex
      flex={1}
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      my="2rem"
      maxW="500px"
    >
      <Flex flexDir="column" gap="1rem" mb="2rem">
        <Heading
          as="h2"
          textAlign="center"
          // fontSize={{ base: "4xl", md: "6xl" }}
          color=" oldLace"
        >
          {title}
        </Heading>
        <Text lineHeight="1.32" fontWeight="300" fontSize="2xl">
          {description}
        </Text>
      </Flex>
      <Flex gap="2rem" my="2rem">
        <Button
          bgColor="whiteCoffee"
          color="patrickBlue"
          _hover={{ opacity: "1" }}
        >
          <Link href={github} passHref>
            <a target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          </Link>
        </Button>
        <Button
          bgColor="patrickBlue"
          color="whiteCoffee"
          _hover={{ opacity: "1" }}
          border="1px solid"
          borderColor="whiteCoffee"
          display={currentProject ? "none" : "visible"}
        >
          <Link href={live} passHref>
            <a target="_blank" rel="noopener noreferrer">
              Go To
            </a>
          </Link>
        </Button>
      </Flex>
      <Divider
        border="1px"
        borderColor="oldLace"
        borderStyle="solid"
        opacity="1"
      />
    </Flex>
  );
};

export default Project;
