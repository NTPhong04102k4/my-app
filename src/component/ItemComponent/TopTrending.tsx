import { SongTrending } from "@src/component/Item/interface";
import React from "react";
import styled from "styled-components";

export function TopTrending({
  data,
  title,
}: {
  data: SongTrending[];
  title: string;
}) {
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
              </div></div>
              <ReleaseDate>{song.dateRelease}</ReleaseDate>
              <DescriptionAblums>{song.description}</DescriptionAblums>
              <Time>
                {Math.floor(song.playtime / 60)}:
                {(song.playtime % 60).toString().padStart(2, "0")}
              </Time>
            </SongContent>
          </SongItem>
        ))}
      </SongList>
    </Container>
  );
}

const Container = styled.div`
  max-width: calc(100% - 50px);
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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
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
