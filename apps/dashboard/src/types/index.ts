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

export interface Id {
  id: number | string;
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

export interface Href {
  href: string;
}

export interface Icon {
  icon: IconDefinition;
}

interface Completion {
  completion: number;
}

interface Date {
  date: string;
}

interface Amount {
  amount: string;
}

interface Value {
  value: string;
}

interface Budget {
  budget: string;
}

export interface Participant extends Id, Name, Img {}

export interface Time {
  time: string;
}

export interface Color {
  color?: string;
}

export interface NavLink extends Name, Href {}

export interface Stat extends Id, Title, Color, Icon, Value {
  change: string;
}

export interface Label {
  label: string;
}

export interface PaddingSize {
  paddingSize?: number;
}

export interface BackgroundColor {
  backgroundColor?: string;
}

export interface DefaultChecked {
  defaultChecked: boolean;
}

export interface IconClass {
  iconClass?: string;
}

export interface IsProfile {
  isProfile: boolean;
}

export interface OnToggle {
  onToggle: (e: React.MouseEvent) => void;
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
export interface BaseLink extends Id, NavLink {}
export interface Link extends BaseLink, Icon {}

export interface ChartMetic extends SocialLink, Completion, Label {
  value: string;
  width: string;
}

export interface TableHeader extends Id, ClassName {
  header: string;
  textAlign?: string;
}

export interface ProjectData extends Id, Completion, Name, Logo, Budget {
  members: Participant[];
}

export interface TimelineData extends Id, Title, Icon, Date {
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

export interface PaymentStat
  extends Id,
    Title,
    Description,
    Icon,
    ClassName,
    Amount {}

export interface PaymentMethod extends Id, Logo, Alt, ClassName {
  cardNumber: string;
}

export interface Invoice extends Id, Date, Amount {}

export type TransactionType = "income" | "expense" | "pending";

export interface Transaction extends Invoice, Name {
  type: TransactionType;
}

export interface ProfileTab extends Label, Icon, Value {}

export interface Setting extends Label, DefaultChecked {
  id: string;
}

export interface ProfileDetail extends Id, Label, Value {}
export interface FooterSocialLink extends Id, Icon, Href {}
export interface SocialLink extends Id, Icon, Color {}
export interface Chat extends Id, Name, Message, Img {}

export interface Project extends Id, Img, Title, Description {
  category: string;
  participants: Participant[];
}

export interface ProjectData2 extends Id, Logo, Name, Budget, Completion {
  status: "working" | "done" | "canceled";
}

export interface BillingDetail extends Id, Name {
  details: {
    label: string;
    value: string;
  }[];
}

// interface Size used once in NucleoIcon
// interface isLastRow used once in Table
// interface SubTitle used once in Tale
// interface textSize used once in IconButton
// interface textColor used once in IconButton
// interface leading used once in IconButton
// interface btnText used once in Button
// interface containerClass used once in RegistrationFormCard
// interface isActive used once in NavItem
// interface isOpen used once in SideNavHeader
// interface close used once in SideNavHeader
// interface pageName used once in Breadcrumb
