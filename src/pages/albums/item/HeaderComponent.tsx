import React from "react";
import styled from "styled-components";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { FaRegCirclePlay } from "react-icons/fa6";

export const HeaderAlbums = () => {
    const navigate = useNavigate();
    const handeSettingUser = () => {
        navigate('');
    }
    return (
        <Container>
            <div className="ml-[10px] mr-[30px] inline-flex justify-between ">
                <Button>
                    <IoArrowBackOutline style={{ alignSelf: 'center' }} size={24} color="#FFF" onClick={() => navigate(-1)} /></Button>
                <div className="inline-flex gap-[32px]">
                    <ViewFeatures>
                        <Features>Share</Features>
                        <Features>About</Features>
                        <Features>Premium</Features>
                    </ViewFeatures>
                    <Button>
                        <FaCircleUser style={{ alignSelf: 'center' }} size={36} color="#FFF" onClick={() => handeSettingUser()} />
                    </Button>
                </div>
            </div>
            <CardMusic>
                <Image src={require('src/assets/images/albums/album_header.png')}
                />

                <div className="flex flex-col justify-between">
                    <div className="inline-flex gap-2">
                        <TitleMusic color="#FFF">Trending Songs</TitleMusic>
                        <TitleMusic color="#ee10b0">Music</TitleMusic>
                    </div>
                    <Text>tate mcree, nightmares, the neighberhood, doja cat and ...</Text>
                    <div className="inline-flex gap-[20px] items-center">
                        <Text>20 songs</Text>
                        <GoDotFill size={24} color="#ee10b0" />
                        <Text>1h 36m</Text>
                    </div>
                </div>
            </CardMusic>
            <ButtonPlayAll>
                <TextAnimation style={{ fontSize:24,color:"#ee10b0"}} >Play All</TextAnimation>
                <FaRegCirclePlay size={60} color="#ee10b0" />
            </ButtonPlayAll>
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(90deg, #0E9EEF, #053754);    
    width: 100%;
    padding-top: 30px;
    border-radius: 10px;
    padding-bottom: 56px;
    position: relative;
`
const ViewFeatures = styled.div`
    gap:20px ;
    display: flex;
    flex-direction: row;
`
const Features = styled.button`
    font-size:24px ;
    color: #FFF;
    font-family: sans-serif,serif;
    font-weight: 500;
    transition: transform 0.3s ease;
    &:hover{
        transform: scale(1.05);
    }
    
`
const Button = styled.button`
    transition: transform 0.3s ease;
    &:active{
        transform: scale(0.95);
    }
`
const CardMusic = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 43px;
    gap:56px;
    padding-bottom: 17px;
    margin-top: 30px;

`
const Image = styled.img`
    width:268px ;
    height:268px;
    object-fit: cover;
    object-position: center;
    box-shadow: 5px 5px 5px #000000;
    transition: box-shadow 0.3s ease;
    border-radius: 8px;
    @media (min-width: 1450px) {
        height:306px;
        width:306px;
        
    }
    transition: transform 0.3s ease;
    &:hover{
        transform: scale(1.05);
    }
`
const TitleMusic = styled.h2<{ color?: '#FFF' | string }>`
    color:${props => props.color};
    font-size: 24px;
    font-weight: 500;
`
const Text = styled.h3`
    font-size: 18px;
    color: #FFF;
    font-family: sans-serif,serif;
    max-width: 388px;
    padding-right: 10px;

`;
const TextAnimation = styled.h3`
  font-size: 24px;
  color: #ee10b0;
  font-family: sans-serif, serif;
  padding-right: 10px;
  position: relative;
  width: 0;
  overflow: hidden;
  white-space: nowrap;
  transition: width 0.5s ease-out, opacity 0.3s ease-out;
  opacity: 0;
`;

const ButtonPlayAll = styled.button`
  color: #ee10b0;
  position: absolute;
  flex-direction: row;
  display: flex;
  right: 38px;
  bottom: 50px;
  align-items: center;
  transition: all 0.3s ease;
  padding: 5px 10px;
  background: transparent;
  border-radius: 6px;

  &:hover {
    transform: scale(1.01);
    background: linear-gradient(90deg, #5936b9, #FFF);

    ${TextAnimation} {
      width: 100px; // Điều chỉnh giá trị này tùy theo độ dài của text
      opacity: 1;
    }
  }

  &:active {
    opacity: 0.9;
  }
`;
