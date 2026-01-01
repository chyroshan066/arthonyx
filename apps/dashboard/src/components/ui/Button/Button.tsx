import { BackgroundColor, BtnText, ClassName, FocusRingColor } from "@/types";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const variants = {
  outline:
    "mb-0 border border-solid shadow-none hover:opacity-75 bg-transparent",
  gradient:
    "text-white shadow-soft-md bg-150 hover:shadow-soft-xs active:opacity-85 bg-x-25",
};

const defaultPaddingX = {
  outline: "8",
  gradient: "6",
};

const defaultPaddingY = {
  outline: "2",
  gradient: "3",
};

interface ButtonProps
  extends ClassName,
    BackgroundColor,
    BtnText,
    FocusRingColor {
  icon?: IconDefinition;
  variant?: keyof typeof variants;
  paddingX?: string;
  paddingY?: string;
  borderColor?: string;
  onClick?: () => void;
}

export const Button = ({
  className,
  btnText,
  backgroundColor,
  icon,
  variant = "outline",
  paddingX,
  paddingY,
  borderColor = "fuchsia-500",
  focusRingColor = "focus-visible:ring-fuchsia-400/50",
  onClick,
}: ButtonProps) => {
  const pxValue = paddingX || defaultPaddingX[variant];
  const pyValue = paddingY || defaultPaddingY[variant];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-block px-${pxValue} py-${pyValue} ${
        variant === "outline" && `border-${borderColor} text-${borderColor}`
      } font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 active:opacity-85 tracking-tight-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:scale-102 ${focusRingColor} ${
        variants[variant]
      } ${backgroundColor} ${className}`}
    >
      {icon ? (
        <>
          <FontAwesomeIcon icon={icon} /> &nbsp;{btnText}
        </>
      ) : (
        btnText
      )}
    </button>
  );
};
