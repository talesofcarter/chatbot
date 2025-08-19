import { FaUser } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

const ChatMessage = ({ message, sender }) => {
  return (
    <div>
      {sender === "robot" && (
        <FontAwesomeIcon
          className="robot-icon"
          icon={faRobot}
        />
      )}
      {message}
      {sender === "user" && <FaUser className="profile-icon" />}
    </div>
  );
};

export default ChatMessage;
