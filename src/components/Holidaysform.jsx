import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Popover,
  Box,
  Typography,
  Grid
} from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import searcher2 from '../Images/searcher2.png';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import '../App.css';


const Holidaysform = () => {
  const [fromLocation, setFromLocation] = useState({ state: '', country: '' });
  const [toLocation, setToLocation] = useState({ state: '', country: '' });

  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [adultsCount, setAdultsCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantsCount, setInfantsCount] = useState(0);
  
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const fetchLocationData = async () => {
        try {
          const response = await fetch('https://example.com/location');
          
          if (!response.ok) {
            throw new Error('Failed to fetch');
          }
      
          const data = await response.json();
          setFromLocation({ state: data.fromState, country: data.fromCountry });
        setToLocation({ state: data.toState, country: data.toCountry });
        } catch (error) {
          console.error('Error fetching location data:', error);
        }
      };

    fetchLocationData();
  }, []);

  const handleGuestsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleGuestsClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = () => {
    // Use the selected options for searching or trigger the necessary API calls
    console.log('Search:', { location, checkInDate, checkOutDate, adultsCount, childrenCount, infantsCount });
  };

  const handleDecrement = (type) => {
    switch (type) {
      case 'adults':
        setAdultsCount((prevCount) => Math.max(prevCount - 1, 1));
        break;
      case 'children':
        setChildrenCount((prevCount) => Math.max(prevCount - 1, 0));
        break;
      case 'infants':
        setInfantsCount((prevCount) => Math.max(prevCount - 1, 0));
        break;
      default:
        break;
    }
  };

  const handleIncrement = (type) => {
    switch (type) {
      case 'adults':
        setAdultsCount((prevCount) => prevCount + 1);
        break;
      case 'children':
        setChildrenCount((prevCount) => prevCount + 1);
        break;
      case 'infants':
        setInfantsCount((prevCount) => prevCount + 1);
        break;
      default:
        break;
    }
  };
  return (
    <Container className='form-container my-fullday'>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className='input-holiday'>
  <div style={{ display: 'flex', flexDirection: 'column' }}>
  <FormControl style={{ width: '100px' }}>
        <Select
          value={toLocation}
          onChange={(e) => setToLocation(e.target.value)}
          startAdornment={<RoomIcon />}
        >
          {/* Replace with the actual list of locations fetched from the API */}
          <MenuItem value={{ state: 'To State', country: 'To Country' }}>
            State, Country
          </MenuItem>
        </Select>
      </FormControl>

      <InputLabel  htmlFor="checkout-time">
    To location
  </InputLabel>
  </div>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className='input-holiday'>
  <div style={{ display: 'flex', flexDirection: 'column' }}>
  <FormControl style={{width:'100px'}}>
      <Select
          value={fromLocation}
          onChange={(e) => setFromLocation(e.target.value)}
          startAdornment={<RoomIcon />}
          sx={{padding:'0'}}
        >
          {/* Replace with the actual list of locations fetched from the API */}
          <MenuItem value={{ state: 'From State', country: 'From Country' }}>
            State, Country
          </MenuItem>
        </Select>
      </FormControl>
      <InputLabel  htmlFor="checkout-time">
    From
  </InputLabel>
  </div>
</div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className='input-sec'>
  <div style={{ display: 'flex', flexDirection: 'column' }}>
  <TextField
        type="date"
        value={checkInDate.toISOString().split("T")[0]}
        onChange={(e) => setCheckInDate(new Date(e.target.value))}
        InputLabelProps={{ shrink: true }}
      />
    <InputLabel  htmlFor="checkout-time">
    Check in
  </InputLabel>
  </div>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className='input-sec'>
  <div style={{ display: 'flex', flexDirection: 'column' }}>
  <TextField
        type="date"
        value={checkOutDate.toISOString().split("T")[0]}
        onChange={(e) => setCheckOutDate(new Date(e.target.value))}
        InputLabelProps={{ shrink: true }}
      />
    <InputLabel htmlFor="checkout-time">
    Check out
  </InputLabel>
  </div>
</div>

      {/* <TextField
        type="date"
        value={checkInDate.toISOString().split("T")[0]}
        onChange={(e) => setCheckInDate(new Date(e.target.value))}
        InputLabelProps={{ shrink: true }}
      />

      <TextField
        type="date"
        value={checkOutDate.toISOString().split("T")[0]}
        onChange={(e) => setCheckOutDate(new Date(e.target.value))}
        InputLabelProps={{ shrink: true }}
      /> */}

      <Button onClick={handleGuestsClick} style={{ textTransform: 'none', color: '#111827' }}>
      <PersonAddIcon color="disabled" />  Guests
      </Button>

      {/* Guests Popover */}
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleGuestsClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box p={2}>
          <Box>
            <Typography variant="subtitle2">Adults (13+)</Typography>
            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
              <Button variant="contained" onClick={() => handleDecrement('adults')}>
                remove
              </Button>
              <Typography variant="body1">{adultsCount}</Typography>
              <Button variant="contained" onClick={() => handleIncrement('adults')}>
                add
              </Button>
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle2">Children (2-12)</Typography>
            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
              <Button variant="contained" onClick={() => handleDecrement('children')}>
                remove
              </Button>
              <Typography variant="body1">{childrenCount}</Typography>
              <Button variant="contained" onClick={() => handleIncrement('children')}>
                add
              </Button>
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle2">Infants (0-2)</Typography>
            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
              <Button variant="contained" onClick={() => handleDecrement('infants')}>
                remove
              </Button>
              <Typography variant="body1">{infantsCount}</Typography>
              <Button variant="contained" onClick={() => handleIncrement('infants')}>
                add
              </Button>
            </Box>
          </Box>
        </Box>
      </Popover>

      <Button className="tab-manage-1" onClick={handleSearch}>
      <Grid  item xs={12} sm={6} md={3} lg={2} sx={{ marginTop: "1%" }} className='search-icon'>
      <Link to="/login" style={{textDecoration: 'none',  color: 'inherit'}}
               rel="noopener noreferrer">
<img src={searcher2} />
                  </Link>
                          </Grid>
      </Button>
    </Container>
  );
};

export default Holidaysform;
