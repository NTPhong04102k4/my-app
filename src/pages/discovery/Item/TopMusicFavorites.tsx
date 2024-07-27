import { Songs } from "../../../component/Item/data/dataMusic";

export function TopMusic({
  data,
  title,
  type,
}: {
  data: Songs[];
  title?: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col h-auto scrollbar-hidden">
      <div className="inline-flex mb-3 mt-5">
        <h1 className="text-[#FFF] text-[24px]">{`${title} `}</h1>
        <h1 className="text-[#EE10B0] text-[24px] ml-2">{`${type} `}</h1>
      </div>
      <div className="flex items-center gap-4 overflow-x-auto" style={{ maxWidth: 'calc(100% - 50px)' }}>
        {data &&
          data.map((item, index) => {
            return (
              <div key={index} className="p-[10px] bg-[#1F1F1F] rounded-[10px]">
                <img
                  src={item.src}
                  className="w-[150px] h-[150px] rounded-[10px] object-contain"
                  alt={`${index}`}
                />
                <h2 className="text-[14px] font-semibold text-[#FFF] truncate max-w-[150px]">
                  {item.nameSong}
                </h2>
                <div className="flex justify-between">
                  <h3 className="text-[12px] font-serif text-[#FFF]">
                    {item.nameSinger}
                  </h3>
                  <div className="mask-icon-music text-[#EE10B0] bg-[#FFF] size-[12px]" />
                </div>
              </div>
            );
          })}
        <div className="flex items-center justify-center ml-[7px] w-[62px] h-[62px] bg-[#1E1E1E] rounded-full active:opacity-70">
          <div className="mask-icon-plus size-[32px] text-[#FFF]" />
        </div>
      </div>
    </div>
  );
}
