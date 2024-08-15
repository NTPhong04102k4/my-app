import { SideBarComponent } from "src/component/sideBar";
import React from "react";
export default function MostPlayed() {
  return (
    <div className="flex-1  inline-flex bg-[#602139] min-h-screen ">
      <div className="flex-wrap min-w-[185px] max-w-[266px] shadow-lg rounded-lg bg-[#0E1920]">
        <SideBarComponent />
      </div>
      <div className="flex  flex-wrap justify-center pt-[30px]"></div>
    </div>
  );
}
