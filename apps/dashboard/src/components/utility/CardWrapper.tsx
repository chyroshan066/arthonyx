import { Children } from "@/types";

interface CardWrapperProps extends Children {
  outerDivClassName: string;
  innerDivClassName?: string;
}

export const CardWrapper = ({
  children,
  outerDivClassName,
  innerDivClassName,
}: CardWrapperProps) => (
  <div className={`w-full max-w-full px-3 ${outerDivClassName}`}>
    <div
      className={`relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-clip-border ${innerDivClassName}`}
    >
      {children}
    </div>
  </div>
);
