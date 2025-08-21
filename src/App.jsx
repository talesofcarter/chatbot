import Header from "./components/Header";
import ChatInput from "./components/ChatInput";
import ChatMessage from "./components/ChatMessage";
import { useState } from "react";

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      id: "id1",
      message: "hello chatbot",
      sender: "user",
    },
    {
      id: "id2",
      message: "Hello! How can I help you?",
      sender: "robot",
    },
    {
      id: "id3",
      message: "can you get me today's date?",
      sender: "user",
    },
    {
      id: "id4",
      message: "Today is September 27",
      sender: "robot",
    },
  ]);

  const chatMessageComponents = chatMessages.map(
    (chatMessage) => {
      return (
        <ChatMessage
          key={chatMessage.id}
          message={chatMessage.message}
          sender={chatMessage.sender}
        />
      );
    }
  );

  return (
    <main>
      <Header />
      <div className="app-container">
        <div className="chat-messages-container">
          {chatMessageComponents}
        </div>
        <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      </div>
    </main>
  );
}

export default App;
