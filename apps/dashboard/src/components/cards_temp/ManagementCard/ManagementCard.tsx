"use client";

import { memo } from "react";
import { ProjectsTable } from "./ProjectsTable";
import { OrdersTimeline } from "./OrdersTimeline";

export const ManagementCard = memo(() => {
  return (
    <>
      <ProjectsTable />
      <OrdersTimeline />
    </>
  );
});

ManagementCard.displayName = "ManagementCard";
