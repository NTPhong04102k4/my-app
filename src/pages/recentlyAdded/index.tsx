import { SideBarComponent } from "src/component/sideBar";
import React, { useState } from "react";

// Mock data cho các tab
const mockSongs = [
  {
    id: 1,
    title: "Shape of You",
    artist: "Ed Sheeran",
    album: "÷",
    duration: "3:53",
    image: "/src/assets/images/trendSong/shape_of_you.png",
  },
  {
    id: 2,
    title: "Someone Like You",
    artist: "Adele",
    album: "21",
    duration: "4:45",
    image: "/src/assets/images/musicVideo/someone_like_you.png",
  },
  {
    id: 3,
    title: "Rolling in the Deep",
    artist: "Adele",
    album: "21",
    duration: "3:48",
    image: "/src/assets/images/albums/rolling_in_the_deep.png",
  },
  {
    id: 4,
    title: "Houdini",
    artist: "Dua Lipa",
    album: "Radical Optimism",
    duration: "3:05",
    image: "/src/assets/images/albums/houdini.png",
  },
  {
    id: 5,
    title: "As It Was",
    artist: "Harry Styles",
    album: "Harry's House",
    duration: "2:47",
    image: "/src/assets/images/albums/as_it_was.png",
  },
];

const mockAlbums = [
  {
    id: 1,
    title: "21",
    artist: "Adele",
    year: "2011",
    image: "/src/assets/images/albums/adele_21.png",
  },
  {
    id: 2,
    title: "Harry's House",
    artist: "Harry Styles",
    year: "2022",
    image: "/src/assets/images/albums/Harry_House.png",
  },
  {
    id: 3,
    title: "Scorpion",
    artist: "Drake",
    year: "2018",
    image: "/src/assets/images/albums/Scorpion.png",
  },
  {
    id: 4,
    title: "Beauty Behind the Madness",
    artist: "The Weeknd",
    year: "2015",
    image: "/src/assets/images/albums/beauty_behind_the_madnesse_21.png",
  },
];

const mockArtists = [
  {
    id: 1,
    name: "Adele",
    image: "/src/assets/images/singer/adele.png",
    followers: "45.2M",
  },
  {
    id: 2,
    name: "Harry Styles",
    image: "/src/assets/images/singer/harry_syles.png",
    followers: "38.7M",
  },
  {
    id: 3,
    name: "Taylor Swift",
    image: "/src/assets/images/singer/taylor_swift.jpg",
    followers: "52.1M",
  },
  {
    id: 4,
    name: "Billie Eilish",
    image: "/src/assets/images/singer/billie_eilish.png",
    followers: "41.3M",
  },
];

export default function RecentlyAdded() {
  const [activeTab, setActiveTab] = useState("songs");

  const tabs = [
    { id: "songs", label: "Bài hát đã thêm" },
    { id: "albums", label: "Albums" },
    { id: "artists", label: "Artists" },
  ];

  const renderSongsList = () => (
    <div className="space-y-2">
      {mockSongs.map((song) => (
        <div
          key={song.id}
          className="flex items-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
        >
          <img
            src={song.image}
            alt={song.title}
            className="w-12 h-12 rounded-md object-cover"
          />
          <div className="ml-4 flex-1">
            <h3 className="text-white font-medium">{song.title}</h3>
            <p className="text-gray-300 text-sm">{song.artist}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-300 text-sm">{song.album}</p>
            <p className="text-gray-400 text-xs">{song.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderAlbumsList = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {mockAlbums.map((album) => (
        <div
          key={album.id}
          className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors cursor-pointer"
        >
          <img
            src={album.image}
            alt={album.title}
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
          <h3 className="text-white font-medium text-center">{album.title}</h3>
          <p className="text-gray-300 text-sm text-center">{album.artist}</p>
          <p className="text-gray-400 text-xs text-center">{album.year}</p>
        </div>
      ))}
    </div>
  );

  const renderArtistsList = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {mockArtists.map((artist) => (
        <div
          key={artist.id}
          className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors cursor-pointer text-center"
        >
          <img
            src={artist.image}
            alt={artist.name}
            className="w-32 h-32 rounded-full object-cover mx-auto mb-3"
          />
          <h3 className="text-white font-medium">{artist.name}</h3>
          <p className="text-gray-300 text-sm">{artist.followers} followers</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex bg-[#602139] min-h-screen">
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Recently Added</h1>
          <p className="text-gray-300">
            Khám phá những bài hát, album và nghệ sĩ bạn đã thêm gần đây
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-white/10 rounded-lg p-1 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-white text-[#602139]"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white/5 rounded-lg p-6">
          {activeTab === "songs" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">
                  Bài hát đã thêm ({mockSongs.length})
                </h2>
                <button className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
                  Phát tất cả
                </button>
              </div>
              {renderSongsList()}
            </div>
          )}

          {activeTab === "albums" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">
                  Albums ({mockAlbums.length})
                </h2>
                <button className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
                  Xem tất cả
                </button>
              </div>
              {renderAlbumsList()}
            </div>
          )}

          {activeTab === "artists" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">
                  Artists ({mockArtists.length})
                </h2>
                <button className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
                  Xem tất cả
                </button>
              </div>
              {renderArtistsList()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
