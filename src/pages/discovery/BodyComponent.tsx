import {
  ALBUMS,
  DATA_SINGERS,
  DATA_TRENDING,
  PLAYLIST,
  RELEASE_SONGS,
  SONGS_WEEKLY,
} from "src/component/Item/data";
import { ImageSlide } from "../../component/ItemComponent/ImageSlider";
import { TopMusic } from "../../component/ItemComponent/TopMusicFavorites";
import { TopPlaylist } from "../../component/ItemComponent/TopPlaylist";
import { TopSinger } from "../../component/ItemComponent/TopSinger";
import { TopTrending } from "../../component/ItemComponent/TopTrending";
import React from "react";

export function BodyDiscovery() {
  return (
    <div className="h-auto flex-col scrollbar-hidden ">
      <ImageSlide />
      <TopMusic data={SONGS_WEEKLY} title="Weekly Top" type=" Songs" />
      <TopMusic data={RELEASE_SONGS} title="New Release " type="Songs" />
      <TopTrending data={DATA_TRENDING} title="Trending Songs" />
      <TopSinger data={DATA_SINGERS} title="Popular Artist" />
      <TopMusic data={ALBUMS} title="Top" type="Albums" />
      <TopPlaylist data={PLAYLIST} title="Mood " type="Playlists" />
    </div>
  );
}
