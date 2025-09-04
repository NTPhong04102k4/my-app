import React from "react";
import styled from "styled-components";
import { MdOutlineSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IconComponent } from "../IconComponent";
import { BREAKPOINTS, useResponsiveStyles } from "src/utils/getDevices";

export function HeaderComponent() {
  const navigate = useNavigate();
  const { getResponsiveValue } = useResponsiveStyles();
  const isMobile = getResponsiveValue({ mobile: true }, false);
  const isTablet = getResponsiveValue({ tablet: true }, false);
  const isDesktop = getResponsiveValue({ desktop: true }, false);
  const isPortrait = getResponsiveValue({ portrait: true }, false);
  const isLandscape = getResponsiveValue({ landscape: true }, false);
  const isVerticalDisplay = getResponsiveValue(
    { verticalDisplay: true },
    false
  );

  return (
    <HeaderContainer>
      <SearchContainer>
        <SearchButton>
          <IconComponent icon={MdOutlineSearch} size={24} />
        </SearchButton>
        <SearchInput placeholder="Search For Musics, Artists, Albums ..." />
      </SearchContainer>
      <NavContainer>
        <NavButton onClick={() => navigate("about")}>
          <span>About</span>
        </NavButton>
        <NavButton onClick={() => navigate("contact")}>
          <span>Contact</span>
        </NavButton>
        <NavButton onClick={() => navigate("setting ")}>
          <span>Premium</span>
        </NavButton>
      </NavContainer>
      <AuthContainer>
        <AuthButton
          isPrimary={false}
          onClick={() => {
            console.log(
              "isMobile",
              isMobile,
              isTablet,
              "isDesktop",
              isDesktop,
              "isPortrait",
              isPortrait,
              "isLandscape",
              isLandscape,
              "isVerticalDisplay",
              isVerticalDisplay
            );
          }}
        >
          <span>Login</span>
        </AuthButton>
        <AuthButton
          isPrimary
          onClick={() => {
            navigate("signUp");
          }}
        >
          <span>Sign Up</span>
        </AuthButton>
      </AuthContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 56px;
  margin-bottom: 22px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #3a3737;
  border-radius: 6px;
  box-shadow: 0 4px 5px rgba(44, 42, 42, 0.3);
  transition: box-shadow 0.3s ease;

  &:focus-within {
    box-shadow: 0 0 2px #e9e6e8;
  }
`;

const SearchButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  margin: 0 4px;
  cursor: pointer;
  transition:
    color 0.3s ease,
    transform 0.2s ease;
`;

const SearchInput = styled.input`
  width: 270px;
  background: inherit;
  /* border: 0.1px solid #  ; */
  color: white;
  padding: 4px;
  border-width: 0px;
  border-radius: 4px;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
  ::placeholder {
    color: #fff;
    font-weight: 400;
  }

  /* &:focus {
    outline: none;
    border-color: #716d70;
    box-shadow: 0 0 5px #716d70;
    border: 0.1px solid #656565;
  } */
`;

const NavContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex: 1 1 auto;
`;

const NavButton = styled.button`
  background: transparent;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 6px;
  position: relative;
  color: #fff;
  font-size: 1.25rem;
  &:hover {
    transform: translateY(-2px);
    scale: 1.05;
    span {
      color: #ee10b0;
    }
  }

  &:active {
    transform: translateY(0);

    span {
      color: #d00a9a;
    }
    scale: 0.95;
  }
`;

const AuthContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  flex: 0 1 auto;
  /* padding-right: 30px; */
`;

// const Title = styled.h2`
//   font-family: sans-serif, serif;
//   font-size: 26px;
//   font-weight: 500;
//   color: #fff;
//   transition: all 0.3s ease;
//   user-select: none;
// `;

const AuthButton = styled.button<{ isPrimary?: boolean }>`
  width: 100px;
  height: 40px;
  border-radius: 6px;
  font-size: 1.25rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  background: ${({ isPrimary }) =>
    isPrimary ? "linear-gradient(45deg, #e408a5, #edabcc)" : "#1E1E1E"};
  color: #fff;
  border: ${({ isPrimary }) => (isPrimary ? "none" : "1px solid #430331")};

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: ${({ isPrimary }) =>
      !isPrimary
        ? "linear-gradient(45deg, #545253, #1E1E1E)"
        : "linear-gradient(45deg, #b16f9e, #e482b3)"};
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
    color: #fff;
    box-shadow: 0 0 4px #fff;
    border-color: transparent;
  }

  &:active {
    transform: scale(0.98);
    box-shadow: ${({ isPrimary }) =>
      !isPrimary ? "0 0 15px #1E1E1E" : "0 0 15px rgba(238, 16, 176, 0.8)"};
  }

  span {
    position: relative;
    z-index: 1;
  }
`;
