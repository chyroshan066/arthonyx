import { Billing } from "@/components/Billing";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { Main } from "@/components/utility/Main";

export default function BillingPage() {
  return (
    <Main className="rounded-xl">
      <NavBar />
      <div className="w-full px-6 py-6 mx-auto">
        <Billing />
        <Footer />
      </div>
    </Main>
  );
}
