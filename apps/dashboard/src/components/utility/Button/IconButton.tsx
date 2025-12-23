import { ClassName, Icon, Label } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconButtonProps extends ClassName, Icon, Label {
  paddingSize: number;
  textSize: string;
  iconClassName?: string;
}

export const IconButton = ({
  paddingSize,
  className,
  textSize,
  icon,
  label,
  iconClassName,
}: IconButtonProps) => (
  <button
    className={`inline-block px-${paddingSize} py-3 mb-0 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-${textSize} active:opacity-85 hover:scale-102 bg-x-25 text-slate-700 ${className}`}
  >
    <FontAwesomeIcon icon={icon} className={`mr-1 ${iconClassName}`} /> {label}
  </button>
);
