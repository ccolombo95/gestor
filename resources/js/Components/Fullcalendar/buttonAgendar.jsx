import DownArrowWhite from "~public/Icons/turnosPage/downArrowWhite";
import PlusSymbol from "~public/Icons/turnosPage/plusSymbol";
import React from "react";

export default function ButtonAgendar({ handleOpenModal }) {
    return (
        <div className="w-[25%] felx flex-col">
            <div className="w-full flex justify-center">
                <button
                    onClick={handleOpenModal}
                    className="bg-AzulPrimario text-white justify-center flex items-center w-[264px] h-[42px] rounded-2xl border-[0.25px] border-[#C5C5C5] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                >
                    <div className="w-[20%] flex justify-start ml-[15px]">
                        <PlusSymbol />
                    </div>
                    <div className="w-[60%] flex justify-center">
                        <h1>Agendar Turnos</h1>
                    </div>
                    <div className="w-[20%] flex justify-end mr-[15px]">
                        <DownArrowWhite />
                    </div>
                </button>
            </div>
        </div>
    );
}
