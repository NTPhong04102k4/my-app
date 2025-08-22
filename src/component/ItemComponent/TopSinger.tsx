import React from "react";
import styled from "styled-components";
import { Singer } from "src/component/Item/interface";
import { FaPlus } from "react-icons/fa";
import { IconComponent } from "../IconComponent";

export function TopSinger({
  data,
  title,
  color,
}: {
  data: Singer[];
  title: string;
  color: string;
}) {
  return (
    <Container>
      <Title>{title}</Title>
      <div className="inline-flex">
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
        </SingerList>

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
  margin-left: 30px;
`;

const SingerItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.5s ease forwards;
  animation-delay:0.1s;
  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  } */
`;

const ImageContainer = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 130px;
  width: 130px;
  background-position: center;
  transition:
    tranform 0.3s ease,
    box-shadow 0.3s ease;

  :hover {
    box-shadow: 0px 1px 5px 5px rgba(0, 0, 0, 0.3);
    scale: 1.05;
  }
`;

const SingerImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: fill;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.3);
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
  margin-left: 16px;
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
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  &:hover {
    background-color: #2e2e2e;
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.95);
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
