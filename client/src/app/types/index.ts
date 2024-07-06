import { ReactNode, MouseEvent } from "react";


export interface ButtonProps {
  text: string;
  className?: string;
  icon?: ReactNode;
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface LinkProps {
  to: string;
  text?: string;
  handleClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  icon?: ReactNode;
  className?: string;
}

export interface ContentProps {
  title?: string;
  classContent: string;
  children?: ReactNode;
}

export interface TextWithProps {
  text: string;
}