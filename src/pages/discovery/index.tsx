import { FooterComponent } from "../../component/footer";
import { HeaderComponent } from "../../component/header";
import { SideBarComponent } from "../../component/sideBar";
import { BodyDiscovery } from "./BodyComponent";
import React  from 'react';

export default function Discovery() {
  return (
    <div className="flex  ">
      <SideBarComponent />
      <div className="flex-1 pt-[30px] pl-[21px]  overflow-auto flex bg-[#5f3544]  flex-col">
        <HeaderComponent />
        <BodyDiscovery />
        <FooterComponent />
      </div>
    </div>
  );
}
