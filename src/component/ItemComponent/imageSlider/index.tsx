import React, { useState } from "react";
import { Box } from "@mui/material";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import styled from "styled-components";
import { ARTISTS_DETAIL } from "./dataArtist";
import CustomTextComponent from "./CustomInsertText";
import { IconComponent } from "../../footer";

const TEXT_TRANSFORMATIONS = [
  { text: "Listen now", color: "#EE10B0" },
  { text: "Follow", color: "#0E9EEF" },
  { text: "follow", color: "#0E9EEF" },
];

const formatDescription = (description: string) => {
  const regex = new RegExp(
    `(${TEXT_TRANSFORMATIONS.map((t) => t.text).join("|")})`,
    "g"
  );

  return description.split(regex).map((part, index) => {
    const transformation = TEXT_TRANSFORMATIONS.find((t) => t.text === part);
    return transformation ? (
      <CustomTextComponent
        key={index}
        text={transformation.text}
        color={transformation.color}
      />
    ) : (
      part
    );
  });
};

export const ImageSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? ARTISTS_DETAIL.length - 1 : prev - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prev) =>
      prev === ARTISTS_DETAIL.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Container>
      <ButtonNav style={{ marginRight: 16 }} onClick={handlePrevClick}>
        <IconComponent icon={MdNavigateBefore} size={50} />
      </ButtonNav>
      <ContentContainer
        style={{
          backgroundImage: `url(${ARTISTS_DETAIL[currentIndex].src})`,
        }}
      >
        <Text style={{ marginTop: 26 }}>
          {ARTISTS_DETAIL[currentIndex].name}
        </Text>
        <Paragraph style={{ marginTop: 10 }}>
          {formatDescription(ARTISTS_DETAIL[currentIndex].description)}
        </Paragraph>
        <ButtonGroup>
          <Button color="#EE10B0">Listen Now</Button>
          <Button color="#0E9EEF">Follow</Button>
        </ButtonGroup>
        <GroupDotSlide>
          {ARTISTS_DETAIL.map((_, index) => (
            <Dot
              key={index}
              isActive={currentIndex === index}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </GroupDotSlide>
      </ContentContainer>
      <ButtonNav style={{ marginLeft: 16 }} onClick={handleNextClick}>
        <IconComponent icon={MdNavigateNext} size={50} />
      </ButtonNav>
    </Container>
  );
};

const ButtonNav = styled.button`
  height: 60px;
  width: 60px;
  background: #1e1e1e;
  border: none;
  cursor: pointer;
  color: #ee10b0;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 50%;
  &:focus {
    opacity: 0.9;
  }
  &:active {
    transform: scale(0.95);
    opacity: 0.7;
  }
`;

const ContentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 350px;
  width: 832px;
  background-size: cover;
  background-position: center;
  color: #fff;
  padding: 20px;
  border-radius: 6px;
  transition: background-image 0.5s ease-in-out;
  position: relative;
`;

const Text = styled.h1`
  font-size: 32px;
  font-weight: 500;
  font-family: serif;
`;

const Paragraph = styled.h4`
  font-size: 16px;
  font-weight: 400;
  width: 282px;
  line-height: 1.5;
  font-family: serif;
`;

const Button = styled.button<{ color: string }>`
  position: relative;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: serif;
  height: 40px;
  width: 128px;
  background: transparent;
  border: 0.5px solid ${({ color }) => color};
  color: ${({ color }) => color};
  transition: box-shadow 0.3s ease;

  &:hover {
    color: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px #fff;
  }

  &:active {
    transform: scale(0.95);
    opacity: 0.8;
  }

  &::before {
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 14px;
    border: 2px solid transparent;
    transition: all 0.3s ease;
  }

  &:hover::before {
    border-color: ${({ color }) => color};
  }
`;

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 62px;
  flex-wrap: wrap;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
  position: absolute;
  bottom: 56px;
`;

const GroupDotSlide = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  position: absolute;
  align-items: flex-end;
  left: 50%;
  bottom: 27px;
  transform: translateX(-50%);
`;

const Dot = styled.button<{ isActive: boolean }>`
  width: ${({ isActive }) => (isActive ? "16px" : "8px")};
  height: 8px;
  border-radius: ${({ isActive }) => (isActive ? "25%" : "50%")};
  background-color: ${({ isActive }) => (isActive ? "#EE10B0" : "#888")};
  border: none;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    border-radius 0.3s ease;

  &:hover {
    background-color: #ee10b0;
  }
`;
