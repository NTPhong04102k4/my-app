export interface Songs {
  src: string;
  nameSong: string;
  nameSinger: string;
  id: number;
}

export const SONGS_WEEKLY: Songs[] = [
  {
    src: require("../../../assets/images/weeklyTopSong/whatever_it_takes.png"),
    nameSong: "Whatever It Takes",
    nameSinger: "Imagne Dragons",
    id: 0,
  },
  {
    src: require("../../../assets/images/weeklyTopSong/skyfall.png"),
    nameSong: "Skyfall",
    nameSinger: "Adele",
    id: 1,
  },
  {
    src: require("../../../assets/images/weeklyTopSong/superman.png"),
    nameSong: "Superman",
    nameSinger: "Eminiem",
    id: 2,
  },
  {
    src: require("../../../assets/images/weeklyTopSong/softcore.png"),
    nameSong: "Softcore",
    nameSinger: "The neighberhood",
    id: 3,
  },
  {
    src: require("../../../assets/images/weeklyTopSong/the_lonliest.png"),
    nameSong: "The Lonliest",
    nameSinger: "Måneskin",
    id: 4,
  },
];

export const RELEASE_SONGS: Songs[] = [
  {
    src: require("../../../assets/images/newRelease/time.png"),
    nameSong: "Time",
    nameSinger: "Luciano",
    id: 0,
  },
  {
    src: require("../../../assets/images/newRelease/112.png"),
    nameSong: "112",
    nameSinger: "jazzek",
    id: 1,
  },
  {
    src: require("../../../assets/images/newRelease/we_dont_case.png"),
    nameSong: "We don't care",
    nameSinger: "Kyanu & Dj Gullum",
    id: 2,
  },
  {
    src: require("../../../assets/images/newRelease/who_i_am.png"),
    nameSong: "Who I Am",
    nameSinger: "Alan Walker &  Elias",
    id: 3,
  },
  {
    src: require("../../../assets/images/newRelease/baixo.png"),
    nameSong: "Baixo",
    nameSinger: "XXAnteria",
    id: 4,
  },
];

export interface singer {
  name: string;
  srcImg: string;
  id: number;
}

export const DATA_SINGERS: singer[] = [
  {
    name: "Eminiem",
    srcImg: require("../../../assets/images/singer/eminiem.png"),
    id: 0,
  },
  {
    name: "Imagne Dragons",
    srcImg: require("../../../assets/images/singer/imagne_dragons.png"),
    id: 1,
  },
  {
    name: "Adele",
    srcImg: require("../../../assets/images/singer/adele.png"),
    id: 2,
  },
  {
    name: "Lana Del Ray",
    srcImg: require("../../../assets/images/singer/lana_del_ray.png"),
    id: 3,
  },
  {
    name: "Harry Styles",
    srcImg: require("../../../assets/images/singer/harry_syles.png"),
    id: 4,
  },
  {
    name: "Billie Eilish",
    srcImg: require("../../../assets/images/singer/billie_eilish.png"),
    id: 5,
  },
];

export interface SongTrending extends Songs {
  description: string;
  playtime: number;
  dateRelease: string;
}

export const DATA_TRENDING: SongTrending[] = [
  {
    nameSong: "Sorfcore",
    nameSinger: "The neighberhood",
    id: 0,
    playtime: 206,
    dateRelease: "Nov 4, 2023",
    src: require("../../../assets/images/trendSong/softcore.png"),
    description: "Hard to Imagine the Neighbourhood Ever Changing",
  },
  {
    nameSong: "Skyfall Beats",
    nameSinger: "nightmares",
    id: 1,
    playtime: 100,
    dateRelease: "Oct 26, 2023",
    src: require("../../../assets/images/trendSong/sky_fall_beats.png"),
    description: "nightmares",
  },
  {
    nameSong: "Greedy",
    nameSinger: "tate mcrae",
    id: 2,
    playtime: 100,
    dateRelease: "Dec 30, 2023",
    src: require("../../../assets/images/trendSong/greedy.png"),
    description: "Greedy",
  },
  {
    nameSong: "Lovin On me",
    nameSinger: " jack harlow",
    id: 3,
    playtime: 100,
    dateRelease: "Dec 30, 2023",
    src: require("../../../assets/images/trendSong/lovin_on_me.png"),
    description: "Lovin On me",
  },
  {
    nameSong: "pain the town red",
    nameSinger: "Doja Cat",
    id: 4,
    playtime: 100,
    dateRelease: "Dec 29, 2023",
    src: require("../../../assets/images/trendSong/pain_the_town_red.png"),
    description: "Paint The Town Red",
  },
  {
    nameSong: "Dancin On Night",
    nameSinger: "Dualipa",
    id: 5,
    playtime: 100,
    dateRelease: "May 27, 2023",
    src: require("../../../assets/images/trendSong/dancin_on_night.png"),
    description: "Dance The Night(From Barbie Movie)",
  },
  {
    nameSong: "Water",
    nameSinger: "Tyla",
    id: 6,
    playtime: 100,
    dateRelease: "Dec 10, 2023",
    src: require("../../../assets/images/trendSong/water.png"),
    description: "Water",
  },
];

export interface musicVideo {
  nameSinger: string;
  id: number;
  viewer: number | string;
  src: string;
  nameSong: string;
}

export interface playList {
  name: string;
  id: number;
  src: string;
}

export interface albums {
  nameSinger: string;
  id: number;
  src: string;
  nameSong: string;
}

export const MUSIC_VIDEO: musicVideo[] = [
  {
    nameSinger: "Måneskin",
    id: 0,
    src: require("../../../assets/images/musicVideo/Gossip.png"),
    viewer: 100000,
    nameSong: "Gossip",
  },
  {
    nameSinger: "Ed Sheeran",
    id: 1,
    src: require("../../../assets/images/musicVideo/shape_of_you.png"),
    viewer: 100000,
    nameSong: "Shape Of You",
  },
  {
    nameSinger: "Adele",
    id: 2,
    src: require("../../../assets/images/musicVideo/someone_like_you.png"),
    viewer: 100000,
    nameSong: "Someone Like You",
  },
];

export const PLAYLIST: playList[] = [
  {
    id: 0,
    name: "Sad Playlist",
    src: require("../../../assets/images/playlist/sad_song.png"),
  },
  {
    id: 1,
    name: "Chill Playlist",
    src: require("../../../assets/images/playlist/chill_song.png"),
  },
  {
    id: 2,
    name: "Workout Songs",
    src: require("../../../assets/images/playlist/workout_song.png"),
  },
  {
    id: 3,
    name: "Love Playlist",
    src: require("../../../assets/images/playlist/love_playlist.png"),
  },
  {
    id: 4,
    name: "Happy Songs",
    src: require("../../../assets/images/playlist/happy_songs.png"),
  },
];

export const ALBUMS: albums[] = [
  {
    nameSinger: "Adele",
    id: 0,
    src: require("../../../assets/images/albums/adele_21.png"),
    nameSong: "Adele 21",
  },
  {
    nameSinger: "The Weekend",
    id: 1,
    src: require("../../../assets/images/albums/beauty_behind_the_madnesse_21.png"),
    nameSong: "Beauty Behind the Madnesse 21",
  },
  {
    nameSinger: "Drake",
    id: 2,
    src: require("../../../assets/images/albums/Scorpion.png"),
    nameSong: "Scorpion",
  },
  {
    nameSinger: "Harry Styles",
    id: 3,
    src: require("../../../assets/images/albums/Harry_House.png"),
    nameSong: `Harry's House`,
  },
  {
    nameSinger: "Lana Del Ray",
    id: 4,
    src: require("../../../assets/images/albums/born_to_die.png"),
    nameSong: "Born To Die",
  },
];