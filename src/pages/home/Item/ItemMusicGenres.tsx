import React from "react";
import { MusicGenres } from "./interfaceHome";
import { ButtonImage } from "src/styles/ButtonImage";
type Props = {
  title: string;
  data: MusicGenres[];
};
export const ItemMusicGenres = (props: Props) => {
  const { title, data } = props;
  return (
    <div className="flex flex-col ">
      <h1 className="text-[#FFF]">{title}</h1>
      <div>
        {data.map((item, index) => {
          return (
            <ButtonImage
              key={index}
              height={120}
              width={170}
              keyID={`${index + "item"}`}
              src={item.src}
            />
          );
        })}
      </div>
    </div>
  );
};
