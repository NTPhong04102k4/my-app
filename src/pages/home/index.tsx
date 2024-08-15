import { FooterComponent } from "src/component/footer";
import { HeaderComponent } from "src/component/header";
import { SideBarComponent } from "src/component/sideBar";
import { ItemMusicGenres } from "./Item/ItemMusicGenres";
import { DATA_MUSIC_GENRES } from "./data";
import { TopPlaylist } from "../../component/ItemComponent/TopPlaylist";

export default function Home() {
  return (
    <div className="flex-1 min-h-screen  flex bg-[#602139] overflow-hidden">
      <div className="flex flex-wrap min-w-[185px] max-w-[266px] shadow-lg rounded-lg bg-[#0E1920]">
        <SideBarComponent />
      </div>
      <div className="flex-1 pt-[30px] ml-4">
        <HeaderComponent />
        <ItemMusicGenres data={DATA_MUSIC_GENRES} title={"Music Genres"} />
{/* <TopPlaylist data={} title=""/> */}
        <FooterComponent />
      </div>
    </div>
  );
}
