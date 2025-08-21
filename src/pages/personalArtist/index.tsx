import React, { useState } from "react";
import { SideBarComponent } from "src/component/sideBar";

// Mock data cho các khu vực nhạc
const musicRegions = [
  { id: "all", name: "Tất cả", icon: "🌍" },
  { id: "vietnam", name: "Việt Nam", icon: "🇻🇳" },
  { id: "us", name: "Âu Mỹ", icon: "🇺🇸" },
  { id: "asia", name: "Châu Á", icon: "🌏" },
  { id: "korea", name: "Hàn Quốc", icon: "🇰🇷" },
  { id: "japan", name: "Nhật Bản", icon: "🇯🇵" },
  { id: "china", name: "Trung Quốc", icon: "🇨🇳" },
];

// Mock data cho chủ đề nhạc
const musicThemes = [
  { id: "all", name: "Tất cả chủ đề" },
  { id: "love", name: "Tình yêu" },
  { id: "sad", name: "Buồn" },
  { id: "happy", name: "Vui vẻ" },
  { id: "energetic", name: "Năng động" },
  { id: "chill", name: "Thư giãn" },
  { id: "romantic", name: "Lãng mạn" },
];

// Mock data cho dòng nhạc
const musicGenres = [
  { id: "all", name: "Tất cả dòng nhạc" },
  { id: "pop", name: "Pop" },
  { id: "rock", name: "Rock" },
  { id: "hiphop", name: "Hip Hop" },
  { id: "r&b", name: "R&B" },
  { id: "electronic", name: "Electronic" },
  { id: "country", name: "Country" },
  { id: "jazz", name: "Jazz" },
  { id: "classical", name: "Classical" },
];

// Mock data cho ca sĩ
const mockArtist = {
  id: 1,
  name: "Adele",
  image: "/src/assets/images/singer/adele.png",
  coverImage: "/src/assets/images/albums/adele_21.png",
  followers: "45.2M",
  monthlyListeners: "38.7M",
  bio: "Adele Laurie Blue Adkins MBE là một ca sĩ, nhạc sĩ người Anh. Cô được biết đến với giọng hát mạnh mẽ và những bài hát ballad đầy cảm xúc. Album '21' của cô đã trở thành một trong những album bán chạy nhất mọi thời đại.",
  region: "us",
  genres: ["Pop", "Soul", "R&B"],
  themes: ["Tình yêu", "Buồn", "Lãng mạn"],
  verified: true,
  socialMedia: {
    instagram: "@adele",
    twitter: "@Adele",
    facebook: "Adele",
  },
  stats: {
    totalSongs: 45,
    totalAlbums: 4,
    totalPlaylists: 12,
    awards: 15,
  },
};

// Mock data cho bài hát tiêu biểu
const featuredSongs = [
  {
    id: 1,
    title: "Someone Like You",
    album: "21",
    duration: "4:45",
    image: "/src/assets/images/musicVideo/someone_like_you.png",
    plays: "2.5B",
    year: "2011",
  },
  {
    id: 2,
    title: "Rolling in the Deep",
    album: "21",
    duration: "3:48",
    image: "/src/assets/images/albums/rolling_in_the_deep.png",
    plays: "2.1B",
    year: "2011",
  },
  {
    id: 3,
    title: "Hello",
    album: "25",
    duration: "4:55",
    image: "/src/assets/images/albums/adele_21.png",
    plays: "1.8B",
    year: "2015",
  },
  {
    id: 4,
    title: "Set Fire to the Rain",
    album: "21",
    duration: "4:02",
    image: "/src/assets/images/albums/adele_21.png",
    plays: "1.5B",
    year: "2011",
  },
  {
    id: 5,
    title: "Skyfall",
    album: "Skyfall",
    duration: "4:46",
    image: "/src/assets/images/weeklyTopSong/skyfall.png",
    plays: "1.2B",
    year: "2012",
  },
  {
    id: 6,
    title: "When We Were Young",
    album: "25",
    duration: "4:50",
    image: "/src/assets/images/albums/adele_21.png",
    plays: "980M",
    year: "2015",
  },
  {
    id: 7,
    title: "Easy On Me",
    album: "30",
    duration: "3:44",
    image: "/src/assets/images/albums/adele_21.png",
    plays: "850M",
    year: "2021",
  },
  {
    id: 8,
    title: "Chasing Pavements",
    album: "19",
    duration: "3:30",
    image: "/src/assets/images/albums/adele_21.png",
    plays: "720M",
    year: "2008",
  },
];

export default function PersonalArtist() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedTheme, setSelectedTheme] = useState("all");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const formatNumber = (num: string) => {
    const number = parseFloat(num.replace(/[^0-9.]/g, ""));
    if (number >= 1000000000) {
      return (number / 1000000000).toFixed(1) + "B";
    } else if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + "M";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + "K";
    }
    return number.toString();
  };

  return (
    <div className="flex bg-[#602139] min-h-screen">
      <SideBarComponent />

      <div className="flex-1">
        {/* Header Search */}
        <div className="bg-white/5 p-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-white mb-6">
              Tìm kiếm ca sĩ
            </h1>

            {/* Search Bar */}
            <div className="relative mb-4">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tìm kiếm ca sĩ, nghệ sĩ..."
                className="w-full px-4 py-3 pl-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center text-white hover:text-gray-300 transition-colors mb-4"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"
                />
              </svg>
              Bộ lọc tìm kiếm
            </button>

            {/* Filters */}
            {showFilters && (
              <div className="space-y-4 p-4 bg-white/5 rounded-lg">
                {/* Khu vực nhạc */}
                <div>
                  <h3 className="text-white font-medium mb-3">Khu vực nhạc</h3>
                  <div className="flex flex-wrap gap-2">
                    {musicRegions.map((region) => (
                      <button
                        key={region.id}
                        onClick={() => setSelectedRegion(region.id)}
                        className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedRegion === region.id
                            ? "bg-white text-[#602139]"
                            : "bg-white/10 text-white hover:bg-white/20"
                        }`}
                      >
                        <span className="mr-2">{region.icon}</span>
                        {region.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Chủ đề nhạc */}
                <div>
                  <h3 className="text-white font-medium mb-3">Chủ đề nhạc</h3>
                  <div className="flex flex-wrap gap-2">
                    {musicThemes.map((theme) => (
                      <button
                        key={theme.id}
                        onClick={() => setSelectedTheme(theme.id)}
                        className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedTheme === theme.id
                            ? "bg-white text-[#602139]"
                            : "bg-white/10 text-white hover:bg-white/20"
                        }`}
                      >
                        {theme.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dòng nhạc */}
                <div>
                  <h3 className="text-white font-medium mb-3">Dòng nhạc</h3>
                  <div className="flex flex-wrap gap-2">
                    {musicGenres.map((genre) => (
                      <button
                        key={genre.id}
                        onClick={() => setSelectedGenre(genre.id)}
                        className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedGenre === genre.id
                            ? "bg-white text-[#602139]"
                            : "bg-white/10 text-white hover:bg-white/20"
                        }`}
                      >
                        {genre.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Artist Profile */}
        <div className="p-6">
          <div className="max-w-4xl mx-auto">
            {/* Artist Header */}
            <div className="relative mb-8">
              <div className="h-64 rounded-lg overflow-hidden mb-6">
                <img
                  src={mockArtist.coverImage}
                  alt={mockArtist.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="absolute bottom-6 left-6 flex items-end space-x-6">
                <img
                  src={mockArtist.image}
                  alt={mockArtist.name}
                  className="w-32 h-32 rounded-full border-4 border-white object-cover"
                />
                <div className="text-white">
                  <div className="flex items-center mb-2">
                    <h1 className="text-3xl font-bold mr-3">
                      {mockArtist.name}
                    </h1>
                    {mockArtist.verified && (
                      <svg
                        className="w-6 h-6 text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <p className="text-gray-300 mb-2">
                    {mockArtist.followers} followers
                  </p>
                  <div className="flex space-x-4">
                    <button className="bg-white text-[#602139] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                      Theo dõi
                    </button>
                    <button className="bg-white/20 text-white px-6 py-2 rounded-full font-semibold hover:bg-white/30 transition-colors">
                      Phát tất cả
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Artist Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Bio */}
              <div className="lg:col-span-2 bg-white/5 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Giới thiệu
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {mockArtist.bio}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {mockArtist.genres.map((genre) => (
                    <span
                      key={genre}
                      className="px-3 py-1 bg-white/10 text-white rounded-full text-sm"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="bg-white/5 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Thống kê
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Bài hát</span>
                    <span className="text-white font-semibold">
                      {mockArtist.stats.totalSongs}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Album</span>
                    <span className="text-white font-semibold">
                      {mockArtist.stats.totalAlbums}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Playlist</span>
                    <span className="text-white font-semibold">
                      {mockArtist.stats.totalPlaylists}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Giải thưởng</span>
                    <span className="text-white font-semibold">
                      {mockArtist.stats.awards}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Songs */}
            <div className="bg-white/5 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">
                  Bài hát tiêu biểu
                </h2>
                <button className="text-white hover:text-gray-300 transition-colors">
                  Xem tất cả
                </button>
              </div>

              <div className="flex space-x-4 overflow-x-auto pb-4">
                {featuredSongs.map((song) => (
                  <div
                    key={song.id}
                    className="flex-shrink-0 w-64 bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <img
                      src={song.image}
                      alt={song.title}
                      className="w-full h-48 object-cover rounded-lg mb-3"
                    />
                    <h3 className="text-white font-medium truncate">
                      {song.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-2">{song.album}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">{song.year}</span>
                      <span className="text-gray-400">
                        {formatNumber(song.plays)} lượt nghe
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
