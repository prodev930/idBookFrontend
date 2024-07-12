import React, { useState } from 'react';
import { Paper, Button, Grid, TextField, InputAdornment, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HistoryCard from '../components/HistoryHotelCards';
import sbicon from '../Images/sbicon.png';
import hstpagebg from '../Images/hstpagebg.png';
import hstpagebg1 from '../Images/hstpagebg1.png';
import HotelData from '../assets/HotelData.json'
import EmptyUpcmng from '../components/EmptyUpcmng';
import '../App.css';

const History = () => {
  const [activeTab, setActiveTab] = useState('Upcoming');
  const [searchQuery, setSearchQuery] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const getCardType = () => {
    switch (activeTab) {
      case 'Upcoming':
        return 'upcoming';
      case 'Cancelled':
        return 'cancelled';
      case 'Completed':
        return 'completed';
      default:
        return 'upcoming'; // Default to 'upcoming' if none matches
    }
  };
  
  const filterHotelData = () => {
    return HotelData.filter((hotel) =>
      hotel.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div>

       <div className="search">
        <Typography>My Account</Typography>
      <div style={{display:'flex'}}>
      <input
        type="text"
        placeholder='Search for a booking'
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <img src={sbicon} alt='search icon'/>
      </div>
      </div>

      <Grid container spacing={2} justifyContent='center'>
          {/* Search Bar */}
        <Grid item xs={12}>
          {/* <Paper style={{ height: '316px', background: 'blue' }}></Paper> */}
          <img src={hstpagebg1} style={{width: '100%'}}/>
        </Grid>
       <Grid item xs={12} className="info-tab" sx={{padding:'0px', width:'70%', top:'40%', background:'white', position:'absolute', borderRadius:'8px 8px 10px 10px'}}>
          <Grid sx={{display:'flex', gap:'15px', padding:'20px 20px 50px 20px', flexWrap:'wrap'}} className='act-btn'>
          <Button
            variant={activeTab === 'Upcoming' ? 'contained' : 'outlined'}
            onClick={() => handleTabClick('Upcoming')}
          >
            Upcoming
          </Button>
          <Button
            variant={activeTab === 'Cancelled' ? 'contained' : 'outlined'}
            onClick={() => handleTabClick('Cancelled')}
          >
            Cancelled
          </Button>
          <Button
            variant={activeTab === 'Completed' ? 'contained' : 'outlined'}
            onClick={() => handleTabClick('Completed')}
          >
            Completed
          </Button>
          </Grid>
          <Grid item xs={12}>
            {/* Conditional rendering based on the length of filtered data */}
            {filterHotelData().length === 0 ? (
              <EmptyUpcmng/>
            ) : (
              <HistoryCard hotelData={filterHotelData()} cardType={getCardType()} />
            )}
          </Grid>
        </Grid>
        
        <img src={hstpagebg} style={{marginTop: '109px', width: '100%'}}/>
       </Grid>
    </div>
  );
};

export default History;
