import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import colors from "./colors";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  cssVarPrefix: "ugr",
};

export const theme = extendTheme({
  colors,
  config,
  styles: {
    global: (props: any) => ({
      "body,html": {
        height: "auto",
        width: "100%",
        fontFamily: "Familjen Grotesk , sans-serif",
        bg: mode("oldLace", "patrickBlue")(props),
        color: mode("patrickBlue", "whiteCoffee")(props),
        scrollBehavior: "smooth",
      },
    }),
  },
});
