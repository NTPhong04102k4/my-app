import React from "react";
import { MdOutlineSearch } from "react-icons/md";
export const HeaderComponent = () => (
  <div className=" flex w-full gap-[46px]">
      <div className="rounded-lg bg-[#656565] flex items-center  justify-end ml-4  ">
        <button className=" text-[rgb(148,74,74)] ml-2 mr-2  ">
          <MdOutlineSearch color="white" onClick={() => {}} size={24} />
        </button>
        <input
          className="  w-[288px] bg-transparent border-transparent text-white focus:border-transparent placeholder-white rounded-[10px] "
          placeholder="Search For Musics, Artists, Albums ..."
        />
      </div>


    <div className=" flex justify-center gap-[46px] flex-1">
      <button className="">
        <h2 className="text-2xl font-bold text-[#FFF]" onClick={() => {}}>
          About
        </h2>
      </button>
      <button>
        <h2 className="text-2xl font-bold text-[#FFF]">Contact</h2>
      </button>
      <button>
        <h2 className="text-2xl font-bold text-[#FFF]">Premium</h2>
      </button>
    </div>

    <div className=" flex justify-start gap-2 me-[32px] flex-1">
      <button className="bg-[#1E1E1E] w-[119px] font-semibold text-[#EE10B0] whitespace-nowrap h-[38px] flex text-xl items-center justify-center rounded-[10px]">
        Login
      </button>
      <button className="boder- text-xl font-semibold text-[#1E1E1E] whitespace-nowrap bg-[#EE10B0] w-[119px] h-[38px] flex items-center justify-center rounded-[10px]">
        Sign Up
      </button>
    </div>
  </div>
);
