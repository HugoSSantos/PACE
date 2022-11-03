
interface tableItemsProps{
    fornecedor: string;
    produto: string;
    valor: number;
    avaliacao: string;
    image?: string;
    

}

export function TableItems({fornecedor, produto, valor, avaliacao, image}:tableItemsProps){

    return(
        <tr>
            <td className="flex px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {image ? <img src={image} alt="perfil" className="rounded-full w-6 h-6 mr-1"/>  : <div className="w-6 h-6 mr-1 bg-gray-600 rounded-full"></div>}
                {fornecedor}
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {produto}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                {valor}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                {avaliacao}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <button className="w-28 h-8 bg-black text-white rounded-md">Ver detelhes</button>
            </td>
    </tr>
   
    )
}