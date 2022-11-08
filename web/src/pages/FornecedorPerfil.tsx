import * as Dialog from '@radix-ui/react-dialog'
import { SideBar } from "../components/SideBar";


export function FornecedorPerfil(){
    return(
        <div className='flex'>
            <SideBar/>
            <div className="flex flex-2 w-full items-center justify-center">
                <Dialog.Trigger className='flex items-center py-3 px-4 bg-slate-600 text-white'>
                    Adicionar Pedido
                </Dialog.Trigger>
            </div>
        </div>
    )
}