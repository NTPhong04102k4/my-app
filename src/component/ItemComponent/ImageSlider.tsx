import React from "react";
import { Box } from "@mui/material";
import { ImageBackground } from "src/styles/ImageBackground";

export const ImageSlide = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: 350,
        width: "auto",
      }}
    >
      <ImageBackground
        width={800}
        height={344}
        backgroundSize="contain"
        backgroundPosition="center"
        objectFit="contain"
        src={require("src/assets/images/imgSlider.png")}
        id={"unique"}
        display="flex"
        alignSelf="flex-end"
      />
    </Box>
  );
};
