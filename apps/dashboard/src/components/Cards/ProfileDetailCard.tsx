import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Card, CardHeader } from "../ui/card";
import { Separator } from "../ui/Separator";
import { PROFILE_DETAILS, PROFILE_SOCIAL_LINKS } from "@/lib/constants";

export const ProfileDetailCard = () => (
  <Tooltip.Provider
    delayDuration={100} // It determines how long the mouse must rest on an element before the tooltip reveals itself. Radix usually defaults this to 700ms.
    skipDelayDuration={500} // It controls how much time can pass between leaving one tooltip and entering another before the delayDuration is applied again.
  >
    <Card
      outerDivClassName="lg-max:mt-6 xl:w-4/12"
      innerDivClassName="h-full bg-surface shadow-soft-xl"
    >
      <CardHeader paddingSize={4}>
        <div className="flex flex-wrap items-center -mx-3">
          <div className="flex items-center w-8/12 max-w-full px-3 shrink-0 md:flex-none">
            <h6 className="mb-0">Profile Information</h6>
          </div>
          <div className="w-4/12 max-w-full px-3 text-right shrink-0 md:flex-none">
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  type="button"
                  data-target="tooltip_trigger"
                  data-placement="top"
                  aria-label="Edit Profile"
                  className="rounded-full focus-visible:scale-110 outline-none focus-visible:ring-2 focus-visible:ring-disabled/50 focus-visible:ring-offset-2"
                >
                  <FontAwesomeIcon
                    icon={faUserEdit}
                    className="leading-normal text-sm text-disabled"
                  />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="z-50 px-2 py-1 text-center text-surface bg-black rounded-lg text-sm zoom-in-95"
                  sideOffset={5}
                  side="top"
                >
                  Edit Profile
                  <Tooltip.Arrow className="fill-black" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </div>
        </div>
      </CardHeader>
      <div className="flex-auto p-4">
        <p className="leading-normal text-sm">
          Hi, I&apos;m Alec Thompson, Decisions: If you can&apos;t decide, the
          answer is no. If two equally difficult paths, choose the one more
          painful in the short term (pain avoidance is creating an illusion of
          equality).
        </p>
        <Separator className="my-6" />
        <ul className="flex flex-col pl-0 mb-0 rounded-lg">
          {PROFILE_DETAILS.map((detail) => (
            <li
              key={detail.id}
              className="relative block px-4 py-2 first:pt-0 pl-0 leading-normal bg-surface border-0 first:rounded-t-lg not-first:border-t-0 text-sm text-inherit"
            >
              <strong className="text-main">{detail.label}:</strong> &nbsp;{" "}
              {detail.value}
            </li>
          ))}
          <li className="relative block px-4 py-2 pb-0 pl-0 bg-surface border-0 border-t-0 rounded-b-lg text-inherit">
            <strong className="leading-normal text-sm text-main">
              Social:
            </strong>
            &nbsp;
            {PROFILE_SOCIAL_LINKS.map((link) => (
              <a
                key={link.id}
                className={`inline-block py-0 pl-1 pr-2 mb-0 font-bold text-center text-${link.color} align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-disabled`}
                href="#"
                target="_blank"
              >
                <FontAwesomeIcon icon={link.icon} className="fa-lg" />
              </a>
            ))}
          </li>
        </ul>
      </div>
    </Card>
  </Tooltip.Provider>
);
