import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { DATA_ALBUMS } from "../data";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { IconComponent } from "../../../component/footer";

export const ListMusicTrending = ({}) => {
  const [arrIsSelect, setArrIsSelect] = useState<number[]>([]);

  const isSelected = (id: number) => arrIsSelect.includes(id);

  const handleClick = useCallback((id: number) => {
    setArrIsSelect((prev) => {
      if (prev.includes(id)) {
        return prev.filter((isIdSelected) => isIdSelected !== id);
      }
      return [...prev, id];
    });
  }, []);

  return (
    <Container>
      <HeaderGrid>
        <HeaderCell></HeaderCell>
        <HeaderCell></HeaderCell>
        <HeaderCell>Release Date</HeaderCell>
        <HeaderCell>Albums</HeaderCell>
        <HeaderCell style={{ alignItems: "center", justifyContent: "center" }}>
          Time
        </HeaderCell>
      </HeaderGrid>
      <SongList>
        {DATA_ALBUMS.map((song, index) => (
          <SongItem key={song.id}>
            {index != 0 ? (
              <Rank>{index + 1}</Rank>
            ) : (
              <Image src={require("src/assets/images/albums/top.png")} />
            )}
            <SongContent>
              <div className="inline-flex gap-4">
                <ImageWrapper>
                  <img src={song.src} alt={song.nameSong} className="image" />
                </ImageWrapper>
                <div className="flex-col align-middle justify-center flex">
                  <SongDetails>{song.nameSong}</SongDetails>
                  <Artist>{song.nameSinger}</Artist>
                </div>
              </div>
              <ReleaseDate>{song.dateRelease}</ReleaseDate>
              <DescriptionAblums>{song.description}</DescriptionAblums>
              <div className="inline-flex align-middle justify-center gap-[10px] ">
                <IconWrapper onClick={() => handleClick(song.id)}>
                  <FilledHeart isSelected={isSelected(song.id)}>
                    <IconComponent icon={FaHeart} color="#ee10b0" size={24} />
                  </FilledHeart>
                  <OutlinedHeart isSelected={isSelected(song.id)}>
                    <IconComponent
                      icon={FaRegHeart}
                      color="#ee10b0"
                      size={24}
                    />
                  </OutlinedHeart>
                </IconWrapper>
                <Time>
                  {Math.floor(song.playtime / 60)}:
                  {(song.playtime % 60).toString().padStart(2, "0")}
                </Time>
                <IconWrapper>
                  <IconComponent
                    icon={PiDotsThreeOutlineFill}
                    size={24}
                    color="#FFF"
                  />
                </IconWrapper>
              </div>
            </SongContent>
          </SongItem>
        ))}
      </SongList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 3fr 1.2fr 3.8fr 1.5fr;
  font-size: 20px;
  font-weight: 500;
  color: white;
  margin-bottom: 6px;
  margin-right: 10px;
  justify-content: center;
  margin-top: 16px;
`;

const HeaderCell = styled.div`
  font-size: 18px;
  color: #fff;
  font-weight: 500;
  font-family: sans-serif, serif;
  display: flex;
  justify-content: center;
`;

const SongList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SongItem = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 9.5fr;
  align-items: center;
  gap: 16px;
  margin-right: 10px;
  margin-left: 10px;
`;

const Rank = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-align: center;
`;

const SongContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 4fr 1.5fr;
  align-items: center;
  background-color: #1e1e1e;
  border-radius: 8px;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  .image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const SongDetails = styled.h2`
  font-size: 1.25rem;
  color: white;
  text-align: left;
`;

const Artist = styled.p`
  font-weight: bold;
  color: white;
  text-align: left;
`;

const ReleaseDate = styled.p`
  font-size: 0.875rem;
  color: white;
  text-align: center;
`;

const Time = styled.p`
  font-size: 0.875rem;
  color: white;
  text-align: center;
`;

const DescriptionAblums = styled.p`
  font-size: 0.875rem;
  color: white;
  text-align: center;
`;

const IconWrapper = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const IconStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
`;

const FilledHeart = styled(IconStyle)<{ isSelected: boolean }>`
  opacity: ${(props) => (props.isSelected ? 1 : 0)};
  transform: ${(props) => (props.isSelected ? "scale(1)" : "scale(0.8)")};
`;

const OutlinedHeart = styled(IconStyle)<{ isSelected: boolean }>`
  opacity: ${(props) => (props.isSelected ? 0 : 1)};
  transform: ${(props) => (props.isSelected ? "scale(1.5)" : "scale(1)")};
`;
const Image = styled.img`
  size: 24;
  color: #fff;
`;
