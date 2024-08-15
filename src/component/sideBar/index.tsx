import React from "react";

import { SideBarComponentItem } from "./SideBarComponentItem";
import { sidebarComponent } from "./data";
export const SideBarComponent = () => {
  return (
    <aside className="  h-auto bg-[#0E1920] overflow-y-auto pb-4  scrollbar-hidden">
      <h1 className="text-gradient-purple-to-blue text-3xl font-bold  ms-6 ps-0.5 h-[42px] mb-12 pb-0.5 mt-[30px]">
        Medolias
      </h1>

      {sidebarComponent.map((item, index) => (
        <SideBarComponentItem
          key={index}
          item={item.data}
          title={item.title}
        />
      ))}
    </aside>
  );
};
