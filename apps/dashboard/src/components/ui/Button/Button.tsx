import { BackgroundColor, BtnText, ClassName } from "@/types";
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

interface ButtonProps extends ClassName, BackgroundColor, BtnText {
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
      } font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 tracking-tight-soft ${
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
