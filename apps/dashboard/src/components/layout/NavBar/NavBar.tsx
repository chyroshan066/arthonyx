"use client";

import { ACCOUNT_PAGES, NAVLINKS, NOTIFICATIONS } from "@/lib/constants";
import { useDisclosure } from "@/hooks/useDisclosure";
import { Notification } from "@/types";
import {
  faBell,
  faClock,
  faCog,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";
import { Breadcrumb } from "./Breadcrumb";

const MERGED_LINKS = [...NAVLINKS, ...ACCOUNT_PAGES];

export const NavBar = memo(() => {
  const pathname = usePathname();
  const {
    isOpen: isDropdownOpen,
    toggle: toggleDropdown,
    contentRef: dropdownRef,
    triggerRef,
  } = useDisclosure();

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
          <div className="flex items-center md:ml-auto md:pr-4">
            <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
              <span className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <input
                type="text"
                className="pl-8.75 text-sm focus:shadow-soft-primary-outline ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                placeholder="Type here..."
              />
            </div>
          </div>
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

            <li className="relative flex items-center pr-2">
              <p className="hidden transform-dropdown-show" />
              <button
                ref={triggerRef as React.RefObject<HTMLButtonElement>}
                onClick={toggleDropdown}
                className={`block p-0 text-sm transition-all ease-nav-brand ${
                  isProfile
                    ? "text-white"
                    : "text-slate-500 bg-transparent border-0 cursor-pointer"
                }`}
                data-dropdown-trigger
                aria-expanded={isDropdownOpen}
                type="button"
              >
                <FontAwesomeIcon icon={faBell} className="cursor-pointer" />
              </button>

              <ul
                ref={dropdownRef as React.RefObject<HTMLUListElement>}
                data-dropdown-menu
                className={`text-sm transform-dropdown before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-soft-3xl duration-250 min-w-44 before:sm:right-7.5 before:text-5.5 absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 transition-all before:absolute before:right-2 before:left-auto before:top-0 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-['\f0d8'] sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer ${
                  isDropdownOpen
                    ? "opacity-100 transform-dropdown-show"
                    : "opacity-0 pointer-events-none before:-top-5 transform-dropdown"
                }`}
              >
                {NOTIFICATIONS.map((notif: Notification) => (
                  <li key={notif.id} className="relative mb-2 last:mb-0">
                    <Link
                      className={`ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg ${
                        notif.type === "image" && "bg-transparent"
                      } px-4 duration-300 ${
                        !isProfile && "hover:bg-gray-200 hover:text-slate-700"
                      } lg:transition-colors`}
                      href={notif.href}
                    >
                      <div className="flex py-1">
                        {notif.type !== "icon" ? (
                          <div className="my-auto">
                            <Image
                              src={notif.asset}
                              width={36}
                              height={36}
                              alt="Notification 1"
                              className={`inline-flex items-center justify-center mr-4 text-sm text-white h-9 w-9 max-w-none rounded-xl ${
                                notif.type === "logo" &&
                                "bg-gradient-soft-gray900-slate800"
                              }`}
                            />
                          </div>
                        ) : (
                          <div
                            className={`inline-flex items-center justify-center my-auto mr-4 text-sm text-white transition-all duration-200 bg-gradient-soft-slate600-slate300 h-9 w-9 rounded-xl ${
                              isProfile ? "ease-soft-in-out" : "ease-nav-brand"
                            }`}
                          >
                            <FontAwesomeIcon icon={notif.asset} />
                          </div>
                        )}
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-1 text-sm font-normal leading-normal">
                            <span className="font-semibold">{notif.title}</span>{" "}
                            {notif.message}
                          </h6>
                          <p className="mb-0 text-xs leading-tight text-slate-400">
                            <FontAwesomeIcon icon={faClock} className="mr-1" />
                            {notif.time}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
});

NavBar.displayName = "NavBar";
