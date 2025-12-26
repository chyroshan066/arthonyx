"use client";

import { ACCOUNT_PAGES, NAVLINKS } from "@/lib/constants";
import { faCog, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";
import { Breadcrumb } from "./Breadcrumb";
import { SearchBar } from "./SearchBar";
import { NotificationDropdown } from "./NotificationDropdown";
import { MobileMenuToggle } from "./MobileMenuToggle";
import { SignInLink } from "./SignInLink";

const MERGED_LINKS = [...NAVLINKS, ...ACCOUNT_PAGES];

export const NavBar = memo(() => {
  const pathname = usePathname();

  // Handle sidenav burger click
  const handleSidenavToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.dispatchEvent(new Event("toggle-sidenav"));
  };

  const activePage = MERGED_LINKS.find((link) => link.href === pathname);
  const pageName = activePage ? activePage.name : "Dashboard";
  const isProfile = pathname === "/profile";

  return (
    <nav
      className={`flex flex-wrap items-center justify-between py-2 transition-all shadow-none duration-250 ease-soft-in lg:flex-nowrap lg:justify-start ${
        isProfile
          ? "absolute z-20 px-6 text-white w-full"
          : "relative px-0 mx-6 rounded-2xl"
      }`}
    >
      <div
        className={`flex items-center justify-between w-full py-1 mx-auto flex-wrap-inherit ${
          isProfile ? "px-6" : "px-4"
        }`}
      >
        <Breadcrumb pageName={pageName} isProfile={isProfile} />

        <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
          <SearchBar />
          <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
            <SignInLink isProfile={isProfile} />
            <MobileMenuToggle
              isProfile={isProfile}
              onToggle={handleSidenavToggle}
            />
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

            <NotificationDropdown isProfile={isProfile} />
          </ul>
        </div>
      </div>
    </nav>
  );
});

NavBar.displayName = "NavBar";
