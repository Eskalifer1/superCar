import React from "react";
import * as Styled from "./styled";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  fullWidth = false,
  startAdornment,
  endAdornment,
  className,
  ...props
}) => {
  return (
    <Styled.Container className={className} $fullWidth={fullWidth}>
      {startAdornment && (
        <span style={{ marginLeft: "8px" }}>{startAdornment}</span>
      )}
      <Styled.Input
        $hasStartAdornment={!!startAdornment}
        $hasEndAdornment={!!endAdornment}
        {...props}
      />
      {endAdornment && (
        <span style={{ marginRight: "8px" }}>{endAdornment}</span>
      )}
    </Styled.Container>
  );
};

export default Input;
