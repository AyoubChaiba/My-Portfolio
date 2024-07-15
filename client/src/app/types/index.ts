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
    marginLeft: number;
    headHeight?: string;
    headIconTop?: string;
  };
  className?: string;
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


export interface Contribution {
  color: string;
  contributionCount: number;
  contributionLevel: string;
  date: string;
}

export interface ApiResponse {
  contributions: Contribution[][];
  totalContributions: number;
}

export interface CalendarProps {
  values: { [key: string]: number };
  until: string;
  totalContributions: number;
}

export interface Asset {
  _ref: string;
  _type: string;
}

export interface Image {
  _type: string;
  asset: Asset;
}

export interface Link {
  name: string;
  url: string;
}

export interface Profile {
  _id: string;
  fullName: string;
  email: string;
  job: string;
  phone: string;
  photo: Image;
  links: Link[];
  _createdAt: string;
  _updatedAt: string;
}
