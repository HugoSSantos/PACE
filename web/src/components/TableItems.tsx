
interface tableItemsProps{
    id: number;
    loja: string;
    produto: string;
    preco: number;
    setor: string;
    diapedido: string;
    prevEntrega?: string;
    entrega: string;

}

export function TableItems({id,loja,produto, preco, setor, diapedido,prevEntrega="0",entrega}:tableItemsProps){

    return(
        <>
            <th className="border-2 border-black">{id}</th>
            <th className="border-2 border-black">{loja}</th>
            <th className="border-2 border-black">{produto}</th>
            <th className="border-2 border-black">{preco}</th>
            <th className="border-2 border-black">{setor}</th>
            <th className="border-2 border-black">{diapedido}</th>
            <th className="border-2 border-black">{prevEntrega}</th>
            <th className="border-2 border-black">{entrega}</th>
        </>
    )
}