import { ActiveUsersChart } from "../../cards/ActiveUsersChart";
import { SalesOverviewChart } from "../../cards/SalesOverviewChart";
import { memo } from "react";

export const ChartsSection = memo(() => (
  <div className="flex flex-wrap mt-6 -mx-3">
    <ActiveUsersChart />
    <SalesOverviewChart />
  </div>
));
