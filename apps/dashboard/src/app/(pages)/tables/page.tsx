import { NavBar } from "@/components/NavBar";
import { SideNav } from "@/components/SideNav";
import { DataTable } from "@/components/DataTable";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/utility/Main";

export default function Tables() {
  return (
    <>
      <SideNav />
      <Main>
        <NavBar />
        <div className="w-full px-6 py-6 mx-auto">
          <DataTable />
          <Footer />
        </div>
      </Main>
    </>
  );
}
