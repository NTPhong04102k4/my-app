import React from "react";
import styled from "styled-components";

const CustomText = styled.span<{ color: string }>`
  color: ${({ color }) => color};
  font-weight: 500;
  font-family : serif;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

interface CustomTextProps {
  text: string;
  color: string;
  onClick?: () => void;
}

const CustomTextComponent: React.FC<CustomTextProps> = ({ text, color, onClick }) => (
  <CustomText color={color} onClick={onClick}>
    {text}
  </CustomText>
);

export default CustomTextComponent;
