import DownArrow from "~public/Icons/turnosPage/downArrow";
import LeftArrow from "~public/Icons/turnosPage/leftArrow";
import RightArrow from "~public/Icons/turnosPage/rightArrow";
import React from "react";

export default function TopFullCallendar({
    actualview,
    customTitle,
    handleNext,
    handlePrev,
    setIsMenuOpen,
    isMenuOpen,
    changeView,
}) {
    return (
        <div className="flex w-full items-center my-7">
            <div className="flex w-[60%] justify-start h-10 ml-10 items-center text-center">
                <h1 className="TitleCalendario text-xl">Calendario</h1>
                <button className="fc-button ml-6 w-[67px] h-[38px]">
                    Dia
                </button>
                <div className="mx-6 space-x-3">
                    <button onClick={handlePrev} className="">
                        <LeftArrow />
                    </button>
                    <button onClick={handleNext} className="">
                        <RightArrow />
                    </button>
                </div>
                <h1 className="TitleCalendario text-xl">{customTitle}</h1>
            </div>
            {/* ------------Menu desplegable INICIO------------------- */}
            <div className=" flex justify-end items-center w-[40%]">
                <div
                    className={`absolute mt-[132px] mr-3 z-50 w-28 bg-white border-[0.25px] border-[#C2C2C2] rounded-b-md rounded-t-sm ${
                        isMenuOpen ? "block" : "hidden"
                    }`}
                >
                    <button
                        onClick={() => {
                            changeView("dayGridMonth");
                            setIsMenuOpen(false);
                        }}
                        className=""
                    >
                        Mes
                    </button>
                    <button
                        onClick={() => {
                            changeView("timeGridWeek");
                            setIsMenuOpen(false);
                        }}
                        className="block"
                    >
                        Semana
                    </button>
                    <button
                        onClick={() => {
                            changeView("timeGridDay");
                            setIsMenuOpen(false);
                        }}
                        className="block"
                    >
                        Día
                    </button>
                </div>
                <div className="flex mr-3">
                    <button
                        className="fc-button w-28 h-[60px] flex items-center justify-center"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {actualview}
                        <span className="mr-3"></span>
                        <DownArrow />
                    </button>
                </div>
            </div>
            {/* ------------Menu desplegable FIN------------------- */}
        </div>
    );
}
