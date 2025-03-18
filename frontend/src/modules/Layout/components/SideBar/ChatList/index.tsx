import { ROUTES } from "@/shared/configs/route";
import { useNavigate, useParams } from "react-router";
import * as Styled from "./styled";

interface PropsType {
  chatsSessions: string[];
  onClick: () => void;
}

function SideBarChatList({ chatsSessions = [], onClick }: PropsType) {
  const { sessionId } = useParams<{ sessionId?: string }>();

  const navigate = useNavigate();

  const handleClick = (chatId: string) => {
    navigate(`${ROUTES.CHAT}/${chatId}`);
    onClick();
  };

  return (
    <Styled.Container>
      {chatsSessions.length ? (
        chatsSessions.map((chatId) => (
          <Styled.ChatListItem
            key={chatId}
            $active={chatId === sessionId}
            onClick={() => handleClick(chatId)}
          >
            Chat {chatId.slice(0, 6)}...
          </Styled.ChatListItem>
        ))
      ) : (
        <Styled.EmptyText>No chats available</Styled.EmptyText>
      )}
    </Styled.Container>
  );
}

export default SideBarChatList;
