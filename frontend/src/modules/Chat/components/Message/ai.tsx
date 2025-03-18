import { Message } from "../../types/messages";
import * as Styled from "./styled";

interface PropsType {
  message: Message;
}

function ChatAIMessage({ message }: PropsType) {
  const { content } = message || {};
  if (!content) {
    return null;
  }

  return <Styled.AIMessage>{content}</Styled.AIMessage>;
}

export default ChatAIMessage;
