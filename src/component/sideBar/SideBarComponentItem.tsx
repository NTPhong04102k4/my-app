import React, { useCallback } from "react";
import { IconType } from "react-icons";
import styled from "styled-components";
export interface selectPages {
  id: number;
  name: string;
  path: string;
}
type Pages = {
  componentIcon: IconType;
  id: number;
  name: string;
  path: string;
};

type SideBarComponentItemProps = {
  data: Pages[];
  title: string;
  pageId: number;
  choosePage: (val: selectPages) => void;
};

export const SideBarComponentItem = ({
  data,
  title,
  pageId,
  choosePage,
}: SideBarComponentItemProps) => {
  const handleItemClick = useCallback(
    (page: Pages) => {
      const pagesInfo = {
        path: page.path,
        id: page.id,
        name: page.name,
      };
      choosePage(pagesInfo);
    },
    [choosePage]
  );

  const getColor = (pageId: number, isActive: boolean) => {
    if (pageId === 8) return '#0E9EEF';
    if (pageId === 10) return '#ee10b0';
    return  '#FFF';
  };

  return (
    <nav className="flex flex-col mt-3 ">
      <Title>{title}</Title>
      {data.map((page) => {
        const Icon = page.componentIcon;
        const isActive = page.id === pageId;
        return (
          <NavItemButton
            key={page.id}
            isActive={isActive}
            onClick={() => handleItemClick(page)}
          >
            <ContentWrapper isActive={isActive}>
              <IconWrapper>
                <Icon size={20} color={getColor(page.id, isActive)} />
              </IconWrapper>
              <NamePage style={{color:getColor(page.id, isActive)}} >{page.name}</NamePage>
            </ContentWrapper>
          </NavItemButton>
        );
      })}
    </nav>
  );
};

const NavItemButton = styled.button<{ isActive: boolean }>`
  width: 180px;
  height: 40px; 
  background: ${({ isActive }) => (isActive ? " #EE10B0 " : "transparent")};
  border: ${({ isActive }) => (isActive ? "0.5px solid #EE10B0" : "none")};
  box-shadow: ${({ isActive }) => (isActive ? "0 0 4px #000000" : "none")};
  margin: 0.5rem 1rem;
  padding: 4px 6px;
  border-radius: 4px;
  transition: all 0.2s ease;
  transform: ${({ isActive }) => (isActive ? "scale(1.05)" : "scale(1)")};
`;


const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ContentWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: nowrap;
`;

const Title = styled.h3`
  color: #ee10b0;
  font-size: 18px;
  font-weight: normal;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
  opacity: 0.6;
`;

const NamePage = styled.h3`
  color:  #FFF;
  font-size: 16px;
  font-weight: normal;
`;