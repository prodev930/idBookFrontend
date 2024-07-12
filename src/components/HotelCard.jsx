import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button, Box } from '@mui/material';
import Rating from '@mui/material/Rating';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useHotels from '../hooks/useHotels';
import room1 from '../Images/room1.png';

const HotelCard = () => {
  const { getPropertyData, propertiesList } = useHotels();
  const [displayedProperties, setDisplayedProperties] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  const handleViewAllClick = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  useEffect(() => {
    // Fetch data when component mounts
    getPropertyData();
  }, []);


  useEffect(() => {
    // Update displayedProperties when propertiesList changes
    // Slice the propertiesList based on the visibleCount
    setDisplayedProperties(propertiesList.slice(0, visibleCount));
  }, [propertiesList, visibleCount]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '0 40px'}}>
      <Button variant="contained" sx={{ maxWidth:'40%', margin:'0 0 0 auto', color:'#FF1F00',
    fontSize:'20px', textTransform:'none', border:'none', background:'none', boxShadow:'none' }}>
      <Link to='/SearchPage' style={{ textDecoration: 'none', color: 'inherit' }}
                     rel="noopener noreferrer">
                    <b> View all</b>
                   </Link>
        </Button>
      <Grid container spacing={2}>
        {displayedProperties.map((hotel, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Box
              className='out-box'
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                justifyContent: 'center',
                textAlign: 'center',
                alignItems: 'center',
                border:'1px solid #C6C2C2',
                borderRadius:'10px'
              }}
            >
              <img src={room1} alt={hotel.display_name} style={{ width: '100%', height: 'auto', borderRadius:'10px 10px 0 0' }} />
              <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'100%', padding: '5px 10px'}}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Typography variant="h6" style={{ textAlign: 'justify', fontSize:'16px' }}>
                  <b>{hotel.display_name}</b>
                </Typography>
                <Typography variant="h6" style={{ textAlign: 'justify', fontSize:'14px' }}>
                  {hotel.city_name}
                </Typography>
                <Typography variant="subtitle1" style={{ textAlign: 'justify',fontSize:'16px' }}>{`₹${hotel.starting_price}/Night`}</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className='hotel-card'>
                <Button variant="contained" sx={{ bgcolor: '#15C85C' }}>
                  <b>{hotel.rating}</b> <Rating name="customized-1" defaultValue={1} max={1} color='white' style={{ color: 'white', fontSize:'20px' }}/>
                </Button>
                <Button
                  variant="text"
                  sx={{ color: '#FF1F00', textTransform: 'initial', fontSize:'12px' }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Book Now
                </Button>
              </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* {propertiesList.length > visibleCount && (
        <Button variant="contained" onClick={handleViewAllClick} disabled={visibleCount >= propertiesList.length} sx={{ maxWidth:'40%', margin:'auto' }}>
          View All
        </Button>
      )} */}
    </Box>
  );
};

export default HotelCard;
