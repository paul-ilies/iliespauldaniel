import { Flex, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import useMediaQuery from "../hooks/useMediaQuery";
import Logo from "./common/Logo";

const links = [
  { name: "About", href: "/#about" },
  { name: "Portfolio", href: "/#portfolio" },
];

const Header = ({ navHeight }: any) => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Flex
      display="flex"
      width="100%"
      alignItems="center"
      pt="1rem"
      ref={navHeight}
      flexDir={isMobile ? "column" : "row"}
      gap={isMobile ? "1rem" : "0"}
    >
      <Logo />
      <UnorderedList
        listStyleType="none"
        display="flex"
        ml={isMobile ? "0" : "auto"}
        gap="2rem"
      >
        {links.map((el, i) => {
          return (
            <ListItem
              key={i}
              sx={{
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  transform: "scaleX(0)",
                  height: "1px",
                  bottom: "-10px",
                  left: 0,
                  backgroundColor: "whiteCoffee",
                  transformOrigin: "bottom right",
                  transition: "transform 0.25s ease-out",
                },
                "&:hover::after": {
                  transform: "scaleX(1)",
                  transformOrigin: "bottom left",
                },
              }}
            >
              <Link
                fontSize={{ base: "xl", md: "2xl" }}
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
                href={el.href}
              >
                {el.name}
              </Link>
            </ListItem>
          );
        })}
      </UnorderedList>
    </Flex>
  );
};

export default Header;
