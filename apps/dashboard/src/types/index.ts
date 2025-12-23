import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface Children {
  children: React.ReactNode;
}

export interface ClassName {
  className?: string;
}

export interface Title {
  title?: string;
}

export interface Message {
  message?: string;
}

export interface IsVisible {
  isVisible: boolean;
}

export interface AlertState extends Title, Message, IsVisible {
  type: "success" | "error";
}

export interface Name {
  name: string;
}

export interface Description {
  description: string;
}

export interface Email {
  email: string;
}

interface Id {
  id: number;
}

interface Text {
  text: string;
}

interface Logo {
  logo: string;
}

interface Alt {
  alt: string;
}

export interface Img {
  img: string;
}

interface Href {
  href: string;
}

interface Icon {
  icon: IconDefinition;
}

interface Completion {
  completion: number;
}

export interface Time {
  time: string;
}

export interface Color {
  color?: string;
}

export interface NavLink extends Name, Href {}

export interface Stat extends Id, Title, Color, Icon {
  value: string;
  change: string;
}

interface BaseNotification extends Id, Href, Title, Message, Time {}

interface ImageNotification extends BaseNotification {
  type: "image" | "logo";
  asset: string;
}

interface IconNotification extends BaseNotification {
  type: "icon";
  asset: IconDefinition;
}

export type Notification = ImageNotification | IconNotification;
export interface BaseLink extends Id, Name, Href {}
export interface Link extends BaseLink, Icon {}

export interface ChartMetic extends Id, Icon, Color, Completion {
  label: string;
  value: string;
  width: string;
}

export interface TableHeader extends Id, ClassName {
  header: string;
  textAlign?: string;
}

export interface ProjectData extends Id, Completion, Name, Logo {
  members: {
    id: number;
    name: string;
    img: string;
  }[];
  budget: string;
}

export interface TimelineData extends Id, Title, Icon {
  date: string;
  iconColor: string;
}

export interface AuthorData extends Id {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  function: {
    role: string;
    department: string;
  };
  status: string;
  employedDate: string;
}

export interface PaymentStat extends Id, Title, Description, Icon, ClassName {
  amount: string;
}

export interface PaymentMethod extends Id, Logo, Alt, ClassName {
  cardNumber: string;
}

// interface Size used once in NucleoIcon
// interface isLastRow used once in Table
// interface SubTitle used once in Tale
