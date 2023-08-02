import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { theme } from "./theme/chakra.ts";
import Toggle from "./theme/Toggle.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
      <Toggle />
    </ChakraProvider>
  </React.StrictMode>
);
