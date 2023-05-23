import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollContextProvider from "./Contexts/ScrollContext";
import ThemeContextProvider from "./Contexts/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProvider>
    <BrowserRouter>
      <ScrollContextProvider>
        <App />
      </ScrollContextProvider>
    </BrowserRouter>
  </ThemeContextProvider>
);
