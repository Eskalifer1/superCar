import styled from "styled-components";

const Message = styled.div`
  padding: 10px;
  border-radius: ${({ theme }) => theme.borders.lg};
  max-width: 70%;
  overflow: hidden;
  word-break: break-word;
`;

export const UserMessage = styled(Message)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryContrast};
`;

export const AIMessage = styled(Message)`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondaryContrast};
  padding: 10px;
  border-radius: ${({ theme }) => theme.borders.lg};
  max-width: 70%;
`;
