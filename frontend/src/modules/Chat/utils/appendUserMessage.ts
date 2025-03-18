import { STREAM_RESPONSE_MESSAGE_TYPE } from "../consts/streamResponseMessageType";
import { Message } from "../types/messages";

/**
 * Appends the user's message to the messages list.
 * @param {string} query - User's query.
 * @param {(messages: Message[]) => void} setMessages - Function to update messages.
 */
const appendUserMessage = (
  query: string,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
) => {
  setMessages((prev) => [
    ...prev,
    { type: STREAM_RESPONSE_MESSAGE_TYPE.USER, content: query },
  ]);
};

export default appendUserMessage;
