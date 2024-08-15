import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home";
import Favorite from "./pages/favortite";
import Discovery from "./pages/discovery";
import RecentlyAdded from "./pages/recentlyAdded";
import MostPlayed from "./pages/mostPLayed";
import Artists from "./pages/artists";
import Albums from "./pages/ablums";
import SettingPages from "./pages/settingPages";
import AddPlaylist from "./pages/addPlaylist";
import YourPlaylist from "./pages/yourPlaylist";
import Login from "./pages/login";

const App: React.FC = () => {
  const localtion = useLocation();
  return (
    <Routes location={localtion} key={localtion.pathname}>
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
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
};

export default App;
