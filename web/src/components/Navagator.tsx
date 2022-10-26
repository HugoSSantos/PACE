
interface navegatorProps{
    name: string;
}


export function Navegator({name}: navegatorProps){

    return(
        <div className="flex w-60 items-center  justify-center mt-4 group hover:bg-transparent cursor-pointer">
            <div className="w-5 h-5 rounded-full bg-white mr-2 group-hover:bg-gray-600  cursor-pointer"></div>
            <label htmlFor="" className="w-48 h-6 px-2 items-center bg-white rounded-xl group-hover:bg-gray-600 group-hover:text-white cursor-pointer">
                {name}
            </label>
        </div>
    )
}