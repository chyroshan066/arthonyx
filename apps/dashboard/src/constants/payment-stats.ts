import { PaymentStat } from "@/types";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";

export const PAYMENT_STATS: PaymentStat[] = [
  {
    id: 1,
    title: "Salary",
    description: "Belong Interactive",
    amount: "+$2000",
    icon: faLandmark,
  },
  {
    id: 2,
    title: "Paypal",
    description: "Freelance Payment",
    amount: "$455.00",
    icon: faPaypal,
    className: "mt-6 md:mt-0",
  },
];
