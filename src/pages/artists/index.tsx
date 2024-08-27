import styled from "styled-components";
import { HeaderArtist } from "./item/HeaderArtist";
import { PopularMusic } from "./item/ArtistItem";
import FooterComponent from "src/component/footer";
import { TopMusic } from "src/component/ItemComponent/TopMusicFavorites";
import { DATA_ARTIST_ALBUMS, DATA_ARTIST_OTHER, DATA_ARTIST_PLAYLIST, DATA_SINGLE_SONG } from "./data";
import { TopAlbums } from "./item/TopAlbums";
import { TopPlaylistArtist } from "./item/PlaylistArtist";
import { TopArtist } from "./item/TopArtist";

export default function Artists() {
  return (
  <Container>
    <div className="flex-col flex bg-black pb-16 justify-center items-center rounded-s-xl rounded-e-xl w-fit  self-center">
    <HeaderArtist/>
    <PopularMusic/>
   <div className="pl-1 pr-4 justify-center">
   <TopAlbums title="Artist’s " type="Albums" data={DATA_ARTIST_ALBUMS} color={"#ee10b0"} />
   <TopAlbums title="Single  " type="Songs" data={DATA_SINGLE_SONG} color={"#ee10b0"} />
    <TopPlaylistArtist title="Artist’s " type="Playlist" data={DATA_ARTIST_PLAYLIST} color="#ee10b0"/>
    <TopArtist title="Eminem Fans " type="Also Listen To" data={DATA_ARTIST_OTHER} color="#ee10b0"/>
</div>
    </div>
    <FooterComponent/>
  </Container>
  );
}
const Container=styled.div`
  display: flex;
  flex-direction: column;
  background-color: #181818;
  padding-top: 26px;
  padding-right: 30px;
  padding-left: 30px;
min-height: 100vh;
  justify-content: center;
`