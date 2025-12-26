import { ArrowUp } from "@/components/ui/ArrowUp";
import { Card } from "@/components/ui/card/Card";
import { CardHeader } from "@/components/ui/card/CardHeader";
import { CHART_METRICS } from "@/lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";

export const ChartCard = memo(() => (
  <>
    <Card
      outerDivClassName="mb-6 lg:mb-0 lg:w-5/12 mt-0 lg:flex-none"
      innerDivClassName="z-20 border-black/12.5 shadow-soft-xl bg-white"
    >
      <div className="flex-auto p-4">
        <div className="py-4 pr-1 mb-4 bg-gradient-soft-gray900-slate800 rounded-xl">
          <div>
            <canvas id="chart-bars" height="170" />
          </div>
        </div>
        <h6 className="mt-6 mb-0 ml-2">Active Users</h6>
        <p className="ml-2 text-sm leading-normal">
          (<span className="font-bold">+23%</span>) than last week
        </p>
        <div className="w-full px-6 mx-auto max-w-screen-2xl rounded-xl">
          <div className="flex flex-wrap mt-0 -mx-3">
            {CHART_METRICS.map((metric) => (
              <div
                key={metric.id}
                className="flex-none w-1/4 max-w-full py-4 pl-0 pr-3 mt-0"
              >
                <div className="flex mb-2">
                  <div
                    className={`flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl ${metric.color} text-neutral-900`}
                  >
                    <FontAwesomeIcon
                      icon={metric.icon}
                      className="text-white text-sm"
                    />
                  </div>
                  <p className="mt-1 mb-0 text-xs font-semibold leading-tight">
                    {metric.label}
                  </p>
                </div>
                <h4 className="font-bold">{metric.value}</h4>
                <div className="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200">
                  <div
                    className={`duration-600 ease-soft -mt-0.38 -ml-px flex h-1.5 ${metric.width} flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-slate-700 text-center text-white transition-all`}
                    role="progressbar"
                    aria-valuenow={metric.completion}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>

    <Card
      outerDivClassName="lg:w-7/12 mt-0 lg:flex-none"
      innerDivClassName="z-20 border-black/12.5 shadow-soft-xl bg-white"
    >
      <CardHeader className="border-black/12.5 border-solid">
        <h6>Sales overview</h6>
        <ArrowUp percentage="4% more" time="in 2021" />
      </CardHeader>
      <div className="flex-auto p-4">
        <div>
          <canvas id="chart-line" height="300" />
        </div>
      </div>
    </Card>
  </>
));

ChartCard.displayName = "ChartCard";
