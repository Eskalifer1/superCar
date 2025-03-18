import styled from "styled-components";

export const ToolMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondaryContrast};
  padding: 10px;
  border-radius: ${({ theme }) => theme.borders.sm};
  max-width: 70%;
  font-style: italic;
`;
