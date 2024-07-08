import { ReactNode, MouseEvent } from "react";


export interface ButtonProps {
  text: string;
  className?: string;
  icon?: ReactNode;
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface TimelineProps {
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  style: {
    sizeIcon: number;
    marginLeft: string;
    headHeight?: string;
    headIconTop?: string;
  };
}

export interface WorkingProps {
  company: string;
  position: string;
  dates: string;
  description: string;
}

export interface TimelineInfoProps {
  title: string;
  text?: string;
  link?: {
    userName: string;
    profileLink: string;
  };
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
