"use client";

import { useScrollbar } from "@/hooks/useScrollbar";
import { useEffect } from "react";
import "perfect-scrollbar/css/perfect-scrollbar.css";

interface ScrollAreaProps {
  children: React.ReactNode;
  className?: string;
  options?: Partial<{
    wheelSpeed?: number;
    wheelPropagation?: boolean;
    swipeEasing?: boolean;
    minScrollbarLength?: number;
    maxScrollbarLength?: number;
    scrollingThreshold?: number;
    useBothWheelAxes?: boolean;
    suppressScrollX?: boolean;
    suppressScrollY?: boolean;
    scrollXMarginOffset?: number;
    scrollYMarginOffset?: number;
  }>;
  style?: React.CSSProperties;
}

export const ScrollArea = ({
  children,
  className = "",
  options = {},
  style = {},
}: ScrollAreaProps) => {
  const { containerRef, updateScrollbar } = useScrollbar(options);

  useEffect(() => {
    updateScrollbar();
  }, [children, updateScrollbar]);

  return (
    <div
      ref={containerRef}
      className={`perfect-scrollbar-container ${className}`}
      style={{ position: "relative", ...style }}
    >
      {children}
    </div>
  );
};
