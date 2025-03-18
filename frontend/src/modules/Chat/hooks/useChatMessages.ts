import { CHATS_MESSAGES_KEY } from "@/shared/consts/localStorage";
import useLocalStorageState from "@/shared/hooks/useLocalStorageState";
import { Dispatch } from "react";
import { Message } from "../types/messages";

/**
 * Hook to manage chat messages, persisting them to localStorage.
 * @param {string} sessionId - Chat session ID.
 * @returns {[Message[], Dispatch<React.SetStateAction<Message[]>>]} - Messages and setter.
 */
function useChatMessages(
  sessionId?: string
): [Message[], Dispatch<React.SetStateAction<Message[]>>] {
  const [messages, setMessages] = useLocalStorageState<Message[]>(
    `${CHATS_MESSAGES_KEY}${sessionId}`,
    []
  );

  return [messages, setMessages];
}

export default useChatMessages;
