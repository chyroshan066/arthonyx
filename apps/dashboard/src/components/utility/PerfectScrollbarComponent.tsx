'use client';

import { memo, useEffect, useRef } from 'react';
// Import the base PerfectScrollbar type (which we'll partially override)
import type PerfectScrollbar from 'perfect-scrollbar';
// Import the value/constructor
import PerfectScrollbarLib from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

interface PerfectScrollbarComponentProps {
  children: React.ReactNode;
  className?: string;
  options?: Partial<{
    handlers?: string[];
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

// 1. Define the correct Instance Type by intersecting the base type with a fix
// We use Omit/Pick or interface merging techniques to correct the destroy signature.
// Here we use Omit to remove the existing destroy, and add a new one without arguments.
type PerfectScrollbarInstance = Omit<PerfectScrollbar, 'destroy'> & {
  destroy: () => void; // CORRECTED: destroy takes no arguments at runtime
  // Ensure the update method is also included, though it's likely fine
  update: () => void;
};


// 2. The Constructor Interface remains correct from the previous fix
interface PerfectScrollbarConstructor {
  new(
    element: HTMLElement,
    options?: PerfectScrollbarComponentProps['options']
  ): PerfectScrollbarInstance; // Use the corrected instance type here
}


export const PerfectScrollbarComponent = memo(({
  children,
  className = '',
  options = {},
  style = {}
}: PerfectScrollbarComponentProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Use the corrected instance type
  const psRef = useRef<PerfectScrollbarInstance | null>(null);

  useEffect(() => {
    if (containerRef.current) {

      // Cast the imported value to the explicit constructor interface
      const PsConstructor = PerfectScrollbarLib as unknown as PerfectScrollbarConstructor;

      // Initialize Perfect Scrollbar 
      psRef.current = new PsConstructor(containerRef.current, {
        wheelSpeed: 2,
        wheelPropagation: false,
        minScrollbarLength: 20,
        ...options
      });

      // Cleanup on unmount
      return () => {
        if (psRef.current) {
          // 3. The error is fixed here! TypeScript now knows destroy() takes no args.
          psRef.current.destroy();
          psRef.current = null;
        }
      };
    }
  }, [options]);

  // Update scrollbar when children change
  useEffect(() => {
    if (psRef.current) {
      psRef.current.update();
    }
  }, [children]);

  return (
    <div
      ref={containerRef}
      className={`perfect-scrollbar-container ${className}`}
      style={{ position: 'relative', ...style }}
    >
      {children}
    </div>
  );
});

PerfectScrollbarComponent.displayName = "PerfectScrollbarComponent";