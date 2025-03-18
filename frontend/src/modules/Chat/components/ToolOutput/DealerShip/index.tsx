import { DealerShipOutput } from "@/modules/Chat/types/messages";
import * as Styled from "./styled";

interface PropsType {
  content: DealerShipOutput;
}

function ChatToolDealerShip({ content }: PropsType) {
  const { output } = content;

  if (!output) {
    return null;
  }

  return (
    <Styled.Container>
      <Styled.Text>{output}</Styled.Text>
    </Styled.Container>
  );
}

export default ChatToolDealerShip;
