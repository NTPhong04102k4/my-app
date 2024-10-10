import { PlayList } from "src/component/Item/interface";
import React from "react";
import { IconType } from "react-icons";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";

export function TopPlaylist({
  data,
  title,
  type,
  componentIcon,
  color,
}: {
  data: PlayList[];
  title?: string;
  type?: string;
  componentIcon: IconType;
  color: string;
}) {
  const Icon = componentIcon;

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Type style={{ color: color }}>{type}</Type>
      </Header>
      <div className="inline-flex">
      <PlaylistWrapper>
        {data &&
          data.map((item, index) => (
            <PlaylistItem key={index}>
              <Image src={item.src} alt={`${index}`} />
              <ItemInfo>
                <Name>{item.name}</Name>
                <Icon color={color} size={16} />
              </ItemInfo>
            </PlaylistItem>
          ))}
   
      </PlaylistWrapper>
      <ViewAllContainer>
          <ViewAllButton>
            <FaPlus color="#FFF" size={24} />
          </ViewAllButton>
          <ViewAllText>View All</ViewAllText>
        </ViewAllContainer>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
`;

const Header = styled.div`
  display: inline-flex;
  margin-bottom: 18px;
  margin-top: 40px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 500;
`;

const Type = styled.h1`
  font-size: 32px;
  margin-left: 0.5rem;
  font-weight: 500;
`;

const PlaylistWrapper = styled.div`
  display: inline-flex;
  gap: 16px;
  align-items: center;
`;
 
const PlaylistItem = styled.button`
  background-color: #1f1f1f;
  border-radius: 10px;
  align-items: center;
  width: 168.8px;
  padding-bottom: 8px;
  height: auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 4px 8px #000;
    transform: scale(1.01);
  }
`;

const Image = styled.img`
  object-fit: contain;
`;

const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 9px;
  margin-left: 8px;
  margin-right: 4px;
`;

const Name = styled.h3`
  font-size: 16px;
  color: #fff;
  font-family: serif;
`;

const ViewAllContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`;

const ViewAllText = styled.h3`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-top: 8px;
  text-align: center;
  width: 60px;
`;

const ViewAllButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #1e1e1e;
  border-radius: 50%;
  cursor: pointer;
  &:active {
    opacity: 0.7;
  }
`;
