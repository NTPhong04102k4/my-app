import React from "react";

export const IconComponent = ({
  icon: Icon,
  size = 24,
  color = "white",
  onClick,
  style,
}: {
  icon: any;
  size?: number;
  color?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}) => {
  try {
    return <Icon size={size} color={color} onClick={onClick} style={style} />;
  } catch (error) {
    console.error("Error rendering social icon:", error);
    return (
      <div style={{ width: size, height: size, backgroundColor: color }} />
    );
  }
};
