import { ReactNode, MouseEvent } from "react";
import { Certification, Link, Project, Projects } from "./apiTypes";

export interface ButtonProps {
  text?: string;
  className?: string;
  icon?: ReactNode;
  link?: string;
  type?: 'button' | 'submit' | 'reset';
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface CustomTimelineProps {
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  style: {
    sizeIcon: number;
    marginLeft: number;
    headHeight?: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    headIconTop?: string;
  };
  className?: string;
}

export interface TimelineProfileProps {
  title: string;
  text?: string;
  link?: Link;
}

export interface TimelineResumeProps {
  name: string;
  subName: string;
  dates: string;
  description: string;
  location: string;
  logo?: string;
}

export interface TimelineInfoProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  className: string;
}

export interface LinkProps {
  to: string;
  text?: string;
  handleClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  icon?: ReactNode;
  className?: string;
}

export interface ContentGridProps {
  title?: string;
  classContent: string;
  children?: ReactNode;
  dataUpdate?: string;
}

export interface TextWithProps {
  text: string;
}

export interface RenderGridCardsProps {
  category: string;
  projects: Projects | null;
  visibleProjects: number;
  handleOpenDialog: (project: Project) => void;
}

export interface ModalDialogProps {
  openDialog: boolean;
  handleCloseDialog: () => void;
  currentProject: Project | null;
}

export interface FormatDateProps {
  date: string;
  locales?: string;
  options?: Intl.DateTimeFormatOptions;
}

export interface DialogQRProps {
  open: boolean;
  onClose: () => void;
  link: string;
}

export interface CertificationProps {
  certification: Certification;
  index: number;
}
