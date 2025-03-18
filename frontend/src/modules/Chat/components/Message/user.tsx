import { Message } from "../../types/messages";
import * as Styled from "./styled";

interface PropsType {
  message: Message;
}

function ChatUserMessage({ message }: PropsType) {
  const { content } = message || {};
  if (!content) {
    return null;
  }

  return <Styled.UserMessage>{content}</Styled.UserMessage>;
}

export default ChatUserMessage;
