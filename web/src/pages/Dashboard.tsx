import { Card } from "../components/Card";
import { SideBar } from "../components/SideBar";
import { TableItems } from "../components/TableItems";

export function Dashboard(){

    const elementos = [{
        id: 1,
        fornecedor: "Arcelar Michelan",
        produto: "Governo",
        valor: 105873.14,
        avalicao: "nao entregue",
        image: '/vite.svg'
    },
    {
        id: 2,
        fornecedor: "Dell Brasil",
        produto: "Dell 14",
        valor: 7873.14,
        avalicao: "chegou",
    },
    {
        id: 3,
        fornecedor: "Dell Brasil",
        produto: "Dell 14",
        valor: 7873.14,
        avalicao: "chegou",
    },
    {
        id: 4,
        fornecedor: "Dell Brasil",
        produto: "Dell 14",
        valor: 7873.14,
        avalicao: "chegou",
    },
    {
        id: 5,
        fornecedor: "Dell Brasil",
        produto: "Dell 14",
        valor: 7873.14,
        avalicao: "chegou",
    },
    {
        id: 5,
        fornecedor: "Dell Brasil",
        produto: "Dell 14",
        valor: 7873.14,
        avalicao: "chegou",
    },
    {
        id: 5,
        fornecedor: "Dell Brasil",
        produto: "Dell 14",
        valor: 7873.14,
        avalicao: "chegou",
    },
    {
        id: 5,
        fornecedor: "Dell Brasil",
        produto: "Dell 14",
        valor: 7873.14,
        avalicao: "chegou",
    },
    {
        id: 5,
        fornecedor: "Dell Brasil",
        produto: "Dell 14",
        valor: 7873.14,
        avalicao: "chegou",
    },
    {
        id: 5,
        fornecedor: "Dell Brasil",
        produto: "Dell 14",
        valor: 7873.14,
        avalicao: "chegou",
    }
]

    return(
        <div className="flex object-fill max-h-[100vh]">
            <SideBar/>
            <div className="flex flex-2 w-full flex-col object-fill justify-start">
                <div className="grid grid-cols-auto-fill mt-4">
                    <Card title="Melhor Fornecedor" description="Indica o melhor forcenedor" nomeItem="Nome do Fornecedor"/>
                    <Card title="Produto Mais Comprado" description="Indica o produto mais comprado" nomeItem="Nome do Produto"/>
                    <Card title="Categoria Mais Comprada" description="Indica a categoria mais comprada" nomeItem="Nome da Categoria"/>
                    <Card title="Setor com mais solicitação" description="Indica o setor que mais faz solicitação" nomeItem="Nome do Setor"/>
                </div>
                <div className="flex flex-1 max-h-[70vh] items-start justify-center object-fill mt-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
                    <div className="flex flex-col w-full ">
                            <div className="flex p-1.5 w-full">
                                <div className="flex w-full">
                                    <table className="min-w-full divide-y-8">
                                        <thead className="flex bg-[#D9D9D9]">
                                            <th scope="col" className="flex-1 px-6 py-4 text-xs">Fornecedor</th>
                                            <th scope="col" className="flex-1 px-6 py-4 text-xs">Produto</th>
                                            <th scope="col" className="flex-1 px-6 py-4 text-xs">Valor</th>
                                            <th scope="col" className="flex-1 px-6 py-4 text-xs">Avaliação</th>
                                            <th scope="col" className="flex-1 px-6 py-4 text-xs">Detalhes</th>
                                        </thead>
                                        <tbody className="divide-y-8">
                                            {elementos.map(item => (
                                                <TableItems
                                                    fornecedor={item.fornecedor}
                                                    produto={item.produto}
                                                    valor={item.valor}
                                                    avaliacao={item.avalicao}
                                                    image={item.image}
                                                    url="/fornecedorperfil"
                                                />
                                            )

                                            )}
                                        </tbody>

                                    </table>

                                </div>
                            </div>
                        
                    </div>
                    
                
                </div>
            </div>

        </div>
    )
}