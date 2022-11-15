import * as Dialog from '@radix-ui/react-dialog'
import { SideBar } from "../components/SideBar";
import { TableItems } from '../components/TableItems';


export function FornecedorPerfil(){

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
    },]

    return(
        <div className='flex'>
            <SideBar />
            <div className='flex flex-2 flex-col w-full'>
                <div className='flex h-[55%] flex-col mb-4 border-b border-gray-500'>
                    <div className='h-[80%]'>
                        <div className='flex justify-between p-10'>
                            <div className='flex'>
                                <div className='h-48 w-44 border border-black'></div>
                                <div className='ml-2'>
                                    <div>
                                        <h1 className='text-2xl'>Fornecedor</h1>
                                        <h3 className='text-gray-500 text-[0.6rem]'>Razão Social</h3>
                                    </div>
                                    <div>
                                        <p className=''>Fone</p>
                                        <a href="tel:+55" className='decoration-none'>()</a>
                                    </div>                         
                                    <div>
                                        <p>E-mail</p>
                                        <a href="mailto:" className='decoration-none'></a>
                                    </div>
                                    <div>
                                        <p className='p'>Site</p>
                                        <a href="http://" className='decoration-none'></a>
                                    </div>

                                    
                                
                                </div>
                                 
                            </div>
                            <div>
                                <h1>Dados Gerais</h1>
                                <div className='mt-4'>
                                    <h2>CNPJ</h2>
                                    <p className='text-gray-500 text-xs'>123.345.678-0001</p>
                                </div>
                                <div className='mt-4'>
                                    <h2>Inscrição Estadual</h2>
                                    <p className='text-gray-500 text-xs'>14/0001</p>
                                </div>
                                <div className='mt-4'>
                                    <h2>Endereço</h2>
                                    <p className='text-gray-500 text-xs flex-wrap overflow-x-auto max-w-[12rem]'>
                                        lcancabckjnasjcnaskjcbkjdvnk]
                                        jdscajs    bdckabscjabcandc
                                        nclkasnvdav
                                        asc kasckjndvjdk vkdhncjasudebfvkdslkcsac djkvndklmvv
                                        dvjkavjdsvs khsbvdjcifbchjvdbdcjann
                                    </p>
                                </div>
                            </div>
                            <div className='mr-14'>
                                <h1>Dados Bancarios(PJ)</h1>
                                <div className='mt-4'>
                                    <h2>Forma de Pagamento</h2>
                                    <p className='text-gray-500 text-xs'>123.345.678-0001</p>
                                </div>
                                <div className='mt-4'>
                                    <h2>Banco</h2>
                                    <p className='text-gray-500 text-xs'>123.345.678-0001</p>
                                </div>
                                <div className='mt-4'>
                                    <h2>Chave Pix</h2>
                                    <p className='text-gray-500 text-xs'>123.345.678-0001</p>
                                </div>
                                <div className='mt-4'>
                                    <h2>Contato Financeiro</h2>
                                    <p className='text-gray-500 text-xs'>fulanodetal@pace.com.br</p>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>

                    <div className="flex flex-1 w-full justify-between items-end mb-4">
                        <div className='ml-3'>
                            <h2 className='bold text-4xl'>4.16(*)</h2>
                            <p className='text-gray-500 text-xs'>Baseado em um total de 45 compras</p>
                        </div>
                        <div className='mr-3'>
                            <Dialog.Trigger className='py-2 px-6 bg-slate-600 text-white'>
                                Adicionar Pedido
                            </Dialog.Trigger>
                        </div>

                    </div>
                </div>
                <div className='flex flex-1'>
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
                        
                    </div>
                    
                
                </div>
                </div>
            </div>

        </div>
    )
}