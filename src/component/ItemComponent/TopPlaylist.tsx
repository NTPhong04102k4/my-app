import { PlayList } from "@src/component/Item/interface";
import React from "react";
import { IconType } from "react-icons";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";

export function TopPlaylist({
  data,
  title,
  type,
  componentIcon,
  color
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
        <ViewAllContainer>
          <ViewAllButton>
            <FaPlus color="#FFF" size={24} />
          </ViewAllButton>
          <ViewAllText>View All</ViewAllText>
        </ViewAllContainer>
      </PlaylistWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  overflow: hidden;
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
  gap: 1rem;
  align-items: center;
  overflow-x: auto;

`;

const PlaylistItem = styled.div`
  background-color: #1f1f1f;
  border-radius: 12px;
  align-items: center;
  width: 170px;
  padding-bottom: 8px;
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
