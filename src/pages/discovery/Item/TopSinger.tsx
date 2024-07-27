import { singer } from "@src/component/Item/data/dataMusic";

export function TopSinger({ data, title }: { data: singer[]; title: string }) {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-[#FFF] text-[40px] mb-4">{title}</h1>
      <div className="flex flex-wrap gap-[16px] ms-[32px]">
        {data &&
          data.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="rounded-full w-[130px] h-[130px] bg-red-500">
                <img
                  src={item.srcImg}
                  className="w-full h-full rounded-full object-center"
                  alt={`${index}`}
                  accessKey=""
                />
              </div>
              <h1 className="text-[#FFF] text-[20px] font-semibold mt-2">
                {item.name}
              </h1>
            </div>
          ))}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center rounded-full bg-[#1E1E1E] w-[62px] h-[62px] active:opacity-70">
            <div className="mask-icon-plus w-[32px] h-[32px] text-[#FFF]" />
          </div>
          <h1 className="text-[#FFF] text-[20px] font-semibold mt-2">View All</h1>
        </div>
      </div>
    </div>
  );
}
