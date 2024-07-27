import React from 'react';

interface BorderGradientDivProps {
  borderColor: string;
  backgroundColor: string;
  borderWidth?: string;
  children: React.ReactNode;
  isActive: boolean;
}

const BorderGradientDiv: React.FC<BorderGradientDivProps> = ({ 
  borderColor, 
  backgroundColor, 
  borderWidth = '0px', 
  children,
  isActive
}) => {
  const gradientStyle: React.CSSProperties = isActive ? {
    background: `linear-gradient(${borderColor}, ${backgroundColor}),
                 linear-gradient(${borderColor}, ${backgroundColor}),
                 linear-gradient(${borderColor}, ${backgroundColor}),
                 linear-gradient(${borderColor}, ${backgroundColor})`,
    backgroundSize: `100% ${borderWidth}, ${borderWidth} 100%, 100% ${borderWidth}, ${borderWidth} 100%`,
    backgroundPosition: '0 0, 100% 0, 100% 100%, 0 100%',
    backgroundRepeat: 'no-repeat',
    backgroundColor: backgroundColor,
    paddingRight: borderWidth,
    paddingTop:borderWidth,
    paddingBottom:borderWidth,
    paddingLeft:-borderWidth,
    margin:-borderWidth,


    boxShadow: `1px 1px 2px 2px ${borderColor}`,
    borderRadius: '6px' 
  } : {};

  return (
    <div style={gradientStyle}>
      {children}
    </div>
  );
};

export default BorderGradientDiv;
