import React from "react";
import styled from "styled-components";
import { Singer } from "@src/component/Item/interface";
import { FaPlus } from "react-icons/fa";

export function TopSinger({ data, title ,color}: { data: Singer[]; title: string,color:string }) {
  return (
    <Container>
      <Title>{title}</Title>
      <SingerList>
        {data &&
          data.map((item, index) => (
            <SingerItem key={index}>
              <ImageContainer>
                <SingerImage src={item.srcImg} alt="Singer Image" />
              </ImageContainer>
              <SingerName>{item.name}</SingerName>
            </SingerItem>
          ))}
        <ViewAllContainer>
          <ViewAllButton>
            <FaPlus color="#FFF" size={24} />
          </ViewAllButton>
          <ViewAllText>View All</ViewAllText>
        </ViewAllContainer>
      </SingerList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 40px;
  margin-bottom: 28px;
  margin-top: 40px;
`;

const SingerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-left: 66px;
`;

const SingerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-direction: row;
  height: 125px;
  width: 125px;
`;

const SingerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SingerName = styled.h1`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-top: 8px;
`;

const ViewAllContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
const ViewAllText = styled.h1`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-top: 8px;
  text-align: center;
  width: 60px;
`;
