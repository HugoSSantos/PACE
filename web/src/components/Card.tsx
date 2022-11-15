
interface cardProps{
    title: string;
    description: string;
    nomeItem: string;
}

export function Card({title, description, nomeItem}: cardProps){

    return(
        <button className="flex flex-col items-center justify-start w-[70%] h-40 p-4 mx-7 mt-4 border rounded-xl border-black bg-gray-300"
            onClick={() => console.log("clicou card")}>
            <h3 className="flex items-center justify-center text-center w-full">{title}</h3>
            <p className="my-3">{description}</p>
            <p>{nomeItem}</p>
        </button>
    )
}
