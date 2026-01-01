import {
  BackgroundColor,
  ClassName,
  FocusRingColor,
  IconClass,
  Label,
  PaddingSize,
} from "@/types";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconButtonProps
  extends ClassName,
    Label,
    PaddingSize,
    BackgroundColor,
    IconClass,
    FocusRingColor {
  icon?: IconDefinition;
  textSize?: "xs" | "sm";
  textColor?: string;
  leading?: string;
}

export const IconButton = ({
  paddingSize = 4,
  className,
  textSize = "xs",
  icon,
  label,
  iconClass,
  backgroundColor = "transparent",
  textColor = "text-slate-700",
  leading = "normal",
  focusRingColor = "slate-300",
}: IconButtonProps) => (
  <button
    className={`inline-block px-${paddingSize} py-3 mb-0 font-bold leading-${leading} text-center uppercase align-middle transition-all bg-${backgroundColor} border-0 rounded-lg shadow-none cursor-pointer ease-soft-in text-${textSize} active:opacity-85 hover:scale-102 focus-visible:ring-2 focus-visible:ring-${focusRingColor} focus-visible:ring-offset-2 focus-visible:scale-102 outline-none ${textColor} ${className}`}
  >
    {icon && (
      <FontAwesomeIcon
        icon={icon}
        className={`mr-1 ${iconClass} ${textColor}`}
      />
    )}{" "}
    {label}
  </button>
);
