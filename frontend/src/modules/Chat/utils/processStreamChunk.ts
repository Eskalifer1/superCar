import { STREAM_RESPONSE_MESSAGE_TYPE } from "../consts/streamResponseMessageType";
import { Message, MessageType } from "../types/messages";
import handleStreamEnd from "./handleStreamEnd";
import handleToolMessages from "./handleToolMessages";
import shouldAddSpace from "./schoulAddSpace";
import updateMessagesWithChunk from "./updateMessageWithChunk";

/**
 * Processes each chunk of data from the stream.
 * @param {string} chunk - The chunk of data to process.
 * @param {string} eventType - The type of event (e.g., "chunk", "end").
 * @param {string} partialMessage - The accumulated partial message.
 * @param {(messages: Message[]) => void} setMessages - Function to update messages.
 * @returns {string} The updated partial message.
 */
const processStreamChunk = (
  chunk: string,
  eventType: MessageType,
  partialMessage: string,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
): string => {
  if (eventType === "chunk") {
    const addSpace = shouldAddSpace(partialMessage, chunk);

    const newText = addSpace ? ` ${chunk}` : chunk;
    partialMessage += newText;

    if (partialMessage.trim()) {
      updateMessagesWithChunk(partialMessage, setMessages);
    }
  }

  if (eventType === "end") {
    handleStreamEnd(setMessages);
  }

  if (
    [
      STREAM_RESPONSE_MESSAGE_TYPE.TOOL_USE,
      STREAM_RESPONSE_MESSAGE_TYPE.TOOL_OUTPUT,
    ].includes(eventType)
  ) {
    handleToolMessages(eventType, chunk, setMessages);
  }

  return partialMessage;
};

export default processStreamChunk;
