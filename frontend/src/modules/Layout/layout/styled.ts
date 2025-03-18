import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const MainContent = styled.main`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
