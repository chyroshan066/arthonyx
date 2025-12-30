import { toggleConfigurator } from "@/redux/features/configurator";
import { useAppDispatch } from "@/redux/hooks";
import { IsProfile } from "@/types";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SettingsLink = ({ isProfile }: IsProfile) => {
  const dispatch = useAppDispatch();

  return (
    <li className="flex items-center px-4">
      <button
        type="button"
        onClick={() => dispatch(toggleConfigurator())}
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
