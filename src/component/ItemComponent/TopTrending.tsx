import { SongTrending } from "src/component/Item/interface";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IconComponent } from "../footer";
export function TopTrending({
  data,
  title,
}: {
  data: SongTrending[];
  title: string;
}) {
  const [arrIsSelect, setArrIsSelect] = useState<Number[]>([]);

  const isSelected = (id: number) =>
    arrIsSelect.some((isSelectedId) => isSelectedId === id);
  const handleClick = useCallback((id: number) => {
    setArrIsSelect((prev) => {
      if (prev?.some((isIdSelected) => isIdSelected == id)) {
        return prev.filter((isIdSelected) => isIdSelected !== id);
      }
      return [...prev, id];
    });
  }, []);

  return (
    <Container>
      <Title>{title}</Title>
      <HeaderGrid>
        <HeaderCell />
        <HeaderCell />
        <HeaderCell>Release Date</HeaderCell>
        <HeaderCell>Albums</HeaderCell>
        <HeaderCell>Time</HeaderCell>
      </HeaderGrid>

      <SongList>
        {data.map((song, index) => (
          <SongItem key={song.id}>
            <Rank>#{index + 1}</Rank>
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
              <div className="inline-flex align-middle justify-center gap-[10px]">
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
              </div>
            </SongContent>
          </SongItem>
        ))}
        <Expand>
          <Text>
            <IconComponent icon={FaPlus} /> Xem thêm
          </Text>
        </Expand>
      </SongList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 984px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 40px;
  color: white;
`;
const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2.5fr 3.5fr 1fr;
  font-size: 20px;
  font-weight: 500;
  color: white;
  margin-bottom: 6px;
`;

const HeaderCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

const Rank = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-align: center;
`;

const SongContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 4fr 1fr;
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
const Expand = styled.button`
  border-radius: 4px;
  background-color: #1e1e1e;
  :hover {
    box-shadow: 0 6px 4px rgba(0, 0, 0, 0.3);
  }
  align-self: center;
  transition: box-shadow 0.3s;
`;
const Text = styled.h4`
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 6px;
  padding-bottom: 6px;
  color: #fff;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 400;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
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
