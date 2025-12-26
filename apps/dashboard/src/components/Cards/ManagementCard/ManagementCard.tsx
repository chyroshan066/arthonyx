"use client";

import {
  PROJECT_TABLE_HEADERS,
  PROJECTS_DATA,
  TIMELINE_DATA,
} from "@/lib/constants";
import { faCheck, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";
import { ArrowUp } from "@/components/ui/ArrowUp";
import Link from "next/link";
import { useDisclosure } from "@/hooks/useDisclosure";
import {
  Caption,
  Table,
  TableAvatarCell,
  TData,
  THead,
} from "@/components/utility/Table";
import { AvatarGroup } from "@/components/ui/AvatarGroup";
import { Card } from "@/components/ui/card/Card";
import { CardHeader } from "@/components/ui/card/CardHeader";
import { ScrollArea } from "@/components/ui/ScrollArea";

const DROPDOWN_ACTIONS: string[] = [
  "Action",
  "Another action",
  "Something else here",
];

export const ManagementCard = memo(() => {
  const {
    isOpen: isDropdownOpen,
    toggle: toggleDropdown,
    contentRef: dropdownRef,
    triggerRef,
  } = useDisclosure();

  return (
    <>
      {/* Card 1 */}
      <Card
        outerDivClassName="mb-6 md:mb-0 md:w-1/2 md:flex-none lg:w-2/3 mt-0 lg:flex-none"
        innerDivClassName="border-black/12.5 shadow-soft-xl bg-white"
      >
        <CardHeader className="border-black/12.5 border-solid mb-4">
          <div className="flex flex-wrap mt-0 -mx-3">
            <div className="flex-none w-7/12 max-w-full px-3 mt-0 lg:w-1/2 lg:flex-none">
              <h6>Projects</h6>
              <p className="mb-0 text-sm leading-normal">
                <FontAwesomeIcon icon={faCheck} className="text-cyan-500" />
                <span className="ml-1 font-semibold">30 done </span>
                this month
              </p>
            </div>
            <div className="flex-none w-5/12 max-w-full px-3 my-auto text-right lg:w-1/2 lg:flex-none">
              <div className="relative pr-6 lg:float-right">
                <button
                  ref={triggerRef as React.RefObject<HTMLButtonElement>}
                  onClick={toggleDropdown}
                  data-dropdown-trigger
                  className="cursor-pointer"
                  aria-expanded={isDropdownOpen}
                  type="button"
                >
                  <FontAwesomeIcon
                    icon={faEllipsisV}
                    className="text-slate-400"
                  />
                </button>
                <p className="hidden transform-dropdown-show" />

                <ul
                  ref={dropdownRef as React.RefObject<HTMLUListElement>}
                  data-dropdown-menu
                  className={`z-100 text-sm transform-dropdown shadow-soft-3xl duration-250 before:duration-350 before:font-awesome before:ease-soft min-w-44 -ml-34 before:text-5.5 absolute top-0 m-0 list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:top-0 before:right-7 before:left-auto before:z-40 before:text-white before:transition-all before:content-['\\f0d8'] ${
                    isDropdownOpen
                      ? "opacity-100 transform-dropdown-show pointer-events-auto"
                      : "opacity-0 pointer-events-none before:-top-5 transform-dropdown"
                  }`}
                >
                  {DROPDOWN_ACTIONS.map((action, index) => (
                    <li key={index} className="relative">
                      <Link
                        className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300"
                        href="#;"
                      >
                        {action}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </CardHeader>
        <div className="flex-auto px-0 pt-0 pb-2">
          <ScrollArea
            className="management-table-ps relative overflow-hidden touch-pan-y" // "touch-pan-y" allows the PAGE to scroll vertically when we drag our finger on the table.
            options={{
              suppressScrollY: true, // Only horizontal for the table
              wheelPropagation: true, // Allows the page to scroll when we wheel over the table
            }}
          >
            <div className="p-0">
              <Table>
                <THead>
                  <tr>
                    {PROJECT_TABLE_HEADERS.map((header) => (
                      <th
                        key={header.id}
                        className={`table-header tracking-normal text-${header.textAlign} uppercase letter border-b-solid text-xxs border-b-gray-200 ${header.className}`}
                      >
                        {header.header}
                      </th>
                    ))}
                  </tr>
                </THead>

                <tbody>
                  {PROJECTS_DATA.map((data, index) => (
                    <tr key={data.id}>
                      <TData isLastRow={index === PROJECTS_DATA.length - 1}>
                        <TableAvatarCell img={data.logo} name={data.name} />
                      </TData>
                      <TData isLastRow={index === PROJECTS_DATA.length - 1}>
                        <AvatarGroup participants={data.members} />
                      </TData>
                      <TData
                        isLastRow={index === PROJECTS_DATA.length - 1}
                        className="text-left ps-2 text-sm leading-normal"
                      >
                        <Caption>{data.budget}</Caption>
                      </TData>
                      <TData isLastRow={index === PROJECTS_DATA.length - 1}>
                        <div className="w-3/4 mx-auto">
                          <Caption>{data.completion}%</Caption>
                          <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                            <div
                              className={`duration-600 ease-soft -mt-0.38 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all ${
                                data.completion === 100
                                  ? "bg-gradient-soft-green600-lime400"
                                  : "bg-gradient-soft-blue600-cyan400"
                              }`}
                              style={{ width: `${data.completion}%` }}
                              role="progressbar"
                              aria-valuenow={data.completion}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </TData>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </ScrollArea>
        </div>
      </Card>

      {/* Card 2 */}
      <Card
        outerDivClassName="md:w-1/2 md:flex-none lg:w-1/3 lg:flex-none"
        innerDivClassName="h-full border-black/12.5 shadow-soft-xl bg-white"
      >
        <CardHeader className="border-black/12.5 border-solid">
          <h6>Orders overview</h6>
          <ArrowUp percentage="24%" time="this month" />
        </CardHeader>
        <div className="flex-auto p-4">
          <div className="before:border-r-solid relative before:absolute before:top-0 before:left-4 before:h-full before:border-r-2 before:border-r-slate-300 before:content-[''] before:lg:-ml-px">
            {TIMELINE_DATA.map((data) => (
              <div
                key={data.id}
                className="relative mb-4 mt-0 after:clear-both after:table after:content-['']"
              >
                <span className="w-6.5 h-6.5 text-base absolute left-0.75 z-10 inline-flex items-center justify-center rounded-full bg-white text-center font-semibold">
                  <FontAwesomeIcon
                    icon={data.icon}
                    className={`relative z-10 text-md ${data.iconColor}`}
                  />
                </span>
                <div className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                  <h6 className="mb-0 text-sm font-semibold leading-normal text-slate-700">
                    {" "}
                    {data.title}
                  </h6>
                  <p className="mt-1 mb-0 text-xs font-semibold leading-tight text-slate-400">
                    {data.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </>
  );
});

ManagementCard.displayName = "ManagementCard";
