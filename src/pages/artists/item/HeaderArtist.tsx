import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IconComponent } from "../../../component/footer";
export function HeaderArtist() {
  const navigate = useNavigate();
  function handeSettingUser() {
    navigate("");
  }

  return (
    <Container>
      <div className="ml-[10px] mr-[30px] inline-flex justify-between ">
        <Button>
          <IconComponent
            icon={IoArrowBackOutline}
            style={{ alignSelf: "center" }}
            size={24}
            color="#FFF"
            onClick={() => navigate(-1)}
          />
        </Button>
        <div className="inline-flex gap-[32px]">
          <ViewFeatures>
            <Features>Share</Features>
            <Features>About</Features>
            <Features>Premium</Features>
          </ViewFeatures>
          <Button>
            <IconComponent
              icon={FaCircleUser}
              style={{ alignSelf: "center" }}
              size={36}
              color="#FFF"
              onClick={() => handeSettingUser()}
            />
          </Button>
        </div>
        <Text>Eminem</Text>
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 422px;
  /* background-image: url(${() =>
    require("src/assets/images/artists//bgc_artist.png")}); */
  width: 100%;
  padding-top: 30px;
  border-radius: 10px;
  padding-bottom: 56px;
  background-position: center;
  background-size: cover;
  position: relative;
  @media (min-width: 1344px) {
    width: 1076px;
  }
`;
const ViewFeatures = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: row;
`;
const Features = styled.button`
  font-size: 24px;
  color: #fff;
  font-family: sans-serif, serif;
  font-weight: 500;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;
const Button = styled.button`
  transition: transform 0.3s ease;
  &:active {
    transform: scale(0.95);
  }
`;
const Text = styled.h2`
  font-size: 48px;
  font-weight: 500;
  color: #fff;
  position: absolute;
  display: flex;

  bottom: 50px;
  left: 50px;
`;
