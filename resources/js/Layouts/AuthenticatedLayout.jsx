import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import LeftBar from "@/components/leftBar/LeftBar";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import CirculoBlancoUsuario from "~public/Icons/TopBar/CirculoBlancoUsuario";

import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-white">
            <nav className="lg:h-[80px]  bg-AzulPrimario">
                <div className=" w-full px-4 sm:px-6 ">
                    <div className="lg:h-[80px]  w-full flex items-center font-bold text-white text-xl">
                        <div className="w-[50%] justify-start flex items-center space-x-3 ">
                            <Link href="/">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                            </Link>
                            <h1>NombreAPP</h1>
                        </div>

                        <div className="hidden sm:ms-6 sm:flex sm:items-center w-[50%] flex flex-row justify-end items-center space-x-3 ">
                            <div className="relative ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <CirculoBlancoUsuario />
                                            <button
                                                type="button"
                                                className="inline-flex items-center  px-3 py-2  font-bold text-white text-xl transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                            >
                                                {user.name}

                                                <svg
                                                    className="-me-0.5 ms-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="w-full  flex justify-end items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-end rounded-md p-2 text-white transition duration-150 ease-in-out "
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="space-y-1 pb-3 pt-2">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("turnos")}
                            active={route().current("turnos")}
                        >
                            Turnos
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("agenda")}
                            active={route().current("agenda")}
                        >
                            Agenda
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("pacientes")}
                            active={route().current("pacientes")}
                        >
                            Pacientes
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("obra-social")}
                            active={route().current("obra-social")}
                        >
                            Obra Social
                        </ResponsiveNavLink>

                        <ResponsiveNavLink
                            href={route("especialidades")}
                            active={route().current("especialidades")}
                        >
                            Especialidades
                        </ResponsiveNavLink>

                        <ResponsiveNavLink
                            href={route("configuracion")}
                            active={route().current("configuracion")}
                        >
                            Configuración
                        </ResponsiveNavLink>
                    </div>

                    <div className="border-t border-gray-200 pb-1 pt-4">
                        <div className="px-4">
                            <div className="text-base font-medium text-gray-800">
                                {user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route("profile.edit")}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="hidden lg:block">
                <LeftBar />
            </div>

            <main className="ml-[84px]">{children}</main>
        </div>
    );
}
