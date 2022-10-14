import { Heading, Text } from "@chakra-ui/react";
interface Props {
  text: string;
  fontSize?: string | { base?: string; md?: string };
  lineHeight?: string;
}
const Headline = ({ text, fontSize, lineHeight }: Props) => {
  const splitWords = text.split(" ");
  const words: string[][] = [];
  splitWords.forEach((item: string) => {
    words.push(item.split(""));
  });
  words.map((word) => {
    return word.push("\u00A0");
  });

  return (
    <Heading
      position="relative"
      display="inline-block"
      whiteSpace="normal"
      fontWeight="bold"
      lineHeight={lineHeight}
      textTransform="uppercase"
      overflow="hidden"
    >
      {words.map((word) => {
        return word.map((letter: string, index: number) => (
          <Text
            key={index}
            fontSize={fontSize}
            fontWeight="500"
            position="relative"
            display="inline-block"
            whiteSpace="normal"
          >
            {letter}
          </Text>
        ));
      })}
    </Heading>
  );
};

export default Headline;
