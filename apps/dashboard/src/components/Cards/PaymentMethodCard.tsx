import { faPencilAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardWrapper } from "../utility/CardWrapper";
import Link from "next/link";
import { PAYMENT_METHODS } from "@/constants";

export const PaymentMethodCard = () => (
  <CardWrapper
    outerDivClassName="mb-4 lg:mb-0 lg:w-full lg:flex-none"
    innerDivClassName="mt-6 bg-white border-transparent shadow-soft-xl"
    isWidthFull={false}
  >
    <div className="p-4 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
      <div className="flex flex-wrap -mx-3">
        <div className="flex items-center flex-none w-1/2 max-w-full px-3">
          <h6 className="mb-0">Payment Method</h6>
        </div>
        <div className="flex-none w-1/2 max-w-full px-3 text-right">
          <Link
            className="inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all bg-transparent rounded-lg cursor-pointer leading-pro text-xs ease-soft-in shadow-soft-md bg-150 bg-gradient-soft-gray900-slate800 hover:shadow-soft-xs active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25"
            href="#"
          >
            <FontAwesomeIcon icon={faPlus} />
            &nbsp;&nbsp;Add New Card
          </Link>
        </div>
      </div>
    </div>
    <div className="flex-auto p-4">
      <div className="flex flex-wrap -mx-3">
        {PAYMENT_METHODS.map((method) => (
          <div
            key={method.id}
            className={`max-w-full px-3 ${method.className} md:w-1/2 md:flex-none`}
          >
            <div className="relative flex flex-row items-center flex-auto min-w-0 p-6 break-words bg-transparent border border-solid shadow-none rounded-xl border-slate-100 bg-clip-border">
              <img
                className="mb-0 mr-4 w-1/10"
                src={method.logo}
                alt={method.alt}
              />
              <h6 className="mb-0">{method.cardNumber}</h6>
              <FontAwesomeIcon
                icon={faPencilAlt}
                className="ml-auto cursor-pointer text-slate-700"
                data-target="tooltip_trigger"
                data-placement="top"
              />
              <div
                data-target="tooltip"
                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
              >
                Edit Card
                <div
                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                  data-popper-arrow
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </CardWrapper>
);
