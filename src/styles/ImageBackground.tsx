import React from "react";
import styled from "styled-components";

interface ImageBackgroundProps {
  width: number | string | "auto";
  height: number;
  reSize?: string;
  rounded?: number;
  src: string;
  alt?: string;
  onClick?: () => void;
  id: number | string;
  loading?: "lazy" | "eager";
  backgroundSize?: "cover" | "contain" | "auto";
  isMap?: boolean;
  useMap?: string;
  decoding?: "auto" | "sync" | "async";
  className?: string;
  children?: React.ReactNode;
  backgroundRepeat?: "repeat" | "no-repeat" | "repeat-x" | "repeat-y";
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  backgroundPosition?: string;
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  display?: 'flex' | 'auto';
  flex?: number;
}

const ImageBackgroundWrapper = styled.div<ImageBackgroundProps>`
  width: ${(props) => typeof props.width === 'number' ? `${props.width}px` : props.width};
  height: ${(props) => `${props.height}px`};
  background-image: url(${(props) => props.src});
  background-size: ${(props) => props.backgroundSize || 'cover'};
  background-position: ${(props) => props.backgroundPosition || 'center'};
  background-repeat: ${(props) => props.backgroundRepeat || 'no-repeat'};
  object-fit: ${(props) => props.objectFit || 'cover'};
  display: ${(props) => props.display || 'flex'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  align-items: ${(props) => props.alignItems || 'center'};
  align-self: ${(props) => props.alignSelf || 'auto'};
  flex: ${(props) => props.flex || 1};
  overflow: hidden;  
`;

export const ImageBackground: React.FC<ImageBackgroundProps> = ({
  width,
  height,
  reSize,
  rounded,
  alignItems,
  alignSelf,
  justifyContent,
  src,
  alt,
  onClick,
  id,
  loading,
  backgroundSize,
  isMap,
  useMap,
  decoding,
  className,
  children,
  objectFit,
  backgroundRepeat,
  backgroundPosition,
  display,
  flex,
  ...props
}) => {
  return (
    <ImageBackgroundWrapper
      width={width}
      height={height}
      backgroundSize={backgroundSize}
      alignItems={alignItems}
      alignSelf={alignSelf}
      justifyContent={justifyContent}
      src={src}
      alt={alt}
      onClick={onClick}
      id={id}
      loading={loading}
      isMap={isMap}
      useMap={useMap}
      decoding={decoding}
      className={className}
      objectFit={objectFit}
      backgroundRepeat={backgroundRepeat}
      backgroundPosition={backgroundPosition}
      display={display}
      flex={flex}
      {...props}
    >
      {children}
    </ImageBackgroundWrapper>
  );
};
