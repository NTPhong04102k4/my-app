import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "src/pages/home";
import Discovery from "src/pages/discovery";
import RecentlyAdded from "src/pages/recentlyAdded";
import Artists from "src/pages/artists";
import SettingPages from "src/pages/settingPages";
import AddPlaylist from "src/pages/addPlaylist";
import YourPlaylist from "src/pages/yourPlaylist";
import Favorite from "src/pages/favorite";
import MostPlayed from "src/pages/mostPlayed";
import Albums from "src/pages/albums";
import { LAST_SCREEN } from "src/features/utilCommon";
import { SideBarComponent } from "src/component/sideBar";
import styled from "styled-components";


interface MainContentProps {
  children: React.ReactNode;
}

export const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return <ContentWrapper>{children}</ContentWrapper>;
};

export const RoutesHandler: React.FC = () => {

  useEffect(() => {
    const currentPage = {
      path: location.pathname,
      name: location.pathname.split('/').pop() || 'home',
    };
    localStorage.setItem(LAST_SCREEN, JSON.stringify(currentPage));
  }, [location.pathname]);

  return (
    <Layout>
      <SidebarWrapper>
        <SideBarComponent />
      </SidebarWrapper>
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discovery" element={<Discovery />} />
          <Route path="/home" element={<Home />} />
          <Route path="/yourFavorite" element={<Favorite />} />
          <Route path="/recentlyAdded" element={<RecentlyAdded />} />
          <Route path="/mostPlayed" element={<MostPlayed />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/setting" element={<SettingPages />} />
          <Route path="/addPlaylist" element={<AddPlaylist />} />
          <Route path="/yourPlaylist" element={<YourPlaylist />} />
        </Routes>
      </MainContent>
    </Layout>
  );
};
const Layout = styled.div`
  display: flex;
`;

const SidebarWrapper = styled.div`
  flex-shrink: 0;
  border-right: 2px solid #EE10B0;
  position: relative;
  box-shadow: 2px 0 10px -2px #ad5c96;
  transition: box-shadow 0.3s ease;
  background-color: #181818;
  min-height: 100vh;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -2px;
    bottom: 0;
    width: 2px;
    background-color: #EE10B0; // Đảm bảo viền màu ban đầu vẫn hiển thị rõ
    z-index: 2;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
`;
