import React, { useState } from "react";
import { SideBarComponent } from "src/component/sideBar";

// Mock data cho các tab với số lần phát
const mockSongs = [
  {
    id: 1,
    title: "Shape of You",
    artist: "Ed Sheeran",
    album: "÷",
    duration: "3:53",
    image: "/src/assets/images/trendSong/shape_of_you.png",
    playCount: { total: 15420, today: 156, week: 892, month: 3245 },
  },
  {
    id: 2,
    title: "Someone Like You",
    artist: "Adele",
    album: "21",
    duration: "4:45",
    image: "/src/assets/images/musicVideo/someone_like_you.png",
    playCount: { total: 12890, today: 89, week: 567, month: 2156 },
  },
  {
    id: 3,
    title: "Rolling in the Deep",
    artist: "Adele",
    album: "21",
    duration: "3:48",
    image: "/src/assets/images/albums/rolling_in_the_deep.png",
    playCount: { total: 11234, today: 67, week: 445, month: 1890 },
  },
  {
    id: 4,
    title: "Houdini",
    artist: "Dua Lipa",
    album: "Radical Optimism",
    duration: "3:05",
    image: "/src/assets/images/albums/houdini.png",
    playCount: { total: 9876, today: 234, week: 1234, month: 3456 },
  },
  {
    id: 5,
    title: "As It Was",
    artist: "Harry Styles",
    album: "Harry's House",
    duration: "2:47",
    image: "/src/assets/images/albums/as_it_was.png",
    playCount: { total: 8765, today: 45, week: 234, month: 1234 },
  },
  {
    id: 6,
    title: "Water",
    artist: "Tyla",
    album: "TYLA",
    duration: "3:20",
    image: "/src/assets/images/trendSong/water.png",
    playCount: { total: 7654, today: 123, week: 678, month: 2345 },
  },
];

const mockAlbums = [
  {
    id: 1,
    title: "21",
    artist: "Adele",
    year: "2011",
    image: "/src/assets/images/albums/adele_21.png",
    playCount: { total: 45678, today: 234, week: 1234, month: 5678 },
  },
  {
    id: 2,
    title: "Harry's House",
    artist: "Harry Styles",
    year: "2022",
    image: "/src/assets/images/albums/Harry_House.png",
    playCount: { total: 34567, today: 189, week: 987, month: 4567 },
  },
  {
    id: 3,
    title: "Scorpion",
    artist: "Drake",
    year: "2018",
    image: "/src/assets/images/albums/Scorpion.png",
    playCount: { total: 23456, today: 145, week: 789, month: 3456 },
  },
  {
    id: 4,
    title: "Beauty Behind the Madness",
    artist: "The Weeknd",
    year: "2015",
    image: "/src/assets/images/albums/beauty_behind_the_madnesse_21.png",
    playCount: { total: 12345, today: 67, week: 456, month: 2345 },
  },
];

const mockArtists = [
  {
    id: 1,
    name: "Adele",
    image: "/src/assets/images/singer/adele.png",
    followers: "45.2M",
    playCount: { total: 89012, today: 456, week: 2345, month: 8901 },
  },
  {
    id: 2,
    name: "Harry Styles",
    image: "/src/assets/images/singer/harry_syles.png",
    followers: "38.7M",
    playCount: { total: 67890, today: 345, week: 1789, month: 6789 },
  },
  {
    id: 3,
    name: "Taylor Swift",
    image: "/src/assets/images/singer/taylor_swift.jpg",
    followers: "52.1M",
    playCount: { total: 56789, today: 234, week: 1234, month: 5678 },
  },
  {
    id: 4,
    name: "Billie Eilish",
    image: "/src/assets/images/singer/billie_eilish.png",
    followers: "41.3M",
    playCount: { total: 45678, today: 189, week: 987, month: 4567 },
  },
];

export default function MostPlayed() {
  const [activeTab, setActiveTab] = useState("songs");
  const [sortBy, setSortBy] = useState("total");

  const tabs = [
    { id: "songs", label: "Bài hát phát nhiều nhất" },
    { id: "albums", label: "Album nghe nhiều nhất" },
    { id: "artists", label: "Ca sĩ nghe nhiều nhất" },
  ];

  const sortOptions = [
    { id: "total", label: "Tổng số lần phát" },
    { id: "today", label: "Trong ngày" },
    { id: "week", label: "Trong tuần" },
    { id: "month", label: "Trong tháng" },
  ];

  const formatPlayCount = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  const getSortedData = (data: any[]) => {
    return [...data].sort((a, b) => b.playCount[sortBy] - a.playCount[sortBy]);
  };

  const renderSongsList = () => {
    const sortedSongs = getSortedData(mockSongs);
    return (
      <div className="space-y-2">
        {sortedSongs.map((song, index) => (
          <div
            key={song.id}
            className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
          >
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
              <span className="text-white font-bold text-sm">{index + 1}</span>
            </div>
            <img
              src={song.image}
              alt={song.title}
              className="w-12 h-12 rounded-md object-cover"
            />
            <div className="ml-4 flex-1">
              <h3 className="text-white font-medium">{song.title}</h3>
              <p className="text-gray-300 text-sm">{song.artist}</p>
            </div>
            <div className="text-right mr-4">
              <p className="text-gray-300 text-sm">{song.album}</p>
              <p className="text-gray-400 text-xs">{song.duration}</p>
            </div>
            <div className="text-right">
              <p className="text-white font-semibold">
                {formatPlayCount(song.playCount[sortBy])}
              </p>
              <p className="text-gray-400 text-xs">lượt phát</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderAlbumsList = () => {
    const sortedAlbums = getSortedData(mockAlbums);
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedAlbums.map((album, index) => (
          <div
            key={album.id}
            className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors cursor-pointer relative"
          >
            <div className="absolute top-2 left-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">{index + 1}</span>
            </div>
            <img
              src={album.image}
              alt={album.title}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-white font-medium text-center">
              {album.title}
            </h3>
            <p className="text-gray-300 text-sm text-center">{album.artist}</p>
            <p className="text-gray-400 text-xs text-center mb-2">
              {album.year}
            </p>
            <div className="text-center">
              <p className="text-white font-semibold">
                {formatPlayCount(album.playCount[sortBy])}
              </p>
              <p className="text-gray-400 text-xs">lượt phát</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderArtistsList = () => {
    const sortedArtists = getSortedData(mockArtists);
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedArtists.map((artist, index) => (
          <div
            key={artist.id}
            className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors cursor-pointer text-center relative"
          >
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">{index + 1}</span>
            </div>
            <img
              src={artist.image}
              alt={artist.name}
              className="w-32 h-32 rounded-full object-cover mx-auto mb-3"
            />
            <h3 className="text-white font-medium">{artist.name}</h3>
            <p className="text-gray-300 text-sm mb-2">
              {artist.followers} followers
            </p>
            <div>
              <p className="text-white font-semibold">
                {formatPlayCount(artist.playCount[sortBy])}
              </p>
              <p className="text-gray-400 text-xs">lượt phát</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex bg-[#602139] min-h-screen">
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Most Played</h1>
          <p className="text-gray-300">
            Khám phá những bài hát, album và nghệ sĩ được phát nhiều nhất
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-white/10 rounded-lg p-1 mb-6">
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

        {/* Sort Options */}
        <div className="mb-6">
          <div className="flex items-center space-x-4">
            <span className="text-white font-medium">Sắp xếp theo:</span>
            <div className="flex space-x-2">
              {sortOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSortBy(option.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    sortBy === option.id
                      ? "bg-white text-[#602139]"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white/5 rounded-lg p-6">
          {activeTab === "songs" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">
                  Bài hát phát nhiều nhất ({mockSongs.length})
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
                  Album nghe nhiều nhất ({mockAlbums.length})
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
                  Ca sĩ nghe nhiều nhất ({mockArtists.length})
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
