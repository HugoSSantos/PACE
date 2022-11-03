import { SideBar } from "../components/SideBar";
import { Dashboard } from "./Dashboard";
import {MagnifyingGlass} from "phosphor-react";
import { CardFornecedor } from "../components/CardFornecedor";

export function Fornecedores(){

    const elementos =[
        {
            image: "/vite.svg",
            categoria: "Tecnologia",
            quantidade: 10
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30
        },
        {
            image: "/vite.svg",
            categoria: "Tecnologia",
            quantidade: 10
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30
        },
        {
            image: "/vite.svg",
            categoria: "Tecnologia",
            quantidade: 10
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30
        },
        {
            image: "/vite.svg",
            categoria: "Grafica",
            quantidade: 30
        }
    ]

    return(
        <div className="flex max-h-[100vh]">
            <SideBar/>
            <div className="flex flex-2 w-full flex-col">
                <div className="w-full mt-12 ">
                    <div className="w-[50%] flex-1 ml-12 border border-black items-center justify-center p-2">
                        <MagnifyingGlass size={24} className="absolute"/>
                        <input type="text" className="w-full px-8" placeholder="Pesquise sua categoria"/>
                    </div>
                    <div className="h-[35rem] overflow-x-scroll scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
                        <div className="mt-16 grid grid-cols-auto-fit">
                            {
                                elementos.map( item => (
                                    <CardFornecedor image={item.image} category={item.categoria} quantity={item.quantidade}/>
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