import { WeatherOutput } from "@/modules/Chat/types/messages";
import * as Styled from "./styled";

interface PropsType {
  content: WeatherOutput;
}

function ChatToolWeather({ content }: PropsType) {
  const { output } = content || {};

  return (
    <Styled.Container>
      <Styled.Text>{output}</Styled.Text>
    </Styled.Container>
  );
}

export default ChatToolWeather;
