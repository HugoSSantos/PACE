
interface CardFornecedorProps{
    image: string;
    descricao: string;
    quantity?: number;
    url: string;
}

export function CardFornecedor({image, descricao, quantity, url}: CardFornecedorProps){

    return(
        <a href={url} className="flex flex-col items-center justify-start w-40 h-40 p-4 mx-7 my-7 border rounded-xl border-black bg-gray-300"
            onClick={() => console.log('clicou cardFornecedor')}>
            <img src={image} alt="logo" className="w-6 h-6 rounded-full" />
            <p className="my-3">{descricao}</p>
            <p className="text-xs">{quantity} Fornecedores</p>
        </a>
    )
}