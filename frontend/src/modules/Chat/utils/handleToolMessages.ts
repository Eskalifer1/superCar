import { Message, MessageType } from "../types/messages";
import checkIsMessageToolOutputType from "./checkIsMessageToolOutputType";

/**
 * Handles tool-related messages.
 * @param {MessageType} eventType - The type of event (e.g., "tool_use", "tool_output").
 * @param {string} data - The data associated with the event.
 * @param {(messages: Message[]) => void} setMessages - Function to update messages.
 */
const handleToolMessages = (
  eventType: MessageType,
  data: string,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
) => {
  if (!checkIsMessageToolOutputType(data)) {
    setMessages((prev) => [...prev, { type: eventType, content: data }]);
  }
};

export default handleToolMessages;
