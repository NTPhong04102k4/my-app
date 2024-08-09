import { FooterComponent } from "../../component/footer";
import { HeaderComponent } from "../../component/header";
import { BodyDiscovery } from "./BodyComponent";
import React  from 'react';

export default function Discovery() {
  return (

      <div className="flex-1 ">
        <HeaderComponent />
        <BodyDiscovery />
        <FooterComponent />
   </div>
  );
}
