import { Children, ClassName } from "@/types";

interface TableProps extends Children, ClassName {}

export const Table = ({ children, className }: TableProps) => (
  <table
    className={`items-center w-full mb-0 align-top border-gray-200 text-slate-500 ${className}`}
  >
    {children}
  </table>
);
