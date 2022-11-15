import * as Dialog from '@radix-ui/react-dialog';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Routes
} from "react-router-dom";
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Fornecedores } from './pages/Forneceores';
import { FornecedorPerfil } from './pages/FornecedorPerfil';
import { Equipe } from './pages/Equipe';
import { PerfilEquipe } from './pages/PerfilEquipe';
import { Compras } from './pages/Compras';


function App() {

	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/fornecedores" element={<Fornecedores />} />
					<Route path="/equipe" element={<Equipe />} />
					<Route path="/compras" element={<Compras />} />
					<Route path="/perfilequipe" element={<PerfilEquipe name={'Fulano de Tal'} setor={'Setor de Compras'} cf={0} ca={0} />} />
				</Routes>

			<Dialog.Root>
			<Routes>
				<Route path="/fornecedorperfil" element={<FornecedorPerfil />} />
				</Routes>
				<Dialog.Portal>

					<Dialog.Overlay />

					<Dialog.Content className='fixed bg-white border-2 py-8 px-10 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
						<div>
							<div className='flex justify-between border-b'>
								<Dialog.Title className='text-2xl font-black'>
									Adicionar Nova Compra
								</Dialog.Title>
								<Dialog.Close className='mr-1 mb-8'>X</Dialog.Close>
							</div>
							
							<form className='my-6 flex flex-col gap-2'>
								<label htmlFor="pedido">Produto</label>
								<input type="text" placeholder='EX: Material de construção'
									className='px-1 h-10 border rounded-md border-black text-gray-500' />

								<label htmlFor="">Data do Pedido</label>
								<input type="date" placeholder='00/00/00' 
								className='px-1 border rounded-md border-black h-10 text-gray-500' />

								<label htmlFor="">Data de Entrega</label>
								<input type="date" placeholder='00/00/00' 
								className='px-1 border rounded-md border-black h-10 text-gray-500' />

								<label htmlFor="">Valor</label>
								<input type="text" placeholder='R$ 0.000,00' 
								className='px-1 border rounded-md border-black h-10 text-gray-500' />
								<label htmlFor="">Forma de Pagamento</label>
								<select name="fp" className='h-10 bg-transparent border rounded-md border-black'>
									<option value="">Selecione sua forma de pagamento</option>
									<option value="avista">Avista</option>
									<option value="parcelado">Parcelado</option>
									<option value="financiado">Financiado</option>
									<option value="crediario">Crediario</option>
								</select>

							</form>

							<div className='flex w-full justify-end items-center border-t  mt-8'>
								<Dialog.Close><button type="submit" className='border w-24 h-8 bg-green-600 mt-3'>Salvar</button></Dialog.Close>
								
							</div>

						</div>


					</Dialog.Content>

				</Dialog.Portal>

			</Dialog.Root>
			</Router>
		</>

	)
}

export default App
