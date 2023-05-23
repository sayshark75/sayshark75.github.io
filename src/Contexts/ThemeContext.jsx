import { createContext, useState } from "react";
import { BlueTheme } from "../Themes/BlueTheme";
import { ChakraProvider } from "@chakra-ui/react";

const ThemeContext = createContext(null);
const ThemeContextProvider = ({ children }) => {
  const [themeData, setThemeData] = useState(BlueTheme);
  const handleThemeChange = (themeObj) => {
    setThemeData(themeObj);
  };
  return (
    <ThemeContext.Provider value={{ themeData, handleThemeChange }}>
      <ChakraProvider theme={themeData}>{children}</ChakraProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
export { ThemeContext };
