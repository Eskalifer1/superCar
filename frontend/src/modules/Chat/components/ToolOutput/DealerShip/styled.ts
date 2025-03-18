import styled from "styled-components";

export const Container = styled.div`
  padding: 8px 10px;
  width: 100%;
  max-width: 300px;

  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borders.sm};

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryContrast};
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
`;
