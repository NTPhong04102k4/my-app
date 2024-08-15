import { SideBarComponent } from "src/component/sideBar";
import { FooterComponent } from "../../component/footer";
import { HeaderComponent } from "../../component/header";
import { BodyDiscovery } from "./BodyComponent";
import React from "react";

export default function Discovery() {
  return (
    <div className="flex-1 min-h-screen  inline-flex bg-[#602139] ">
      <div className="flex-wrap min-w-[185px] max-w-[266px] shadow-lg rounded-lg bg-[#0E1920]">
        <SideBarComponent />
      </div>
      <div className="flex  flex-wrap justify-center pt-[30px]">
        <HeaderComponent />
        <BodyDiscovery />
        <FooterComponent />
      </div>
    </div>
  );
}
