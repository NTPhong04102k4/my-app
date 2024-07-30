import BorderGradientDiv from "../../styles/customButtonLinearGardient";
import React from "react";
export const sidebarComponent = [
  {
    title: "Menu",
    data: [
      {
        featuresID: 0,
        featuresIcon: "mask-icon-home",
        featuresName: "Home",
      },
      {
        featuresID: 1,
        featuresIcon: "mask-icon-explore",
        featuresName: "Discover",
      },
      {
        featuresID: 2,
        featuresIcon: "mask-icon-album",
        featuresName: "Albums",
      },
      {
        featuresID: 3,
        featuresIcon: "mask-icon-account_circle",
        featuresName: "Artists",
      },
    ],
  },
  {
    title: "Library",
    data: [
      {
        featuresID: 4,
        featuresIcon: "mask-icon-history",
        featuresName: "Recently Added",
      },
      {
        featuresID: 5,
        featuresIcon: "mask-icon-arcticons_niagara",
        featuresName: "Most played",
      },
    ],
  },
  {
    title: "Playlist and favorite",
    data: [
      {
        featuresID: 6,
        featuresIcon: "mask-icon-heart-light",
        featuresName: "Your favorites",
      },
      {
        featuresID: 7,
        featuresIcon: "mask-icon-list_music",
        featuresName: "Your playlist",
      },
      {
        featuresID: 8,
        featuresIcon: "mask-icon-add_favorites",
        featuresName: "Add playlist",
      },
    ],
  },
  {
    title: "General",
    data: [
      {
        featuresID: 9,
        featuresIcon: "mask-icon-setting",
        featuresName: "Setting",
      },
      {
        featuresID: 10,
        featuresIcon: "mask-icon-logout",
        featuresName: "Logout",
      },
    ],
  },
];

interface SideBarComponentItemProps {
  item: {
    featuresID: number;
    featuresIcon: string;
    featuresName: string;
  }[];
  title: string;
  onClick: (val: number) => void;
  selectItem?: number;
}
export const SideBarComponentItem = ({
  item,
  title,
  selectItem,
  onClick,
}: SideBarComponentItemProps) => (
  <nav className="flex flex-col mt-4 relative">
    <h3 className="text-[#EE10B0] text-[16px] font-normal ms-4 ps-0.3 text-opacity-60 h-[20px] mb-1">
      {title}
    </h3>
    {item.map((item) => (
      <div
        onClick={() => onClick(item.featuresID)}
        key={item.featuresID}
        className={` ${
          item.featuresID === selectItem
            ? " ms-3 me-4 mt-1 mb-1 -ps-0.5 "
            : "bg-transparent ms-4 me-4"
        }`}
      >
        <BorderGradientDiv
          borderColor="#FFF"
          backgroundColor="#EE10B0"
          borderWidth="1px"
          isActive={item.featuresID === selectItem}
        >
          <div
            className={`inline-flex   ${
              item.featuresID === selectItem
                ? " rounded-md scale-105 ml-2 "
                : "bg-transparent "
            } items-center w-full  space-x-1`}
          >
            <div
              className={`${item.featuresIcon} w-[20px] h-[20px] text-slate-50 `}
            />
            <h2 className="text-[16px] text-white align-middle">
              {item.featuresName}
            </h2>
          </div>
        </BorderGradientDiv>
      </div>
    ))}
  </nav>
);
