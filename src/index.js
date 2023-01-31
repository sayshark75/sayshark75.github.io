import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import ScrollContextProvider from "./Contexts/ScrollContext";
import MyThemeContextProvider from "./Contexts/themeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <ScrollContextProvider>
        <MyThemeContextProvider>
          <App />
        </MyThemeContextProvider>
      </ScrollContextProvider>
    </BrowserRouter>
  </ChakraProvider>
);
