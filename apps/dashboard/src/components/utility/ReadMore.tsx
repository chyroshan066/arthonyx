import { Color } from "@/types";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";

export const ReadMore = memo(({
    color
}: Color) => (
    <a
        className={`mt-auto mb-0 text-sm font-semibold leading-normal group text-${color}`}
        href="#"
    >
        Read More
        <FontAwesomeIcon
            icon={faArrowRight}
            className="ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"
        />
    </a>
));

ReadMore.displayName = "ReadMore";