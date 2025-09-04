import React from "react";
import styled, { keyframes } from "styled-components";
// import { Singer } from "src/component/Item/interface";
import { FaPlus } from "react-icons/fa";
import { Singer } from "src/component/Item/interface";
import { IconComponent } from "src/component/IconComponent";

export function TopArtist({
  data,
  title,
  color,
  type,
}: {
  data: Singer[];
  title: string;
  color: string;
  type: string;
}) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Type style={{ color }}>{type}</Type>
      </Header>
      <div className="inline-flex">
        <SingerList>
          {data &&
            data.map((item, index) => (
              <SingerItem
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: inline-flex;
  margin-bottom: 18px;
  margin-top: 40px;
  animation: ${fadeIn} 0.5s ease forwards;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 500;
`;

const Type = styled.h1`
  color: #ee10b0;
  font-size: 32px;
  margin-left: 0.5rem;
  font-weight: 500;
`;

const SingerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 58px;
  /* margin-left: 30px; */
`;

const SingerItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease forwards;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageContainer = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 179px;
  width: 179px;
  background-position: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 5px 15px rgba(238, 16, 176, 0.3);
    transform: scale(1.05);
  }
`;

const SingerImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ImageContainer}:hover & {
    transform: scale(1.1);
  }
`;

const SingerName = styled.h1`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-top: 8px;
  transition: color 0.3s ease;

  ${SingerItem}:hover & {
    color: #ee10b0;
  }
`;

const ViewAllContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: 0.5s;
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
    transform 0.2s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: #2e2e2e;
    transform: scale(1.1);
    box-shadow: 0px 0px 15px rgba(238, 16, 176, 0.3);
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
  transition: color 0.3s ease;

  ${ViewAllContainer}:hover & {
    color: #ee10b0;
  }
`;
