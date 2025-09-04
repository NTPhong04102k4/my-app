import { PlayList, Singer, Songs } from "src/component/Item/interface";

interface Artist {
    src: string;
    singer: string;
    song: string;
    dateRelease: string;
    played: number;
    playtime: number;
    id: number
}
export const DATA_ARTIST: Artist[] = [
    {
        song: "Without Me",
        singer: "Eminem",
        id: 0,
        playtime: 290,
        dateRelease: "May 15, 2002",
        src: require("src/assets/images/artists/without_me.png"),
        played: 21215618
    },
    {
        song: "Mockingbird ",
        singer: "Eminem",
        id: 1,
        playtime: 250,
        dateRelease: "Apr 25, 2005",
        src: require("src/assets/images/artists/mocking_bird.png"),
        played: 19856112
    },

    {
        song: "The Real Slim Shawdow",
        singer: "Eminem",
        id: 3,
        playtime: 254,
        dateRelease: "Nov 30, 2023",
      src: require("src/assets/images/artists/the_real_slim.png"),
            played: 16564223
    },
    {
        song: "Lose Yourself",
        singer: "Eminem",
        id: 4,
        playtime: 322,
        dateRelease: "Nov 30, 2023",
        src: require("src/assets/images/artists/lose_yourselt.png"),
        played: 16240390
    },
    {
        song: "Godzila",
        singer: "Eminem",
        id: 5,
        playtime: 210,
        dateRelease: "June 30, 2023",
        src: require("src/assets/images/artists/godzila.png"),
        played: 14367500
    },

]
export interface AlbumsArtist{
    id:number,
    src:string,
    year:number,
    nameSong:string,
}
export const DATA_ARTIST_ALBUMS: AlbumsArtist[] = [
    {
        id: 0,
        src: require("src/assets/images/artists/without_me.png"),
        year:2002,
        nameSong: 'The Eminem Show',
    },
    {
        id: 1,
        src: require("src/assets/images/artists/mocking_bird.png"),
        year:2004,
        nameSong: 'Encore',
    },
    {
        id: 2,
        src: require("src/assets/images/artists/godzila.png"),
        year: 2020,
        nameSong: 'Music To Be MrPhongNguyen',
    },
    {
        id: 3,
        src: require("src/assets/images/artists/recovery.png"),
        year: 2010,
        nameSong: 'Recovery',
    },
    {
        id: 4,
        src: require("src/assets/images/artists/emium.png"),
        year: 1999,
        nameSong: 'Eminem The Slime Moon',
    },
]
export const DATA_SINGLE_SONG: AlbumsArtist[] = [
    {
        id: 0,
        src: require("src/assets/images/artists/lace_it.png"),
        year:2023,
        nameSong: 'Lace It',
    },
    {
        id: 1,
        src: require("src/assets/images/artists/real_esc.png"),
        year:2022,
        nameSong: 'Releast',
    },
    {
        id: 2,
        src: require("src/assets/images/artists/from_the-d_2.png"),
        year:2023,
        nameSong: 'From The D 2 The Slime',
    },
    {
        id: 3,
        src: require("src/assets/images/artists/911.png"),
        year:2022,
        nameSong: '911',
    },
    {
        id: 4,
        src: require("src/assets/images/artists/kill_shot.png"),
        year:2018,
        nameSong: 'Killshot',
    },
]
export const DATA_ARTIST_PLAYLIST: PlayList[] = [
    {
        id: 0,
        src: require("src/assets/images/artists/full_collection.png"),
        name: 'Full Collection',
    },
    {
        id: 1,
        src: require("src/assets/images/artists/best_of_emium.png"),
        name: 'Best Of Eminem',
    },
    {
        id: 2,
        src: require("src/assets/images/artists/old_song.png"),
        name: 'Old Songs',
    },
    {
        id: 3,
        src: require("src/assets/images/artists/fan_service.png"),
        name: 'Fan’s Favorite',
    },
    {
        id: 4,
        src: require("src/assets/images/artists/mew-release.png"),
        name: 'New Releases',
    },
]
export const DATA_ARTIST_OTHER: Singer[] = [
    {
        id: 0,
        name: "50 Cent",
        srcImg:require("src/assets/images/artists/50_cent.png"),
    },
    {
        id: 1,
        name: "Snoop Dog",
        srcImg:require("src/assets/images/artists/snoop-dop.png"),

    },
    {
        id: 2,
        name: "Tupac",
        srcImg:require("src/assets/images/artists/tupac.png"),

    },
    {
        id: 3,
        name: "Jay+z",
        srcImg:require("src/assets/images/artists/jay_z.png"),

    },
]