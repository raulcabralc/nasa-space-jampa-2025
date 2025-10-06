import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./global-styles.styled.ts";
import Header from "./layout/header/Header.tsx";
import Content from "./layout/content/Content.styled.ts";
import Index from "./pages/index/Index.tsx";
import ChatBot from "./pages/chat-bot/ChatBot.tsx";
import NotFound from "./pages/not-found/NotFound.tsx";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");
createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ask" element={<ChatBot />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>
    </BrowserRouter>
  </StrictMode>
);
