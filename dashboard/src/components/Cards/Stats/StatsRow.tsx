import { memo } from "react";
import { StatCard } from "./StatCard";
import { STATS } from "@/constants/stats";

export const StatsRow = memo(() => (
    <div className="flex flex-wrap -mx-3">
        {STATS.map((stat, index) => (
            <StatCard
                key={index}
                stat={stat}
            />
        ))}
    </div>
));

StatsRow.displayName = "StatsRow";