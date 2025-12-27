import { Children, ClassName } from "@/types";

interface TDataProps extends Children, ClassName {
  isLastRow: boolean;
}

interface TableProps extends Children, ClassName {}

export const Table = ({ children, className }: TableProps) => (
  <table
    className={`items-center w-full mb-0 align-top border-gray-200 text-slate-500 ${className}`}
  >
    {children}
  </table>
);

export const TData = ({ children, className, isLastRow }: TDataProps) => (
  <td
    className={`p-2 align-middle bg-transparent ${
      !isLastRow ? "border-b" : "border-b-0"
    } whitespace-nowrap ${className}`}
  >
    {children}
  </td>
);
