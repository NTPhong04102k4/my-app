import { dataLoginIcon, featFooter, FeaturesFooter } from "./data";

export function FooterComponent() {
  return (
    <div className="flex justify-between mt-8 pb-[30px]">
      <div className="w-[250px] h-[200px]">
        <h1 className="text-[40px] text-[#FFF] h-[63px]">About</h1>
        <p className="text-[16px] text-[#FFF]">
          Melodies is a website that has been created for over{" "}
          <span className="text-[#EE10B0] hover:underline hover:font-semibold transition-all duration-300">
            5 years
          </span>{" "}
          now and it is one of the most famous music player website's in the
          world. In this website you can listen and download songs for free.
          Also if you want no limitation you can buy our{" "}
          <span className="text-[#0E9EEF] hover:underline hover:font-semibold transition-all duration-300">
            premium passes.
          </span>
        </p>
      </div>
      <div className="flex gap-[10px] ml-[25px]">
        {featFooter.map((item, index) => (
          <FeaturesItem key={index} item={item} />
        ))}
      </div>
      <div className="flex flex-col items-start  mr-[18px]">
        <h1 className="text-gradient-purple-to-blue text-[40px] pr-[20px] align-top  inline-block font-bold ">
          Medolias
        </h1>
        <div className="flex w-full mt-[85px]  justify-between">
          {dataLoginIcon && dataLoginIcon.map((item, index) => (
            <div 
              key={index} 
              className={`${item.icon} w-[45px] h-[45px] text-[#FFF]`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturesItem({ item }: { item: FeaturesFooter }) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[#FFF] text-4xl font-bold h-[56px] pt-[-10px] text-center">{item.title}</h1>
      <div className="w-full bg-white h-[3px] mb-4" />
      <div className="gap-[7px] flex-col">
        {item.data && item.data.map((dataItem, index) => (
          <h2 key={index} className="text-[#FFF] text-2xl h-[38px] text-center pl-[22px] pr-[22px]">
            {dataItem.features}
          </h2>
        ))}
      </div>
    </div>
  );
}
