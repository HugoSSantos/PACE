import { SideBar } from "../components/SideBar";


export function PerfilEquipe(){

    return(
        <div className='flex'>
            <SideBar name='Fulano de Tal' email='fdt@pace.com' image='https://avatars.githubusercontent.com/u/50108497?v=4.png'/>
            <div className='flex flex-2 flex-col w-full'>
                <div className='flex h-[40%] flex-col mb-4 border-b border-gray-500'>
                    <div className='h-[50%]'>
                        <div className='flex justify-between p-10'>
                            <div className='flex justify-between'>
                                <div className='h-52 w-48 border border-black'></div>
                                <div className='ml-2'>
                                    <div>
                                        <h1 className='text-2xl'>Fulano de Tal</h1>
                                        <h3 className='text-gray-500 text-[0.6rem]'>Setor de Compras</h3>
                                    </div>
                                    <div className="my-2">
                                        <p className=''>Fone</p>
                                        <a href="tel:+5581997069559" className='decoration-none text-sm'>(81)9 97069559</a>
                                    </div>                         
                                    <div>
                                        <p>E-mail</p>
                                        <a href="mailto:" className='decoration-none text-sm'>fulanodetal@pace.com</a>
                                    </div>
                                    <div className="my-1">
                                        <p className='p'>Site</p>
                                        <a href="http://" className='decoration-none text-sm'>pace.com.br</a>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex">
                                    <p className="text-4xl bold">65</p><p className="flex items-end">compras realizadas</p>
                                </div>
                                <div className="flex mt-6">
                                    <p className="text-4xl bold">58</p><p className="flex items-end">compras avaliadas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}