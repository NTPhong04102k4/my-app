import React from "react";
import styled from "styled-components";
import { MusicVideo } from "../Item/interface";
import { FaPlus } from "react-icons/fa";
import { IconComponent } from "../footer";

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
      <div className="inline-flex flex-1 align-middle">
        <ListMusicVideo>
          {data.map((item, index) => {
            return (
              <ItemContainer key={index} idx={index}>
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
        </ListMusicVideo>
        <ViewAllContainer>
          <ViewAllButton>
            <IconComponent icon={FaPlus} color="#FFF" size={24} />
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 18px;
  margin-left: 4px;
`;

const ItemContainer = styled.div<{ idx: number }>`
  width: 290px;
  height: 240px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  background-color: #1f1f1f;
  margin-top: ${(props) => (props.idx > 2 ? 27 : 0)}px;
  transition:
    tranform 0.3s ease,
    box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0px 5px 5px #000;
    transform: scale(1.01);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
  border-radius: 10px;
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
  margin-left: 16px;
  margin-top: 42px;
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
