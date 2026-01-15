import { IsProfile } from "@/types";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const SignInLink = ({ isProfile }: IsProfile) => (
  <li className="flex items-center">
    <Link
      href="/login"
      className={`block px-1 py-2 text-sm font-semibold transition-all rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-primary-ring/50 focus-visible:ring-offset-2 ${
        isProfile
          ? "text-surface ease-soft-in-out focus-visible:ring-offset-transparent"
          : "text-muted ease-nav-brand focus-visible:ring-offset-surface"
      }`}
    >
      <FontAwesomeIcon icon={faUser} className="sm:mr-1" />
      <span className="hidden sm:inline">Sign In</span>
    </Link>
  </li>
);
