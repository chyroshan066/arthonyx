import { memo } from "react";
import { StatsRow } from "./Cards/Stats/StatsRow";
import { InformationRow } from "./Cards/Information/InformationRow";
import { ChartsRow } from "./Cards/Charts/ChartsRow";

export const DashboardGrid = memo(() => (
    <div className="w-full px-6 py-6 mx-auto">
        <StatsRow />
        <InformationRow />
        <ChartsRow />
    </div>
));

DashboardGrid.displayName = "DashboardGrid";