import Button from "@/shared/ui/Button";
import styled from "styled-components";

interface isVisibleProps {
  $isVisible?: boolean;
}

export const Container = styled.aside<isVisibleProps>`
  width: 250px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 0px ${(props) => props.theme.borders.md}
    ${(props) => props.theme.borders.md} 0px;
  overflow: auto;
  transition: transform 0.3s ease-in-out;
  padding: 16px;
  color: white;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 100;
    transform: translateX(${({ $isVisible }) => ($isVisible ? "0" : "-100%")});
  }
`;

export const Overlay = styled.div<isVisibleProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 50;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const ToggleButton = styled(Button)<isVisibleProps>`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 1000;
  border: none;
  cursor: pointer;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2px;
  padding: 0;
  width: 32px;
  height: 32px;

  div {
    width: 20px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
    transform-origin: center;

    &:nth-child(1) {
      transform: ${({ $isVisible }) =>
        $isVisible ? "rotate(45deg) translate(3px, 3px)" : "none"};
    }

    &:nth-child(2) {
      opacity: ${({ $isVisible }) => ($isVisible ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ $isVisible }) =>
        $isVisible ? "rotate(-45deg) translate(4px, -4px)" : "none"};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;
