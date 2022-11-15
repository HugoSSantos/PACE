import { SideBar } from "../components/SideBar";
import { TableItems } from "../components/TableItems";

interface pefilEquipeProps {
    name: string;
    setor: string;
    fone?: string;
    email?: string;
    site?: string;
    cf: number;
    ca: number;
}

export function PerfilEquipe({name, setor, fone="não informado", email="não informado", site="não informado", cf, ca}: pefilEquipeProps){

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
    }]
    return(
        <div className='flex'>
            <SideBar/>
            <div className='flex flex-2 flex-col w-full'>
                <div className='flex h-[40%] flex-col mb-4 border-b border-gray-500'>
                    <div className='h-[50%]'>
                        <div className='flex justify-between p-10'>
                            <div className='flex justify-between'>
                                <div className='h-52 w-48 border border-black'></div>
                                <div className='ml-2'>
                                    <div>
                                        <h1 className='text-2xl'>{name}</h1>
                                        <h3 className='text-gray-500 text-[0.6rem]'>{setor}</h3>
                                    </div>
                                    <div className="my-2">
                                        <p className=''>Fone</p>
                                        <a href="tel:+55" className='decoration-none text-sm'>{fone}</a>
                                    </div>                         
                                    <div>
                                        <p>E-mail</p>
                                        <a href="mailto:" className='decoration-none text-sm'>{email}</a>
                                    </div>
                                    <div className="my-1">
                                        <p className='p'>Site</p>
                                        <a href={`http://${site}`} className='decoration-none text-sm'>{site}</a>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex">
                                    <p className="text-4xl bold">{cf}</p><p className="flex items-end">compras realizadas</p>
                                </div>
                                <div className="flex mt-6">
                                    <p className="text-4xl bold">{ca}</p><p className="flex items-end">compras avaliadas</p>
                                </div>
                            </div>
                        </div>
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
    )
}