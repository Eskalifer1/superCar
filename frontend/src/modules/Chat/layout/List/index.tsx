import { memo, useEffect, useRef } from "react";
import ChatAIMessage from "../../components/Message/ai";
import ChatUserMessage from "../../components/Message/user";
import ToolOutputMessage from "../../components/ToolOutput";
import ToolUse from "../../components/ToolUse";
import { Message } from "../../types/messages";
import * as Styled from "./styled";

interface PropsType {
  messages?: Message[];
}

function ChatList({ messages = [] }: PropsType) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <Styled.MessagesContainer>
      {messages?.map((msg, index) => (
        <Styled.MessageItem key={index} $isUser={msg.type === "user"}>
          {/* We could just pass it as one component, but with this approach we have
          more flexibility for future */}
          {msg.type === "user" && <ChatUserMessage message={msg} />}
          {msg.type === "ai" && <ChatAIMessage message={msg} />}
          {msg.type === "tool_use" && <ToolUse message={msg} />}
          {msg.type === "tool_output" && (
            <ToolOutputMessage content={msg.content} />
          )}
        </Styled.MessageItem>
      ))}
      <div ref={messagesEndRef} />
    </Styled.MessagesContainer>
  );
}

export default memo(ChatList);
