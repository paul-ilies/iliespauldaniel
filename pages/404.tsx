import { Center, Heading, Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();
  return (
    <Center m="auto" flexDir="column" gap="10px">
      <Box>
        <Heading as="h2">Page not found</Heading>
      </Box>
      <Box>
        <Button
          bg="transparent"
          border="1px solid #FFF"
          onClick={() => router.push("/")}
        >
          Go Back
        </Button>
      </Box>
    </Center>
  );
};

export default ErrorPage;
