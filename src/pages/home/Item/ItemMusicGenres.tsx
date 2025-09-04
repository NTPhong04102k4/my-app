import React from "react";
import { MusicGenres } from "./interfaceHome";
import { ButtonImage } from "src/styles/ButtonImage";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { IconComponent } from "src/component/IconComponent";
type Props = {
  title: string;
  data: MusicGenres[];
};
export const ItemMusicGenres = (props: Props) => {
  const { title, data } = props;
  return (
    <div className="flex flex-col ">
      <Title>{title}</Title>
      <div className="inline-flex">
        <MusicGenresWrapper>
          {data.map((item, index) => {
            return (
              <ButtonImage
                key={index}
                height={170}
                width={215}
                keyID={`${index + "item"}`}
                src={item.src}
              />
            );
          })}
        </MusicGenresWrapper>
        <ViewAllContainer>
          <ViewAllButton>
            <IconComponent icon={FaPlus} color="#FFF" size={24} />
          </ViewAllButton>
          <ViewAllText>View All</ViewAllText>
        </ViewAllContainer>
      </div>
    </div>
  );
};
const MusicGenresWrapper = styled.div`
  gap: 16px;
  display: flex;
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
const Title = styled.h2`
  font-size: 32px;
  font-weight: 500;
  font-family: sans-serif;
  color: #fff;
  margin-bottom: 18px;
`;
