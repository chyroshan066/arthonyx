import { IsProfile } from "@/types";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const SignInLink = ({ isProfile }: IsProfile) => (
  <li className="flex items-center">
    <Link
      href="/login"
      className={`block px-0 py-2 text-sm font-semibold transition-all ${
        isProfile
          ? "text-white ease-soft-in-out"
          : "text-slate-500 ease-nav-brand"
      }`}
    >
      <FontAwesomeIcon icon={faUser} className="sm:mr-1" />
      <span className="hidden sm:inline">Sign In</span>
    </Link>
  </li>
);
