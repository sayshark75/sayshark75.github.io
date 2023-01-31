import { useState } from "react";
import { createContext } from "react";

const MyThemeContext = createContext(null);

const MyThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  return <MyThemeContext.Provider value={{ theme, setTheme }}>{children}</MyThemeContext.Provider>;
};

export default MyThemeContextProvider;
export { MyThemeContext };
