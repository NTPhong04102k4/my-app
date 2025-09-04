import React from "react";
import styled, { keyframes } from "styled-components";

interface SpinnerProps {
  size?: number;
  color?: string;
  borderSize?: number;
}

export const LoadingSpinner: React.FC<SpinnerProps> = ({
  size = 50,
  color = "#3498db",
  borderSize = 4,
}) => {
  return <Spinner size={size} color={color} borderSize={borderSize} />;
};

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`;

const Spinner = styled.div<{ borderSize: number; size: number; color: string }>`
  border: ${({ borderSize }) => borderSize}px solid #f3f3f3; 
  border-radius: 50%;
  border-top: ${({ borderSize, color }) => `${borderSize}px solid ${color}`}; 
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  animation: ${spin} 1.5s linear infinite, ${pulse} 1.5s ease-in-out infinite;
  position: relative;
  display: inline-block;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: ${({ borderSize }) => borderSize}px solid transparent;
    border-top-color: ${({ color }) => color};
    animation: ${spin} 1.5s linear infinite;
  }
`;
