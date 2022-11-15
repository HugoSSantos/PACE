import * as Dialog from '@radix-ui/react-dialog';
import { MagnifyingGlass } from 'phosphor-react';
import { CardFornecedor } from '../components/CardFornecedor';
import { SideBar } from '../components/SideBar';

import { TableItems } from '../components/TableItems';

export function Compras(){

    const elementos = [{
        id: 1,
        fornecedor: "Arcelar Michelan",
        produto: "Governo",
        valor: 105873.14,
        avalicao: "nao entregue",
        image: '/vite.svg',
        url: "/fornecedorperfil"
    },
    {
        id: 2,
        fornecedor: "Dell Brasil",
        produto: "Dell 14",
        valor: 7873.14,
        avalicao: "chegou",
        url: "/fornecedorperfil"
    },
    {
        id: 3,
        fornecedor: "Dell Brasil",
        produto: "Dell 14",
        valor: 7873.14,
        avalicao: "chegou",
        url: "/fornecedorperfil"
    },
    {
        id: 4,
        fornecedor: "Dell Brasil",
        produto: "Dell 14",
        valor: 7873.14,
        avalicao: "chegou",
        url: "/fornecedorperfil"
    },
    {
        id: 5,
        fornecedor: "Dell Brasil",
        produto: "Dell 14",
        valor: 7873.14,
        avalicao: "chegou",
        url: "/fornecedorperfil"
    },
    {
        id: 5,
        fornecedor: "Dell Brasil",
        produto: "Dell 14",
        valor: 7873.14,
        avalicao: "chegou",
        url: "/fornecedorperfil"
    },
    {
        id: 5,
        fornecedor: "Dell Brasil",
        produto: "Dell 14",
        valor: 7873.14,
        avalicao: "chegou",
        url: "/fornecedorperfil"
    },
    {
        id: 5,
        fornecedor: "Dell Brasil",
        produto: "Dell 14",
        valor: 7873.14,
        avalicao: "chegou",
        url: "/fornecedorperfil"
    },
    {
        id: 5,
        fornecedor: "Dell Brasil",
        produto: "Dell 14",
        valor: 7873.14,
        avalicao: "chegou",
        url: "/fornecedorperfil"
    },
    {
        id: 5,
        fornecedor: "Dell Brasil",
        produto: "Dell 14",
        valor: 7873.14,
        avalicao: "chegou",
        url: "/fornecedorperfil"
    }
]
    
    return(
        <div className='flex max-h-[100vh]'>
            <SideBar/>
            <div className='flex flex-2 w-full flex-col object-fill justify-start'>
                <div className="w-full mt-8 ">
                    <div className="w-[50%] flex-1 ml-12 border border-black items-center justify-center p-2">
                        <MagnifyingGlass size={24} className="absolute"/>
                        <input type="text" className="w-full px-8" placeholder="Pesquise sua categoria"/>
                    </div>
                    <div className="flex flex-row ml-12 h-8 w-[50%]">
                        <p className="text-xs">Organizado por: <select name="" id="" className='bg-transparent'>
                            <option value="Mais usada">Mais Comprada</option>
                            <option value="Menos usada">Menos Comprada</option>
                            <option value="Maior quantidade">Maior Quantidade</option>
                            <option value="Menor quantidade">Menor Quantidade</option>
                            </select>
                        </p>
                    </div>
                </div>
                <div className="flex flex-1 items-start justify-center object-fill mt-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
                    <div className="flex flex-col w-full ">
                            <div className="flex p-1.5 w-full">
                                <div className="border rounded-lg w-full">
                                    <p>Organizado por <select name="" id="" className='bg-transparent'>
                                        <option value="">Mais bem avaliado</option>
                                        <option value="">Menos bem avaliado</option>
                                        <option value="">Mais Compras realizadas</option>
                                        <option value="">Menos Compras realizadas</option>    
                                    </select></p>
                                    <div className="flex flex-1 max-h-[90vh] items-start justify-center object-fill mt-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
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
                    </div>
                    
                
                </div>
                    
                
               
            </div>
            
        </div>
        
    )
}