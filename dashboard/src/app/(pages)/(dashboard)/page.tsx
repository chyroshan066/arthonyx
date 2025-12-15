import { NavBar } from "@/components/NavBar";
import { SideNav } from "@/components/SideNav";

export default function Home() {
  return (
    <>
      <SideNav />
      <main className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
        <NavBar />
      </main>
    </>
  );
}
