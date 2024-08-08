import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./normalize.css";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./lib/graphql";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeContextProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </ApolloProvider>
  </React.StrictMode>
);
