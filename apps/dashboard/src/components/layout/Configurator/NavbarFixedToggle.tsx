import { Checkbox } from "@/components/ui/form/Checkbox";
import {
  selectSidebarSettings,
  setFixedNavbar,
} from "@/redux/features/configurator";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export const NavbarFixedToggle = () => {
  const dispatch = useAppDispatch();
  const { fixedNavbar } = useAppSelector(selectSidebarSettings);

  return (
    <>
      <div className="mt-4">
        <h6 className="mb-0">Navbar Fixed</h6>
      </div>
      <div className="min-h-6 mb-0.5 block pl-0">
        <Checkbox
          id="fixedNav"
          defaultChecked={fixedNavbar}
          marginTop="1"
          onChange={(e) => dispatch(setFixedNavbar(e.target.checked))}
        />
      </div>
    </>
  );
};
