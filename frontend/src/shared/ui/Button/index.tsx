import theme from "@/shared/theme";
import React from "react";
import * as Styled from "./styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "text" | "contained" | "outlined";
  size?: "sm" | "md" | "lg";
  color?: keyof typeof theme.colors;
  fullWidth?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  size = "md",
  color = "accent",
  fullWidth = false,
  startAdornment,
  endAdornment,
  children,
  ...rest
}) => {
  return (
    <Styled.BaseButton
      $color={color}
      $fullWidth={fullWidth}
      $variant={variant}
      $size={size}
      {...rest}
    >
      {startAdornment && (
        <span style={{ marginRight: "8px" }}>{startAdornment}</span>
      )}
      {children}
      {endAdornment && (
        <span style={{ marginLeft: "8px" }}>{endAdornment}</span>
      )}
    </Styled.BaseButton>
  );
};

export default Button;
