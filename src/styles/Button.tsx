import styled from "styled-components";
import React from "react";

interface ButtonProps {
  backgroundColor?: string;
  border?: "none" | number;
  color?: string;
  padding?: number;
  textAlign?: "center" | "start" | "end";
  fontSize?: number;
  rounded?: number;
}

// Define Button first
export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  border: ${(props) =>
    typeof props.border === "number"
      ? `${props.border}px solid`
      : props.border || "none"};
  color: ${(props) => props.color || "transparent"};
  padding: ${(props) => `${props.padding || 0}px`};
  text-align: ${(props) => props.textAlign || "center"};
  font-size: ${(props) => `${props.fontSize || 16}px`};
  border-radius: ${(props) => `${props.rounded || 10}px`};
  display: inline-block;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 10px #000000;

  }
  &:active {
    transform: scale(1.01);
    opacity: 0.7;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 6px;

  &:hover ${Button} {
    transform: scale(0.75);
    opacity: 0.8;
  }

  ${Button}:hover {
    transform: scale(1.01);
    opacity: 1;
  }
`;
