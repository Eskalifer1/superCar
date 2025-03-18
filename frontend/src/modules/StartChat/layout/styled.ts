import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.backgroundContrast};
  font-size: ${({ theme }) => theme.fontSizes.h1};
`;
