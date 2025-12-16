import { Stat } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";

export const StatCard = memo(({
    stat
}: {
    stat: Stat
}) => {
    const { title, value, change, iconName, color = "lime-500" } = stat;

    return (
        <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:last:mb-0 xl:w-1/4">
            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-4">
                    <div className="flex flex-row -mx-3">
                        <div className="flex-none w-2/3 max-w-full px-3">
                            <div>
                                <p className="mb-0 font-sans text-sm font-semibold leading-normal">{title}</p>
                                <h5 className="mb-0 font-bold">
                                    {value}
                                    <span className={`text-sm leading-normal font-weight-bolder text-${color} ml-1.5`}>{change}</span>
                                </h5>
                            </div>
                        </div>
                        <div className="px-3 text-right basis-1/3">
                            <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-soft-purple-pink">
                                <FontAwesomeIcon
                                    icon={iconName}
                                    className="leading-none text-lg relative top-3.5 text-white"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
});

StatCard.displayName = "StatCard";