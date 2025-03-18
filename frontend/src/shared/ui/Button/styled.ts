import theme from "@/shared/theme";
import { applyOpacity } from "@/shared/utils/applyOpacityToColor";
import styled, { css } from "styled-components";

interface StyledButtonProps {
  $variant: "text" | "contained" | "outlined";
  $size: "sm" | "md" | "lg";
  $color: keyof typeof theme.colors;
  $fullWidth: boolean;
}

export const BaseButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-family: inherit;
  font-weight: 500;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};

  ${({ $size }) => {
    switch ($size) {
      case "sm":
        return css`
          padding: 8px 16px;
          font-size: 14px;
        `;
      case "md":
        return css`
          padding: 12px 24px;
          font-size: 16px;
        `;
      case "lg":
        return css`
          padding: 16px 32px;
          font-size: 18px;
        `;
      default:
        return css`
          padding: 12px 24px;
          font-size: 16px;
        `;
    }
  }}

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}

  ${({ $variant, theme, $color }) => {
    const selectedColor = theme.colors[$color];

    switch ($variant) {
      case "text":
        return css`
          background-color: transparent;
          color: ${selectedColor};
          &:hover {
            background-color: ${applyOpacity(selectedColor, 0.7)};
          }
        `;
      case "contained":
        return css`
          background-color: ${selectedColor};
          color: ${theme.colors[`${$color}Contrast`]};
          border-radius: ${theme.borders.md};
          &:hover {
            background-color: ${applyOpacity(selectedColor, 0.7)};
          }
        `;
      case "outlined":
        return css`
          background-color: transparent;
          color: ${selectedColor};
          border: 2px solid ${selectedColor};
          border-radius: ${theme.borders.md};
          &:hover {
            background-color: ${applyOpacity(selectedColor, 0.7)};
          }
        `;
      default:
        return css`
          background-color: ${theme.colors.accent};
          color: ${theme.colors[`${$color}Contrast`]};
          border-radius: ${theme.borders.md};
        `;
    }
  }}
`;
