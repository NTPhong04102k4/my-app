import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { DATA_ARTIST } from "../data";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
export function PopularMusic() {
    const [arrIsSelect, setArrIsSelect] = useState<number[]>([]);

    const isSelected = (id: number) => arrIsSelect.includes(id);

    const handleClick = useCallback((id: number) => {
        setArrIsSelect(prev => {
            if (prev.includes(id)) {
                return prev.filter(isIdSelected => isIdSelected !== id);
            }
            return [...prev, id];
        });
    }, []);
    return (
        <Container>
            <Title>Popular</Title>
            <HeaderGrid>
                <HeaderCell></HeaderCell>
                <HeaderCell></HeaderCell>
                <HeaderCell>Release Date</HeaderCell>
                <HeaderCell>Played</HeaderCell>
                <HeaderCell>Time</HeaderCell>
            </HeaderGrid>
            <SongList>
                {DATA_ARTIST.map((song, index) => (
                    <SongItem key={song.id}>
           <Rank>{index + 1}</Rank>
                        <SongContent>
                            <div className="inline-flex gap-4">
                                <ImageWrapper>
                                    <img src={song.src} alt={song.src} className="image" />
                                </ImageWrapper>
                                <div className="flex-col align-middle justify-center flex">
                                    <SongDetails>{song.song}</SongDetails>
                                    <Artist>{song.singer}</Artist>
                                </div>
                            </div>
                            <ReleaseDate>{song.dateRelease}</ReleaseDate>
                            <DescriptionAblums>{song.played}</DescriptionAblums>
                            <div className="inline-flex align-middle justify-center gap-[10px] ">
                                <IconWrapper onClick={() => handleClick(song.id)}>
                                    <FilledHeart isSelected={isSelected(song.id)}>
                                        <FaHeart color="#ee10b0" size={24} />
                                    </FilledHeart>
                                    <OutlinedHeart isSelected={isSelected(song.id)}>
                                        <FaRegHeart color="#ee10b0" size={24} />
                                    </OutlinedHeart>
                                </IconWrapper>
                                <Time>
                                    {Math.floor(song.playtime / 60)}:
                                    {(song.playtime % 60).toString().padStart(2, "0")}
                                </Time>
                                <IconWrapper><PiDotsThreeOutlineFill size={24} color='#FFF' />
                                </IconWrapper>
                            </div>
                        </SongContent>
                    </SongItem>
                ))}
                <ShowMore>Show More</ShowMore>
            </SongList>
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
   
    margin-top: 16px;
`
const Title = styled.h2`
    color: #fff;
    font-size:36px;
    margin-top: 40px;
    margin-bottom: 18px;
    margin-left: 35px;
`
const HeaderGrid=styled.div`
    display:grid;
    grid-template-columns:0.5fr 3.5fr 1.5fr 4fr 1.5fr;
    position: relative;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    width: 100%;

`
const HeaderCell=styled.h2`
    color: #fff;
    font-size: 18px;
    font-family: sans-serif,serif;
    font-weight: 500;
    justify-content: center;
    display: flex;

`
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
    grid-template-columns: 3fr 1.5fr 3.5fr 1.5fr;
    align-items: center;
    background-color: #1e1e1e;
    border-radius: 8px;
    transition: box-shadow 0.3s;
    &:hover {
        box-shadow: 0px 6px 10px rgba(163, 154, 154, 0.3);
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
    align-self: center;
  
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
    transition: opacity 0.3s ease, transform 0.3s ease;
`;

const FilledHeart = styled(IconStyle)<{ isSelected: boolean }>`
    opacity: ${props => props.isSelected ? 1 : 0};
    transform: ${props => props.isSelected ? 'scale(1)' : 'scale(0.8)'};
`;

const OutlinedHeart = styled(IconStyle)<{ isSelected: boolean }>`
    opacity: ${props => props.isSelected ? 0 : 1};
    transform: ${props => props.isSelected ? 'scale(1.5)' : 'scale(1)'};
`;
const Image=styled.img`
    size: 24;
    color: #FFF;
`
const ShowMore=styled.button`
    background-color: #ee10b0;
    color: #FFF;
    align-self: center;
    display: flex;
    padding:5px 16px 5px 16px;
    border-radius: 8px;
    height: 40px;
    transition: all 0.3s ease;
    &:hover{
        transform: scale(1.05);
        box-shadow: 0px 1px 2px  #FFF;
    }

`