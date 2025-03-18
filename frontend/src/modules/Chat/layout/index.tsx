import Button from "@/shared/ui/Button";
import Loader from "@/shared/ui/Loader";
import { useState } from "react";
import { useParams } from "react-router";
import useChatMessages from "../hooks/useChatMessages";
import handleStreamResponse from "../utils/handleStreamResponse";
import ChatList from "./List";
import * as Styled from "./styled";

function ChatModule() {
  const { sessionId } = useParams<{ sessionId: string }>();
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useChatMessages(sessionId);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() && sessionId) {
      setIsLoading(true);
      setInput("");
      try {
        await handleStreamResponse(input, sessionId, setMessages);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const disabled = !sessionId || isLoading;

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Heading>SuperCar</Styled.Heading>
      </Styled.Header>
      <ChatList messages={messages} />
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <Button
          type="submit"
          disabled={disabled}
          {...(isLoading && { endAdornment: <Loader color="primary" /> })}
        >
          Ask AI
        </Button>
      </Styled.Form>
    </Styled.Container>
  );
}

export default ChatModule;
