import { toggleConfigurator } from "@/redux/features/configurator";
import { useAppDispatch } from "@/redux/hooks";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ConfiguratorPanelHeader = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="px-6 pt-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
      <div className="float-left">
        <h5 className="mt-4 mb-0">Soft UI Configurator</h5>
        <p>See our dashboard options.</p>
      </div>
      <div className="float-right mt-6">
        <button
          onClick={() => dispatch(toggleConfigurator())}
          className="inline-block p-0 mb-4 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 active:opacity-85 text-slate-700"
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
    </div>
  );
};
