import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.backgroundContrast};
  border-radius: ${({ theme }) => theme.borders.md};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  padding: 16px;
  margin: 12px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  padding-bottom: 8px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.accent};
`;

export const ScheduleId = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textDark};
  opacity: 0.8;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InfoItem = styled.div`
  margin-bottom: 8px;
`;

export const Label = styled.span`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textDark};
`;

export const Value = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textDark};
  margin-left: 8px;
`;

export const Message = styled.div`
  padding: 12px;
  border-radius: ${({ theme }) => theme.borders.sm};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondaryContrast};
  font-size: ${({ theme }) => theme.fontSizes.md};
`;
