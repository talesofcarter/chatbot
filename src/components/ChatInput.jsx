import React from "react";

const ChatInput = () => {
  function sendMessage() {
    console.log("Message sent!");
  }
  return (
    <section>
      <input
        type="text"
        placeholder="Send a message to Chatbot"
        size="30"
        className="chat-input"
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
