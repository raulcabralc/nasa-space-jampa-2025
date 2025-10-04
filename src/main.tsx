import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from "./global-styles.styled.ts";
import Header from "./layout/header/Header.tsx";
import Content from "./layout/content/Content.styled.ts";
import Index from "./pages/index/Index.tsx";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");
createRoot(rootElement).render(
  <StrictMode>
    <GlobalStyle />
    <Header />
    <Content>
      <Index />
    </Content>
  </StrictMode>
);
