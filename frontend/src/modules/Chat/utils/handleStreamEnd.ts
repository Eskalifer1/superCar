import { Message } from "../types/messages";

/**
 * Handles the end of the stream.
 * @param {(messages: Message[]) => void} setMessages - Function to update messages.
 */
const handleStreamEnd = (
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
) => {
  setMessages((prev) =>
    prev.filter(
      (msg) =>
        msg.type !== "tool_use" && (msg.type !== "ai" || msg.content.trim())
    )
  );
  console.log("Conversation ended");
};

export default handleStreamEnd;
