import { Card } from "../components/Card";
import { SideBar } from "../components/SideBar";
export function Dashboard(){

    const elementos = [{
        id: 1,
        loja: 10,
        produto: "dell",
        preco: 5873.14,
        setor: "compras",
        diapedido: `12/10/2022`,
        prevEntrega: 20,
        entrega: `04/11/2022`,
    },
    {
        id: 2,
        loja: 18,
        produto: "material de impressão",
        preco: 250.00,
        setor: "marketing",
        diapedido: `01/10/2022`,
        prevEntrega: 10,
        entrega: `25/10/2022`,
    }]

    return(
        <div className="flex  h-[100vh]">
            <SideBar/>
            <div className="flex flex-1 flex-col text-center justify-center">
                <div className="flex w-[85%] h-56 items-center justify-center mx-40 mt-16">
                    <Card title="Melhor Fornecedor" description="Indica o melhor forcenedor" nomeItem="Nome do Fornecedor"/>
                    <Card title="Produto Mais Comprado" description="Indica o produto mais comprado" nomeItem="Nome do Produto"/>
                    <Card title="Categoria Mais Comprada" description="Indica a categoria mais comprada" nomeItem="Nome da Categoria"/>
                    <Card title="Setor com mais solicitação" description="Indica o setor que mais faz solicitação" nomeItem="Nome do Setor"/>
                </div>
                <div className="flex flex-1 items-start justify-center">
                    <table className="w-[90%] h-[65%] mt-14">
                        {/* <caption className="my-10 text-3xl">Nossos elementos</caption> */}
                        <thead className="border-2 border-black">
                            <th className="border-2 border-black">ID</th>
                            <th className="border-2 border-black">Loja</th>
                            <th className="border-2 border-black">Produto</th>
                            <th className="border-2 border-black">Preço</th>
                            <th className="border-2 border-black">Setor</th>
                            <th className="border-2 border-black">Dia do Pedido</th>
                            <th className="border-2 border-black">Previsão de Entrega</th>
                            <th className="border-2 border-black">Dia da Entrega</th>
                        </thead>
                        <tbody>
                            {elementos.map(item => (
                                <tr key={item.id}>
                                    <th className="border-2 border-black">{item.id}</th>
                                    <th className="border-2 border-black">{item.loja}</th>
                                    <th className="border-2 border-black">{item.produto}</th>
                                    <th className="border-2 border-black">{item.preco}</th>
                                    <th className="border-2 border-black">{item.setor}</th>
                                    <th className="border-2 border-black">{item.diapedido}</th>
                                    <th className="border-2 border-black">{item.prevEntrega}</th>
                                    <th className="border-2 border-black">{item.entrega}</th>
                                </tr>

                            ))}
                        </tbody>
                        <td>
                            <tr></tr>
                        </td>
                    </table>
                </div>
                
                
            </div>

        </div>
    )
}