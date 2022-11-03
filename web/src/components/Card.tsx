
interface cardProps{
    title: string;
    description: string;
    nomeItem: string;
}

export function Card({title, description, nomeItem}: cardProps){

    return(
        <button className="flex flex-col items-center justify-start w-[95%] h-40 p-4 mx-7 border rounded-xl border-black bg-gray-300">
            <h3 className="flex items-center justify-center text-center w-full">{title}</h3>
            <p className="my-3">{description}</p>
            <p>{nomeItem}</p>
        </button>
    )
}
