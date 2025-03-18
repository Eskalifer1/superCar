import { applyOpacity } from "@/shared/utils/applyOpacityToColor";
import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  border-radius: ${({ theme }) => theme.borders.md};
  background-color: ${({ theme }) => applyOpacity(theme.colors.accent, 0.4)};
  color: ${({ theme }) => theme.colors.textDark};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 200px;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin: 0;
  font-weight: bold;
`;
