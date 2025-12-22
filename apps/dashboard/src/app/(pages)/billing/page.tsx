import { Billing } from "@/components/Billing";
import { NavBar } from "@/components/NavBar";
import { SideNav } from "@/components/SideNav";
import { Main } from "@/components/utility/Main";

export default function BillingPage() {
  return (
    <>
      <SideNav />
      <Main>
        <NavBar />
        <div className="w-full px-6 py-6 mx-auto">
          <Billing />
        </div>
      </Main>
    </>
  );
}
