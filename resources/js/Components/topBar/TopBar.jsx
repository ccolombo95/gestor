import CirculoBlanco from "~public/Icons/TopBar/CirculoBlanco";
import CirculoBlancoUsuario from "~public/Icons/TopBar/CirculoBlancoUsuario";
import React from "react";

const TopBar = () => {
    return (
        <nav className=" lg:h-[80px] bg-AzulPrimario w-full flex items-center font-bold text-white text-xl">
            <div className="w-[50%] justify-start flex items-center space-x-3 ml-4 ">
                <CirculoBlanco />
                <h1>NombreAPP</h1>
            </div>
            <div className="w-[50%] flex flex-row justify-end items-center space-x-3 mr-4">
                <h1>Nombre De Usuario</h1>
                <CirculoBlancoUsuario />
            </div>
        </nav>
    );
};

export default TopBar;
