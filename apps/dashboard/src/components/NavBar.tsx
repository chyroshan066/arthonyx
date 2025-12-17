"use client";

import { faBell, faClock, faCog, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { memo, useEffect, useState } from "react";

export const NavBar = memo(() => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Handle sidenav burger click
    const handleSidenavToggle = () => {
        // Dispatch custom event that SideNav will listen to
        window.dispatchEvent(new Event('toggle-sidenav'));
    };

    // Handle dropdown toggle
    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const dropdown = document.querySelector('[data-dropdown-menu]');
            const trigger = document.querySelector('[data-dropdown-trigger]');

            if (isDropdownOpen &&
                dropdown && !dropdown.contains(e.target as Node) &&
                trigger && !trigger.contains(e.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => window.removeEventListener('click', handleClickOutside);
    }, [isDropdownOpen]);

    return (
        <nav className={`relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start`}>
            <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
                <nav>
                    <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                        <li className="text-sm leading-normal">
                            <Link
                                className="opacity-50 text-slate-700"
                                href="#"
                            >
                                Pages
                            </Link>
                        </li>
                        <li
                            className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/']"
                            aria-current="page"
                        >
                            Dashboard
                        </li>
                    </ol>
                    <h6 className="mb-0 font-bold capitalize">Dashboard</h6>
                </nav>

                <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
                    <div className="flex items-center md:ml-auto md:pr-4">
                        <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
                            <span className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                            <input
                                type="text"
                                className="pl-8.75 text-sm focus:shadow-soft-primary-outline ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                placeholder="Type here..." />
                        </div>
                    </div>
                    <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
                        <li className="flex items-center">
                            <Link
                                href="./pages/sign-in.html"
                                className="block px-0 py-2 text-sm font-semibold transition-all ease-nav-brand text-slate-500">
                                <FontAwesomeIcon
                                    icon={faUser}
                                    className="sm:mr-1"
                                />
                                <span className="hidden sm:inline">Sign In</span>
                            </Link>
                        </li>
                        <li className="flex items-center pl-4 xl:hidden">
                            <button
                                onClick={handleSidenavToggle}
                                className="block p-0 text-sm transition-all ease-nav-brand text-slate-500 bg-transparent border-0 cursor-pointer"
                                data-sidenav-trigger
                                type="button"
                            >
                                <div className="w-4.5 overflow-hidden">
                                    <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                                    <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                                    <i className="ease-soft relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                                </div>
                            </button>
                        </li>
                        <li className="flex items-center px-4">
                            <Link
                                href="javascript:;"
                                className="p-0 text-sm transition-all ease-nav-brand text-slate-500">
                                <FontAwesomeIcon
                                    icon={faCog}
                                    className="cursor-pointer"
                                />
                            </Link>
                        </li>


                        <li className="relative flex items-center pr-2">
                            <p className="hidden transform-dropdown-show" />
                            <button
                                onClick={toggleDropdown}
                                className="block p-0 text-sm transition-all ease-nav-brand text-slate-500 bg-transparent border-0 cursor-pointer"
                                data-dropdown-trigger
                                aria-expanded={isDropdownOpen}
                                type="button"
                            >
                                <FontAwesomeIcon
                                    icon={faBell}
                                    className="cursor-pointer"
                                />
                            </button>

                            <ul
                                data-dropdown-menu
                                className={`text-sm transform-dropdown before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-soft-3xl duration-250 min-w-44 before:sm:right-7.5 before:text-5.5 absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 transition-all before:absolute before:right-2 before:left-auto before:top-0 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-['\f0d8'] sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer ${isDropdownOpen
                                    ? 'opacity-100 transform-dropdown-show'
                                    : 'opacity-0 pointer-events-none before:-top-5 transform-dropdown'
                                    }`}
                            >
                                <li className="relative mb-2">
                                    <Link
                                        className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 lg:transition-colors"
                                        href="#"
                                    >
                                        <div className="flex py-1">
                                            <div className="my-auto">
                                                <Image
                                                    src="/images/random/team-2.jpg"
                                                    width={36}
                                                    height={36}
                                                    alt="Notification 1"
                                                    className="inline-flex items-center justify-center mr-4 text-sm text-white h-9 w-9 max-w-none rounded-xl"
                                                />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h6 className="mb-1 text-sm font-normal leading-normal">
                                                    <span className="font-semibold">New message</span> from
                                                    Laur
                                                </h6>
                                                <p className="mb-0 text-xs leading-tight text-slate-400">
                                                    <FontAwesomeIcon
                                                        icon={faClock}
                                                        className="mr-1"
                                                    />
                                                    13 minutes ago
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>

                                <li className="relative mb-2">
                                    <Link
                                        className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700"
                                        href="#"
                                    >
                                        <div className="flex py-1">
                                            <div className="my-auto">
                                                <Image
                                                    src="/images/random/small-logos/logo-spotify.svg"
                                                    width={36}
                                                    height={36}
                                                    className="inline-flex items-center justify-center mr-4 text-sm text-white bg-gradient-soft-gray900-slate800 h-9 w-9 max-w-none rounded-xl"
                                                    alt="spotify logo"
                                                />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h6 className="mb-1 text-sm font-normal leading-normal">
                                                    <span className="font-semibold">New album</span> by
                                                    Travis Scott
                                                </h6>
                                                <p className="mb-0 text-xs leading-tight text-slate-400">
                                                    <FontAwesomeIcon
                                                        icon={faClock}
                                                        className="mr-1"
                                                    />
                                                    1 day
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>

                                <li className="relative">
                                    <Link
                                        className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700"
                                        href="#"
                                    >
                                        <div className="flex py-1">
                                            <div
                                                className="inline-flex items-center justify-center my-auto mr-4 text-sm text-white transition-all duration-200 ease-nav-brand bg-gradient-soft-slate600-slate300 h-9 w-9 rounded-xl">
                                                <svg
                                                    width="12px"
                                                    height="12px"
                                                    viewBox="0 0 43 36"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <title>credit-card</title>
                                                    <g
                                                        stroke="none"
                                                        strokeWidth="1"
                                                        fill="none"
                                                        fillRule="evenodd">
                                                        <g
                                                            transform="translate(-2169.000000, -745.000000)"
                                                            fill="#FFFFFF"
                                                            fillRule="nonzero">
                                                            <g
                                                                transform="translate(1716.000000, 291.000000)">
                                                                <g
                                                                    transform="translate(453.000000, 454.000000)">
                                                                    <path
                                                                        className="color-background"
                                                                        d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                                                        opacity="0.593633743"></path>
                                                                    <path
                                                                        className="color-background"
                                                                        d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h6 className="mb-1 text-sm font-normal leading-normal">
                                                    Payment successfully completed
                                                </h6>
                                                <p className="mb-0 text-xs leading-tight text-slate-400">
                                                    <FontAwesomeIcon
                                                        icon={faClock}
                                                        className="mr-1"
                                                    />
                                                    2 days
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
});

NavBar.displayName = "NavBar"