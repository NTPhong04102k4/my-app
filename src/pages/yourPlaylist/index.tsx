import { SideBarComponent } from "src/component/sideBar";
import React, { useState } from "react";

// Mock data cho danh sách playlist
const mockPlaylists = [
  {
    id: 1,
    name: "Chill Vibes",
    description: "Những bài hát chill để thư giãn",
    image: "/src/assets/images/playlist/chill_song.png",
    songCount: 12,
    duration: "45:23",
    isPrivate: false,
    createdDate: "2024-01-15",
    lastPlayed: "2024-01-25",
    songs: [
      { id: 1, title: "Shape of You", artist: "Ed Sheeran", duration: "3:53" },
      { id: 2, title: "Someone Like You", artist: "Adele", duration: "4:45" },
      { id: 3, title: "Water", artist: "Tyla", duration: "3:20" },
    ],
  },
  {
    id: 2,
    name: "Workout Energy",
    description: "Playlist cho buổi tập luyện đầy năng lượng",
    image: "/src/assets/images/playlist/workout_song.png",
    songCount: 8,
    duration: "32:15",
    isPrivate: false,
    createdDate: "2024-01-10",
    lastPlayed: "2024-01-24",
    songs: [
      { id: 4, title: "Houdini", artist: "Dua Lipa", duration: "3:05" },
      { id: 5, title: "Greedy", artist: "Tate McRae", duration: "2:11" },
      { id: 6, title: "Lovin On Me", artist: "Jack Harlow", duration: "2:18" },
    ],
  },
  {
    id: 3,
    name: "Love Songs",
    description: "Những bài hát tình yêu lãng mạn",
    image: "/src/assets/images/playlist/love_playlist.png",
    songCount: 15,
    duration: "58:42",
    isPrivate: true,
    createdDate: "2024-01-05",
    lastPlayed: "2024-01-23",
    songs: [
      { id: 7, title: "As It Was", artist: "Harry Styles", duration: "2:47" },
      {
        id: 8,
        title: "Rolling in the Deep",
        artist: "Adele",
        duration: "3:48",
      },
      {
        id: 9,
        title: "Softcore",
        artist: "The Neighbourhood",
        duration: "3:26",
      },
    ],
  },
  {
    id: 4,
    name: "Happy Vibes",
    description: "Playlist cho những ngày vui vẻ",
    image: "/src/assets/images/playlist/happy_songs.png",
    songCount: 10,
    duration: "41:30",
    isPrivate: false,
    createdDate: "2024-01-20",
    lastPlayed: "2024-01-26",
    songs: [
      { id: 10, title: "Skyfall", artist: "Adele", duration: "4:46" },
      { id: 11, title: "Shape of You", artist: "Ed Sheeran", duration: "3:53" },
      { id: 12, title: "Water", artist: "Tyla", duration: "3:20" },
    ],
  },
  {
    id: 5,
    name: "Sad Songs",
    description: "Những bài hát buồn khi cần tâm sự",
    image: "/src/assets/images/playlist/sad_song.png",
    songCount: 6,
    duration: "28:15",
    isPrivate: true,
    createdDate: "2024-01-12",
    lastPlayed: "2024-01-22",
    songs: [
      { id: 13, title: "Someone Like You", artist: "Adele", duration: "4:45" },
      {
        id: 14,
        title: "Rolling in the Deep",
        artist: "Adele",
        duration: "3:48",
      },
      {
        id: 15,
        title: "Softcore",
        artist: "The Neighbourhood",
        duration: "3:26",
      },
    ],
  },
];

export default function YourPlaylist() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlaylist, setSelectedPlaylist] = useState<number | null>(null);
  const [showPlaylistDetails, setShowPlaylistDetails] = useState(false);

  const filteredPlaylists = mockPlaylists.filter(
    (playlist) =>
      playlist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      playlist.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN");
  };

  const handlePlaylistClick = (playlistId: number) => {
    setSelectedPlaylist(playlistId);
    setShowPlaylistDetails(true);
  };

  const handleCloseDetails = () => {
    setShowPlaylistDetails(false);
    setSelectedPlaylist(null);
  };

  const selectedPlaylistData = mockPlaylists.find(
    (p) => p.id === selectedPlaylist
  );

  return (
    <div className="flex bg-[#602139] min-h-screen">
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Playlist của bạn
          </h1>
          <p className="text-gray-300">
            Quản lý và khám phá những playlist bạn đã tạo
          </p>
        </div>

        {/* Search and Stats */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 space-y-4 md:space-y-0">
          <div className="flex-1 max-w-md">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm kiếm playlist..."
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <p className="text-white font-semibold">{mockPlaylists.length}</p>
              <p className="text-gray-300 text-sm">Playlist</p>
            </div>
            <div className="text-center">
              <p className="text-white font-semibold">
                {mockPlaylists.reduce(
                  (total, playlist) => total + playlist.songCount,
                  0
                )}
              </p>
              <p className="text-gray-300 text-sm">Bài hát</p>
            </div>
            <div className="text-center">
              <p className="text-white font-semibold">
                {mockPlaylists.filter((p) => p.isPrivate).length}
              </p>
              <p className="text-gray-300 text-sm">Riêng tư</p>
            </div>
          </div>
        </div>

        {/* Playlist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlaylists.map((playlist) => (
            <div
              key={playlist.id}
              className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors cursor-pointer"
              onClick={() => handlePlaylistClick(playlist.id)}
            >
              <div className="relative mb-4">
                <img
                  src={playlist.image}
                  alt={playlist.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                {playlist.isPrivate && (
                  <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
                <div className="absolute bottom-2 right-2 bg-black/50 rounded-full px-2 py-1">
                  <span className="text-white text-xs">
                    {playlist.duration}
                  </span>
                </div>
              </div>

              <h3 className="text-white font-semibold mb-1 truncate">
                {playlist.name}
              </h3>
              <p className="text-gray-300 text-sm mb-2 line-clamp-2">
                {playlist.description}
              </p>

              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>{playlist.songCount} bài hát</span>
                <span>Tạo: {formatDate(playlist.createdDate)}</span>
              </div>

              <div className="flex items-center justify-between mt-3">
                <button className="bg-white/20 text-white px-3 py-1 rounded text-sm hover:bg-white/30 transition-colors">
                  Phát
                </button>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-red-400 transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPlaylists.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎵</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Chưa có playlist nào
            </h3>
            <p className="text-gray-400 mb-4">
              Tạo playlist đầu tiên của bạn để bắt đầu
            </p>
            <button className="bg-white text-[#602139] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Tạo Playlist Mới
            </button>
          </div>
        )}

        {/* Playlist Details Modal */}
        {showPlaylistDetails && selectedPlaylistData && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-[#602139] rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {selectedPlaylistData.name}
                </h2>
                <button
                  onClick={handleCloseDetails}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex items-start space-x-4 mb-6">
                <img
                  src={selectedPlaylistData.image}
                  alt={selectedPlaylistData.name}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <p className="text-gray-300 mb-2">
                    {selectedPlaylistData.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Số bài hát:</span>
                      <span className="text-white ml-2">
                        {selectedPlaylistData.songCount}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">Thời lượng:</span>
                      <span className="text-white ml-2">
                        {selectedPlaylistData.duration}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">Tạo ngày:</span>
                      <span className="text-white ml-2">
                        {formatDate(selectedPlaylistData.createdDate)}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">Phát gần nhất:</span>
                      <span className="text-white ml-2">
                        {formatDate(selectedPlaylistData.lastPlayed)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Danh sách bài hát
                </h3>
                {selectedPlaylistData.songs.map((song, index) => (
                  <div
                    key={song.id}
                    className="flex items-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <span className="text-gray-400 w-8">{index + 1}</span>
                    <div className="flex-1 ml-3">
                      <h4 className="text-white font-medium">{song.title}</h4>
                      <p className="text-gray-300 text-sm">{song.artist}</p>
                    </div>
                    <span className="text-gray-400 text-sm">
                      {song.duration}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
                  Chỉnh sửa
                </button>
                <button className="bg-white text-[#602139] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Phát tất cả
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
