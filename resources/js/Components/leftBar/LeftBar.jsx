import HomeIcon from "~public/Icons/LeftBar/HomeIcon";
import CalendarIcon from "~public/Icons/LeftBar/CalendarIcon";
import AgendaIcon from "~public/Icons/LeftBar/AgendaIcon";
import PacienteIcon from "~public/Icons/LeftBar/PacientesIcon";
import EspecialidadesIcon from "~public/Icons/LeftBar/EspecialidadesIcon";
import ObraSocialIcon from "~public/Icons/LeftBar/ObraSocialIcon";
import ConfiguracionIcon from "~public/Icons/LeftBar/Configuracion";
import { Link } from "@inertiajs/react";

const LeftBar = () => {
    return (
        <nav className="lg:w-[90px] max-h-screen h-full bg-AzulPrimario absolute">
            <ul className="flex flex-col items-center lg:space-y-9">
                <div className="lg:pt-28"></div>
                <li>
                    <Link
                        href={route("turnos")}
                        className={
                            route().current("turnos")
                                ? "text-blue-500"
                                : "text-gray-500"
                        }
                    >
                        <CalendarIcon />
                    </Link>
                </li>
                <li>
                    <Link
                        href={route("agenda")}
                        className={
                            route().current("agenda")
                                ? "text-blue-500"
                                : "text-gray-500"
                        }
                    >
                        <AgendaIcon />
                    </Link>
                </li>
                <li>
                    <Link
                        href={route("pacientes")}
                        className={
                            route().current("pacientes")
                                ? "text-blue-500"
                                : "text-gray-500"
                        }
                    >
                        <PacienteIcon />
                    </Link>
                </li>
                <li>
                    <Link
                        href={route("obra-social")}
                        className={
                            route().current("obra-social")
                                ? "text-blue-500"
                                : "text-gray-500"
                        }
                    >
                        <ObraSocialIcon />
                    </Link>
                </li>
                <li>
                    <Link
                        href={route("especialidades")}
                        className={
                            route().current("especialidades")
                                ? "text-blue-500"
                                : "text-gray-500"
                        }
                    >
                        <EspecialidadesIcon />
                    </Link>
                </li>
                <li>
                    <Link
                        href={route("configuracion")}
                        className={
                            route().current("configuracion")
                                ? "text-blue-500"
                                : "text-gray-500"
                        }
                    >
                        <ConfiguracionIcon />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default LeftBar;
