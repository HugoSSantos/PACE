import { Card } from "../components/Card";
import { SideBar } from "../components/SideBar";
import { TableItems } from "../components/TableItems";

export function Dashboard(){

    const elementos = [{
        id: 1,
        loja: "10",
        produto: "dell",
        preco: 5873.14,
        setor: "compras",
        diapedido: `12/10/2022`,
        prevEntrega: "20",
        entrega: `04/11/2022`,
    },
    {
        id: 2,
        loja: "18",
        produto: "material de impressão",
        preco: 250.00,
        setor: "marketing",
        diapedido: `01/10/2022`,
        prevEntrega: "10",
        entrega: `${new Date().getDate().toString()}/${(new Date().getMonth() + 1).toString()}/${new Date().getFullYear().toString()}`,
    },
    {
        id: 3,
        loja: "12",
        produto: "material de impressão",
        preco: 550.00,
        setor: "marketing",
        diapedido: `11/10/2022`,
        entrega: `${new Date().getDate().toString()}/${(new Date().getMonth() + 1).toString()}/${new Date().getFullYear().toString()}`,
    }
]

    return(
        <div className="flex object-contain h-[100vh]">
            <SideBar/>
            <div className="flex flex-col object-fill justify-start">
                <div className="flex w-full h-56 items-center justify-center mt-16">
                    <Card title="Melhor Fornecedor" description="Indica o melhor forcenedor" nomeItem="Nome do Fornecedor"/>
                    <Card title="Produto Mais Comprado" description="Indica o produto mais comprado" nomeItem="Nome do Produto"/>
                    <Card title="Categoria Mais Comprada" description="Indica a categoria mais comprada" nomeItem="Nome da Categoria"/>
                    <Card title="Setor com mais solicitação" description="Indica o setor que mais faz solicitação" nomeItem="Nome do Setor"/>
                </div>
                <div className="flex flex-1 items-start justify-center object-fill mt-6">
                    {/* <table className="w-[90%] h-[65%] mt-14 table-fixed">
                        {/* <caption className="my-10 text-3xl">Nossos elementos</caption> }
                        <thead className="border-2 border-black bg-gray-300">
                            <th className="border-2 border-black w-6">ID</th>
                            <th className="border-2 border-black w-14">Loja</th>
                            <th className="border-2 border-black w-16">Produto</th>
                            <th className="border-2 border-black w-12">Preço</th>
                            <th className="border-2 border-black w-16">Setor</th>
                            <th className="border-2 border-black w-16">Dia do Pedido</th>
                            <th className="border-2 border-black w-12">Previsão de Entrega</th>
                            <th className="border-2 border-black w-16">Dia da Entrega</th>
                        </thead>
                        <tbody className="bg-gray-300">
                            {elementos.map(item => (
                                <tr key={item.id}>
                                    <TableItems 
                                        id={item.id} loja={item.loja} 
                                        produto={item.produto} preco={item.preco} 
                                        setor={item.setor} diapedido={item.diapedido} 
                                        prevEntrega={item.prevEntrega} entrega={item.entrega}/>
                                </tr>

                            ))}
                        </tbody>
                        <td>
                            <tr></tr>
                        </td>
                    </table> */}

                    <div className="flex flex-1 w-full h-full items-center justify-center">
                        <img src="/vendas por cartegoria.png" alt="Graph" />
                    </div>


                </div>
                
                
            </div>

        </div>
    )
}