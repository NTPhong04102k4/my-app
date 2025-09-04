import { type } from "os";

interface Songs {
  src: string;
  nameSong: string;
  nameSinger: string;
  id: number;
}
interface Singer {
  name: string;
  srcImg: string;
  id: number;
}

interface MusicVideo {
  nameSinger: string;
  id: number;
  viewer: number | string;
  src: string;
  nameSong: string;
}

interface PlayList {
  name: string;
  id: number;
  src: string;
}

interface Albums {
  nameSinger: string;
  id: number;
  src: string;
  nameSong: string;
}
interface SongTrending extends Songs {
  description: string;
  playtime: number;
  dateRelease: string;
}
export type { SongTrending, Albums, PlayList, Songs, Singer ,MusicVideo};
