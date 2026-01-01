import { Color, FocusRingColor } from "@/types";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface ReadMoreProps extends Color, FocusRingColor {}

export const ReadMore = ({
  color = "slate-500",
  focusRingColor,
}: ReadMoreProps) => {
  const ringClass =
    focusRingColor || (color === "white" ? "ring-white/60" : "ring-slate-300");

  return (
    <Link
      className={`mt-auto mb-0 text-sm font-semibold leading-normal group text-${color} outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:${ringClass}
        rounded-md px-1 -mx-1 transition-all`}
      href="#"
    >
      Read More
      <FontAwesomeIcon
        icon={faArrowRight}
        className="ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"
      />
    </Link>
  );
};
