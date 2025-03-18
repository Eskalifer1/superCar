import { Message } from "../types/messages";

/**
 * Updates the messages list with the new chunk of data.
 * @param {string} partialMessage - The accumulated partial message.
 * @param {(messages: Message[]) => void} setMessages - Function to update messages.
 */
const updateMessagesWithChunk = (
  partialMessage: string,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
) => {
  setMessages((prev) => {
    const newMessages = [...prev];
    const lastMessage = newMessages[newMessages.length - 1];
    lastMessage && lastMessage.type === "ai"
      ? (lastMessage.content = partialMessage)
      : newMessages.push({ type: "ai", content: partialMessage });

    return newMessages;
  });
};

export default updateMessagesWithChunk;
