"use client";

import { faGem, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { memo, useEffect } from "react";
import { PerfectScrollbarComponent } from "./utility/PerfectScrollbarComponent";
import { usePathname } from "next/navigation";
import { ACCOUNT_PAGES, NAVLINKS } from "@/constants";
import { useDisclosure } from "@/hooks/useDisclosure";
import { Separator } from "./utility/Separator";

export const SideNav = memo(() => {
  const { isOpen, toggle, close, contentRef } = useDisclosure(false);
  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("toggle-sidenav", toggle);
    return () => window.removeEventListener("toggle-sidenav", toggle);
  }, [toggle]);

  return (
    <aside
      ref={contentRef as React.RefObject<HTMLElement>}
      className={`max-w-62.5 ease-nav-brand z-990 fixed inset-y-0 my-4 ml-4 block w-full flex-wrap items-center justify-between rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent ${
        isOpen ? "translate-x-0 shadow-soft-xl" : "-translate-x-full"
      }`}
    >
      <PerfectScrollbarComponent
        className="h-full w-full relative flex flex-col overflow-hidden rounded-2xl z-40"
        options={{
          wheelSpeed: 0.5,
          wheelPropagation: false,
          minScrollbarLength: 20,
          suppressScrollX: true,

          maxScrollbarLength: 50,
        }}
      >
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

        {/* SCROLLABLE LIST - This section is the primary scrollable content */}
        <ul className="flex flex-col pl-0 mb-auto pb-4">
          {NAVLINKS.map((link, index) => {
            const isActive = pathname === link.href;

            return (
              <li key={index} className="mt-0.5 w-full">
                <Link
                  className={`py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors ${
                    isActive &&
                    "shadow-soft-xl rounded-lg bg-white font-semibold text-slate-700"
                  }`}
                  href={link.href}
                >
                  <div
                    className={`shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5 ${
                      isActive && "bg-gradient-soft-purple700-pink500"
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={link.icon}
                      className={isActive ? "text-white" : ""}
                    />
                  </div>
                  <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                    {link.name}
                  </span>
                </Link>
              </li>
            );
          })}

          <li className="w-full mt-4">
            <h6 className="pl-6 ml-2 text-xs font-bold leading-tight uppercase opacity-60">
              Account pages
            </h6>
          </li>

          {ACCOUNT_PAGES.map((page, index) => (
            <li key={index} className="mt-0.5 w-full">
              <Link
                className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors"
                href={page.href}
              >
                <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                  <FontAwesomeIcon icon={page.icon} />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                  {page.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="sticky bottom-0 z-20 bg-gray-50">
          <div className="mx-4 pb-4">
            <div
              className="after:opacity-65 after:bg-gradient-soft-slate600-slate300 relative flex min-w-0 flex-col items-center break-words rounded-2xl border-0 border-solid border-blue-900 bg-white bg-clip-border shadow-none after:absolute after:top-0 after:bottom-0 after:left-0 after:z-10 after:block after:h-full after:w-full after:rounded-2xl after:content-['']"
              sidenav-card="true"
            >
              <div className="mb-7.5 absolute h-full w-full rounded-2xl bg-cover bg-center" />
              <div className="relative z-20 flex-auto w-full p-4 text-left text-white">
                <div className="flex items-center justify-center w-8 h-8 mb-4 text-center bg-white bg-center rounded-lg shadow-soft-2xl">
                  <FontAwesomeIcon
                    icon={faGem}
                    className="text-xl leading-none text-slate-600"
                  />
                </div>
                <div className="transition-all duration-200 ease-nav-brand">
                  <h6 className="mb-0 text-white">Need help?</h6>
                  <p className="mt-0 mb-4 text-xs font-semibold leading-tight">
                    Please check our docs
                  </p>
                  <a
                    href="#"
                    target="_blank"
                    className="inline-block w-full px-8 py-2 mb-0 text-xs font-bold text-center text-black uppercase transition-all ease-in bg-white border-0 border-white rounded-lg shadow-soft-md bg-150 leading-pro hover:shadow-soft-2xl hover:scale-102"
                  >
                    Documentation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PerfectScrollbarComponent>
    </aside>
  );
});

SideNav.displayName = "SideNav";
