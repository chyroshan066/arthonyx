import { CardWrapper } from "../utility/CardWrapper";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { BILLING_DETAILS } from "@/constants";
import { IconButton } from "../utility/Button/IconButton";

export const BillingInfoCard = () => (
  <CardWrapper
    outerDivClassName="mt-6 md:w-7/12 md:flex-none"
    innerDivClassName="bg-white shadow-soft-xl"
  >
    <div className="p-6 px-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
      <h6 className="mb-0">Billing Information</h6>
    </div>
    <div className="flex-auto p-4 pt-6">
      <ul className="flex flex-col pl-0 mb-0 rounded-lg">
        {BILLING_DETAILS.map((profile) => (
          <li
            key={profile.id}
            className={`relative flex p-6 mb-2 border-0 first:rounded-t-inherit last:rounded-b-inherit mt-4 first:mt-0 rounded-xl bg-gray-50`}
          >
            <div className="flex flex-col">
              <h6 className="mb-4 leading-normal text-sm">{profile.name}</h6>
              {profile.details.map((detail, index) => (
                <span
                  key={index}
                  className="mb-2 last:mb-0 leading-tight text-xs"
                >
                  {detail.label}:
                  <span className="font-semibold text-slate-700 sm:ml-2">
                    {detail.value}
                  </span>
                </span>
              ))}
            </div>
            <div className="ml-auto text-right">
              <IconButton
                className="relative z-10 text-transparent bg-clip-text"
                backgroundColor="gradient-soft-red600-rose400"
                textColor="text-red-500"
                icon={faTrashAlt}
                label="Delete"
              />
              <IconButton icon={faPencilAlt} label="Edit" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  </CardWrapper>
);
