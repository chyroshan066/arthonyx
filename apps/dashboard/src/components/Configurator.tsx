"use client";

import { faClose, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Separator } from "./ui/Separator";
import {
  faFacebookSquare,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useRef } from "react";
import {
  setFixedNavbar,
  setSidebarColor,
  setSidenavType,
  toggleConfigurator,
} from "@/redux/slices/configuratorSlice";

const SIDEBAR_COLORS = [
  { name: "purple", background: "bg-gradient-soft-purple700-pink500" },
  { name: "gray", background: "bg-gradient-soft-gray900-slate800" },
  { name: "blue", background: "bg-gradient-soft-blue600-cyan400" },
  { name: "green", background: "bg-gradient-soft-green600-lime400" },
  { name: "orange", background: "bg-gradient-soft-red500-yellow400" },
  { name: "red", background: "bg-gradient-soft-red600-rose400" },
] as const;

export const Configurator = () => {
  const dispatch = useAppDispatch();
  const { isOpen, fixedNavbar, sidenavType, sidebarColor } = useAppSelector(
    (state) => state.configurator
  );
  const contentRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        dispatch(toggleConfigurator());
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, dispatch]);

  return (
    <div fixed-plugin={isOpen.toString()} className="fixed-plugin">
      <a
        fixed-plugin-button={isOpen.toString()}
        className="bottom-7.5 right-7.5 text-xl z-990 shadow-soft-lg rounded-circle fixed cursor-pointer bg-white px-4 py-2 text-slate-700"
        onClick={() => dispatch(toggleConfigurator())}
      >
        <FontAwesomeIcon icon={faCog} className="py-2 pointer-events-none" />
      </a>
      <div
        ref={contentRef}
        className={`z-sticky shadow-soft-3xl w-90 ease-soft fixed top-0 left-auto flex h-full min-w-0 flex-col break-words rounded-none border-0 bg-white bg-clip-border px-2.5 duration-200 ${
          isOpen ? "right-0" : "-right-90"
        }`}
      >
        <div className="px-6 pt-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
          <div className="float-left">
            <h5 className="mt-4 mb-0">Soft UI Configurator</h5>
            <p>See our dashboard options.</p>
          </div>
          <div className="float-right mt-6">
            <button
              onClick={() => dispatch(toggleConfigurator())}
              className="inline-block p-0 mb-4 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 active:opacity-85 text-slate-700"
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
        </div>
        <Separator className="mx-0 my-1" />
        <div className="flex-auto p-6 pt-0 sm:pt-4">
          <h6 className="mb-0">Sidebar Colors</h6>
          <div className="my-2 text-left">
            {SIDEBAR_COLORS.map((color) => (
              <span
                key={color.name}
                className={`text-xs rounded-circle h-5.75 mr-1.25 w-5.75 ease-soft-in-out ${
                  color.background
                } relative inline-block cursor-pointer whitespace-nowrap border border-solid text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700 ${
                  sidebarColor === color.name
                    ? "border-slate-700"
                    : "border-white"
                }`}
                onClick={() => dispatch(setSidebarColor(color.name as any))}
              ></span>
            ))}
          </div>
          <div className="mt-4">
            <h6 className="mb-0">Sidenav Type</h6>
            <p className="leading-normal text-sm">
              Choose between 2 different sidenav types.
            </p>
          </div>
          <div className="flex">
            {/* <button
              transparent-style-btn
              className="inline-block w-full px-4 py-3 mb-2 font-bold text-center text-white uppercase align-middle transition-all border border-transparent border-solid rounded-lg cursor-pointer xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:bg-gradient-to-tl xl-max:from-purple-700 xl-max:to-pink-500 xl-max:text-white xl-max:border-0 hover:scale-102 hover:shadow-soft-xs active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-purple-700 to-pink-500 bg-fuchsia-500 hover:border-fuchsia-500"
              data-className="bg-transparent"
              active-style
            >
              Transparent
            </button> */}
            <button
              onClick={() => dispatch(setSidenavType("transparent"))}
              className={`inline-block w-full px-4 py-3 mb-2 font-bold text-center uppercase align-middle transition-all border border-solid rounded-lg cursor-pointer hover:scale-102 hover:shadow-soft-xs active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 xl-max:opacity-65 ${
                sidenavType === "transparent"
                  ? "bg-gradient-soft-purple700-pink500 text-white border-transparent"
                  : "bg-transparent border-fuchsia-500 text-fuchsia-500 bg-none hover:border-fuchsia-500"
              }`}
              // className={`inline-block w-full px-4 py-3 mb-2 font-bold text-center uppercase align-middle transition-all border border-solid rounded-lg cursor-pointer hover:scale-102 hover:shadow-soft-xs active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:bg-gradient-soft-purple700-pink500 xl-max:text-white xl-max:border-0 ${
              //   sidenavType === "transparent"
              //     ? "bg-gradient-soft-purple700-pink500 text-white border-transparent"
              //     : "bg-transparent border-fuchsia-500 text-fuchsia-500 bg-none hover:border-fuchsia-500"
              // }`}
            >
              Transparent
            </button>
            <button
              onClick={() => dispatch(setSidenavType("white"))}
              className={`inline-block w-full px-4 py-3 mb-2 ml-2 font-bold text-center uppercase align-middle transition-all border border-solid rounded-lg cursor-pointer hover:scale-102 hover:shadow-soft-xs active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 ${
                sidenavType === "white"
                  ? "bg-gradient-soft-purple700-pink500 bg-fuchsia-500 text-white border-transparent"
                  : "bg-transparent border-fuchsia-500 text-fuchsia-500 bg-none hover:border-fuchsia-500"
              }`}
              // className={`inline-block w-full px-4 py-3 mb-2 ml-2 font-bold text-center uppercase align-middle transition-all border border-solid rounded-lg cursor-pointer hover:scale-102 hover:shadow-soft-xs active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:bg-gradient-soft-purple700-pink500 xl-max:text-white xl-max:border-0 ${
              //   sidenavType === "white"
              //     ? "bg-gradient-soft-purple700-pink500 bg-fuchsia-500 text-white border-transparent"
              //     : "bg-transparent border-fuchsia-500 text-fuchsia-500 bg-none hover:border-fuchsia-500"
              // }`}
            >
              White
            </button>
          </div>
          <p className="block mt-2 leading-normal text-sm xl:hidden">
            You can change the sidenav type just on desktop view.
          </p>
          <div className="mt-4">
            <h6 className="mb-0">Navbar Fixed</h6>
          </div>
          <div className="min-h-6 mb-0.5 block pl-0">
            <input
              className="rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
              type="checkbox"
              checked={fixedNavbar}
              onChange={(e) => dispatch(setFixedNavbar(e.target.checked))}
            />
          </div>
          <Separator className="sm:my-6" />

          <a
            className="inline-block w-full px-6 py-3 mb-4 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer active:shadow-soft-xs hover:scale-102 active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 border-slate-700 text-slate-700 hover:bg-transparent hover:text-slate-700 hover:shadow-none active:bg-slate-700 active:text-white active:hover:bg-transparent active:hover:text-slate-700 active:hover:shadow-none"
            href="#"
            target="_blank"
          >
            View documentation
          </a>
          <div className="w-full text-center">
            <a
              className="github-button"
              href="#"
              data-icon="octicon-star"
              data-size="large"
              data-show-count="true"
              aria-label="Star creativetimofficial/soft-ui-dashboard on GitHub"
            >
              Star
            </a>
            <h6 className="mt-4">Thank you for sharing!</h6>
            <a
              href="#"
              className="inline-block px-6 py-3 mb-0 mr-2 font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:shadow-soft-xs hover:scale-102 active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 me-2 border-slate-700 bg-slate-700"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} className="mr-1" /> Tweet
            </a>
            <a
              href="#"
              className="inline-block px-6 py-3 mb-0 mr-2 font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:shadow-soft-xs hover:scale-102 active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 me-2 border-slate-700 bg-slate-700"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebookSquare} className="mr-1" /> Share
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
