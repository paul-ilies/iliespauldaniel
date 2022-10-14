import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

const SocialLinks = () => {
  return (
    <Flex gap="1rem">
      <Box>
        <Link href="https://www.linkedin.com/in/iliespauldaniel" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin.svg" alt="linkedin" width={35} height={35} />
          </a>
        </Link>
      </Box>
      <Box>
        <Link href="https://github.com/paul-ilies" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <Image src="/githubIcon.svg" alt="github" width={35} height={35} />
          </a>
        </Link>
      </Box>
    </Flex>
  );
};

export default SocialLinks;
