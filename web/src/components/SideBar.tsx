import { Note, SignOut, SquaresFour, Storefront, UserSquare } from "phosphor-react";
import { Navegator } from "./Navagator";

interface sideBarProps{
    name: string;
    email: string;
    image?: string;
}

export function SideBar({name, email, image}:sideBarProps) {

    return(
        <div className="flex flex-1 flex-col items-center justify-center min-h-[100vh] bg-[#f37421]">
            <div className="flex flex-col  h-[45%]  items-center justify-center">
                
                <img src={image} alt="perfil" className="flex w-40 h-40 border mt-10 rounded-full items-center justify-center"/>
                
                <h1 className="w-56 h-5 mt-8 text-2xl bold">
                    {name}
                </h1>
                <label htmlFor="" className="w-56 h-5 mt-4">
                    {email}
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
            <div className="flex flex-1 p-6">
                    <a href="/" className="flex w-60 items-center  justify-center mt-4 group hover:bg-transparent cursor-pointer">
                        <SignOut size={24} className="text-white  group-hover:text-black"/>
                        <label htmlFor="" className="w-48 h-6 px-2 items-center text-white  group-hover:text-black cursor-pointer">
                            Sair
                        </label>
                    </a>
            </div>
        </div>
    )
}