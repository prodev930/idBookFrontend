import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import upplan from '../Images/upplan.png'; // Replace with the actual path to your image

const EmptyUpcmng = () => {
  return (
    <Box
      sx={{
        display: 'flex', // You can adjust the height as needed
        width: '100%',
        padding:'50px 0',
        flexWrap:'wrap' // Set the width to 100% of the parent container
      }}
    >
      {/* Left side (30%) with an image */}
      <Box sx={{ flex: '30%', padding: '16px' }}>
        <img src={upplan} alt="Sample" style={{objectFit: 'cover' }} />
      </Box>

      <Box sx={{ flex: '70%', padding: '16px', textAlign:'left' }}>
        <Typography variant="h4" gutterBottom>
        Looks empty, you've no upcoming bookings.
        </Typography>
        <Typography variant="body1" paragraph>
        When you book a trip, you will see your itinerary here.
        </Typography>
        <Button variant="contained" color="primary" sx={{borderRadius:'24px', background:'linear-gradient(to right, rgba(29, 73, 141, 1), rgba(60, 101, 164, 1))'}}>
          PLAN A TRIP
        </Button>
      </Box>
    </Box>
  );
};

export default EmptyUpcmng;
