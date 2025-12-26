import { PROFILE_TABS } from "@/lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState(PROFILE_TABS[0].value);
  const [tabStyle, setTabStyle] = useState({
    left: 0,
    width: 0,
    height: 0, // We track height to ensure it matches exactly
  });
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    // Function to calculate and update the pill's position
    const updateTabPosition = () => {
      const activeIndex = PROFILE_TABS.findIndex(
        (tab) => tab.value === activeTab
      );
      const currentTab = tabsRef.current[activeIndex];

      if (currentTab) {
        setTabStyle({
          left: currentTab.offsetLeft,
          width: currentTab.offsetWidth,
          height: currentTab.offsetHeight,
        });
      }
    };

    // Run initially
    updateTabPosition();

    // Recalculate on window resize (responsive behavior)
    window.addEventListener("resize", updateTabPosition);

    return () => window.removeEventListener("resize", updateTabPosition);
  }, [activeTab]);

  return (
    <div className="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12">
      <div className="relative right-0">
        <ul
          className="relative flex flex-wrap p-1 list-none bg-transparent rounded-xl"
          role="tablist"
        >
          {/* The Moving Pill (Animated Background) */}
          <div
            className="absolute z-10 bg-white rounded-lg shadow-soft-xxs transition-all duration-300 ease-soft-in-out"
            style={{
              left: tabStyle.left,
              width: tabStyle.width,
              height: tabStyle.height,
              top: "4px", // Matches the p-1 padding of the UL
            }}
          />

          {/* Tab Items */}
          {PROFILE_TABS.map((tab, index) => (
            <li
              key={tab.value}
              ref={(el) => {
                tabsRef.current[index] = el;
              }}
              className="z-30 flex-auto text-center"
            >
              <button
                onClick={() => setActiveTab(tab.value)}
                className="z-30 block w-full px-0 py-1 mb-0 transition-all border-0 rounded-lg ease-soft-in-out bg-transparent text-slate-700 cursor-pointer"
                role="tab"
                aria-selected={activeTab === tab.value}
              >
                <FontAwesomeIcon icon={tab.icon} width={16} height={16} />
                <span className="ml-1">{tab.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
