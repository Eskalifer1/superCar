import theme from "@/shared/theme";
import React, { HTMLProps } from "react";
import * as Styled from "./styled";

export interface LoaderProps extends Omit<HTMLProps<HTMLDivElement>, "size"> {
  size?: string;
  color?: keyof typeof theme.colors;
  borderThickness?: string;
}

const Loader: React.FC<LoaderProps> = ({
  size,
  color = "accent",
  borderThickness,
}) => {
  return (
    <Styled.Loader
      $size={size}
      $color={color}
      $borderThickness={borderThickness}
    />
  );
};

export default Loader;
