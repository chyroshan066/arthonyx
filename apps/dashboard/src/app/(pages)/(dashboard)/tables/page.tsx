import { NavBar } from "@/components/NavBar";
import { DataTable } from "@/components/DataTable";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/utility/Main";

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
