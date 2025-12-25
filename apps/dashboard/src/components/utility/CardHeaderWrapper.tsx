import { BackgroundColor, Children, ClassName, PaddingSize } from "@/types";

interface CardHeaderWrapperProps
  extends Children,
    ClassName,
    PaddingSize,
    BackgroundColor {}

export const CardHeaderWrapper = ({
  children,
  className,
  paddingSize = 6,
  backgroundColor = "white",
}: CardHeaderWrapperProps) => (
  <div
    className={`mb-0 rounded-t-2xl border-b-0 bg-${backgroundColor} p-${paddingSize} pb-0 ${className}`}
  >
    {children}
  </div>
);
