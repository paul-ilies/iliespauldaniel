import { Box, Center, Flex, Text } from "@chakra-ui/react";
import SocialLinks from "./common/SocialLinks";

interface Props {
  navHeight?: number;
  containerMarginTop?: string;
}
const Hero = ({ navHeight, containerMarginTop }: Props) => {
  return (
    <Flex
      h={`calc(100vh - ${containerMarginTop} - ${navHeight}px)`}
      position="relative"
      flexDirection="column"
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
            Software Engineer - Javascript developer specialized in React and
            Node.js
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
