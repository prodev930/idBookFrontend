import React, { useState, useEffect } from 'react';
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
  Slider,
  Grid,
  ButtonGroup,
} from '@mui/material';
import { Link } from 'react-router-dom';

import RoomIcon from '@mui/icons-material/Room';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import searcher2 from '../Images/searcher2.png';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import '../App.css';


const BookingHourly = () => {

    const handleTimeChange = (hours, minutes, period, setTime) => {
        const formattedHours = period === 'PM' && hours < 12 ? hours + 12 : hours;
        const formattedTime = `${formattedHours}:${minutes} ${period}`;
        setTime(formattedTime);
      };
    
      const getCurrentTime = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        return `${formatTimeSegment(hours)}:${formatTimeSegment(minutes)}`;
      };
    
      const formatTimeSegment = (segment) => {
        return segment < 10 ? `0${segment}` : segment;
      };
    
      const getDefaultCheckOutTime = (checkInTime) => {
        const [hours, minutes] = checkInTime.split(':').map(Number);
        const checkOutDate = new Date();
        checkOutDate.setHours(hours + 24, minutes);
        return `${formatTimeSegment(checkOutDate.getHours())}:${formatTimeSegment(
          checkOutDate.getMinutes()
        )}`;
      };
      
  const [location, setLocation] = useState({ state: '', country: '' });
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [checkInTime, setCheckInTime] = useState(getCurrentTime());
  const [checkOutTime, setCheckOutTime] = useState(getDefaultCheckOutTime(getCurrentTime()));
  const [checkInPopover, setCheckInPopover] = useState(null);
  const [checkOutPopover, setCheckOutPopover] = useState(null);
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
        setLocation({ state: data.state, country: data.country });
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    };

    fetchLocationData();
  }, []);

  const handleGuestsClick = (event) => {
    setCheckInPopover(null);
    setCheckOutPopover(null);
    setCheckInTime('');
    setCheckOutTime('');
    setAnchorEl(event.currentTarget);
  };

  const handleGuestsClose = () => {
    setAnchorEl(null);
  };

  const handleCheckInPopoverOpen = (event) => {
    setCheckInPopover(event.currentTarget);
  };

  const handleCheckInPopoverClose = () => {
    setCheckInPopover(null);
  };

  const handleCheckOutPopoverOpen = (event) => {
    setCheckOutPopover(event.currentTarget);
  };

  const handleCheckOutPopoverClose = () => {
    setCheckOutPopover(null);
  };

  const handleSearch = () => {
    console.log('Search:', {
      location,
      checkInDate,
      checkOutDate,
      checkInTime,
      checkOutTime,
      adultsCount,
      childrenCount,
      infantsCount,
    });
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

  return (
    <Container className='form-container my-hourly'>
      {/* ... (previous code) ... */}

      <FormControl style={{width:'100px'}}>
        {/* <InputLabel style={{background:'white'}}>Location</InputLabel> */}
        <Select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          startAdornment={<RoomIcon />}
        >
          {/* Replace with the actual list of locations fetched from the API */}
          <MenuItem value={{ state: 'Your State', country: 'Your Country' }}>
            Your State, Your Country
          </MenuItem>
        </Select>
      </FormControl>
      
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className='input-sec'>
  <div style={{ display: 'flex', flexDirection: 'column' }}>
  <TextField
        type="date"
        value={checkInDate.toISOString().split("T")[0]}
        onChange={(e) => setCheckInDate(new Date(e.target.value))}
        InputLabelProps={{ shrink: true }}
      />
    <InputLabel shrink={Boolean(checkOutTime)} htmlFor="checkout-time">
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
    <InputLabel shrink={Boolean(checkOutTime)} htmlFor="checkout-time">
    Check out
  </InputLabel>
  </div>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className='input-sec'>
  <div style={{ display: 'flex', flexDirection: 'column' }}>
  <TextField
        type="text"
        value={checkInTime}
        onClick={handleCheckInPopoverOpen}
        InputLabelProps={{ shrink: true }}
        style={{maxWidth:'116px'}}
      />
    <InputLabel shrink={Boolean(checkOutTime)} htmlFor="checkout-time">
    Check in
  </InputLabel>
  </div>
</div>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className='input-sec'>
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <TextField
      type="text"
      value={checkOutTime}
      onClick={handleCheckOutPopoverOpen}
      InputProps={{ disableUnderline: true }}
      inputProps={{ id: 'checkout-time' }}
    />
    <InputLabel shrink={Boolean(checkOutTime)} htmlFor="checkout-time">
    Check out
  </InputLabel>
  </div>
</div>



      <Button onClick={handleGuestsClick} style={{ textTransform: 'none', color: '#111827' }}>
      <PersonAddIcon color="disabled" /> Guests
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
        {/* ... (previous popover content) ... */}
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

      {/* Check-in Time Popover */}
      <Popover
        open={Boolean(checkInPopover)}
        anchorEl={checkInPopover}
        onClose={handleCheckInPopoverClose}
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
          <Typography variant="subtitle2">Select Check-in Time</Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography>Hours</Typography>
              <Slider
                defaultValue={12}
                step={1}
                marks
                min={1}
                max={12}
                valueLabelDisplay="auto"
                onChange={(event, value) => handleTimeChange(value, 0, 'AM', setCheckInTime)}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography>Minutes</Typography>
              <Slider
                defaultValue={0}
                step={15}
                marks
                min={0}
                max={45}
                valueLabelDisplay="auto"
                onChange={(event, value) => handleTimeChange(12, value, 'AM', setCheckInTime)}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography>AM/PM</Typography>
              <ButtonGroup variant="contained" aria-label="AM/PM" fullWidth>
                <Button onClick={() => handleTimeChange(12, 0, 'AM', setCheckInTime)}>AM</Button>
                <Button onClick={() => handleTimeChange(12, 0, 'PM', setCheckInTime)}>PM</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Box>
      </Popover>

      {/* Check-out Time Popover */}
      <Popover
        open={Boolean(checkOutPopover)}
        anchorEl={checkOutPopover}
        onClose={handleCheckOutPopoverClose}
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
          <Typography variant="subtitle2">Select Check-out Time</Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography>Hours</Typography>
              <Slider
                defaultValue={12}
                step={1}
                marks
                min={1}
                max={12}
                valueLabelDisplay="auto"
                onChange={(event, value) => handleTimeChange(value, 0, 'AM', setCheckOutTime)}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography>Minutes</Typography>
              <Slider
                defaultValue={0}
                step={15}
                marks
                min={0}
                max={45}
                valueLabelDisplay="auto"
                onChange={(event, value) => handleTimeChange(12, value, 'AM', setCheckOutTime)}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography>AM/PM</Typography>
              <ButtonGroup variant="contained" aria-label="AM/PM" fullWidth>
                <Button onClick={() => handleTimeChange(12, 0, 'AM', setCheckOutTime)}>AM</Button>
                <Button onClick={() => handleTimeChange(12, 0, 'PM', setCheckOutTime)}>PM</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Box>
      </Popover>

      {/* ... (previous code) ... */}
      <Button className="tab-manage-1" onClick={handleSearch}>
      <Grid  item xs={12} sm={6} md={3} lg={2} sx={{ marginTop: "1%" }} className='search-icon'>
                           
                            <Link to="/SearchPage" style={{textDecoration: 'none',  color: 'inherit'}}
                rel="noopener noreferrer">

<img src={searcher2} />
                  </Link>
                          </Grid>
      </Button>
    </Container>
  );
};

export default BookingHourly;
