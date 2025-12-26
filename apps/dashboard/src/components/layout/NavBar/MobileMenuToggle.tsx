import { IsProfile } from "@/types";

interface MobileMenuToggleProps extends IsProfile {
  onToggle: (e: React.MouseEvent) => void;
}

export const MobileMenuToggle = ({
  isProfile,
  onToggle,
}: MobileMenuToggleProps) => (
  <li className="flex items-center pl-4 xl:hidden">
    <button
      onClick={onToggle}
      className={`block p-0 text-sm transition-all ${
        isProfile
          ? "ease-soft-in-out text-white"
          : "ease-nav-brand text-slate-500 bg-transparent border-0 cursor-pointer"
      }`}
      data-sidenav-trigger
      type="button"
    >
      <div className="w-4.5 overflow-hidden">
        {[...Array(3)].map((_, index) => (
          // _ tells the computer: "Ignore the value, I only care about the second argument (the number)"
          <i
            key={index}
            className={`ease-soft relative block h-0.5 rounded-sm transition-all ${
              index !== 2 && "mb-0.75"
            } ${isProfile ? "bg-white" : "bg-slate-500"}`}
          />
        ))}
      </div>
    </button>
  </li>
);
