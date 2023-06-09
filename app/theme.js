// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "system", // or 'dark' or 'system'
  useSystemColorMode: true, // true if you want the app color mode to change with the system color mode
};
// 3. extend the theme
const theme = extendTheme({ config });

export default theme;
