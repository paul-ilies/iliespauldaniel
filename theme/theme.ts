import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import colors from "./colors";

const config: ThemeConfig = {
  useSystemColorMode: false,
  cssVarPrefix: "ugr",
};

export const theme = extendTheme({
  colors,
  config,
  styles: {
    global: () => ({
      "body,html": {
        height: "auto",
        width: "100%",
        fontFamily: "Familjen Grotesk , sans-serif",
        bg: "patrickBlue",
        color: "whiteCoffee",
        scrollBehavior: "smooth",
      },
    }),
  },
});
