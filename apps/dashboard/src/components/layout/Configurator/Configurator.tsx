"use client";

import { Separator } from "../../ui/Separator";
import { useEffect, useRef } from "react";
import { Button } from "../../ui/Button";
import { ConfiguratorPanelHeader } from "./ConfiguratorPanelHeader";
import { SidenavTypeSelector } from "./SidenavTypeSelector";
import { NavbarFixedToggle } from "./NavbarFixedToggle";
import { SocialShareSection } from "./SocialShareSection";
import { useLayoutConfig } from "@/hooks/useLayoutConfig";

export const Configurator = () => {
  const { isConfiguratorOpen, toggleConfigurator } = useLayoutConfig();
  const contentRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isConfiguratorOpen &&
        contentRef.current &&
        !contentRef.current.contains(event.target as Node)
      ) {
        toggleConfigurator();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isConfiguratorOpen]);

  return (
    <div className="fixed-plugin">
      <div
        ref={contentRef}
        className={`z-sticky shadow-soft-3xl w-90 ease-soft fixed top-0 left-auto flex h-full min-w-0 flex-col break-words rounded-none border-0 bg-white bg-clip-border px-2.5 duration-200 ${
          isConfiguratorOpen ? "right-0" : "-right-90"
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
          <SocialShareSection />
        </div>
      </div>
    </div>
  );
};
