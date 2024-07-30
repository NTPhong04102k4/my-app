import {
  ALBUMS,
  DATA_SINGERS,
  DATA_TRENDING,
  PLAYLIST,
  RELEASE_SONGS,
  SONGS_WEEKLY,
} from "../../component/Item/data/dataMusic";
import { TopMusic } from "./Item/TopMusicFavorites";
import { TopPlaylist } from "./Item/TopPlaylist";
import { TopSinger } from "./Item/TopSinger";
import { TopTrending } from "./Item/TopTrending";
import React  from 'react';

export function BodyDiscovery() {
  return (
    <div className="h-auto flex-col scrollbar-hidden ">
      <TopMusic data={SONGS_WEEKLY} title="Weekly Top" type=" Songs" />
      <TopMusic data={RELEASE_SONGS} title="New Release " type="Songs" />
      <TopTrending data={DATA_TRENDING} title="Trending Songs" />
      <TopSinger data={DATA_SINGERS} title="Popular Artist" />
      <TopMusic data={ALBUMS} title="Top" type="Albums" />
      <TopPlaylist data={PLAYLIST} title="Mood " type="Playlists" />
    </div>
  );
}
