import { IoCallOutline } from "react-icons/io5";
import React from "react";
import { featFooter, FeaturesFooter } from "./data";
import { AiOutlineFacebook } from "react-icons/ai";
import { SiInstagram } from "react-icons/si";
import { CiTwitter } from "react-icons/ci";
import { Button, ButtonWrapper } from "src/styles/Button";
export const FooterComponent = () => (
  <div className="flex justify-between mt-8 pb-[30px] gap-[46px]">
    <div className="w-[250px] h-[200px]">
      <h1 className="text-[40px] text-[#FFF] h-[63px]">About</h1>
      <p className="text-[16px] text-[#FFF]">
        Melodies is a website that has been created for over{" "}
        <span className="text-[#EE10B0] hover:underline hover:font-semibold transition-all duration-300">
          5 years
        </span>{" "}
        now and it is one of the most famous music player website's in the
        world. In this website you can listen and download songs for free. Also
        if you want no limitation you can buy our{" "}
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
      <ButtonWrapper className="flex w-full mt-[85px] gap-[6px] mr-[18px] ">
        <Button onClick={() => {}}>
          <AiOutlineFacebook size={45} color="white" />
        </Button>
        <Button>
          <SiInstagram size={40} color="white"/>
        </Button>
        <Button>
          <CiTwitter size={45} color="white"/>
        </Button>
        <Button>
          <IoCallOutline size={45} color="white"/>
        </Button>
      </ButtonWrapper>
    </div>
  </div>
);

const FeaturesItem = ({ item }: { item: FeaturesFooter }) => (
  <div className="flex flex-col items-center">
    <button className="text-[#FFF] text-4xl font-bold h-[56px] text-center hov">
      {item.title}
    </button>
    <div className="w-full bg-white h-[3px] mb-4" />
    <div className="gap-[7px] flex-col flex">
      {item.data &&
        item.data.map((dataItem) => (
          <button
            key={dataItem?.id}
            className="text-[#FFF] text-2xl h-[38px] text-center "
          >
            {dataItem.features}
          </button>
        ))}
    </div>
  </div>
);
