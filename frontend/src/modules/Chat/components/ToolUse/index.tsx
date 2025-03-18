import { Message, MessageToolOutputType } from "../../types/messages";
import * as Styled from "./styled";

interface PropsType {
  message: Message;
}

const labelObj: Record<MessageToolOutputType, string> = {
  schedule_appointment: "Searching for appointment",
  get_weather: "Looking for the temperature",
  get_dealership_address: "Prepare the address",
  check_appointment_availability: "Checking out the free hours",
};

function ToolUse({ message }: PropsType) {
  const { content } = message || {};

  const label = labelObj?.[content as MessageToolOutputType];

  return <Styled.ToolMessage>{label ?? "Using tool"}</Styled.ToolMessage>;
}

export default ToolUse;
