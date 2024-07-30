import { playList } from "../../../component/Item/data/dataMusic";
import React  from 'react';
export function TopPlaylist({
  data,
  title,
  type,
}: {
  data: playList[];
  title?: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col h-auto scrollbar-hidden">
      <div className="inline-flex mb-3 mt-5 ">
        <h1 className="text-[#FFF] text-[24px] ">{`${title} `}</h1>
        <h1 className="text-[#EE10B0] text-[24px] ml-2">{`${type} `}</h1>
      </div>
      <div className="inline-flex flex-wrap gap-4  items-center ">
        {data &&
          data.map((item, index) => (
            <div key={index} className="p-[10px] bg-[#1F1F1F] rounded-[10px]">
              <img
                  src={item.src}

                className="w-[150px] h-[150px] rounded-[10px] object-contain"
                alt={`${index}`}
              />

              <div className="flex justify-between">
                <h3 className="text-[12px] font-serif text-[#FFF]">
                  {item.name}
                </h3>
                <div className="mask-icon-music text-[#EE10B0] bg-[#FFF] size-[12px]" />
              </div>
            </div>
          ))}
        <div className="active:opacity-70 ml-[7px] flex rounded-full bg-[#1E1E1E] justify-center size-[62px] items-center align-middle ">
          <div className="mask-icon-plus size-[32px]  text-[#FFF]" />
        </div>
      </div>
    </div>
  );
}
