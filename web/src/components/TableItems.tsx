import { Equipe } from "../pages/Equipe";
import * as Dialog from '@radix-ui/react-dialog';
import { Compras } from "../pages/Compras";

interface tableItemsProps{
    fornecedor: string;
    produto: string;
    valor: number;
    avaliacao: string;
    image?: string;
    

}

export function TableItems({fornecedor, produto, valor, avaliacao, image}:tableItemsProps){

    return(
        <div>
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
            <td>
                <Dialog.Trigger asChild>
                    <button className="w-28 h-8 bg-black text-white rounded-md">
                        Ver detelhes
                    </button>
                </Dialog.Trigger>
            </td>
    </tr>
            <Dialog.Root>
            <Compras/>
        
            <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content className="w-52 h-52 bg-slate-700">
                <Dialog.Title className="DialogTitle">Consulta de Compras</Dialog.Title>
                <Dialog.Description className="DialogDescription">
                Make changes to your profile here. Click save when you're done.
                </Dialog.Description>
                <form>
                    <label>Fornecedor</label>
                    <input type="text" value="Arcelar Michelan" disabled/>
                </form>
               
                <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                <Dialog.Close asChild>
                    <button className="Button green">Save changes</button>
                </Dialog.Close>
                </div>

                <Dialog.Close asChild>
                <button className="IconButton" aria-label="Close">
                    Close
                </button>
                </Dialog.Close>

            </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
        </div>
        
   
    )
}