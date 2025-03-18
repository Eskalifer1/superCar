

import { postQuery } from "@/shared/api/query";
import toast from "react-hot-toast";
import { Message, MessageType } from "../types/messages";
import appendUserMessage from "./appendUserMessage";
import processStreamChunk from "./processStreamChunk";

/**
 * Handles streaming response from the server and updates messages.
 * @param {string} query - User's query.
 * @param {string} sessionId - Current chat session ID.
 * @param {(messages: Message[]) => void} setMessages - Function to update messages.
 */
const handleStreamResponse = async (
  query: string,
  session_id: string,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
) => {
  try {
    appendUserMessage(query, setMessages);

    const response = await postQuery({ session_id, query });
    const reader = response.data.getReader();
    const decoder = new TextDecoder();

    // @ts-expect-error
    let eventType: MessageType = "";
    let partialMessage = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split("\n");

      for (const line of lines) {
        if (line.startsWith("event:"))
          eventType = line.substring(6).trim() as MessageType;
        else if (line.startsWith("data:")) {
          const data = line.substring(5).trim();
          partialMessage = processStreamChunk(
            data,
            eventType,
            partialMessage,
            setMessages
          );
        }
      }
    }
  } catch (error) {
    console.error("Error in query:", error);
    toast.error("Failed to send query");
  }
};

export default handleStreamResponse;
