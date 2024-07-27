import { SideBarComponent } from "../../component/sideBar";
import { HeaderComponent } from "../../component/header";
import { FooterComponent } from "../../component/footer";
import { BodyDiscovery } from "./BodyComponent";

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
