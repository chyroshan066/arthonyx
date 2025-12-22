import { Children } from "@/types";

export const Main = ({ children }: Children) => (
  <main className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
    {children}
  </main>
);
