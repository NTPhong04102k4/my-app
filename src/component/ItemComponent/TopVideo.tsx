import React from "react";
import styled from "styled-components";
import { MusicVideo } from "../Item/interface";
import { FaPlus } from "react-icons/fa";

export function TopVideo({
  title,
  type,
  data,
  color,
}: {
  title: string;
  type: string;
  data: MusicVideo[];
  color: string;
}) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Type style={{ color }}>{type}</Type>
      </Header>
      <ListMusicVideo>
        {data.map((item, index) => {
          return (
            <ItemContainer key={index}>
              <Image src={item.src} alt={item.nameSinger} />
              <DescriptionVideo>
                <NameMusic>{item.nameSong}</NameMusic>
                <div className="inline-flex justify-between">
                  <DescriptionDetail>{item.nameSinger}</DescriptionDetail>
                  <DescriptionDetail>{item.viewer}</DescriptionDetail>
                </div>
              </DescriptionVideo>
            </ItemContainer>
          );
        })}
          <ViewAllContainer>
          <ViewAllButton>
            <FaPlus color="#FFF" size={24} />
          </ViewAllButton>
          <ViewAllText>View All</ViewAllText>
        </ViewAllContainer>
      </ListMusicVideo>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
 
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
  color: #fff;
`;

const Type = styled.h1`
  font-size: 32px;
  font-weight: 500;
  margin-left: 8px;
`;

const ListMusicVideo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 18px;
    margin-left: 4px;
`;

const ItemContainer = styled.div`
  width: 290px;
  height: 240px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: #1f1f1f;
`;

const Image = styled.img`
  width: 100%;
  height: 170px;
  object-fit: fill;
  border-radius: 4px;
`;

const DescriptionVideo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 11px;
  flex-direction: column;
`;

const NameMusic = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color: #fff;
`;

const DescriptionDetail = styled.h2`
  font-size: 12px;
  color: #fff;
  font-weight: 400;
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