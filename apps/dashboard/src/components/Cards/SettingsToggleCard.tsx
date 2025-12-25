import { ACCOUNT_SETTINGS, APPLICATION_SETTINGS } from "@/constants";
import { CardHeaderWrapper } from "../utility/CardHeaderWrapper";
import { CardWrapper } from "../utility/CardWrapper";
import React from "react";
import { Setting } from "@/types";
import { Checkbox } from "../utility/Checkbox";

interface MergedSetting {
  category: string;
  settings: Setting[];
}

const MERGED_SETTINGS: MergedSetting[] = [
  {
    category: "Account",
    settings: ACCOUNT_SETTINGS,
  },
  {
    category: "Application",
    settings: APPLICATION_SETTINGS,
  },
];

export const SettingsToggleCard = () => (
  <CardWrapper
    outerDivClassName="xl:w-4/12"
    innerDivClassName="h-full bg-white shadow-soft-xl"
  >
    <CardHeaderWrapper paddingSize={4}>
      <h6 className="mb-0">Platform Settings</h6>
    </CardHeaderWrapper>
    <div className="flex-auto p-4">
      {MERGED_SETTINGS.map((group) => (
        <React.Fragment key={group.category}>
          <h6 className="not-first:mt-6 font-bold leading-tight uppercase text-xs text-slate-500">
            {group.category}
          </h6>
          <ul className="flex flex-col pl-0 mb-0 rounded-lg">
            {group.settings.map((setting) => (
              <li
                key={setting.id}
                className="relative block px-0 py-2 bg-white border-0 last:pb-0 first:rounded-t-lg last:rounded-b-lg text-inherit"
              >
                <div className="min-h-6 mb-0.5 block pl-0">
                  <Checkbox
                    id={setting.id}
                    defaultChecked={setting.defaultChecked}
                  />
                  <label
                    htmlFor={setting.id}
                    className="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500"
                  >
                    {setting.label}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </div>
  </CardWrapper>
);
