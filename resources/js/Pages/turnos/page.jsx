"use client";

import React, { useState, useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

//-----------FULL CALENDAR IMPORTS-------------
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGrid from "@fullcalendar/timegrid";
//-----------FULL CALENDAR IMPORTS-------------

import "./Calendar.css";
import ModalAgendarTurnos from "@/components/modal/modalAgendarTurnos";
import TopFullCallendar from "@/components/Fullcalendar/topFullCallendar";
import ButtonAgendar from "@/components/Fullcalendar/buttonAgendar";

const turnosPage = () => {
    const [customTitle, setCustomTitle] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [actualview, setActualview] = useState("Semana");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [diaModal, setDiaModal] = useState("");
    const [horarioModalStart, setHorarioModalStart] = useState("");
    const [horarioModalEnd, setHorarioModalEnd] = useState("");

    const calendarRef = useRef(null);

    const monthNames = {
        0: "Ene",
        1: "Feb",
        2: "Mar",
        3: "Abr",
        4: "May",
        5: "Jun",
        6: "Jul",
        7: "Ago",
        8: "Sep",
        9: "Oct",
        10: "Nov",
        11: "Dic",
    };

    const handleDatesSet = (dateInfo) => {
        setIsMenuOpen(false);
        const start = dateInfo.start;
        const startMonth = monthNames[start.getMonth()];
        const startYear = start.getFullYear();
        const nextMonthIndex = (start.getMonth() + 1) % 12;
        const nextYear = start.getMonth() === 11 ? startYear + 1 : startYear;
        const nextMonth = monthNames[nextMonthIndex];
        setCustomTitle(`${startMonth} ${startYear} - ${nextMonth} ${nextYear}`);
    };
    const [turnos, setTurnos] = useState([
        {
            id: "1",
            title: "Juan Pérez",
            start: "2025-01-07T10:00:00",
            end: "2025-01-07T11:00:00",
            details: {
                nombreApellido: "Juan Pérez",
                fechaNacimiento: "1990-01-01",
                sexo: "Masculino",
                dni: "12345678",
                cobertura: "Obra Social",
                telefono: "123456789",
                email: "juan@gmail.com",
                motivoConsulta: "Consulta General",
            },
        },
        {
            id: "2",
            title: "Ana Gómez",
            start: "2025-01-07T14:00:00",
            end: "2025-01-07T15:00:00",
            details: {
                nombreApellido: "Ana Gómez",
                fechaNacimiento: "1985-05-10",
                sexo: "Femenino",
                dni: "87654321",
                cobertura: "Prepaga",
                telefono: "987654321",
                email: "ana@gmail.com",
                motivoConsulta: "Revisión Médica",
            },
        },
        {
            id: "3",
            title: "Carlos Ruiz",
            start: "2025-01-08T19:10:00",
            end: "2025-01-08T20:00:00",
            details: {
                nombreApellido: "Carlos Ruiz",
                fechaNacimiento: "1975-08-20",
                sexo: "Masculino",
                dni: "34567890",
                cobertura: "Sin Cobertura",
                telefono: "654321987",
                email: "carlos@gmail.com",
                motivoConsulta: "Especialidad",
            },
        },
        {
            id: "4",
            title: "Laura Méndez",
            start: "2025-01-09T18:00:00",
            end: "2025-01-09T19:00:00",
            details: {
                nombreApellido: "Laura Méndez",
                fechaNacimiento: "1993-03-15",
                sexo: "Femenino",
                dni: "98712345",
                cobertura: "Obra Social",
                telefono: "321654987",
                email: "laura@gmail.com",
                motivoConsulta: "Consulta General",
            },
        },
    ]);

    const handleDateSelect = (event) => {
        event.preventDefault();
        console.log("selectInfo");
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        if (data.NombreyApellido) {
            const [hours, minutes] = horarioModalStart.split(":");
            const startDate = new Date(diaModal);
            startDate.setHours(hours);
            startDate.setMinutes(minutes);
            const isoStartDate = startDate.toISOString();

            const newTurno = {
                id: Date.now().toString(),
                title: data.NombreyApellido,
                start: isoStartDate,
                end: isoStartDate,
                details: {
                    nombreApellido: data.NombreyApellido,
                    fechaNacimiento: data.FechaNacimiento,
                    sexo: data.Sexo,
                    dni: data.DNI,
                    cobertura: data.Cobertura,
                    telefono: data.Telefono,
                    email: data.Email,
                    motivoConsulta: data.MotivoConsulta,
                },
            };
            setTurnos([...turnos, newTurno]);
            handleCloseModal();
        }
    };

    const handlePrev = () => {
        const calendarApi = calendarRef.current?.getApi();
        if (calendarApi) calendarApi.prev();
    };

    const handleNext = () => {
        const calendarApi = calendarRef.current?.getApi();
        if (calendarApi) calendarApi.next();
    };

    const changeView = (view) => {
        if (view === "dayGridMonth") {
            setActualview("Mes");
        } else if (view === "timeGridDay") {
            setActualview("Dia");
        } else if (view === "timeGridWeek") {
            setActualview("Semana");
        }
        const calendarApi = calendarRef.current?.getApi();
        if (calendarApi) {
            calendarApi.changeView(view);
        }
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleDateChange = (event) => {
        const id = event.target.id;
        const value = event.target.value;
        if (id === "Fecha") {
            setDiaModal(value);
        } else if (id === "Horario") {
            setHorarioModalStart(value);
        } else if (id === "Horario2") {
            setHorarioModalEnd(value);
        }
    };
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <section>
                <TopFullCallendar
                    actualview={actualview}
                    customTitle={customTitle}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                    setIsMenuOpen={setIsMenuOpen}
                    isMenuOpen={isMenuOpen}
                    changeView={changeView}
                />
                <div className="flex h-full w-full">
                    <ButtonAgendar handleOpenModal={handleOpenModal} />
                    <div className="w-[80%]">
                        <FullCalendar
                            ref={calendarRef}
                            plugins={[dayGridPlugin, timeGrid]}
                            initialView="timeGridWeek"
                            events={turnos}
                            editable={false}
                            locale={"es"}
                            selectable={true}
                            select={handleDateSelect}
                            eventClick={(info) =>
                                alert(
                                    "Turno con:" +
                                        " " +
                                        info.event.extendedProps.details
                                            .nombreApellido
                                )
                            }
                            headerToolbar={false}
                            datesSet={handleDatesSet}
                        />
                    </div>
                </div>
                {isModalOpen && (
                    <ModalAgendarTurnos
                        diaModal={diaModal}
                        horarioModalStart={horarioModalStart}
                        horarioModalEnd={horarioModalEnd}
                        onDataChange={handleDateChange}
                        onClose={handleCloseModal}
                        handleDateSelect={handleDateSelect}
                    />
                )}
            </section>
        </AuthenticatedLayout>
    );
};

export default turnosPage;
