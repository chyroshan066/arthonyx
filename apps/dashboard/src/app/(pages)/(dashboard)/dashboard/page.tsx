import { DashboardGrid } from "@/components/DashboardGrid";
import { NavBar } from "@/components/layout/NavBar/NavBar";
import { Main } from "@/components/layout/Main";

export default function Home() {
  return (
    <Main className="rounded-xl">
      <NavBar />
      <DashboardGrid />
    </Main>
  );
}
