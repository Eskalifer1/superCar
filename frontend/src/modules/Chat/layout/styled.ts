import UIInput from "@/shared/ui/Input";
import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  padding: 16px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.backgroundContrast};
  font-size: ${({ theme }) => theme.fontSizes.h1};
`;

export const Form = styled.form`
  padding: 16px;
  display: flex;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const Input = styled(UIInput)`
  flex: 1;
`;
