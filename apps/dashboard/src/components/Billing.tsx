import { CreditCard } from "./Cards/CreditCard";
import { InvoiceCard } from "./Cards/InvoiceCard";
import { PaymentMethodCard } from "./Cards/PaymentMethodCard";
import { StatMiniCard } from "./Cards/StatMiniCard";

export const Billing = () => (
  <>
    <div className="flex flex-wrap -mx-3">
      <div className="max-w-full px-3 lg:w-2/3 lg:flex-none">
        <div className="flex flex-wrap -mx-3">
          <CreditCard />
          <StatMiniCard />
          <PaymentMethodCard />
        </div>
      </div>
      <InvoiceCard />
    </div>
  </>
);
