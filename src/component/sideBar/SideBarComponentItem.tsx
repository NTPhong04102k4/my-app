import { useNavigate } from "react-router-dom";
import BorderGradientDiv from "../../styles/customButtonLinearGardient";
import React, { useState } from "react";
import { IconType } from "react-icons";

type Pages = {
  featuresID: number;
  featuresName: string;
  path: string;
  componentIcon: IconType;
};

type SideBarComponentItemProps = {
  item: Pages[];
  title: string;
};

export const SideBarComponentItem = ({
  item,
  title,
}: SideBarComponentItemProps) => {
  const [selectItem, setSelectItem] = useState(0);
  const navigate = useNavigate();

  return (
    <nav className="flex flex-col mt-3 relative">
      <h3 className="text-[#EE10B0] text-[18px] font-normal ms-4 ps-0.3 text-opacity-60 h-[22px] mb-2">
        {title}
      </h3>
      {item.map((item) => {
        const Icon = item.componentIcon;
        return (
          <button
            onClick={() => {
              setSelectItem(item.featuresID);
              navigate(`${item.path}`);
            }}
            key={item.featuresID}
            className={`max-w-[150px] ${
              item.featuresID === selectItem
                ? " ms-3 me-4 mt-1 mb-2 -ps-0.5 "
                : "bg-transparent ms-4 me-4"
            }`}
          >
            <BorderGradientDiv
              borderColor="#FFF"
              backgroundColor="#EE10B0"
              borderWidth="0.1px"
              isActive={item.featuresID === selectItem}
            >
              <div
                className={`inline-flex ${
                  item.featuresID === selectItem &&
                  item.featuresID !== 8 &&
                  item.featuresID !== 10
                    ? "rounded-md scale-105 ml-2"
                    : "bg-transparent"
                } items-center w-full space-x-1`}
              >
                <Icon
                  size={20}
                  color={
                    item.featuresID === 8
                      ? "#0E9EEF"
                      : item.featuresID === 10
                        ? "#EE10B0"
                        : "#FFF"
                  }
                />
                <h2
                  className={`${item.featuresID === 8 ? "text-[#0E9EEF]" : item.featuresID === 10 ? "text-[#EE10B0]" : "text-[#FFF]"} text-[16px] align-middle`}
                >
                  {item.featuresName}
                </h2>
              </div>
            </BorderGradientDiv>
          </button>
        );
      })}
    </nav>
  );
};
