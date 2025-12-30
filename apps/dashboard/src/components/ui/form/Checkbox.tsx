import { DefaultChecked } from "@/types";
import { ChangeEvent } from "react";

interface CheckboxProps extends DefaultChecked {
  id: string;
  marginTop?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({
  id,
  defaultChecked,
  marginTop = "0.54",
  onChange,
}: CheckboxProps) => (
  <input
    id={id}
    className={`mt-${marginTop} peer appearance-none cursor-pointer transition-all duration-250 ease-soft-in-out w-10 h-5 rounded-10 bg-slate-800/10 relative border border-gray-200 border-solid bg-none bg-contain bg-left ml-auto bg-no-repeat align-top after:content-[''] after:absolute after:top-px after:left-px after:bg-white after:rounded-circle after:shadow-soft-2xl after:duration-250 after:h-4 after:w-4 checked:bg-slate-800/95 checked:border-slate-800/95 checked:after:translate-x-[20px] shrink-0`}
    type="checkbox"
    defaultChecked={defaultChecked}
    onChange={onChange}
  />
);
