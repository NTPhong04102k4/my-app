import React from "react";
import styled from "styled-components";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineFacebook } from "react-icons/ai";
import { SiInstagram } from "react-icons/si";
import { CiTwitter } from "react-icons/ci";
import { featFooter, FeaturesFooter } from "./data";
import { IconComponent } from "../IconComponent";

export const FooterComponent = () => (
  <FooterContainer>
    <AboutSection>
      <AboutTitle>About</AboutTitle>
      <AboutText>
        Melodies is a website that has been created for over{" "}
        <HighlightText color="#EE10B0">5 years</HighlightText> now and it is one
        of the most famous music player website's in the world. In this website
        you can listen and download songs for free. Also if you want no
        limitation you can buy our{" "}
        <HighlightText color="#0E9EEF">premium passes.</HighlightText>
      </AboutText>
    </AboutSection>
    <FeaturesSection>
      {featFooter.map((item, index) => (
        <FeaturesItem key={index} item={item} />
      ))}
    </FeaturesSection>
    <LogoSection>
      <LogoText>Medolias</LogoText>
      <SocialButtonsWrapper>
        <SocialButton onClick={() => console.log("Facebook clicked")}>
          <IconComponent icon={AiOutlineFacebook} size={24} color="white" />
        </SocialButton>
        <SocialButton onClick={() => console.log("Instagram clicked")}>
          <IconComponent icon={SiInstagram} size={24} color="white" />
        </SocialButton>
        <SocialButton onClick={() => console.log("Twitter clicked")}>
          <IconComponent icon={CiTwitter} size={24} color="white" />
        </SocialButton>
        <SocialButton onClick={() => console.log("Call clicked")}>
          <IconComponent icon={IoCallOutline} size={24} color="white" />
        </SocialButton>
      </SocialButtonsWrapper>
    </LogoSection>
  </FooterContainer>
);

const FeaturesItem = ({ item }: { item: FeaturesFooter }) => (
  <FeatureColumn>
    <FeatureTitle>{item.title}</FeatureTitle>
    <Divider />
    <FeatureList>
      {item.data &&
        item.data.map((dataItem) => (
          <FeatureButton key={dataItem?.id}>{dataItem.features}</FeatureButton>
        ))}
    </FeatureList>
  </FeatureColumn>
);

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding-bottom: 30px;
  gap: 46px;
`;

const AboutSection = styled.div`
  width: 250px;
  height: 200px;
`;

const AboutTitle = styled.h1`
  font-size: 40px;
  color: #fff;
  height: 63px;
`;

const AboutText = styled.p`
  font-size: 16px;
  color: #fff;
  line-height: 1.5;
`;

const HighlightText = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  transition: all 0.3s ease;

  &:hover {
    text-decoration: underline;
    font-weight: 600;
  }
`;

const FeaturesSection = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 25px;
`;

const FeatureColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FeatureTitle = styled.button`
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  height: 56px;
  text-align: center;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #ee10b0;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 3px;
  background-color: white;
  margin-bottom: 1rem;
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const FeatureButton = styled.button`
  color: #fff;
  font-size: 1.5rem;
  height: 38px;
  text-align: center;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #0e9eef;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 18px;
`;

const LogoText = styled.h1`
  font-size: 40px;
  font-weight: bold;
  background: linear-gradient(to right, #ee10b0, #0e9eef);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SocialButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 85px;
  gap: 24px;
`;

const SocialButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(2);
  }
`;

export default FooterComponent;
