import { MessageType, StreamResponseKey } from "../types/messages";

export const STREAM_RESPONSE_MESSAGE_TYPE: Record<
  StreamResponseKey,
  MessageType
> = {
  USER: "user",
  AI: "ai",
  TOOL_USE: "tool_use",
  TOOL_OUTPUT: "tool_output",
  CHUNK: "chunk",
  END: "end",
} as const;
