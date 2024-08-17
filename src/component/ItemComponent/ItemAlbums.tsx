import { Albums } from "src/component/Item/interface";
import React from "react";
import { IconType } from "react-icons";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";

export function TopAlbums({
  data,
  title,
  type,
  componentIcon,
  color,
}: {
  data: Albums[];
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
              <Name style={{ marginTop: item.id !== 1 ? 9 : 2, maxWidth: 150 }}>
                {item.nameSong}
              </Name>
              <ItemInfo>
                <Name
                  style={{
                    fontWeight: 100,
                    fontSize: 12,
                    marginTop: item.id !== 1 ? 12 : 0,
                  }}
                >
                  {item.nameSinger}
                </Name>
                <Icon color={color} size={16} style={{ marginRight: 9 }} />
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
  margin-left: 8px;
  font-weight: 500;
`;

const PlaylistWrapper = styled.div`
  display: inline-flex;
  gap: 16px;
  align-items: center;
  overflow-x: auto;
  /* margin-left: 22px; */
`;

const PlaylistItem = styled.div`
  background-color: #1f1f1f;
  border-radius: 12px;
  align-items: center;
  width: 170px;
  height: 246px;
`;

const Image = styled.img`
  object-fit: contain;
`;

const ItemInfo = styled.div`
  border-radius: 12px;
  width: 170px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const Name = styled.h3`
  font-size: 16px;
  color: #fff;
  font-family: serif;
  font-weight: 500;
  margin-left: 12px;
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
