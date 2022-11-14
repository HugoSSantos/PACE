import { MagnifyingGlass } from "phosphor-react";
import { CardFornecedor } from "../components/CardFornecedor";
import { SideBar } from "../components/SideBar";


export function Equipe(){

    const elementos = [
        {
            image: "/vite.svg",
            categoria: "Fulano",
            quantidade: 10
        },
        {
            image: "/vite.svg",
            categoria: "Beltrano",
            quantidade: 30
        },
        {
            image: "/vite.svg",
            categoria: "Ciclano",
            quantidade: 30
        },
        {
            image: "/vite.svg",
            categoria: "Alberlando",
            quantidade: 30
        },
        {
            image: "/vite.svg",
            categoria: "Marfiano",
            quantidade: 30
        },
        
    ]


    return(
    <div className="flex max-h-[100vh]">
        <SideBar name="Fulano de Tal" email="fdt@pace.com" image="https://avatars.githubusercontent.com/u/50108497?v=4.png"/>
        <div className="flex flex-2 w-full flex-col">
                <div className="w-full mt-8 ">
                    <div className="w-[50%] flex-1 ml-12 border border-black items-center justify-center p-2">
                        <MagnifyingGlass size={24} className="absolute"/>
                        <input type="text" className="w-full px-8" placeholder="Pesquise sua categoria"/>
                    </div>
                    <div className="flex flex-row ml-12 h-8 w-[50%]">
                        <p className="text-xs">Organizado por: <select name="" id="">
                            <option value="Mais usada">Mais Comprada</option>
                            <option value="Menos usada">Menos Comprada</option>
                            <option value="Maior quantidade">Maior Quantidade</option>
                            <option value="Menor quantidade">Menor Quantidade</option>
                            </select></p></div>
                    <div className="h-[36rem] overflow-x-scroll scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
                        <div className="grid grid-cols-auto-fit">
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