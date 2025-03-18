import { ROUTES } from "@/shared/configs/route";
import useChatSessions from "@/shared/hooks/useChatSessions";
import Button from "@/shared/ui/Button";
import { useState } from "react";
import { useNavigate } from "react-router";
import SideBarChatList from "./ChatList";
import * as Styled from "./styled";

function Sidebar() {
  const { createNewChat, chatsSessions } = useChatSessions();
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  const handleNewChat = () => {
    const newChatSessionId = createNewChat();
    setIsVisible(false);
    navigate(`${ROUTES.CHAT}/${newChatSessionId}`);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      <Styled.ToggleButton
        onClick={() => setIsVisible((prev) => !prev)}
        $isVisible={isVisible}
      >
        <div />
        <div />
        <div />
      </Styled.ToggleButton>
      <Styled.Container $isVisible={isVisible}>
        <Button onClick={handleNewChat} startAdornment="+" fullWidth>
          New Chat
        </Button>
        <SideBarChatList chatsSessions={chatsSessions} onClick={handleClose} />
      </Styled.Container>
      <Styled.Overlay $isVisible={isVisible} onClick={handleClose} />
    </>
  );
}

export default Sidebar;
