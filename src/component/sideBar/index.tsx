import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SIDE_BAR } from "./data";
import { SideBarComponentItem } from "./SideBarComponentItem";
export interface selectPages {
  id: number;
  name: string;
  path: string;
}
const defaultPages = {
  id: 0,
  name: "Home",
  path: "/home",
};
const LAST_SCREEN='lastScreen';
export const SideBarComponent = React.memo(() => {
  const navigate = useNavigate();
  const [selectedPages, setSelectedPages] = useState<selectPages | null>(defaultPages);

  const handleSetSelectedPages = useCallback((page: selectPages) => {
    localStorage.setItem(LAST_SCREEN, JSON.stringify(page));
    setSelectedPages(page);
    navigate(page.path);
  }, [navigate]);

  return (
<aside className="flex-col min-w-min h-auto bg-[#181818]  pb-4  ">
  <h1 className="text-gradient-purple-to-blue text-3xl font-bold ms-6 ps-0.5 h-[42px] mb-12 pb-0.5 mt-[56px]">
        Medolias
      </h1>
      {SIDE_BAR.map((item, index) => (
        <SideBarComponentItem
          key={index}
          data={item.data}
          title={item.title}
          pageId={selectedPages?.id ?? 0}
          choosePage={handleSetSelectedPages}
        />
      ))}
    </aside>
  );
});
