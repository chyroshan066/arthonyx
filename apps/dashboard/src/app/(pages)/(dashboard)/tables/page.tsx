import { NavBar } from "@/components/layout/NavBar/NavBar";
import { DataTable } from "@/components/DataTable";
import { Footer } from "@/components/layout/Footer";
import { Main } from "@/components/layout/Main";

export default function Tables() {
  return (
    <Main className="rounded-xl">
      <NavBar />
      <div className="w-full px-6 py-6 mx-auto">
        <DataTable />
        <Footer />
      </div>
    </Main>
  );
}
