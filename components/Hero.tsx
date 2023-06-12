import { Box, Center, Flex, Text, calc } from "@chakra-ui/react";
import SocialLinks from "./common/SocialLinks";

const Hero = () => {
  return (
    <Flex
      position="relative"
      flexDirection="column"
      height={{ base: `calc(100vh - 72px)`, md: `calc(100vh - 144px)` }}
    >
      <Center flexDirection="column" h="100%" width="100%">
        <Box>
          <Text fontSize="4xl" fontWeight="300">
            Hello, I am
          </Text>
        </Box>
        <Box>
          <Text
            fontSize={{ base: "5xl", md: "7xl" }}
            fontWeight="bold"
            textAlign="center"
          >
            Ilies <br /> Paul Daniel
          </Text>
        </Box>
        <Box>
          <Text fontSize="2xl" fontWeight="300" textAlign="center">
            JavaScript Enginner with 3+ years of experience specialized in React
          </Text>
        </Box>
        <Flex
          flexDirection="column"
          alignItems="center"
          my={{ base: 4, md: 12 }}
          gap={7}
        >
          <Text fontSize="4xl" fontWeight="300">
            Find Me on
          </Text>
          <SocialLinks />
        </Flex>
      </Center>
    </Flex>
  );
};

export default Hero;
