import { BrowserRouter, Routes, Route } from "react-router-dom";

import ChatPage from "./pages/ChatPage";
import HistoryPage from "./pages/HistoryPage";

export default function App() {

  return (

    <BrowserRouter>

      {/* REQUIRED HEADER FOR CYPRESS */}
      <header
        style={{
          padding: "16px",
          background: "#ECE7FF"
        }}
      >
        <h1>Bot AI</h1>
      </header>

      <Routes>

        <Route path="/" element={<ChatPage />} />

        <Route path="/history" element={<HistoryPage />} />

      </Routes>

    </BrowserRouter>

  );

}