import { SideBar } from "../components/SideBar";
import { Dashboard } from "./Dashboard";
import {MagnifyingGlass} from "phosphor-react";
import { CardFornecedor } from "../components/CardFornecedor";

export function Fornecedores(){

    const elementos =[
        {
            image: "/vite.svg",
            categoria: "Tecnologia",
            quantidade: 10,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Tecnologia",
            quantidade: 10,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Tecnologia",
            quantidade: 10,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Tecnologia",
            quantidade: 10,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Tecnologia",
            quantidade: 10,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Tecnologia",
            quantidade: 10,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Tecnologia",
            quantidade: 10,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Tecnologia",
            quantidade: 10,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30,
            url: "/fornecedorperfil"
        }
    ]

    return(
        <div className="flex max-h-[100vh]">
            <SideBar/>
            <div className="flex flex-2 w-full flex-col">
                <div className="w-full mt-8 ">
                    <div className="w-[50%] flex-1 ml-12 border border-black items-center justify-center p-2">
                        <MagnifyingGlass size={24} className="absolute"/>
                        <input type="text" className="w-full px-8" placeholder="Pesquise sua categoria"/>
                    </div>
                    <div className="flex flex-row ml-12 h-8 w-[50%]">
                        <p className="text-xs">Organizado por: <select name="" id="" className="bg-transparent">
                            <option value="Mais usada">Mais Comprada</option>
                            <option value="Menos usada">Menos Comprada</option>
                            <option value="Maior quantidade">Maior Quantidade</option>
                            <option value="Menor quantidade">Menor Quantidade</option>
                            </select></p></div>
                    <div className="max-h-[80vh] overflow-x-scroll scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
                        <div className="grid grid-cols-auto-fit">
                            {
                                elementos.map( item => (
                                    <CardFornecedor image={item.image} descricao={item.categoria} quantity={item.quantidade} url={item.url}/>
                                )
                                    
                                )
                            }
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}