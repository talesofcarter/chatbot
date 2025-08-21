import { useState } from "react";

const ChatInput = ({ chatMessages, setChatMessages }) => {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
        man: "",
      },
    ];

    setChatMessages(newChatMessages);

    // Simulate a response from the chatbot
    const response = Chatbot.getResponse(inputText);

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
        man: "",
      },
    ]);

    setInputText("");
  }

  return (
    <section className="chat-input-container">
      <input
        id="send-message"
        type="text"
        placeholder="Send a message to Chatbot"
        size="30"
        className="chat-input"
        onChange={saveInputText}
        value={inputText}
      />
      <button
        className="send-btn"
        onClick={sendMessage}
      >
        Send
      </button>
    </section>
  );
};

export default ChatInput;
