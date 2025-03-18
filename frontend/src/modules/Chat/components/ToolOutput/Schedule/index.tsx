import {
  ScheduleOutput,
  ScheduleParsedOutput,
} from "@/modules/Chat/types/messages";
import parseToObject from "@/shared/utils/parseToObject";
import * as Styled from "./styled";

interface PropsType {
  content: ScheduleOutput;
}

function ChatToolSchedule({ content }: PropsType) {
  const { output } = content || {};

  if (!output) {
    return null;
  }

  const parsedObject = parseToObject(output);

  const { fecha, confirmacion_id, hora, modelo, mensaje } = (parsedObject ||
    {}) as ScheduleParsedOutput;

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>Schedule</Styled.Title>
        {confirmacion_id && (
          <Styled.ScheduleId>ID: {confirmacion_id}</Styled.ScheduleId>
        )}
      </Styled.Header>

      <Styled.Content>
        {fecha && (
          <Styled.InfoItem>
            <Styled.Label>Date:</Styled.Label>
            <Styled.Value>{fecha}</Styled.Value>
          </Styled.InfoItem>
        )}

        {hora && (
          <Styled.InfoItem>
            <Styled.Label>Time:</Styled.Label>
            <Styled.Value>{hora}</Styled.Value>
          </Styled.InfoItem>
        )}

        {modelo && (
          <Styled.InfoItem>
            <Styled.Label>Model:</Styled.Label>
            <Styled.Value>{modelo}</Styled.Value>
          </Styled.InfoItem>
        )}

        {mensaje && <Styled.Message>{mensaje}</Styled.Message>}
      </Styled.Content>
    </Styled.Container>
  );
}

export default ChatToolSchedule;
