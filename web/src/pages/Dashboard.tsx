export function Dashboard(){
    return(
        <div className="flex  h-[100vh]">
            <div className="flex flex-col w-[20%] bg-orange-400">
            <div className="flex flex-col  h-[40%]  items-center ">
                <div className="flex w-36 h-36 border mt-10 rounded-full bg-white">

                </div>
                <label htmlFor="" className="w-56 h-5 bg-white mt-8 rounded-xl"></label>
                <label htmlFor="" className="w-56 h-5 bg-white mt-4 rounded-xl"></label>
                </div>
                <div className="flex flex-col h-[40%] items-center">
                    <div className="flex w-full items-baseline text-center justify-center mt-4">
                        <div className="w-5 h-5 rounded-full bg-gray-600 mx-3"></div>
                        <label htmlFor="" className="w-56 h-5 bg-gray-600 rounded-xl"></label>
                    </div>
                    <div className="flex w-full items-baseline text-center justify-center mt-4">
                        <div className="w-5 h-5 rounded-full bg-white mx-3"></div>
                        <label htmlFor="" className="w-56 h-5 bg-white rounded-xl"></label>
                    </div>
                    <div className="flex w-full items-baseline text-center justify-center mt-4">
                        <div className="w-5 h-5 rounded-full bg-white mx-3"></div>
                        <label htmlFor="" className="w-56 h-5 bg-white rounded-xl"></label>
                    </div>
                    <div className="flex w-full items-baseline text-center justify-center mt-4">
                        <div className="w-5 h-5 rounded-full bg-white mx-3"></div>
                        <label htmlFor="" className="w-56 h-5 bg-white rounded-xl"></label>
                    </div>
                </div>
                <div className="flex flex-col flex-1 items-center">
                    <label htmlFor="" className="w-56 h-5 bg-white mt-4 rounded-xl"></label>
                    <label htmlFor="" className="w-56 h-5 bg-white mt-4 rounded-xl"></label>
                </div>
            </div>
            
        </div>
    )
}