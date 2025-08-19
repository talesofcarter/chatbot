import ChatInput from "./components/ChatInput";
import ChatMessage from "./components/ChatMessage";
import { useState } from "react";

function App() {
  const [chatMessages, setChatMessages] = useState([
    { id: "id1", message: "hello chatbot", sender: "user" },
    { id: "id2", message: "Hello! How can I help you?", sender: "robot" },
    { id: "id3", message: "can you get me today's date?", sender: "user" },
    { id: "id4", message: "Today is September 27", sender: "robot" },
  ]);

  const chatMessageComponents = chatMessages.map((chatMessage) => {
    return (
      <ChatMessage
        key={chatMessage.id}
        message={chatMessage.message}
        sender={chatMessage.sender}
      />
    );
  });

  function sendMessage() {
    setChatMessages([
      ...chatMessages,
      { message: "test", sender: "user", id: crypto.randomUUID() },
    ]);
  }
  return (
    <div>
      <ChatInput />
      {chatMessageComponents}
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
