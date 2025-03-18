import theme from "@/shared/theme";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

interface StyledLoaderProps {
  $color: keyof typeof theme.colors;
  $borderThickness?: string;
  $size?: string;
}

export const Loader = styled.div<StyledLoaderProps>`
  border: ${({ $borderThickness }) => $borderThickness || "4px"} solid
    ${({ $color, theme }) => theme.colors[$color] || theme.colors.accent};
  border-top: ${({ $borderThickness }) => $borderThickness || "4px"} solid
    transparent;
  border-radius: 50%;
  width: ${({ $size }) => $size || "16px"};
  height: ${({ $size }) => $size || "16px"};
  animation: ${spin} 2s linear infinite;
`;
