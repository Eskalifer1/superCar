import { applyOpacity } from "@/shared/utils/applyOpacityToColor";
import styled from "styled-components";

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  padding-inline: 16px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => applyOpacity(theme.colors.accent, 0.4)};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => applyOpacity(theme.colors.accent, 0.5)};
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
    border-radius: 10px;
  }
`;

export const MessageItem = styled.div<{ $isUser?: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.$isUser ? "flex-end" : "flex-start")};
  margin: 5px 0;
`;
