import { AppointmentOutput } from "@/modules/Chat/types/messages";
import parseArrayString from "@/shared/utils/parseArrayString";
import * as Styled from "./styled";

interface PropsType {
  content: AppointmentOutput;
}

function ChatToolAppointment({ content }: PropsType) {
  const { output } = content || {};

  if (!output) {
    return null;
  }

  const parsedTime = parseArrayString(output);

  return (
    <Styled.Container>
      <Styled.Title>Available hours</Styled.Title>
      <Styled.TimeList>
        {parsedTime.map((time, index) => (
          <Styled.TimeItem key={index}>{time}</Styled.TimeItem>
        ))}
      </Styled.TimeList>
    </Styled.Container>
  );
}

export default ChatToolAppointment;
