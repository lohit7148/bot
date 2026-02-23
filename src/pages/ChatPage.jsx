import { useState } from "react";

import { Box } from "@mui/material";

import Sidebar from "../components/Sidebar";
import ChatInput from "../components/ChatInput";
import ChatMessage from "../components/ChatMessage";

import sampleData from "../data/sampleData";

export default function ChatPage() {

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([]);

  const handleAsk = () => {

    if (!input) return;

    const userMsg = {
      sender: "user",
      text: input
    };

    const botReply =
      sampleData[input]
      || "Sorry, Did not understand your query!";

    const botMsg = {
      sender: "bot",
      text: botReply
    };

    setMessages([...messages, userMsg, botMsg]);

    setInput("");
  };

  const handleSave = () => {

    const history =
      JSON.parse(localStorage.getItem("chatHistory"))
      || [];

    history.push(messages);

    localStorage.setItem(
      "chatHistory",
      JSON.stringify(history)
    );

  };

  return (

    <Box display="flex">

      <Sidebar />

      <Box padding={3} flex={1}>

        {messages.map((msg, i) => (
          <ChatMessage key={i} {...msg} />
        ))}

        <ChatInput
          input={input}
          setInput={setInput}
          handleAsk={handleAsk}
          handleSave={handleSave}
        />

      </Box>

    </Box>

  );

}