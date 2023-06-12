import { Flex, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import Logo from "./common/Logo";

const links = [
  { name: "About", href: "/#about" },
  { name: "Portfolio", href: "/#portfolio" },
];

const Header = () => {
  return (
    <Flex
      pt="1rem"
      gap={{ base: "1rem", md: "0" }}
      justifyContent="space-between"
    >
      <Logo />
      <UnorderedList listStyleType="none" display="flex" gap="2rem">
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
