import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    teal: {
      500: "#319795",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
      },
    },
  },
});

export default theme;
