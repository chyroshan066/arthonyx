import { ClassName, Name } from "@/types"
import { memo } from "react";

interface NucleoIconProps extends Name, ClassName {
    size?: string;
}

export const NucleoIcon = memo(({
    name, size, className
}: NucleoIconProps) => {
    return (
        <i className={`ni ni-${name} ${size ? `ni-${size}` : ''} ${className}`} />
    );
});

NucleoIcon.displayName = "NucleoIcon"