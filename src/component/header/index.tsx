export function HeaderComponent() {
    return (
        <div className=" flex w-full  ">
            <div className=" flex flex-1" >
                <div className="rounded-lg bg-[#656565] flex items-center   ">
                    <div className="mask-icon-search w-[25px] h-[25px] text-[rgb(255,255,255)] ml-2  "/>
                    <input 
                        className="active:w-full active:animate-ping- bg-transparent text-white placeholder-white w-fit outline-none rounded-[10px] border-none"
                        placeholder="Search For Musics, Artists, Albums ..." 
                    />
                </div>
            </div>
            
            <div className=" flex justify-center gap-4 flex-1">
                <h2 className="text-2xl font-bold text-[#FFF]">About</h2>
                <h2 className="text-2xl font-bold text-[#FFF]">Contact</h2>
                <h2 className="text-2xl font-bold text-[#FFF]">Premium</h2>
            </div>
            
            <div className=" flex justify-end me-[32px] flex-1">
                <div className="flex gap-2">
                    <div className="bg-[#1E1E1E] w-[119px] h-[38px] flex items-center justify-center rounded-[10px]">
                        <h3 className="text-xl font-semibold text-[#EE10B0] whitespace-nowrap">Login</h3>
                    </div>
                    <div className="bg-[#EE10B0] w-[119px] h-[38px] flex items-center justify-center rounded-[10px]">
                        <h3 className="text-xl font-semibold text-[#1E1E1E] whitespace-nowrap">Sign Up</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}