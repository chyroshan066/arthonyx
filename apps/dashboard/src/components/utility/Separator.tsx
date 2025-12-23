import { ClassName } from "@/types";

export const Separator = ({ className }: ClassName) => (
  <hr
    className={`h-px ${className} bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent`}
  />
);
