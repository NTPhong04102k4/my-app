import {
  ALBUMS,
  DATA_SINGERS,
  DATA_TRENDING,
  MUSIC_VIDEO,
  PLAYLIST,
  RELEASE_SONGS,
  SONGS_WEEKLY,
} from "src/component/Item/data";
import { TopMusic } from "../../component/ItemComponent/TopMusicFavorites";
import { TopPlaylist } from "../../component/ItemComponent/TopPlaylist";
import { TopSinger } from "../../component/ItemComponent/TopSinger";
import { TopTrending } from "../../component/ItemComponent/TopTrending";
import React from "react";
import { RiRecordCircleLine } from "react-icons/ri";
import { FaMusic } from "react-icons/fa6";
import { MdOutlineQueueMusic } from "react-icons/md";
import { TopVideo } from "src/component/ItemComponent/TopVideo";
import { ImageSlide } from "src/component/ItemComponent/imageSlider";
import { LoginWeb } from "./Item/Login";
export function BodyDiscovery() {
  return (
    <div className="h-auto flex-col flex items-center">
      <ImageSlide />
      <TopMusic data={SONGS_WEEKLY} title="Weekly Top" type=" Songs" componentIcon={FaMusic} color="#EE10B0" />
      <TopMusic data={RELEASE_SONGS} title="New Release " type="Songs"color="#EE10B0" componentIcon={FaMusic}/>
      <TopTrending data={DATA_TRENDING} title="Trending Songs" />
      <TopSinger data={DATA_SINGERS} title="Popular Artist" color="#EE10B0" />
     <TopVideo data={MUSIC_VIDEO} title="Music" type="Video" color={"#EE10B0"}/>
     <TopMusic data={ALBUMS} title="Top" type="Albums"  color="#0E9EEF" componentIcon={RiRecordCircleLine}/>
    
      <TopPlaylist data={PLAYLIST} title="Mood " type="Playlists" color="#EE10B0" componentIcon={MdOutlineQueueMusic}/>
      <LoginWeb/>
    </div>
  );
}