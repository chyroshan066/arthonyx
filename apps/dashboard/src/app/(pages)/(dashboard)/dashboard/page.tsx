import { DashboardGrid } from "@/components/DashboardGrid";
import { NavBar } from "@/components/NavBar";
import { Main } from "@/components/utility/Main";

export default function Home() {
  return (
    <Main className="rounded-xl">
      <NavBar />
      <DashboardGrid />
    </Main>
  );
}
