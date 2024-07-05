import { ReactNode, MouseEvent } from "react";
export interface ButtonProps {
  text: string;
  className?: string;
  icon: ReactNode;
}

export interface LinkProps {
  to: string;
  text?: string;
  handleClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  icon?: ReactNode;
  className?: string;
}
