import React, { useState } from "react";
import { SideBarComponent } from "src/component/sideBar";

// Mock data cho danh sách bài hát yêu thích
const mockFavoriteSongs = [
  {
    id: 1,
    title: "Shape of You",
    artist: "Ed Sheeran",
    album: "÷",
    duration: "3:53",
    image: "/src/assets/images/trendSong/shape_of_you.png",
    category: "Pop",
    addedDate: "2024-01-15",
  },
  {
    id: 2,
    title: "Someone Like You",
    artist: "Adele",
    album: "21",
    duration: "4:45",
    image: "/src/assets/images/musicVideo/someone_like_you.png",
    category: "Pop Ballad",
    addedDate: "2024-01-10",
  },
  {
    id: 3,
    title: "Rolling in the Deep",
    artist: "Adele",
    album: "21",
    duration: "3:48",
    image: "/src/assets/images/albums/rolling_in_the_deep.png",
    category: "Pop Ballad",
    addedDate: "2024-01-08",
  },
  {
    id: 4,
    title: "Houdini",
    artist: "Dua Lipa",
    album: "Radical Optimism",
    duration: "3:05",
    image: "/src/assets/images/albums/houdini.png",
    category: "Pop",
    addedDate: "2024-01-20",
  },
  {
    id: 5,
    title: "As It Was",
    artist: "Harry Styles",
    album: "Harry's House",
    duration: "2:47",
    image: "/src/assets/images/albums/as_it_was.png",
    category: "Pop",
    addedDate: "2024-01-12",
  },
  {
    id: 6,
    title: "Water",
    artist: "Tyla",
    album: "TYLA",
    duration: "3:20",
    image: "/src/assets/images/trendSong/water.png",
    category: "Afro Pop",
    addedDate: "2024-01-18",
  },
  {
    id: 7,
    title: "Greedy",
    artist: "Tate McRae",
    album: "Think Later",
    duration: "2:11",
    image: "/src/assets/images/trendSong/greedy.png",
    category: "Pop",
    addedDate: "2024-01-22",
  },
  {
    id: 8,
    title: "Lovin On Me",
    artist: "Jack Harlow",
    album: "Lovin On Me",
    duration: "2:18",
    image: "/src/assets/images/trendSong/lovin_on_me.png",
    category: "Hip Hop",
    addedDate: "2024-01-25",
  },
  {
    id: 9,
    title: "Softcore",
    artist: "The Neighbourhood",
    album: "Hard To Imagine The Neighbourhood Ever Changing",
    duration: "3:26",
    image: "/src/assets/images/weeklyTopSong/softcore.png",
    category: "Alternative",
    addedDate: "2024-01-05",
  },
  {
    id: 10,
    title: "Skyfall",
    artist: "Adele",
    album: "Skyfall",
    duration: "4:46",
    image: "/src/assets/images/weeklyTopSong/skyfall.png",
    category: "Pop Ballad",
    addedDate: "2024-01-03",
  },
];

export default function Favorite() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filters = [
    { id: "all", label: "Tất cả", count: mockFavoriteSongs.length },
    {
      id: "category",
      label: "Theo chủ đề",
      count: new Set(mockFavoriteSongs.map((song) => song.category)).size,
    },
    {
      id: "artist",
      label: "Theo ca sĩ",
      count: new Set(mockFavoriteSongs.map((song) => song.artist)).size,
    },
  ];

  const categories = Array.from(
    new Set(mockFavoriteSongs.map((song) => song.category))
  );
  const artists = Array.from(
    new Set(mockFavoriteSongs.map((song) => song.artist))
  );

  const filteredSongs = mockFavoriteSongs.filter(
    (song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getSongsByCategory = (category: string) => {
    return filteredSongs.filter((song) => song.category === category);
  };

  const getSongsByArtist = (artist: string) => {
    return filteredSongs.filter((song) => song.artist === artist);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN");
  };

  const renderSongItem = (song: any) => (
    <div
      key={song.id}
      className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
    >
      <img
        src={song.image}
        alt={song.title}
        className="w-12 h-12 rounded-md object-cover"
      />
      <div className="ml-4 flex-1">
        <h3 className="text-white font-medium">{song.title}</h3>
        <p className="text-gray-300 text-sm">{song.artist}</p>
        <p className="text-gray-400 text-xs">{song.category}</p>
      </div>
      <div className="text-right mr-4">
        <p className="text-gray-300 text-sm">{song.album}</p>
        <p className="text-gray-400 text-xs">{song.duration}</p>
      </div>
      <div className="text-right">
        <p className="text-gray-400 text-xs">
          Thêm: {formatDate(song.addedDate)}
        </p>
        <button className="text-red-400 hover:text-red-300 text-sm">
          Bỏ yêu thích
        </button>
      </div>
    </div>
  );

  const renderCategorySection = (category: string) => {
    const songs = getSongsByCategory(category);
    if (songs.length === 0) return null;

    return (
      <div key={category} className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">{category}</h3>
          <span className="text-gray-300 text-sm">{songs.length} bài hát</span>
        </div>
        <div className="space-y-2">{songs.map(renderSongItem)}</div>
      </div>
    );
  };

  const renderArtistSection = (artist: string) => {
    const songs = getSongsByArtist(artist);
    if (songs.length === 0) return null;

    return (
      <div key={artist} className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img
              src={songs[0].image}
              alt={artist}
              className="w-12 h-12 rounded-full object-cover mr-3"
            />
            <h3 className="text-xl font-semibold text-white">{artist}</h3>
          </div>
          <span className="text-gray-300 text-sm">{songs.length} bài hát</span>
        </div>
        <div className="space-y-2">{songs.map(renderSongItem)}</div>
      </div>
    );
  };

  return (
    <div className="flex bg-[#602139] min-h-screen">
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Bài hát yêu thích
          </h1>
          <p className="text-gray-300">
            Khám phá những bài hát bạn đã yêu thích, được sắp xếp theo chủ đề và
            ca sĩ
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex space-x-1 bg-white/10 rounded-lg p-1 mb-6">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors ${
                activeFilter === filter.id
                  ? "bg-white text-[#602139]"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm kiếm bài hát yêu thích..."
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
          />
        </div>

        {/* Content Area */}
        <div className="bg-white/5 rounded-lg p-6">
          {activeFilter === "all" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">
                  Tất cả bài hát yêu thích ({filteredSongs.length})
                </h2>
                <button className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
                  Phát tất cả
                </button>
              </div>
              <div className="space-y-2">
                {filteredSongs.map(renderSongItem)}
              </div>
            </div>
          )}

          {activeFilter === "category" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">
                  Phân loại theo chủ đề
                </h2>
                <button className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
                  Phát tất cả
                </button>
              </div>
              {categories.map(renderCategorySection)}
            </div>
          )}

          {activeFilter === "artist" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">
                  Phân loại theo ca sĩ
                </h2>
                <button className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
                  Phát tất cả
                </button>
              </div>
              {artists.map(renderArtistSection)}
            </div>
          )}

          {filteredSongs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">💔</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Chưa có bài hát yêu thích
              </h3>
              <p className="text-gray-400">
                Hãy yêu thích những bài hát bạn thích để chúng xuất hiện ở đây
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
