import { FooterComponent } from "../../component/footer";
import { HeaderComponent } from "../../component/header";

import React from "react";
import { MdOutlineQueueMusic } from "react-icons/md";
import { FaMusic } from "react-icons/fa";
import { RiRecordCircleLine } from "react-icons/ri";
import { ALBUMS, DATA_SINGERS, PLAYLIST, RELEASE_SONGS } from "src/component/Item/data";
import { DATA_VIDEO_DIS } from "./data";
import { DATA_MUSIC_GENRES } from "../home/data";
import { ItemMusicGenres } from "../home/Item/ItemMusicGenres";
import { TopPlaylist } from "src/component/ItemComponent/TopPlaylist";
import { TopSinger } from "src/component/ItemComponent/TopSinger";
import { TopVideo } from "src/component/ItemComponent/TopVideo";
import { TopMusic } from "src/component/ItemComponent/TopMusicFavorites";

export default function Discovery() {
  return (
    <div className="min-h-screen flex-col   bg-[#181818] pl-[30px] pr-[30px] ">
    <HeaderComponent />    
<div className="flex items-center flex-col">
<ItemMusicGenres data={DATA_MUSIC_GENRES} title={"Music Genres"} />
     <TopPlaylist data={PLAYLIST} title="Mood " type="Playlists" color="#EE10B0" componentIcon={MdOutlineQueueMusic}/>
     <TopSinger data={DATA_SINGERS} title="Popular Artist" color="#EE10B0" />
     <TopVideo
    data={DATA_VIDEO_DIS}
    title="Music"
    type="Video"
    color={"#EE10B0"}
  />
    <TopMusic data={RELEASE_SONGS} title="New Release " type="Songs"color="#EE10B0" componentIcon={FaMusic}/>
    <TopMusic data={ALBUMS} title="Top" type="Albums"  color="#0E9EEF" componentIcon={RiRecordCircleLine}/>
   
</div>
    <FooterComponent /> 
</div>
  );
}
