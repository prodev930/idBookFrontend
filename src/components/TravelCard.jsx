import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const TravelCard = ({ image, title, date, description, buttonLabel }) => {
  return (
    <Grid container>
      <img src={image} alt={title} style={{ width: '100%', height: 'auto' }} /> <br />
      <Box sx={{ textAlign: 'left', margin: 1 }}>
        <Typography variant="subtitle1">
          <b>{title}</b> <br />
          {date}
        </Typography>
        <Typography sx={{ marginTop: '3%' }}>{description}</Typography>
        <Button
          variant="text"
          sx={{ color: '#FF1F00', textTransform: 'initial', padding:'20px 0' }}
          endIcon={<ArrowForwardIcon />}
        >
          {buttonLabel}
        </Button>
      </Box>
    </Grid>
  );
};

export default TravelCard;
