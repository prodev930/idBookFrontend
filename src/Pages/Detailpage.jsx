import React, { useState, useEffect } from "react";
import { Box,  Grid, Typography, Button, Popover, TextField, MenuItem, IconButton,  Menu} from '@mui/material';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ImageGallery from '../components/Imagegallery';
import AmenitiesBox from '../components/AmenityItem';
import Loginheader from '../components/Loginheader';
import palace1 from '../Images/palace1.png';
import palace2 from '../Images/palace2.png';
import palace3 from '../Images/palace3.png';
import palace4 from '../Images/palace4.png';
import HotelCard from '../components/HotelCard';
import wifi from '../Images/wifi.svg';
import car from '../Images/car.svg';
import restaurant from '../Images/restaurant.svg';
import pool from '../Images/pool.svg';
import tv from '../Images/tv.svg';
import card from '../Images/card.svg';
import bar from '../Images/bar.svg';
import bed from '../Images/card.svg';
import guests from '../Images/bar.svg';
import fitness from '../Images/fitness.svg';
import Footer from '../components/Footer';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from 'react-router-dom';
import '../App.css';
import useHotels from '../hooks/useHotels';
import { useParams } from 'react-router-dom';

const GalleryImages = [
    palace1,
    palace2,
    palace3,
    palace4,
    palace1,
];

const amenitiesData = [
  { imgSrc: wifi, altText: "amenities", text: "Free Wifi" },
  { imgSrc: car, altText: "amenities", text: "Suttle Service" },
  { imgSrc: bar, altText: "amenities", text: "Bar" },
  { imgSrc: fitness, altText: "amenities", text: "Fitness center" },
  { imgSrc: restaurant, altText: "amenities", text: "Restaurant" },
  { imgSrc: pool, altText: "amenities", text: "Pool" },
  { imgSrc: tv, altText: "amenities", text: "Television" },
  { imgSrc: card, altText: "amenities", text: "Atm card" },
  
];

const Detailpage = () => {
  const { getPropertyData, getPropertiesImagesData, propertiesList, propertiesImages } = useHotels();
  const [selectedHotel, setSelectedHotel] = useState(null);

  const params = useParams(); // Use useParams to get the hotelId from the URL
  const { hotelId } = params;

  useEffect(() => {
    getPropertyData();
    getPropertiesImagesData(hotelId);
  }, []);

 // console.log("propertiesImages", propertiesImages);

 

  useEffect(() => {
    const parsedHotelId = parseInt(hotelId, 10); // Parse the hotelId as an integer
  
    if (!isNaN(parsedHotelId) && propertiesList && propertiesList.length > 0) {
      // Check if parsedHotelId is a valid number and propertiesList is populated
      const selectedHotelData = propertiesList.find(hotel => hotel.id === parsedHotelId);
      setSelectedHotel(selectedHotelData);
    }
  }, [propertiesList, hotelId]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRoomType, setSelectedRoomType] = useState("");
  const [selectedGuests, setSelectedGuests] = useState("");
  const [selectedBookingType, setSelectedBookingType] = useState("");
  const [selectedHours, setSelectedHours] = useState("");
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantsCount, setInfantsCount] = useState(0);
  const [adultCount, setAdultCount] = useState(0);

  const [guestsAnchorEl, setGuestsAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleGuestsClick = (event) => {
    setGuestsAnchorEl(event.currentTarget);
  };

  const handleGuestsClose = () => {
    setGuestsAnchorEl(null);
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  const handleIncreaseAdults = () => {
    setAdultCount((prevCount) => prevCount + 1);
  };

  const handleDecreaseAdults = () => {
    if (adultCount > 0) {
      setAdultCount((prevCount) => prevCount - 1);
    }
  };

  const handleIncreaseChildren = () => {
    setChildrenCount((prevCount) => prevCount + 1);
  };

  const handleDecreaseChildren = () => {
    if (childrenCount > 0) {
      setChildrenCount((prevCount) => prevCount - 1);
    }
  };

  const handleIncreaseInfants = () => {
    setInfantsCount((prevCount) => prevCount + 1);
  };

  const handleDecreaseInfants = () => {
    if (infantsCount > 0) {
      setInfantsCount((prevCount) => prevCount - 1);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    if (adultCount !== 0 || childrenCount !== 0 || infantsCount !== 0) {
      setGuestsAnchorEl(null);
    }
  };

  return (
    <div>
      <Loginheader/>

      <div style={{padding:'0 50px'}}>
        <ImageGallery images={propertiesImages} propertiesList={propertiesList}/>

       
        { selectedHotel && (

<div key={selectedHotel.id}>
<Box sx={{ margin:'30px 0 18px 0' }}>
<Typography variant="h5" component="div" sx={{textAlign:'start', margin:'21px 0'}}>
{selectedHotel.display_name}
</Typography>
<Grid container spacing={2} alignItems="center">
  <Grid item>
    <div className="location-logo">
      <LocationOnIcon />
    </div>
  </Grid>
  <Grid item>
    <div className="location">{selectedHotel.city_name}</div>
  </Grid>
</Grid>
<Box sx={{display:'flex', maxWidth:'50%', margin:'16px 0', gap:'10px'}}>
<Grid container spacing={2} alignItems="center">
  <Grid item>
    <div className="logo1"><img src={bed} alt="bedrrom" /></div>
  </Grid>
  <Grid item>
    <div className="l1">Bedroom</div>
  </Grid>
</Grid>
<Grid container spacing={2} alignItems="center">
  <Grid item>
    <div className="logo2"><img src={guests} alt="guests" /></div>
  </Grid>
  <Grid item>
    <div className="l2">Guests</div>
  </Grid>
</Grid>
<Grid container spacing={2} alignItems="center">
  <Grid item>
    <div className="logo3"><img src={car} alt="car" /></div>
  </Grid>
  <Grid item>
    <div className="l3">Suttle Service</div>
  </Grid>
</Grid>
</Box>
</Box>

<div className="desc-text">
<header className="head-text">
Hotel Descriptions
</header>
<section className="desc-full">
{selectedHotel.description}
{/* <span className="text-zinc-600">
  eget id semper amet enim. Consectetur euismod ut orci lorem rhoncus
  feugiat. Euismod fermentum in hendrerit etiam vitae.eget id semper amet
  enim. Consectetur euismod ut orci lorem rhoncus feugiat. Euismod fermentum
  in hendrerit etiam vitae.eget id semper amet enim. Consectetur euismod ut
  orci lorem rhoncus feugiat. Euismod fermentum in hendrerit etiam vitae.eget
  id semper amet enim. Consectetur euismod ut orci lorem rhoncus feugiat.
  Euismod fermentum in hendrerit etiam vitae.{" "}
</span> */}
</section>
<button
className="book-btn"
aria-label="Book Now"
role="button"
onClick={handlePopoverOpen}
>
Book Now
</button>
<Popover
id={id}
open={open}
anchorEl={anchorEl}
onClose={handlePopoverClose}
anchorOrigin={{
  vertical: "center",
  horizontal: "center",
}}
transformOrigin={{
  vertical: "center",
  horizontal: "center",
}}
sx={{ width: "70%" }} // Set width to 70% of the screen
>
<Box p={2}>
  <TextField
    select
    label="Booking Type"
    fullWidth
    variant="outlined"
    margin="dense"
    value={selectedBookingType}
    onChange={(e) => setSelectedBookingType(e.target.value)}
  >
    <MenuItem value="hourly">Hourly</MenuItem>
    <MenuItem value="fullDay">Full Day</MenuItem>
  </TextField>

  {selectedBookingType === "hourly" && (
    <TextField
      select
      label="Select Hours"
      fullWidth
      variant="outlined"
      margin="dense"
      value={selectedHours}
      onChange={(e) => setSelectedHours(e.target.value)}
    >
      <MenuItem value={4}>4 hrs</MenuItem>
      <MenuItem value={8}>8 hrs</MenuItem>
      <MenuItem value={12}>12 hrs</MenuItem>
    </TextField>
  )}

  <TextField
    select
    label="Room Type"
    fullWidth
    variant="outlined"
    margin="dense"
    value={selectedRoomType}
    onChange={(e) => setSelectedRoomType(e.target.value)}
  >
    <MenuItem value="deluxe">Deluxe</MenuItem>
    <MenuItem value="superior">Superior</MenuItem>
    <MenuItem value="superDeluxe">Super Deluxe</MenuItem>
  </TextField>


  <TextField
    label="Check-in Date"
    fullWidth
    variant="outlined"
    margin="dense"
    type="date"
    value={checkInDate.toISOString().split("T")[0]}
    onChange={(e) => handleCheckInDateChange(new Date(e.target.value))}
    InputLabelProps={{
      shrink: true,
    }}
  />
  <TextField
    label="Check-out Date"
    fullWidth
    variant="outlined"
    margin="dense"
    type="date"
    value={checkOutDate.toISOString().split("T")[0]}
    onChange={(e) => handleCheckOutDateChange(new Date(e.target.value))}
    InputLabelProps={{
      shrink: true,
    }}
  />

<TextField
    select
    label="Guests"
    fullWidth
    variant="outlined"
    margin="dense"
    value={selectedGuests}
    onChange={(e) => setSelectedGuests(e.target.value)}
  >
    <MenuItem>
  <Grid container spacing={2} alignItems="center">
    <Grid item>
      <IconButton size="small" onClick={handleDecreaseAdults}>
        <RemoveIcon />
      </IconButton>
    </Grid>
    <Grid item>{adultCount} Adults</Grid>
    <Grid item>
      <IconButton size="small" onClick={handleIncreaseAdults}>
        <AddIcon />
      </IconButton>
    </Grid>
  </Grid>
</MenuItem>

<MenuItem>
  <Grid container spacing={2} alignItems="center">
    <Grid item>
      <IconButton size="small" onClick={handleDecreaseChildren}>
        <RemoveIcon />
      </IconButton>
    </Grid>
    <Grid item>{childrenCount} Children</Grid>
    <Grid item>
      <IconButton size="small" onClick={handleIncreaseChildren}>
        <AddIcon />
      </IconButton>
    </Grid>
  </Grid>
</MenuItem>

<MenuItem>
  <Grid container spacing={2} alignItems="center">
    <Grid item>
      <IconButton size="small" onClick={handleDecreaseInfants}>
        <RemoveIcon />
      </IconButton>
    </Grid>
    <Grid item>{infantsCount} Infants</Grid>
    <Grid item>
      <IconButton size="small" onClick={handleIncreaseInfants}>
        <AddIcon />
      </IconButton>
    </Grid>
  </Grid>
</MenuItem>

<MenuItem>
  <Button variant="contained" onClick={handleClose}>
    Apply
  </Button>
</MenuItem>
  </TextField>

<Typography sx={{color:'#1D498D', padding:'15px'}}> Total Cost</Typography>
  {/* Confirm button or any other actions */}
  <Button variant="contained" sx={{margin:'15px'}} onClick={handlePopoverClose}>
    <Link to="/booking" style={{textDecoration: 'none',  color: 'inherit'}}
       rel="noopener noreferrer">
Booking Now 
          </Link>
  </Button>
</Box>
</Popover>
</div>
</div>

        )}
       

{/* *************************************8 */}

         <AmenitiesBox amenities={amenitiesData} />
    
{/* *************************************8 */}
    <Box sx={{
          marginTop: "6%",
          justifyContent: "start",
          textAlign: "start",
          alignItems: "start",
          color: "#2C467B",
          //fontSize:"24px"
        }} >
          <Typography variant='h6' className='sm-hotel' >
            <b> Similar Hotels</b>
          </Typography>
        </Box>


        <Grid container
      spacing={2}
      justifyContent="center"
      sx={{
        marginTop: "5%",
        flexDirection:'column'
      }}>
        <HotelCard/>
      </Grid>

      </div>
        {/* <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{
        marginTop: "5%",
        marginBottom:'5%'
      }}
      className='featured-room' 
    >
     <Grid className='f-div' item xs={12} sm={6} md={4} lg={3}>
        <HotelCard
          image={palace2}
          title="Silver Palace"
          location="Marine Lines"
          rating={4.5}
          price={2000}
        />
      </Grid> */}

      {/* <Grid className='f-div' item xs={12} sm={6} md={4} lg={3}>
        <HotelCard
          image={palace3}
          title="Silver Palace"
          location="Marine Lines"
          rating={4.5}
          price={2000}
        />
      </Grid>

      <Grid className='f-div' item xs={12} sm={6} md={4} lg={3}>
        <HotelCard
          image={palace4}
          title="Silver Palace"
          location="Marine Lines"
          rating={4.5}
          price={2000}
        />
      </Grid> 
    //</Grid>*/}
    <Footer />
    </div>
  )
}

export default Detailpage
