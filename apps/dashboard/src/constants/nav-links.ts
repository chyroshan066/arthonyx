import { Link } from "@/types";
import {
  faCity,
  faCreditCard,
  faShop,
} from "@fortawesome/free-solid-svg-icons";

export const NAVLINKS: Link[] = [
  {
    id: 1,
    name: "Dashboard",
    href: "/dashboard",
    icon: faShop,
  },
  {
    id: 2,
    name: "Tables",
    href: "/tables",
    icon: faCity,
  },
  {
    id: 3,
    name: "Billing",
    href: "/billing",
    icon: faCreditCard,
  },
];
