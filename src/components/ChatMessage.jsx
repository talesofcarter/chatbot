import { FaUser } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

const ChatMessage = ({ message, sender }) => {
  return (
    <div
      className={
        sender === "user"
          ? "chat-message-user"
          : "chat-message-robot"
      }
    >
      {sender === "robot" && (
        <FontAwesomeIcon
          className="robot-icon"
          icon={faRobot}
        />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <FaUser className="profile-icon" />
      )}
    </div>
  );
};

export default ChatMessage;
