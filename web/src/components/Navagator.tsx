import { SquaresFour } from "phosphor-react";

interface navegatorProps{
    name: string;
    url: string;
}


export function Navegator({name, url}: navegatorProps){

    return(
        <a href={url} className="flex w-60 items-center  justify-center mt-4 group hover:bg-transparent cursor-pointer">
            <SquaresFour size={24} />
            <label htmlFor="" className="w-48 h-6 px-2 items-center bg-white rounded-xl group-hover:bg-gray-600 group-hover:text-white cursor-pointer">
                {name}
            </label>
        </a>
    )
}