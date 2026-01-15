import { Skeleton } from "@/components/ui/Skeleton";

export const ChartsSkeleton = () => (
  <div className="flex flex-wrap mt-6 -mx-3">
    {/* Active Users Chart Placeholder */}
    <div className="w-full max-w-full px-3 mt-0 lg:w-5/12 lg:flex-none">
      <div className="border-black/12.5 shadow-soft-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-surface bg-clip-border p-4">
        <Skeleton className="h-[200px] w-full rounded-xl" />
        <Skeleton className="h-6 w-1/3 mt-4" />
        <Skeleton className="h-4 w-1/2 mt-2" />
      </div>
    </div>
    {/* Sales Overview Chart Placeholder */}
    <div className="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
       <div className="border-black/12.5 shadow-soft-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-surface bg-clip-border p-4">
        <Skeleton className="h-[300px] w-full rounded-xl" />
      </div>
    </div>
  </div>
);