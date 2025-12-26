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
            <li className="flex items-center">
              <Link
                href="./pages/sign-in.html"
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
            <li className="flex items-center pl-4 xl:hidden">
              <button
                onClick={handleSidenavToggle}
                className={`block p-0 text-sm transition-all ${
                  isProfile
                    ? "ease-soft-in-out text-white"
                    : "ease-nav-brand text-slate-500 bg-transparent border-0 cursor-pointer"
                }`}
                data-sidenav-trigger
                type="button"
              >
                <div className="w-4.5 overflow-hidden">
                  {[...Array(3)].map((_, index) => (
                    // _ tells the computer: "Ignore the value, I only care about the second argument (the number)"
                    <i
                      key={index}
                      className={`ease-soft relative block h-0.5 rounded-sm transition-all ${
                        index !== 2 && "mb-0.75"
                      } ${isProfile ? "bg-white" : "bg-slate-500"}`}
                    />
                  ))}
                </div>
              </button>
            </li>
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
