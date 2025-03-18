import { applyOpacity } from "@/shared/utils/applyOpacityToColor";
import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.primaryContrast};
  text-align: center;
  margin-bottom: 15px;
`;

export const TimeList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 60px), 1fr));
  width: 100%;
  gap: 16px;
`;

export const TimeItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.nd};
  background-color: ${({ theme }) => applyOpacity(theme.colors.accent, 0.8)};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.accentContrast};
  border-radius: ${({ theme }) => theme.borders.sm};
  padding: 8px;
  text-align: center;
  transition: scale 0.3s;
  cursor: pointer;

  &:hover {
    scale: 1.05;
  }
`;
