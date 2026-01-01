import { AriaLabel } from "@/types";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CloseButtonProps extends AriaLabel {
  onClick: () => void;
}

export const CloseButton = ({
  onClick,
  ariaLabel = "Close",
}: CloseButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className="inline-block p-0 mb-4 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 active:opacity-85 text-slate-700"
    aria-label={ariaLabel}
  >
    <FontAwesomeIcon icon={faClose} />
  </button>
);
