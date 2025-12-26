import { BillingInfoCard } from "@/components/cards/BillingInfoCard";
import { TransactionCard } from "@/components/cards/TransactionCard";

export const BillingTransactionSection = () => (
  <div className="flex flex-wrap -mx-3">
    <BillingInfoCard />
    <TransactionCard />
  </div>
);
