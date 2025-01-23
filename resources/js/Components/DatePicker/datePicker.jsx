'use client'

import React, { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // Necesario para capturar clicks

const DatePicker = () => {
  const calendarRef = useRef(null); // Para acceder al calendario
  const [showCalendar, setShowCalendar] = useState(false); // Estado para mostrar/ocultar el calendario
  const [selectedDate, setSelectedDate] = useState("Día"); // Fecha seleccionada

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr); // Actualiza el texto del botón con la fecha seleccionada
    setShowCalendar(false); // Oculta el calendario
  };

  return (
    <div className="relative">
      {/* Botón personalizado */}
      <button
        onClick={() => setShowCalendar(!showCalendar)}
        className="flex items-center justify-between bg-white border border-gray-300 rounded-md px-4 py-2 w-32"
      >
        <span className="text-gray-600">Dia</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-blue-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 00-1-1H6zm1 3V3h6v2H7z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Calendario */}
      {showCalendar && (
        <div className="absolute z-10 bg-white border border-gray-300 rounded-md w-full ">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            locale="es"
            dateClick={handleDateClick}
            ref={calendarRef}
          />
        </div>
      )}
    </div>
  );
};

export default DatePicker;