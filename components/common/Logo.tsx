import { Box, Flex, Text } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Text fontSize={{ base: "xl", md: "2xl" }} lineHeight="1">
        ILIES PAUL DANIEL
      </Text>
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        fontWeight={500}
        lineHeight="1"
      >
        Mid Frontend Developer
      </Text>
    </Flex>
  );
};

export default Logo;
