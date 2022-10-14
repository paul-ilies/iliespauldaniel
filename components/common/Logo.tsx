import { Box, Flex, Text } from "@chakra-ui/react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { CURRENT_YEAR } from "../../utils/constants";

const Logo = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <Flex
      gap={isMobile ? "2rem" : "0"}
      flexDir={isMobile ? "column" : "row"}
      alignItems={isMobile ? "center" : "normal"}
    >
      <Box>
        <Text fontSize={{ base: "xl", md: "2xl" }} lineHeight="1">
          ILIES PAUL DANIEL <br />
          PORTFOLIO <Text as={"span"}>&#169;</Text>
          {CURRENT_YEAR}
        </Text>
      </Box>
      {isMobile && (
        <Box>
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            lineHeight="1"
            textAlign="center"
          >
            Currently Software Engineer <br /> at LOLA TECH
          </Text>
        </Box>
      )}
    </Flex>
  );
};

export default Logo;
