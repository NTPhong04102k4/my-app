import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom"; // Added useLocation
import Home from "src/pages/home";
import Discovery from "src/pages/discovery";
import RecentlyAdded from "src/pages/recentlyAdded";
import Artists from "src/pages/artists";
import SettingPages from "src/pages/settingPages";
import AddPlaylist from "src/pages/addPlaylist";
import YourPlaylist from "src/pages/yourPlaylist";
import Favorite from "src/pages/favorite";
import Albums from "src/pages/albums";
import { SideBarComponent } from "src/component/sideBar";
import styled from "styled-components";
import Login from "src/pages/login";
import SignUp from "src/pages/signUp";
import MostPlayed from "src/pages/mostPLayed";
import Profile from "src/pages/personalArtist";
import About from "src/pages/aboutUs";

interface MainContentProps {
  children: React.ReactNode;
}

export const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return <ContentWrapper>{children}</ContentWrapper>;
};
const LAST_SCREEN = "lastScreen";
export const RoutesHandler: React.FC = () => {
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const currentPage = {
      path: location.pathname,
      name: location.pathname.split("/").pop() || "home",
    };
    localStorage.setItem(LAST_SCREEN, JSON.stringify(currentPage));
  }, [location.pathname]);

  const isAuthRoute =
    location.pathname.includes("/login") ||
    location.pathname.includes("/signUp");

  return (
    <Layout>
      {!isAuthRoute && (
        <SidebarWrapper>
          <SideBarComponent />
        </SidebarWrapper>
      )}
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
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home/about" element={<About />} />
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
  border-right: 2px solid #ee10b0;
  position: relative;
  box-shadow: 2px 0 10px -2px #ad5c96;
  transition: box-shadow 0.3s ease;
  background-color: #181818;
  min-height: 100vh;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: -2px;
    bottom: 0;
    width: 2px;
    background-color: #ee10b0;
    z-index: 2;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
`;
