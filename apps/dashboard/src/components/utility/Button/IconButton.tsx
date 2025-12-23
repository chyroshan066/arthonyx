import { ClassName, Icon, Label } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconButtonProps extends ClassName, Icon, Label {
  paddingSize?: number;
  textSize?: "xs" | "sm";
  iconClassName?: string;
  backgroundColor?: string;
  textColor?: string;
}

export const IconButton = ({
  paddingSize = 4,
  className,
  textSize = "xs",
  icon,
  label,
  iconClassName,
  backgroundColor = "transparent",
  textColor = "text-slate-700",
}: IconButtonProps) => (
  <button
    className={`inline-block px-${paddingSize} py-3 mb-0 font-bold leading-normal text-center uppercase align-middle transition-all bg-${backgroundColor} border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-${textSize} active:opacity-85 hover:scale-102 bg-x-25 ${textColor} ${className}`}
  >
    <FontAwesomeIcon
      icon={icon}
      className={`mr-1 ${iconClassName} ${textColor}`}
    />{" "}
    {label}
  </button>
);
