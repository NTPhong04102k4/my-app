import { FooterComponent } from "src/component/footer";
import { HeaderComponent } from "src/component/header";
import { BodyDiscovery } from "./BodyComponent";


export default function Home() {
  return (
    <div className="flex-1 min-h-screen flex-col bg-[#181818] pl-[30px] pr-[30px] justify-center ">
    <HeaderComponent />
    <BodyDiscovery />
    <FooterComponent />
</div>
   
  );
}
