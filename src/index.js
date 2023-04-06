import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import ScrollContextProvider from "./Contexts/ScrollContext";
import { theme } from "./Themes/myTheme.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <ScrollContextProvider>
        <App />
      </ScrollContextProvider>
    </BrowserRouter>
  </ChakraProvider>
);
