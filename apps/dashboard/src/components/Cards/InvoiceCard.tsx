import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardWrapper } from "../utility/CardWrapper";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { INVOCIES } from "@/constants";

export const InvoiceCard = () => (
  <CardWrapper
    outerDivClassName="lg:w-1/3 lg:flex-none"
    innerDivClassName="h-full bg-white border-transparent shadow-soft-xl"
  >
    <div className="p-4 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
      <div className="flex flex-wrap -mx-3">
        <div className="flex items-center flex-none w-1/2 max-w-full px-3">
          <h6 className="mb-0">Invoices</h6>
        </div>
        <div className="flex-none w-1/2 max-w-full px-3 text-right">
          <button className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs bg-150 active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 border-fuchsia-500 text-fuchsia-500 hover:opacity-75">
            View All
          </button>
        </div>
      </div>
    </div>
    <div className="flex-auto p-4 pb-0">
      <ul className="flex flex-col pl-0 mb-0 rounded-lg">
        {INVOCIES.map((invoice, index) => (
          <li
            key={invoice.id}
            className={`relative flex justify-between px-4 py-2 pl-0 ${
              index !== INVOCIES.length - 1 && "mb-2"
            } bg-white border-0 ${invoice.className} text-inherit rounded-xl`}
          >
            <div className="flex flex-col">
              <h6 className="mb-1 font-semibold leading-normal text-sm text-slate-700">
                {invoice.date}
              </h6>
              <span className="leading-tight text-xs">{invoice.id}</span>
            </div>
            <div className="flex items-center leading-normal text-sm">
              {invoice.amount}
              <button className="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700">
                <FontAwesomeIcon icon={faFilePdf} className="mr-1 text-lg" />{" "}
                PDF
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </CardWrapper>
);
