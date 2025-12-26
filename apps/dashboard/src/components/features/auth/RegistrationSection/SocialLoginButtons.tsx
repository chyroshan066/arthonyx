import { Children, ClassName } from "@/types";
import Link from "next/link";

interface SocialLoginButtonProps extends Children, ClassName {}

export const SocialLoginButtons = ({
  children,
  className,
}: SocialLoginButtonProps) => (
  <div className={`w-3/12 max-w-full px-1 flex-0 ${className}`}>
    <Link
      className="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75"
      href="#"
    >
      {children}
    </Link>
  </div>
);
