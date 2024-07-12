import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, Button, Rating, Typography, Paper } from '@mui/material';
import useHotels from '../hooks/useHotels';
import '../App.css';
import room1 from '../Images/room1.png';

const SearchHotelCard = ({properties}) => {
  // const { getPropertyData, propertiesList } = useHotels();

  // useEffect(() => {
  //   getPropertyData();
  // }, []);


  return (
    <div className='hotel-display'>
      {properties.map((hotel, index) => (
         <Grid key={hotel.id} container spacing={2} sx={{marginTop:'20px', border:'1px solid #C4C4C4', alignItems:'stretch'}}>
         <Grid item xs={12} sm={6} md={4} lg={4} sx={{padding:'0px!important'}}>
             <img src={room1} alt={hotel.display_name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
         </Grid>
   
         <Grid item xs={12} sm={6} md={8} lg={8} sx={{padding:'20px'}}>
             <Box sx={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: '10px', justifyContent:'space-between', flexWrap:'wrap' }}>
                 <Typography variant='h6' sx={{textWrap:'pretty'}}><b>{hotel.display_name}</b></Typography>
                 <Box sx={{display:'flex', gap:'10px', flexWrap:'wrap'}}>
                  <Typography sx={{fontSize:'10px', color:'#5A5757'}}> Expert Rating <br/> <span style={{fontSize:'12px'}}> Very Good </span></Typography>
                 {/* <Rating name="customized-1" defaultValue={1} max={1} />
                 <Typography><b>{hotel.rating}</b></Typography> */}
                  <Button variant="contained" sx={{ bgcolor: '#15C85C' }}>
                  <b>{hotel.rating}</b> <Rating name="customized-1" defaultValue={1} max={1} color='white' style={{ color: 'white', fontSize:'20px' }}/>
                </Button>
                 </Box>
                 
               </Box>
               
               <Box sx={{ display: "flex", gap: "10px", flexDirection: 'column' }}>
               <Rating name="read-only" defaultValue={4} max={4} />
                 <Typography sx={{textAlign:'start'}}>{hotel.city_name} | <span style={{color:'#1D498D', fontSize:'12px'}}>View Map</span></Typography>
                 <Typography className='price' sx={{ color: "#1D498D", textAlign:'start' }}>
                   <Typography sx={{ color: '#C4C4C4' }}>  Per Night</Typography>
                   ₹2000
                 </Typography>
               </Box>
   
               <Box sx={{ display: "flex", gap: "10px", alignItems: 'center', marginTop: '10px', justifyContent:'space-between', flexWrap:'wrap' }}>
                 <Box>
                 <Typography sx={{ color: "#5A5757",  textAlign:'start' }}>
                   {/* {hotel.roomsAllowed}<br /> */}
                   1 Night, 2 Guests <span style={{ color: '#1D498D' }}> (No extra charges) </span>
                 </Typography>
   
                 <Typography sx={{ color: "grey", textAlign:'start' }}>
                   8 km from City Center
                 </Typography>
                 </Box>
                 <Box>
                 <Button sx={{background:'#1D498D', color:'white', borderRadius:'4px', padding:'8px, 16px, 8px, 16px', textTransform:'none'}}>
                   <Link to={`/details/${hotel.id}`} style={{ textDecoration: 'none', color: 'inherit' }}
                      rel="noopener noreferrer">
                     View Details
                   </Link>
                 </Button>
               </Box>
                 </Box>
                
         </Grid>
       </Grid>
      ))}
    </div>
  );
};

export default SearchHotelCard;
