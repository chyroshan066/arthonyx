import { Separator } from "@/components/ui/Separator";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

interface SideNavHeaderProps {
  isOpen: boolean;
  close: () => void;
}

export const SideNavHeader = ({ isOpen, close }: SideNavHeaderProps) => (
  <div className="sticky top-0 z-20 max-xl:bg-white min-[1200px]:bg-gray-50">
    <div className="h-19.5 px-6 py-6">
      <FontAwesomeIcon
        icon={faTimes}
        className={`absolute top-0 right-0 p-4 opacity-50 cursor-pointer text-slate-400 xl:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={close}
      />
      <Link
        className="block m-0 text-sm whitespace-nowrap text-slate-700"
        href="/"
        target="_blank"
      >
        <Image
          src="/images/logo-ct.png"
          width={32}
          height={32}
          className="inline h-full max-w-full transition-all duration-200 ease-nav-brand max-h-8"
          alt="main_logo"
          priority
        />
        <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">
          Soft UI Dashboard
        </span>
      </Link>
    </div>

    <Separator className="mt-0" />
  </div>
);
