import { AriaLabel } from "@/types";

interface InputProps extends AriaLabel {
  type?: string;
  placeholder: string;
}

export const Input = ({
  type = "text",
  placeholder,
  ariaLabel,
}: InputProps) => (
  <input
    type={type}
    className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-400 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow focus-visible:ring-2 focus-visible:ring-fuchsia-400/50 focus-visible:ring-offset-2"
    placeholder={placeholder}
    aria-label={ariaLabel}
    aria-describedby={`${ariaLabel}-addon`}
  />
);
