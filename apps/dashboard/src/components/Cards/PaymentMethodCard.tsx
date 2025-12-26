import { faPencilAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PAYMENT_METHODS } from "@/lib/constants";
import { Button } from "../ui/Button";
import { Card } from "../ui/card/Card";
import { CardHeader } from "../ui/card/CardHeader";

export const PaymentMethodCard = () => (
  <Card
    outerDivClassName="mb-4 lg:mb-0 lg:w-full lg:flex-none"
    innerDivClassName="mt-6 bg-white border-transparent shadow-soft-xl"
    isWidthFull={false}
  >
    <CardHeader className="border-b-solid border-b-transparent" paddingSize={4}>
      <div className="flex flex-wrap -mx-3">
        <div className="flex items-center flex-none w-1/2 max-w-full px-3">
          <h6 className="mb-0">Payment Method</h6>
        </div>
        <div className="flex-none w-1/2 max-w-full px-3 text-right">
          <Button
            variant="gradient"
            backgroundColor="bg-gradient-soft-gray900-slate800"
            icon={faPlus}
            btnText="Add New Card"
          />
        </div>
      </div>
    </CardHeader>
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
  </Card>
);
