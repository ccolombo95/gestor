import React, { useState } from "react";
import axios from "axios";

export default function ModalAgendarTurnos({
    onClose,
    diaModal,
    horarioModalStart,
    horarioModalEnd,
    onDataChange,
    handleDateSelect,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const csrfToken = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const [formData, setFormData] = useState({
        nombre_apellido: "",
        fecha_nacimiento: "",
        sexo: "",
        dni: "",
        cobertura: "",
        telefono: "",
        email: "",
        motivo_consulta: "",
        fecha_turno: "",
        hora_inicio: "",
        hora_fin: "",
        obra_social: "",
        afiliado_OB: "",
        titular_OB: "",
    });

    const handleDateChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/calendar",
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRF-TOKEN": csrfToken,
                    },
                }
            );

            if (response.status === 200 || response.status === 201) {
                alert("Turno agendado correctamente");
                onClose();
            } else {
                throw new Error("Error al agendar el turno");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Hubo un problema al agendar el turno");
        }
    };

    return (
        <div className="z-50 fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 flex justify-center items-center">
            <div className="bg-white w-[753px] p-5 rounded-sm border-[#C5C5C5] shadow-[0px_4px_8px_rgba(0,0,0,0.2)]">
                <div className="w-full justify-end flex">
                    <button onClick={onClose} className="">
                        X
                    </button>
                </div>
                <h2>Turnos</h2>
                <div className="flex mb-8 mt-4">
                    <div className="w-[70%] justify-start items-center flex space-x-[24px]">
                        <input
                            type="date"
                            id="Fecha"
                            name="fecha_turno"
                            value={formData.fecha_turno}
                            onChange={handleDateChange} // Asegúrate de que este manejador esté presente
                            className="bg-white text-black border border-gray-300 rounded-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[126px] h-[42px] px-2"
                        />

                        <div className="flex items-center space-x-3">
                            <h1>De:</h1>
                            <div>
                                <input
                                    type="time"
                                    id="HorarioInicio"
                                    name="hora_inicio"
                                    value={formData.hora_inicio}
                                    onChange={handleDateChange}
                                    className="bg-white text-black border border-gray-300 rounded-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[90px] h-[42px] px-2"
                                />
                            </div>
                            <h1>a:</h1>
                            <div>
                                <input
                                    id="HorarioFin"
                                    type="time"
                                    name="hora_fin"
                                    value={formData.hora_fin}
                                    onChange={handleDateChange}
                                    className="bg-white text-black border border-gray-300 rounded-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[90px] h-[42px] px-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="mb-3">Datos del paciente</h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 mb-8">
                        <div className="mb-4 mr-[11px]">
                            <label className="block font-bold mb-1">
                                Nombre y Apellido
                            </label>
                            <input
                                className="w-full p-2 border border-[#ccc] rounded"
                                type="text"
                                placeholder="Nombre y Apellido"
                                name="nombre_apellido"
                                value={formData.nombre_apellido}
                                onChange={handleDateChange} // Asegúrate de que este manejador esté presente
                            />
                        </div>
                        <div className="mb-4 ml-[11px]">
                            <label className="block font-bold mb-1">
                                F. de Nacimiento
                            </label>
                            <input
                                type="date"
                                className="w-full p-2 border border-[#ccc] rounded"
                                name="fecha_nacimiento"
                                value={formData.fecha_nacimiento}
                                onChange={handleDateChange} // Asegúrate de que este manejador esté presente
                            />
                        </div>
                        <div className="mb-4 mr-[11px]">
                            <label className="block font-bold mb-1">Sexo</label>
                            <input
                                className="w-full p-2 border border-[#ccc] rounded"
                                type="text"
                                name="sexo"
                                placeholder="Sexo"
                                value={formData.sexo}
                                onChange={handleDateChange}
                            />
                        </div>
                        <div className="mb-4 ml-[11px]">
                            <label className="block font-bold mb-1">DNI</label>
                            <input
                                className="w-full p-2 border border-[#ccc] rounded"
                                type="text"
                                name="dni"
                                placeholder="DNI"
                                value={formData.dni}
                                onChange={handleDateChange} // Asegúrate de que este manejador esté presente
                            />
                        </div>
                        <div className="mb-4 mr-[11px]">
                            <label className="block font-bold mb-1">
                                Cobertura
                            </label>
                            <input
                                className="w-full p-2 border border-[#ccc] rounded"
                                type="text"
                                name="cobertura"
                                placeholder="Cobertura"
                                value={formData.cobertura}
                                onChange={handleDateChange} // Asegúrate de que este manejador esté presente
                            />
                        </div>
                        <div className="mb-4 ml-[11px]">
                            <label className="block font-bold mb-1">
                                Teléfono
                            </label>
                            <input
                                className="w-full p-2 border border-[#ccc] rounded"
                                type="text"
                                name="telefono"
                                placeholder="Teléfono"
                                value={formData.telefono}
                                onChange={handleDateChange} // Asegúrate de que este manejador esté presente
                            />
                        </div>
                        <div className="mb-4 mr-[11px]">
                            <label className="block font-bold mb-1">
                                Email
                            </label>
                            <input
                                className="w-full p-2 border border-[#ccc] rounded"
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleDateChange} // Asegúrate de que este manejador esté presente
                            />
                        </div>
                        <div className="mb-4 ml-[11px]">
                            <label className="block font-bold mb-1">
                                Motivo de consulta
                            </label>
                            <input
                                className="w-full p-2 border border-[#ccc] rounded"
                                type="text"
                                name="motivo_consulta"
                                placeholder="Motivo de consulta"
                                value={formData.motivo_consulta}
                                onChange={handleDateChange} // Asegúrate de que este manejador esté presente
                            />
                        </div>
                        <div className="mb-4 mr-[11px]">
                            <label className="block font-bold mb-1">
                                Titular de la obra social
                            </label>
                            <input
                                className="w-full p-2 border border-[#ccc] rounded"
                                type="text"
                                placeholder="Titular de obra social"
                                name="titular_OB"
                                value={formData.titular_OB}
                                onChange={handleDateChange} // Asegúrate de que este manejador esté presente
                            />
                        </div>
                        <div className="mb-4 mr-[11px]">
                            <label className="block font-bold mb-1">
                                Numero de afiliado
                            </label>
                            <input
                                className="w-full p-2 border border-[#ccc] rounded"
                                type="text"
                                placeholder="Numero de afiliado"
                                name="afiliado_OB"
                                value={formData.afiliado_OB}
                                onChange={handleDateChange} // Asegúrate de que este manejador esté presente
                            />
                        </div>
                        <div className="mb-4 mr-[11px]">
                            <label className="block font-bold mb-1">
                                Obra social
                            </label>
                            <input
                                className="w-full p-2 border border-[#ccc] rounded"
                                type="text"
                                placeholder="Obra social"
                                name="obra_social"
                                value={formData.obra_social}
                                onChange={handleDateChange} // Asegúrate de que este manejador esté presente
                            />
                        </div>
                    </div>
                    <div className="flex w-full items-center justify-center">
                        <button className="bg-AzulPrimario text-white justify-center flex items-center w-[100%] h-[42px] rounded-2xl border-[0.25px] border-[#C5C5C5] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                            Confirmar turno
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
