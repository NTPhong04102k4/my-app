import React, { useState } from "react";

// Mock data cho danh sách bài hát
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
  {
    id: 6,
    title: "Water",
    artist: "Tyla",
    album: "TYLA",
    duration: "3:20",
    image: "/src/assets/images/trendSong/water.png",
  },
  {
    id: 7,
    title: "Greedy",
    artist: "Tate McRae",
    album: "Think Later",
    duration: "2:11",
    image: "/src/assets/images/trendSong/greedy.png",
  },
  {
    id: 8,
    title: "Lovin On Me",
    artist: "Jack Harlow",
    album: "Lovin On Me",
    duration: "2:18",
    image: "/src/assets/images/trendSong/lovin_on_me.png",
  },
];

export default function AddPlaylist() {
  const [playlistName, setPlaylistName] = useState("");
  const [playlistDescription, setPlaylistDescription] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [selectedSongs, setSelectedSongs] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSongToggle = (songId: number) => {
    setSelectedSongs((prev) =>
      prev.includes(songId)
        ? prev.filter((id) => id !== songId)
        : [...prev, songId]
    );
  };

  const handleSelectAll = () => {
    if (selectedSongs.length === filteredSongs.length) {
      setSelectedSongs([]);
    } else {
      setSelectedSongs(filteredSongs.map((song) => song.id));
    }
  };

  const filteredSongs = mockSongs.filter(
    (song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreatePlaylist = () => {
    if (!playlistName.trim()) {
      alert("Vui lòng nhập tên playlist!");
      return;
    }
    if (selectedSongs.length === 0) {
      alert("Vui lòng chọn ít nhất 1 bài hát!");
      return;
    }

    // Xử lý tạo playlist ở đây
    console.log("Creating playlist:", {
      name: playlistName,
      description: playlistDescription,
      isPrivate,
      songs: selectedSongs,
    });

    alert("Tạo playlist thành công!");
  };

  return (
    <div className="flex bg-[#602139] min-h-screen">
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Tạo Playlist Mới
          </h1>
          <p className="text-gray-300">
            Tạo playlist của riêng bạn và thêm những bài hát yêu thích
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form tạo playlist */}
          <div className="bg-white/5 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-6">
              Thông tin Playlist
            </h2>

            <div className="space-y-4">
              {/* Tên playlist */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Tên Playlist *
                </label>
                <input
                  type="text"
                  value={playlistName}
                  onChange={(e) => setPlaylistName(e.target.value)}
                  placeholder="Nhập tên playlist..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
                />
              </div>

              {/* Mô tả */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Mô tả
                </label>
                <textarea
                  value={playlistDescription}
                  onChange={(e) => setPlaylistDescription(e.target.value)}
                  placeholder="Mô tả playlist của bạn..."
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 resize-none"
                />
              </div>

              {/* Privacy setting */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="private"
                  checked={isPrivate}
                  onChange={(e) => setIsPrivate(e.target.checked)}
                  className="w-4 h-4 text-[#602139] bg-white/10 border-white/20 rounded focus:ring-white/40"
                />
                <label htmlFor="private" className="ml-2 text-white">
                  Playlist riêng tư
                </label>
              </div>

              {/* Thống kê */}
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-white">Số bài hát đã chọn:</span>
                  <span className="text-white font-semibold">
                    {selectedSongs.length}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-white">Tổng thời lượng:</span>
                  <span className="text-white font-semibold">
                    {selectedSongs.length > 0
                      ? mockSongs
                          .filter((song) => selectedSongs.includes(song.id))
                          .reduce((total, song) => {
                            const [min, sec] = song.duration
                              .split(":")
                              .map(Number);
                            return total + min * 60 + sec;
                          }, 0)
                          .toFixed(0)
                          .replace(/(\d+)/, (_, p1) => {
                            const mins = Math.floor(Number(p1) / 60);
                            const secs = Number(p1) % 60;
                            return `${mins}:${secs.toString().padStart(2, "0")}`;
                          })
                      : "0:00"}
                  </span>
                </div>
              </div>

              {/* Nút tạo playlist */}
              <button
                onClick={handleCreatePlaylist}
                disabled={!playlistName.trim() || selectedSongs.length === 0}
                className="w-full bg-white text-[#602139] py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
              >
                Tạo Playlist
              </button>
            </div>
          </div>

          {/* Danh sách bài hát */}
          <div className="bg-white/5 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Chọn Bài Hát</h2>
              <button
                onClick={handleSelectAll}
                className="text-white hover:text-gray-300 text-sm"
              >
                {selectedSongs.length === filteredSongs.length
                  ? "Bỏ chọn tất cả"
                  : "Chọn tất cả"}
              </button>
            </div>

            {/* Search */}
            <div className="mb-4">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tìm kiếm bài hát..."
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
              />
            </div>

            {/* Danh sách bài hát */}
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {filteredSongs.map((song) => (
                <div
                  key={song.id}
                  className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedSongs.includes(song.id)
                      ? "bg-white/20 border border-white/40"
                      : "bg-white/10 hover:bg-white/15"
                  }`}
                  onClick={() => handleSongToggle(song.id)}
                >
                  <input
                    type="checkbox"
                    checked={selectedSongs.includes(song.id)}
                    onChange={() => handleSongToggle(song.id)}
                    className="w-4 h-4 text-[#602139] bg-white/10 border-white/20 rounded focus:ring-white/40"
                  />
                  <img
                    src={song.image}
                    alt={song.title}
                    className="w-10 h-10 rounded-md object-cover ml-3"
                  />
                  <div className="ml-3 flex-1">
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

            {filteredSongs.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-400">Không tìm thấy bài hát nào</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
