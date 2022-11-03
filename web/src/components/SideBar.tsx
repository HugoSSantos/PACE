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
                    <Navegator name="Dashboard"/>
                    <Navegator name="Fornecedores"/>
                    <Navegator name="Compras"/>
                    <Navegator name="Perfil"/>

                </div>
                <div className="flex flex-col flex-1 items-center p-6">
                    <button className="w-56 h-5 bg-white mt-4 items-center rounded-xl hover:bg-gray-600 hover:text-white">
                        Deslogar
                    </button>
            </div>
        </div>
    )
}