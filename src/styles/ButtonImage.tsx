import React from "react";
import { Button } from "./Button";
import styled from "styled-components";

interface ImageButtonProps {
    title?: string;
    src: string;
    keyID?: string;
    width?: number;
    height?: number;
    border?: string;
}

export const ButtonImage = styled(Button)<ImageButtonProps>`
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
    border: ${(props) => props.border || "none"};
    padding: 0;
    height: ${(props) => `${props.height || 50}px`};
    width: ${(props) => `${props.width || 50}px`};
`;

