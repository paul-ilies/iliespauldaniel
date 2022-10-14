import { Box, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
const SocialLinks = () => {
  return (
    <Flex gap="1rem">
      <Box>
        <Link href="https://www.linkedin.com/in/iliespauldaniel" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin.svg" alt="linkedin" w="35px" h="35px" />
          </a>
        </Link>
      </Box>
      <Box>
        <Link href="https://github.com/paul-ilies" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <Image src="/githubIcon.svg" alt="github" w="35px" h="35px" />
          </a>
        </Link>
      </Box>
    </Flex>
  );
};

export default SocialLinks;
