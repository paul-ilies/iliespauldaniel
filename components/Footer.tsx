import { Box, Flex } from "@chakra-ui/react";
import Logo from "./common/Logo";
import SocialLinks from "./common/SocialLinks";

const Footer = () => {
  return (
    <Box py="2rem">
      <Flex
        alignItems="center"
        justifyContent="center"
        gap="2rem"
        flexDirection="column"
      >
        <Logo />
        <SocialLinks />
      </Flex>
    </Box>
  );
};

export default Footer;
