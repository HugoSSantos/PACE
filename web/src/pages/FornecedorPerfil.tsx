import * as Dialog from '@radix-ui/react-dialog'
import { SideBar } from "../components/SideBar";


export function FornecedorPerfil(){
    return(
        <div className='flex'>
            <SideBar/>
            <div className='flex flex-col'>
                <div>

                </div>
                <div>
                <div className="flex flex-1 items-start justify-center object-fill mt-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
                    <div className="flex flex-col w-full ">
                            <div className="flex p-1.5 w-full">
                                <div className="border rounded-lg w-full">
                                    <table className="min-w-full divide-y-8">
                                        <thead className="bg-[#D9D9D9]">
                                            <th scope="col" className="px-6 py-4 text-xs">Fornecedor</th>
                                            <th scope="col" className="px-6 py-4 text-xs">Produto</th>
                                            <th scope="col" className="px-6 py-4 text-xs">Valor</th>
                                            <th scope="col" className="px-6 py-4 text-xs">Avaliação</th>
                                            <th scope="col" className="px-6 py-4 text-xs">Detalhes</th>
                                        </thead>
                                        <tbody className="divide-y-8">
                                            {/* {elementos.map(item => (
                                                <TableItems
                                                    fornecedor={item.fornecedor}
                                                    produto={item.produto}
                                                    valor={item.valor}
                                                    avaliacao={item.avalicao}
                                                    image={item.image}
                                                />
                                            )

                                            )} */}
                                        </tbody>

                                    </table>

                                </div>
                            </div>
                        
                    </div>
                    
                
                </div>
                </div>
            </div>
            <div className="flex flex-2 w-full items-center justify-center">
                <Dialog.Trigger className='flex items-center py-3 px-4 bg-slate-600 text-white'>
                    Adicionar Pedido
                </Dialog.Trigger>
            </div>
        </div>
    )
}