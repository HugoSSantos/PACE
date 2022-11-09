import { Note, SquaresFour, Storefront, UserSquare } from "phosphor-react";
import { Navegator } from "./Navagator";

export function SideBar(){

    return(
        <div className="flex flex-1 flex-col min-h-[100vh] bg-[#f37421]">
            <div className="flex flex-col  h-[45%]  items-center">
                <div className="flex w-36 h-36 border mt-10 rounded-full bg-white">
                    {/* Espaço para colocar a imagem que será recebida pelo login do google API */}
                </div>
                <label htmlFor="" className="w-56 h-5 bg-white mt-8 rounded-xl">
                    {/*Deverá Colocar o nome do usuário recebido pelo login do google */}
                </label>
                <label htmlFor="" className="w-56 h-5 bg-white mt-4 rounded-xl">
                    {/*Deverá colocar o email do usuário recebido pelo login do google */}
                </label>
                </div>
                <div className="flex flex-col h-[45%] items-center justify-start mt-4 p-3">
                    <a href="/" className="flex w-60 items-center  justify-center mt-4 group hover:bg-transparent cursor-pointer">
                        <SquaresFour size={24} className="text-white  group-hover:text-black"/>
                        <label htmlFor="" className="w-48 h-6 px-2 items-center text-white  group-hover:text-black cursor-pointer">
                            Dashboard
                        </label>
                    </a>
                    <a href="/" className="flex w-60 items-center  justify-center mt-4 group hover:bg-transparent cursor-pointer">
                        <Storefront size={24} className="text-white  group-hover:text-black"/>
                        <label htmlFor="" className="w-48 h-6 px-2 items-center text-white  group-hover:text-black cursor-pointer">
                            Fornecedores
                        </label>
                    </a>
                    <a href="/" className="flex w-60 items-center  justify-center mt-4 group hover:bg-transparent cursor-pointer">
                        <Note size={24} className="text-white  group-hover:text-black"/>
                        <label htmlFor="" className="w-48 h-6 px-2 items-center text-white  group-hover:text-black cursor-pointer">
                            Compras
                        </label>
                    </a>
                    <a href="/" className="flex w-60 items-center  justify-center mt-4 group hover:bg-transparent cursor-pointer">
                        <UserSquare size={24} className="text-white  group-hover:text-black"/>
                        <label htmlFor="" className="w-48 h-6 px-2 items-center text-white  group-hover:text-black cursor-pointer">
                            Perfil
                        </label>
                    </a>
                </div>
                <div className="flex flex-col flex-1 items-center p-6">
                    <button className="w-56 h-5 bg-white mt-4 items-center rounded-xl hover:bg-gray-600 hover:text-white">
                        Deslogar
                    </button>
            </div>
        </div>
    )
}