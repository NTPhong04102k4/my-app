import React, { useState } from "react";

import { sidebarComponent, SideBarComponentItem } from "./SideBarComponentItem";

export const SideBarComponent = () => {
  const [selectedPage, setSelectedPage] = useState(
    sidebarComponent[0].data[0].featuresID,
  );

  const handleItemClick = (id: number) => {
    setSelectedPage(id);
  };
  return (
    <aside className="w-[15%] bg-[#0E1920] overflow-y-auto pb-20 scrollbar-hidden">
      <h1 className="text-gradient-purple-to-blue text-3xl font-bold  ms-6 ps-0.5 h-42 mb-12 pb-0.5 mt-[30px]">
        Medolias
      </h1>
      {sidebarComponent.map((item, index) => (
        <SideBarComponentItem
          key={index}
          item={item.data}
          title={item.title}
          onClick={handleItemClick}
          selectItem={selectedPage}
        />
      ))}
    </aside>
  );
};
