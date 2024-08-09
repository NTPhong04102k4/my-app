import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

export const ImageSlide = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        }}
      >
        <Typography variant="h4" component="h1">
          Welcome to My App
        </Typography>
        <Typography variant="body1">
          This is an example of using an image background in Material-UI.
        </Typography>
      </Paper>
    </Box>
  );
};


