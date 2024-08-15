import { SongTrending } from "@src/component/Item/interface";
import React from "react";

export function TopTrending({
  data,
  title,
}: {
  data: SongTrending[];
  title: string;
}) {
  return (
    <div className="container mr-auto pb-4 pt-4 pr-[60px]">
      <h1 className="text-3xl font-bold mb-6 text-white">{title}</h1>

      <div className="grid grid-cols-12   text-[24px] text-white font-bold">
        <div className="col-span-1 " />
        <div className="col-span-2 justify-center justify-self-center center items-center">
          Image
        </div>
        <div className="col-span-3">Song</div>
        <div className="col-span-2">Artist</div>
        <div className="col-span-2">Release Date</div>
        <div className="col-span-2">Time</div>
      </div>

      <div className="space-y-4">
        {data.map((song, index) => (
          <div key={song.id} className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-1 ">
              <span className="inline-block text-white text-[24px] font-semibold">
                #{index + 1}
              </span>
            </div>
            <div className="col-span-11 bg-[#1E1E1E] rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 grid grid-cols-11 gap-4 items-center">
              <div className="col-span-2">
                <img
                  src={song.src}
                  alt={song.nameSong}
                  key={song.id}
                  className="w-20 h-20 object-cover rounded-md"
                />
              </div>
              <div className="col-span-3">
                <h2 className="text-xl text-white font-semibold justify-center ">
                  {song.nameSong}
                </h2>
              </div>
              <div className="col-span-2">
                <p className="text-white font-semibold">{song.nameSinger}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-white font-semibold">
                  {song.dateRelease}
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-white">
                  {Math.floor(song.playtime / 60)}:
                  {(song.playtime % 60).toString().padStart(2, "0")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
