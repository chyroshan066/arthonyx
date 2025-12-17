import { memo } from "react";
import { ChartCard } from "./ChartCard";

export const ChartsRow = memo(() => (
    <div className="flex flex-wrap mt-6 -mx-3">
        <ChartCard />
    </div>
));

ChartsRow.displayName = "ChartsRow";