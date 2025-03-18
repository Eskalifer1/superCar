import styled, { css } from "styled-components";

interface StyledInputContainerProps {
  $fullWidth: boolean;
}

interface StyledInputProps {
  $hasStartAdornment: boolean;
  $hasEndAdornment: boolean;
}

export const Container = styled.div<StyledInputContainerProps>`
  display: inline-flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borders.sm};
  background-color: ${({ theme }) => theme.colors.background};
  transition: border-color 0.3s;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}
`;

export const Input = styled.input<StyledInputProps>`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.text};
  padding: 8px 12px;

  ${({ $hasStartAdornment }) =>
    $hasStartAdornment &&
    css`
      padding-left: 8px;
    `}

  ${({ $hasEndAdornment }) =>
    $hasEndAdornment &&
    css`
      padding-right: 8px;
    `}

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
