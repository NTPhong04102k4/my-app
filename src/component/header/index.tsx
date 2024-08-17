import React from "react";
import styled from "styled-components";
import { MdOutlineSearch } from "react-icons/md";

export function HeaderComponent() {
  return (
    <HeaderContainer>
      <SearchContainer>
        <SearchButton>
          <MdOutlineSearch size={24} />
        </SearchButton>
        <SearchInput placeholder="Search For Musics, Artists, Albums ..." />
      </SearchContainer>
      <NavContainer>
        <NavButton>
          <h2>About</h2>
        </NavButton>
        <NavButton>
          <h2>Contact</h2>
        </NavButton>
        <NavButton>
          <h2>Premium</h2>
        </NavButton>
      </NavContainer>
      <AuthContainer>
        <AuthButton isPrimary={false}>
          <span>Login</span>
        </AuthButton>
        <AuthButton isPrimary>
          <span>Sign Up</span>
        </AuthButton>
      </AuthContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #656565;
  border-radius: 10px;
  padding: 1px 0px 1px 4px;
  box-shadow: 0 4px 5px rgba(44, 42, 42, 0.3);
  transition: box-shadow 0.3s ease;
  flex: 0 1 auto;

  &:focus-within {
    box-shadow: 0 0 20px rgba(238, 16, 176, 0.6);
  }
`;

const SearchButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  margin: 0 8px;
  cursor: pointer;
  transition:
    color 0.3s ease,
    transform 0.2s ease;
`;

const SearchInput = styled.input`
  width: 288px;
  background: transparent;
  
  border: 0.1px solid #656565;
  color: white;
  padding: 8px;
  border-radius: 10px;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  ::placeholder {
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
  }

  &:focus {
    outline: none;
    border-color: #716d70;
    box-shadow: 0 0 10px #716d70;

  }
`;

const NavContainer = styled.div`
  display: flex;
  gap: 46px;
  justify-content: center;
  flex: 1 1 auto;
`;

const NavButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
  }
`;

const AuthContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  flex: 0 1 auto;
`;

const AuthButton = styled.button<{ isPrimary?: boolean }>`
  width: 119px;
  height: 38px;
  border-radius: 10px;
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
    isPrimary
      ? "linear-gradient(45deg, #EE10B0, #FF69B4)"
      : "#1E1E1E"};
  color: ${({ isPrimary }) => (isPrimary ? "#fff" : "#EE10B0")};
  border: ${({ isPrimary }) =>
    !isPrimary ? "none" : "2px solid #EE10B0"};

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: ${({ isPrimary }) =>
      !isPrimary
        ? "linear-gradient(45deg, #545253, #1E1E1E)"
        : "linear-gradient(45deg, #EE10B0, #FF69B4)"};
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
    color: #fff;
    border-color: transparent;
   
  }

  &:active {
    transform: scale(0.98);
    box-shadow: ${({ isPrimary }) =>
      !isPrimary
        ? "0 0 15px #1E1E1E"
        : "0 0 15px rgba(238, 16, 176, 0.8)"};
  }

  span {
    position: relative;
    z-index: 1;
  }
`;