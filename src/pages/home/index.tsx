import { FooterComponent } from "src/component/footer";
import { HeaderComponent } from "src/component/header";
import { SideBarComponent } from "src/component/sideBar";
import { ItemMusicGenres } from "./Item/ItemMusicGenres";
import { DATA_MUSIC_GENRES } from "./data";
import { TopPlaylist } from "../../component/ItemComponent/TopPlaylist";
import { ALBUMS, DATA_SINGERS, PLAYLIST, RELEASE_SONGS } from "src/component/Item/data";
import { TopSinger } from "src/component/ItemComponent/TopSinger";
import { TopMusic } from "src/component/ItemComponent/TopMusicFavorites";
import { RiRecordCircleLine } from "react-icons/ri";
import { MdOutlineQueueMusic } from "react-icons/md";
import { FaMusic } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex-1 min-h-screen  flex bg-[#602139] overflow-hidden">
      <div className="flex flex-wrap min-w-[185px] max-w-[266px] shadow-lg rounded-lg bg-[#0E1920]">
        <SideBarComponent />
      </div>
      <div className="flex-1 pt-[30px] ml-4">
        <HeaderComponent />
        <ItemMusicGenres data={DATA_MUSIC_GENRES} title={"Music Genres"} />
        <TopPlaylist data={PLAYLIST} title="Mood " type="Playlists" color="#EE10B0" componentIcon={MdOutlineQueueMusic}/>
        <TopSinger data={DATA_SINGERS} title="Popular Artist" color="#EE10B0" />
        <TopMusic data={RELEASE_SONGS} title="New Release " type="Songs"color="#EE10B0" componentIcon={FaMusic}/>
        <TopMusic data={ALBUMS} title="Top" type="Albums"  color="#0E9EEF" componentIcon={RiRecordCircleLine}/>
        <FooterComponent />
      </div>
    </div>
  );
}
