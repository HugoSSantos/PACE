import * as Dialog from '@radix-ui/react-dialog';

import {Home} from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Fornecedores } from './pages/Forneceores';
import { FornecedorPerfil } from './pages/FornecedorPerfil';


function App() {

  return (
    <>
      {/* <Home/> */}
      {/* <Dashboard/> */}
      {/* <Fornecedores/> */}

    	<Dialog.Root>
		<FornecedorPerfil/>

        <Dialog.Portal>

        <Dialog.Overlay />

        <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
			<div>
				<Dialog.Title className='text-3xl font-black'>
					Adicionar Nova Compra
				</Dialog.Title>
				<form className='my-6 flex flex-col gap-2'>
					<label htmlFor="pedido" className='my-2'>Produto</label>
					<input type="text" placeholder='Informe o número do seu pedido' 
						className='px-1 border-none h-6'/>
				</form>

			<div className='flex w-full justify-center items-center'>
				<Dialog.Close className='mr-4'>Cancelar</Dialog.Close>
				<button type="submit" className=''>Salvar</button>
			</div>

			</div>
			

        </Dialog.Content>

        </Dialog.Portal>

      </Dialog.Root>

    </>
    
  )
}

export default App
