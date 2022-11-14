import * as Dialog from '@radix-ui/react-dialog';

import {Home} from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Fornecedores } from './pages/Forneceores';
import { FornecedorPerfil } from './pages/FornecedorPerfil';
import { Equipe } from './pages/Equipe';
import { PerfilEquipe } from './pages/PerfilEquipe';


function App() {

  return (
    <>
      {/* <Home/> */}
      {/* <Dashboard/> */}
      {/* <Fornecedores/> */}
	  {/* <Equipe/> */}
	  <PerfilEquipe/>

    	<Dialog.Root>
		{/* <FornecedorPerfil/> */}

        <Dialog.Portal>

        <Dialog.Overlay />

        <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
			<div>
				<Dialog.Title className='text-3xl font-black'>
					Adicionar Nova Compra
				</Dialog.Title>
				<form className='my-6 flex flex-col gap-2'>
					<label htmlFor="pedido" className='my-2'>Produto</label>
					<input type="text" placeholder='EX: Material de construção' 
						className='px-1 border-none h-10'/>

					<label htmlFor="">Data do Pedido</label>
					<input type="date" placeholder='00/00/00' className='px-1 border-none h-10' />

					<label htmlFor="">Data de Entrega</label>
					<input type="date" placeholder='00/00/00' className='px-1 border-none h-10' />

					<label htmlFor="">Valor</label>
					<input type="text" placeholder='R$ 0.000,00' className='px-1 border-none h-10' />
					<label htmlFor="">Forma de Pagamento</label>
					<select name="fp" className='text-gray-600 h-10'>
						<option value="">Avista</option>
						<option value="">Parcelado</option>
						<option value="">Financiado</option>
						<option value="">Crediario</option>
					</select>

				</form>

			<div className='flex w-full justify-center items-center'>
				<Dialog.Close className='mr-16 border w-20 h-10 bg-red-600'>Cancelar</Dialog.Close>
				<button type="submit" className='border w-20 h-10 bg-green-600'>Salvar</button>
			</div>

			</div>
			

        </Dialog.Content>

        </Dialog.Portal>

      </Dialog.Root>

    </>
    
  )
}

export default App
