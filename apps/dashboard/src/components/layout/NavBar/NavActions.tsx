import { IsProfile, OnToggle } from "@/types";
import { MobileMenuToggle } from "./MobileMenuToggle";
import { NotificationDropdown } from "./NotificationDropdown";
import { SettingsLink } from "./SettingsLink";
import { SignInLink } from "./SignInLink";

interface NavActionsProps extends IsProfile, OnToggle {}

export const NavActions = ({ isProfile, onToggle }: NavActionsProps) => (
  <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
    <SignInLink isProfile={isProfile} />
    <MobileMenuToggle isProfile={isProfile} onToggle={onToggle} />
    <SettingsLink isProfile={isProfile} />
    <NotificationDropdown isProfile={isProfile} />
  </ul>
);
