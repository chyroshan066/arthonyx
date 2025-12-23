import { CreditCard } from "./Cards/CreditCard";

export const Billing = () => (
  <>
    <div className="flex flex-wrap -mx-3">
      <div className="max-w-full px-3 lg:w-2/3 lg:flex-none">
        <div className="flex flex-wrap -mx-3">
          <CreditCard />
        </div>
      </div>
      {/* Right side of first row below this */}
    </div>
  </>
);
