import { Stat } from "@/types";
import { faCartShopping, faCoins, faGlobe, faScroll } from "@fortawesome/free-solid-svg-icons";

export const STATS: Stat[] = [
    {
        title: "Today's Money",
        value: "$53,000",
        change: "+55%",
        iconName: faCoins,
    },
    {
        title: "Today's Users",
        value: "2,300",
        change: "+3%",
        iconName: faGlobe,
    },
    {
        title: "New Clients",
        value: "+3,462",
        change: "-2%",
        iconName: faScroll,
        color: "red-600",
    },
    {
        title: "Sales",
        value: "$103,430",
        change: "+5%",
        iconName: faCartShopping,
    },
];