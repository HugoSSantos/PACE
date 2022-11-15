import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Compras } from '../pages/Compras';

export function Modal(){
    return(
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
    )
} 