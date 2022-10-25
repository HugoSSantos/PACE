import { Card } from "../components/Card";

export function Dashboard(){

    return(
        <div className="flex  h-[100vh]">
            <div className="flex flex-col w-[20%] bg-orange-400">
            <div className="flex flex-col  h-[40%]  items-center ">
                <div className="flex w-36 h-36 border mt-10 rounded-full bg-white">
                    {/* Espaço para colocar a imagem que será recebida pelo login do google API */}
                </div>
                <label htmlFor="" className="w-56 h-5 bg-white mt-8 rounded-xl">
                    {/*Deverá Colocar o nome do usuário recebido pelo login do google */}
                </label>
                <label htmlFor="" className="w-56 h-5 bg-white mt-4 rounded-xl">
                    {/*Deverá colocar o id do usuário recebido pelo login do google */}
                </label>
                </div>
                <div className="flex flex-col h-[40%] items-center justify-center mt-4 p-3">
                    <div className="flex w-60 items-center  justify-center mt-4 group hover:bg-transparent cursor-pointer">
                        <div className="w-5 h-5 rounded-full bg-white mr-2 group-hover:bg-gray-600  cursor-pointer"></div>
                        <label htmlFor="" className="w-48 h-6 px-2 items-center bg-white rounded-xl group-hover:bg-gray-600 group-hover:text-white cursor-pointer">
                            Dashboard
                        </label>
                    </div>
                    <div className="flex w-60 items-center  justify-center mt-4 group hover:bg-transparent cursor-pointer">
                        <div className="w-5 h-5 rounded-full bg-white mr-2 group-hover:bg-gray-600 cursor-pointer"></div>
                        <label htmlFor="" className="w-48 h-6 px-2 items-center bg-white rounded-xl group-hover:bg-gray-600 group-hover:text-white cursor-pointer">
                            Fornecedores
                        </label>
                    </div>
                    <div className="flex w-60 items-center  justify-center mt-4 group hover:bg-transparent cursor-pointer">
                        <div className="w-5 h-5 rounded-full bg-white mr-2 group-hover:bg-gray-600 cursor-pointer"></div>
                        <label htmlFor="" className="w-48 h-6 px-2 items-center bg-white rounded-xl group-hover:bg-gray-600 group-hover:text-white cursor-pointer">
                            Pedidos
                        </label>
                    </div>
                    <div className="flex w-60 items-center  justify-center mt-4 group hover:bg-transparent cursor-pointer">
                        <div className="w-5 h-5 rounded-full bg-white mr-2 group-hover:bg-gray-600 cursor-pointer"></div>
                        <label htmlFor="" className="w-48 h-6 px-2 items-center bg-white rounded-xl group-hover:bg-gray-600 group-hover:text-white cursor-pointer">
                            Configurações
                        </label>
                    </div>
                </div>
                <div className="flex flex-col flex-1 items-center p-6">
                    <label htmlFor="" className="w-56 h-5 bg-white mt-4 rounded-xl"></label>
                    <label htmlFor="" className="w-56 h-5 bg-white mt-4 rounded-xl">
                        {/*Deverá Nomear o menu de navegação */}
                    </label>
                </div>
            </div>
            <div className="flex flex-1 flex-col">
                <div className="w-full text-center justify-center">
                    <h1 className="text-5xl p-3 mt-4">Dashboard</h1>
                </div>
                <div className="flex w-full h-56 items-center justify-between mt-3">
                    <Card title="Melhor Fornecedor" description="Indica o melhor forcenedor" nomeItem="Nome do Fornecedor"/>
                    <Card title="Produto Mais Comprado" description="Indica o produto mais comprado" nomeItem="Nome do Produto"/>
                    <Card title="Categoria Mais Comprada" description="Indica a categoria mais comprada" nomeItem="Nome da Categoria"/>
                    <Card title="Setor com mais solicitação" description="Indica o setor que mais faz solicitação" nomeItem="Nome do Setor"/>
                </div>
                
                
            </div>

        </div>
    )
}