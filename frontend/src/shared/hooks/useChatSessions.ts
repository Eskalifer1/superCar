import { useLayoutEffect, useState } from "react";
import { CHATS_SESSIONS_KEY } from "../consts/localStorage";
import generateSessionId from "../utils/generateSessionId";

interface UseChatSessionsReturnType {
  chatsSessions: string[];
  createNewChat: () => void;
}

/**
 * Hook to manage chat sessions stored in localStorage
 * @returns {UseChatSessionsReturnType}
 */
const useChatSessions = (): UseChatSessionsReturnType => {
  const [chatsSessions, setChatsSessions] = useState<string[]>([]);

  useLayoutEffect(() => {
    const savedChats = JSON.parse(
      localStorage.getItem(CHATS_SESSIONS_KEY) || "[]"
    );
    if (savedChats.length) {
      setChatsSessions(savedChats);
    }
  }, []);

  const createNewChat = () => {
    const newSession = generateSessionId();
    const updatedChats = [newSession, ...chatsSessions];

    setChatsSessions((prev) => [newSession, ...prev]);
    localStorage.setItem(CHATS_SESSIONS_KEY, JSON.stringify(updatedChats));
    return newSession;
  };

  return { chatsSessions, createNewChat };
};

export default useChatSessions;
