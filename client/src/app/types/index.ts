import { ReactNode, MouseEvent } from "react";


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

export interface Info {
  name: string;
  value: string;
}

export interface Profile {
  fullName: string;
  email: string;
  job: string;
  photo: Image;
  links: Link[];
  infos: Info[];
  url_cv: string;
  link_qr: string;
  _createdAt: string;
  _updatedAt: string;
}

export interface About {
  about: string;
  _createdAt: string;
  _updatedAt: string;
}

export interface Service {
  title: string;
  description: string;
  photo: Image;
  _createdAt: string;
  _updatedAt: string;
}

export type Services = Service[];

export interface Skill {
  name: string;
  color: string;
  photo: Image;
  _createdAt: string;
  _updatedAt: string;
}

export type Skills = Skill[];


export interface Work {
  company: string;
  position: string;
  dates: string;
  description: string;
  location: string;
}

export interface Working {
  title: string;
  work: Work[];
  _createdAt: string;
  _updatedAt: string;
}

export interface Education {
  institution: string;
  degree: string;
  dates: string;
  description: string;
  location: string;
}

export interface Educations {
  title: string;
  education: Education[];
  _createdAt: string;
  _updatedAt: string;
}

export interface Client {
  name: string;
  logo: Image;
  description: string;
  _createdAt: string;
  _updatedAt: string;
}

export type Clients = Client[];

export interface Project {
  _id: string;
  title: string;
  category: string;
  type: string;
  photo: Image[];
  description: string;
  client: string;
  stack: string;
  github: string;
  link: string;
  _createdAt: string;
  _updatedAt: string;
}

export type Projects = Project[];

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

export interface Contact {
  YOUR_SERVICE_ID: string;
  YOUR_PUBLIC_KEY: string;
  YOUR_TEMPLATE_ID: string;
}
export interface SocialProps {
  facebook?: string;
  instagram?: string;
  dev?: string;
  twitter?: string;
}
