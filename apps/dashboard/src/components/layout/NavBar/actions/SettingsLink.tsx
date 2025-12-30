import { useLayoutConfig } from "@/hooks/useLayoutConfig";
import { IsProfile } from "@/types";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SettingsLink = ({ isProfile }: IsProfile) => {
  const { toggleConfigurator } = useLayoutConfig();

  return (
    <li className="flex items-center px-4">
      <button
        type="button"
        onClick={toggleConfigurator}
        className={`p-0 text-sm transition-all ${
          isProfile
            ? "text-white ease-soft-in-out"
            : "text-slate-500 ease-nav-brand"
        }`}
      >
        <FontAwesomeIcon icon={faCog} className="cursor-pointer" />
      </button>
    </li>
  );
};
