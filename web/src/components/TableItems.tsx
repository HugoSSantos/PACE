import { Equipe } from "../pages/Equipe";
import * as Dialog from '@radix-ui/react-dialog';
import { Compras } from "../pages/Compras";

interface tableItemsProps{
    fornecedor: string;
    produto: string;
    valor: number;
    avaliacao: string;
    image?: string;
    url: string;
    

}

export function TableItems({fornecedor, produto, valor, avaliacao, image, url}:tableItemsProps){

    return(
        <div className="flex w-full">
            <tr className="flex w-full items-center">
            <td className="flex flex-1 px-6 py-4 text-sm text-gray-800 items-center justify-center whitespace-nowrap">
                {image ? <img src={image} alt="perfil" className="rounded-full w-6 h-6 mr-1"/>  : <div className="w-6 h-6 mr-1 bg-gray-600 rounded-full"></div>}
                {fornecedor}
            </td>
            <td className="flex-1 px-6 py-4 text-sm text-gray-800 text-center justify-center whitespace-nowrap">
                {produto}
            </td>
            <td className="flex-1 px-6 py-4 text-sm font-medium text-center justify-center whitespace-nowrap">
                {valor}
            </td>
            <td className="flex-1 px-6 py-4 text-sm font-medium text-center justify-center whitespace-nowrap">
                {avaliacao}
            </td>
            <td className="flex-1 px-6 py-4 text-sm font-medium items-center text-center whitespace-nowrap">
                <a href={url} className="flex m-auto w-32 h-6 items-center justify-center bg-black text-white rounded-md ">
                    Ver detelhes
                </a>
            </td>
    </tr>
        </div>
        
   
    )
}