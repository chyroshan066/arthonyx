import { DashboardGrid } from "@/components/DashboardGrid";
import { NavBar } from "@/components/NavBar";
import { SideNav } from "@/components/SideNav";
import { Main } from "@/components/utility/Main";

export default function Home() {
  return (
    <>
      <SideNav />
      {/* <main className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200"> */}
      <Main>
        <NavBar />
        <DashboardGrid />
      </Main>
      {/* </main> */}
    </>
  );
}
