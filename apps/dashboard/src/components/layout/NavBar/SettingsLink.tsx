import { IsProfile } from "@/types";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const SettingsLink = ({ isProfile }: IsProfile) => (
  <li className="flex items-center px-4">
    <Link
      href="#"
      className={`p-0 text-sm transition-all ${
        isProfile
          ? "text-white ease-soft-in-out"
          : "text-slate-500 ease-nav-brand"
      }`}
    >
      <FontAwesomeIcon icon={faCog} className="cursor-pointer" />
    </Link>
  </li>
);
