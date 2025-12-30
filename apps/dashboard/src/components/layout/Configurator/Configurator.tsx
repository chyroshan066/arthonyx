"use client";

import { Separator } from "../../ui/Separator";
import { useEffect, useRef } from "react";
import {
  selectIsConfiguratorOpen,
  toggleConfigurator,
} from "@/redux/features/configurator";
import { Button } from "../../ui/Button";
import { SOCIAL_SHARE_BUTTONS } from "@/lib/constants";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ConfiguratorPanelHeader } from "./ConfiguratorPanelHeader";
import { SidenavTypeSelector } from "./SidenavTypeSelector";
import { NavbarFixedToggle } from "./NavbarFixedToggle";

export const Configurator = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsConfiguratorOpen);
  const contentRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isOpen &&
        contentRef.current &&
        !contentRef.current.contains(event.target as Node)
      ) {
        dispatch(toggleConfigurator());
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, dispatch]);

  return (
    <div className="fixed-plugin">
      <div
        ref={contentRef}
        className={`z-sticky shadow-soft-3xl w-90 ease-soft fixed top-0 left-auto flex h-full min-w-0 flex-col break-words rounded-none border-0 bg-white bg-clip-border px-2.5 duration-200 ${
          isOpen ? "right-0" : "-right-90"
        }`}
      >
        <ConfiguratorPanelHeader />
        <Separator className="mx-0 my-1" />
        <div className="flex-auto p-6 pt-0 sm:pt-4">
          <SidenavTypeSelector />
          <NavbarFixedToggle />
          <Separator className="sm:my-6" />
          <Button
            variant="outline"
            className="w-full mb-4 active:shadow-soft-xs active:opacity-85 bg-150 bg-x-25 hover:bg-transparent hover:text-slate-700 hover:shadow-none active:bg-slate-700 active:text-white active:hover:bg-transparent active:hover:text-slate-700 active:hover:shadow-none"
            paddingX="6"
            paddingY="3"
            borderColor="slate-700"
            btnText="View documentation"
          />
          <div className="w-full text-center">
            <h6 className="mt-4">Thank you for sharing!</h6>
            {SOCIAL_SHARE_BUTTONS.map((btn) => (
              <Button
                key={btn.id}
                variant="gradient"
                className="mb-0 mr-2 border-0 me-2 border-slate-700"
                backgroundColor="bg-slate-700"
                icon={btn.icon}
                btnText={btn.btnText}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
