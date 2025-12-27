import { ProfileTab } from "@/types";
import {
  faCube,
  faFileLines,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

export const PROFILE_TABS: ProfileTab[] = [
  {
    label: "App",
    icon: faCube,
    value: "app",
  },
  {
    label: "Messages",
    icon: faFileLines,
    value: "messages",
  },
  {
    label: "Settings",
    icon: faWrench,
    value: "settings",
  },
];
