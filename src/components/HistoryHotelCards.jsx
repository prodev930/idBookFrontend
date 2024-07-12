import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, Button, Rating, Typography } from '@mui/material';
import hotel1 from '../Images/hotel1.png';
import '../App.css';

const SearchHotelCard = ({ hotel, cardType }) => {
  const getButtonProps = () => {
    switch (cardType) {
      case 'upcoming':
        return {
          label: 'View Details',
          to: '/details',
        };
      case 'cancelled':
        return {
          label: 'Cancelled',
          to: '/details',
          bgColor: '#FF5858',
        };
      case 'completed':
      default:
        return {
          label: 'View Details',
          to: '/details',
        };
    }
  };

  const { label, to, bgColor } = getButtonProps();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '10px',
        margin:'30px auto',
        padding: '10px',
        width: 'fit-content',
      }}
      className='disp-card'
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
          <img src={hotel1} alt={hotel.name} style={{ width: '100%' }} />
        </Grid>

        <Grid item xs={12} sm={12} md={8} className='info-card'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent:'space-between' }}>
            <Typography variant='h6'>{hotel.name}</Typography>
            <Rating name='customized-1' defaultValue={1} max={1} />
          </Box>

          <Typography sx={{textAlign:'start'}}>{hotel.location}</Typography>
          <Typography className='price' sx={{ color: '#14B8A6', textAlign:'start' }}>
            <Typography sx={{ color: '#C4C4C4' }}>Per Night</Typography>
            {hotel.price}
          </Typography>

          <Box sx={{ display: 'flex', gap: '10px', textAlign: 'left', marginTop: '5%', justifyContent:'space-between' }}>
            <Typography sx={{ color: 'grey' }}>{hotel.roomsAllowed}<br></br> Guests/Room</Typography>
            <Typography sx={{ color: 'grey' }}>
              {hotel.distance}km <br />
              {hotel.location}
            </Typography>
            <Button style={{ backgroundColor: bgColor, color: 'white' }}>
              <Link
                to={to}
                style={{ textDecoration: 'none', color: 'inherit' }}
                rel='noopener noreferrer'
              >
                {label}
              </Link>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const HistoryCard = ({ hotelData, cardType }) => {
  return (
    <div className='hotel-display'>
      {hotelData.map((hotel) => (
        <SearchHotelCard key={hotel.id} hotel={hotel} cardType={cardType} />
      ))}
    </div>
  );
};

export default HistoryCard;
