import { applyOpacity } from "@/shared/utils/applyOpacityToColor";
import styled, { css } from "styled-components";

export const Container = styled.ul`
  padding: 0;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ChatListItem = styled.li<{ $active: boolean }>`
  padding: 8px;
  cursor: pointer;
  transition: all 0.3s;

  border-radius: ${({ theme }) => theme.borders.sm};

  font-size: ${({ theme }) => theme.fontSizes.md};

  ${({ $active, theme }) => {
    const currentColor = $active ? theme.colors.accent : theme.colors.primary;
    return css`
      background-color: ${currentColor};
      color: ${$active ? theme.colors.accentContrast : theme.colors.textDark};
      &:hover {
        background-color: ${applyOpacity(currentColor, 0.8)};
      }
    `;
  }}
`;

export const EmptyText = styled.p`
  font: ${({ theme }) => theme.fontSizes.sm};
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryContrast};
`;
