
interface CardFornecedorProps{
    image: string;
    category: string;
    quantity: number;
}

export function CardFornecedor({image, category, quantity}: CardFornecedorProps){

    return(
        <button className="flex flex-col items-center justify-start w-40 h-40 p-4 mx-7 my-7 border rounded-xl border-black bg-gray-300"
            onClick={() => console.log('clicou cardFornecedor')}>
            <img src={image} alt="logo" className="w-6 h-6 rounded-full" />
            <p className="my-3">{category}</p>
            <p className="text-xs">{quantity} Fornecedores</p>
        </button>
    )
}