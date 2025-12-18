import { PROJECT_TABLE_HEADERS, PROJECTS_DATA } from "@/constants";
import { faCheck, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";
import * as Tooltip from '@radix-ui/react-tooltip';
import { CardWrapper } from "@/components/utility/CardWrapper";
import { CardHeaderWrapper } from "@/components/utility/CardHeaderWrapper";
import { ArrowUp } from "@/components/utility/ArrowUp";

export const ManagementCard = memo(() => (
    <>
        {/* Card 1 */}
        <CardWrapper outerDivClassName="mb-6 md:mb-0 md:w-1/2 md:flex-none lg:w-2/3 mt-0">
            <CardHeaderWrapper>
                <div className="flex flex-wrap mt-0 -mx-3">
                    <div className="flex-none w-7/12 max-w-full px-3 mt-0 lg:w-1/2 lg:flex-none">
                        <h6>Projects</h6>
                        <p className="mb-0 text-sm leading-normal">
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="text-cyan-500"
                            />
                            <span className="ml-1 font-semibold">30 done </span>
                            this month
                        </p>
                    </div>
                    <div className="flex-none w-5/12 max-w-full px-3 my-auto text-right lg:w-1/2 lg:flex-none">
                        <div className="relative pr-6 lg:float-right">
                            <a
                                dropdown-trigger
                                className="cursor-pointer"
                                aria-expanded={false}
                            >
                                <FontAwesomeIcon
                                    icon={faEllipsisV}
                                    className="text-slate-400"
                                />
                            </a>
                            <p className="hidden transform-dropdown-show" />

                            <ul
                                dropdown-menu
                                className="z-100 text-sm transform-dropdown shadow-soft-3xl duration-250 before:duration-350 before:font-awesome before:ease-soft min-w-44 -ml-34 before:text-5.5 pointer-events-none absolute top-0 m-0 mt-2 list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:top-0 before:right-7 before:left-auto before:z-40 before:text-white before:transition-all before:content-['\f0d8']"
                            >
                                <li className="relative">
                                    <a
                                        className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300"
                                        href="javascript:;"
                                    >
                                        Action
                                    </a>
                                </li>
                                <li className="relative">
                                    <a
                                        className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300"
                                        href="javascript:;"
                                    >
                                        Another action
                                    </a>
                                </li>
                                <li className="relative">
                                    <a
                                        className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300"
                                        href="javascript:;"
                                    >
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </CardHeaderWrapper>
            <div className="flex-auto p-6 px-0 pb-2">
                <div className="overflow-x-auto">
                    <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">

                        <thead className="align-bottom">
                            <tr>
                                {PROJECT_TABLE_HEADERS.map((header, index) => (
                                    <th
                                        key={index}
                                        className={`px-6 py-3 font-bold tracking-normal text-${header.textAlign} uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70 ${header.className}`}>
                                        {header.header}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {PROJECTS_DATA.map((data, index) => (
                                <tr key={index}>
                                    <td className={`p-2 align-middle bg-transparent ${index !== PROJECTS_DATA.length - 1 ? 'border-b' : ''} whitespace-nowrap`}>
                                        <div className="flex px-2 py-1">
                                            <div>
                                                <img
                                                    src={data.logo}
                                                    className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl"
                                                    alt={data.name}
                                                />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h6 className="mb-0 text-sm leading-normal">{data.name}</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={`p-2 align-middle bg-transparent ${index !== PROJECTS_DATA.length - 1 ? 'border-b' : ''} whitespace-nowrap`}>
                                        <Tooltip.Provider
                                            delayDuration={100}  // It determines how long the mouse must rest on an element before the tooltip reveals itself. Radix usually defaults this to 700ms.
                                            skipDelayDuration={500}  // It controls how much time can pass between leaving one tooltip and entering another before the delayDuration is applied again.
                                        >
                                            <div className="mt-2 avatar-group">
                                                {data.members.map((member, memberIndex) => (
                                                    <Tooltip.Root key={memberIndex}>
                                                        {/* "asChild" prop on "Tooltip.Trigger" ensures we don't wrap our <a> tag in an extra <span> or <div> */}
                                                        <Tooltip.Trigger asChild>
                                                            <a
                                                                href="javascript:;"
                                                                className={`relative z-20 inline-flex items-center justify-center w-6 h-6 text-xs text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out hover:z-30 ${memberIndex !== 0 ? "-ml-4" : ""
                                                                    }`}
                                                                data-target="tooltip_trigger"
                                                                data-placement="bottom"
                                                            >
                                                                <img
                                                                    src={member.img}
                                                                    className="w-full rounded-full"
                                                                    alt={member.name}
                                                                />
                                                            </a>
                                                        </Tooltip.Trigger>

                                                        {/* "Tooltip.Portal" physically moves the tooltip div to the body tag when it renders */}
                                                        <Tooltip.Portal>
                                                            <Tooltip.Content
                                                                className="z-50 px-2 py-1 text-sm text-white bg-black rounded-lg shadow-soft-lg animate-fade-in-up"
                                                                sideOffset={5}
                                                                side="bottom"
                                                            >
                                                                {member.name}
                                                                <Tooltip.Arrow className="fill-black" />
                                                            </Tooltip.Content>
                                                        </Tooltip.Portal>
                                                    </Tooltip.Root>
                                                ))}
                                            </div>
                                        </Tooltip.Provider>
                                    </td>
                                    <td className={`p-2 text-sm leading-normal text-center align-middle bg-transparent ${index !== PROJECTS_DATA.length - 1 ? 'border-b' : ''} whitespace-nowrap`}>
                                        <span className="text-xs font-semibold leading-tight">{data.budget}</span>
                                    </td>
                                    <td className={`p-2 align-middle bg-transparent ${index !== PROJECTS_DATA.length - 1 ? 'border-b' : ''} whitespace-nowrap`}>
                                        <div className="w-3/4 mx-auto">
                                            <div>
                                                <div>
                                                    <span className="text-xs font-semibold leading-tight">{data.completion}%</span>
                                                </div>
                                            </div>
                                            <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                                <div
                                                    className={`duration-600 ease-soft -mt-0.38 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all ${data.completion === 100 ? 'bg-gradient-soft-green600-lime400' : 'bg-gradient-soft-blue600-cyan400'}`}
                                                    style={{ width: `${data.completion}%` }}
                                                    role="progressbar"
                                                    aria-valuenow={data.completion}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </CardWrapper>

        {/* Card 2 */}
        <CardWrapper
            outerDivClassName="md:w-1/2 md:flex-none lg:w-1/3"
            innerDivClassName="h-full"
        >
            <CardHeaderWrapper>
                <h6>Orders overview</h6>
                <ArrowUp
                    percentage="24%"
                    timeframe="this month"
                />
            </CardHeaderWrapper>
            <div className="flex-auto p-4">
                <div
                    className="before:border-r-solid relative before:absolute before:top-0 before:left-4 before:h-full before:border-r-2 before:border-r-slate-100 before:content-[''] before:lg:-ml-px">
                    <div
                        className="relative mb-4 mt-0 after:clear-both after:table after:content-['']">
                        <span
                            className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                            <i
                                className="relative z-10 leading-none text-transparent ni ni-bell-55 leading-pro bg-gradient-to-tl from-green-600 to-lime-400 bg-clip-text fill-transparent"></i>
                        </span>
                        <div
                            className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                            <h6
                                className="mb-0 text-sm font-semibold leading-normal text-slate-700">
                                $2400, Design changes
                            </h6>
                            <p
                                className="mt-1 mb-0 text-xs font-semibold leading-tight text-slate-400">
                                22 DEC 7:20 PM
                            </p>
                        </div>
                    </div>
                    <div
                        className="relative mb-4 after:clear-both after:table after:content-['']">
                        <span
                            className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                            <i
                                className="relative z-10 leading-none text-transparent ni ni-html5 leading-pro bg-gradient-to-tl from-red-600 to-rose-400 bg-clip-text fill-transparent"></i>
                        </span>
                        <div
                            className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                            <h6
                                className="mb-0 text-sm font-semibold leading-normal text-slate-700">
                                New order #1832412
                            </h6>
                            <p
                                className="mt-1 mb-0 text-xs font-semibold leading-tight text-slate-400">
                                21 DEC 11 PM
                            </p>
                        </div>
                    </div>
                    <div
                        className="relative mb-4 after:clear-both after:table after:content-['']">
                        <span
                            className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                            <i
                                className="relative z-10 leading-none text-transparent ni ni-cart leading-pro bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text fill-transparent"></i>
                        </span>
                        <div
                            className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                            <h6
                                className="mb-0 text-sm font-semibold leading-normal text-slate-700">
                                Server payments for April
                            </h6>
                            <p
                                className="mt-1 mb-0 text-xs font-semibold leading-tight text-slate-400">
                                21 DEC 9:34 PM
                            </p>
                        </div>
                    </div>
                    <div
                        className="relative mb-4 after:clear-both after:table after:content-['']">
                        <span
                            className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                            <i
                                className="relative z-10 leading-none text-transparent ni ni-credit-card leading-pro bg-gradient-to-tl from-red-500 to-yellow-400 bg-clip-text fill-transparent"></i>
                        </span>
                        <div
                            className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                            <h6
                                className="mb-0 text-sm font-semibold leading-normal text-slate-700">
                                New card added for order #4395133
                            </h6>
                            <p
                                className="mt-1 mb-0 text-xs font-semibold leading-tight text-slate-400">
                                20 DEC 2:20 AM
                            </p>
                        </div>
                    </div>
                    <div
                        className="relative mb-4 after:clear-both after:table after:content-['']">
                        <span
                            className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                            <i
                                className="relative z-10 leading-none text-transparent ni ni-key-25 leading-pro bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text fill-transparent"></i>
                        </span>
                        <div
                            className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                            <h6
                                className="mb-0 text-sm font-semibold leading-normal text-slate-700">
                                Unlock packages for development
                            </h6>
                            <p
                                className="mt-1 mb-0 text-xs font-semibold leading-tight text-slate-400">
                                18 DEC 4:54 AM
                            </p>
                        </div>
                    </div>
                    <div
                        className="relative mb-0 after:clear-both after:table after:content-['']">
                        <span
                            className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                            <i
                                className="relative z-10 leading-none text-transparent ni ni-money-coins leading-pro bg-gradient-to-tl from-gray-900 to-slate-800 bg-clip-text fill-transparent"></i>
                        </span>
                        <div
                            className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                            <h6
                                className="mb-0 text-sm font-semibold leading-normal text-slate-700">
                                New order #9583120
                            </h6>
                            <p
                                className="mt-1 mb-0 text-xs font-semibold leading-tight text-slate-400">
                                17 DEC
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </CardWrapper >
    </>
));

ManagementCard.displayName = "ManagementCard";