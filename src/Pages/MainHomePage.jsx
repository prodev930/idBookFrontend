import { Box, Button, Card, CardMedia, Grid, Rating, Stack, Typography } from '@mui/material';
import React from 'react';

import header2 from '../Images/header2.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import searcher2 from '../Images/searcher2.png';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import WifiIcon from '@mui/icons-material/Wifi';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PoolIcon from '@mui/icons-material/Pool';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import mumb1 from '../Images/mumb1.png';
import mum1 from '../Images/mum1.png';
import delhi from '../Images/delhi.png';
import manali from '../Images/manali.png';
import ooty from '../Images/ooty.png';
import shimla from '../Images/shimla.png';
import kolkata from '../Images/kolkata.png';
//import seahome from '../Images/seahome.png';
import palace1 from '../Images/palace1.png';
import palace2 from '../Images/palace2.png';
import palace3 from '../Images/palace3.png';
import palace4 from '../Images/palace4.png';
//import hotelroom from '../Images/hotelroom.png';
import citiespic from '../Images/citiespic.png';
import shimla1 from '../Images/shimla1.png';
import room1 from '../Images/room1.png';
import room2 from '../Images/room2.png';
import room3 from '../Images/room3.png';
//import yellowvector from '../Images/yellowvector.png';
import subscribegmail from '../Images/subscribegmail.png';
import hotelreport from '../Images/hotelreport.png';
import repb1 from '../Images/repb1.png';
import ayodh from '../Images/ayodh.png';
import wlcm1 from '../Images/wlcm1.png';
import schmitt from '../Images/schmitt.png';

import Header from '../components/Header';
import Footer from '../components/Footer';


import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
//import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
//import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import Carousel from '../components/Feedback';
import HotelCard from '../components/HotelCard';
import TravelCard from '../components/TravelCard';
import SubscribeForm from '../components/SubscribeForm';
import BookingForm from '../components/BookingForm';
import BookingHourly from '../components/BookingHourly';
import BrandCarousel from '../components/BrandCarousel';

import logo2 from '../Images/logo2.png';
import logo1 from '../Images/logo1.png';
import logo3 from '../Images/logo3.png';
import logo4 from '../Images/logo4.png';
import logo5 from '../Images/logo5.png';
import logo6 from '../Images/logo6.png';

import '../App.css';
import { fontSize } from '@mui/system';
import useGeoLocation from '../hooks/useGeoLocation';

const ProSpan = styled('span')({
  display: 'inline-block',
  height: '1em',
  width: '1em',
  verticalAlign: 'middle',
  marginLeft: '0.3em',
  marginBottom: '0.08em',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundImage: 'url(https://mui.com/static/x/pro.svg)',
});

function Label({ componentName, valueType, isProOnly }) {
  const content = (
    <span>
      <strong>{componentName}</strong> for {valueType} editing
    </span>
  );

  if (isProOnly) {
    return (
      <Stack direction="row" spacing={0.5} component="span">
        <Tooltip title="Included on Pro package">
          <a href="https://mui.com/x/introduction/licensing/#pro-plan">
            <ProSpan />
          </a>
        </Tooltip>
        {content}
      </Stack>
    );
  }

  return content;
}


const MainHomePage = () => {
  const brandImages = [logo1, logo2, logo3, logo4, logo5, logo6];
  const location = useGeoLocation();

  console.log(JSON.stringify(location));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [activeTab, setActiveTab] = React.useState('hourly');

  const switchToHourly = () => {
    setActiveTab('hourly');
  };

  const switchToFullDay = () => {
    setActiveTab('fullDay');
  };

  const CARDS = [
    { name: 'Mayank & Chanchal', feedback: 'Hassle free vacation to Kashmir, all thanks to Idbook hotels' },
    { name: 'Anonymous, Punjab', feedback: 'Visited Kashmir through Idbook hotels, Perfect trip' },
    { name: 'Gauahar Khan', feedback: 'Thanks to Idbook hotels for a hassle free vacation. Anyone out there who is planning for a vacation, Idbook hotels is your man!' }
  ];

  const Card = ({ title, content }) => (
    <div className='card'>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>

      <Header />


      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
        className='img-style'
         >
  <img src={header2} alt="header2" style={{ objectFit: 'cover' }} />

  <Box
    sx={{
      position: 'absolute',
      top: '75%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      color: 'white',
      width:'100%',
      '@media (max-width: 605px)': {
        top: '55%',
      },
      '@media (max-width: 850px)': {
        padding: '15px',
      },
    }}
  >
    
      <Typography
        variant="h4"
        sx={{
          justifyContent: 'center',
          textAlign: 'center',
          marginTop: '-13%',
          color: '#FFF',
        }}
      >
        <b> India’s Leading Budget Hotels Chain </b>
      </Typography>
    

    <Box
      id="tab-preference"
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left',
        marginTop: '2%',
        marginLeft: 'auto',
        marginRight: 'auto', // Center the box horizontally // Adjust the max width based on your design
        color: '#FFF',
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Box>
          <div className="tab-buttons">
            <div className="tab-btn">
              <button onClick={switchToHourly} className={activeTab === 'hourly' ? 'active' : ''}>
                Hourly
              </button>
            </div>
            <div className="tab-btn">
              <button onClick={switchToFullDay} className={activeTab === 'fullDay' ? 'active' : ''}>
                Full Day
              </button>
            </div>
          </div>
          <Box className="tab-content">
            {activeTab === 'hourly' && <BookingHourly />}

            {activeTab === 'fullDay' && <BookingForm />}
          </Box>
        </Box>
      </Stack>
    </Box>
  </Box>
</div>




        {/******************************************* part 2 **********************************************/}


        <Box sx={{
          marginTop: "3%",
          marginBottom:"3%",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          color: "#2C467B",
        }} >
          <Typography sx={{fontSize: "24px",fontWeight:'500'}}><b>Top Destinations Around The Globe </b></Typography>     
        </Box>
        <Grid container spacing={2} justifyContent="center" className='destination-img'>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <img src={mum1} alt="mumb1" style={{ width: "100%", height: "auto" }} />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <img src={delhi} alt="delhi" style={{ width: "100%", height: "auto" }} />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <img src={manali} alt="manali" style={{ width: "100%", height: "auto" }} />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <img src={ooty} alt="ooty" style={{ width: "100%", height: "auto" }} />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <img src={shimla} alt="shimla" style={{ width: "100%", height: "auto" }} />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <img src={kolkata} alt="kolkata" style={{ width: "100%", height: "auto" }} />
      </Grid>
    </Grid>


        {/********************************* part 3 ***************************/}

<Box
          sx={{
            marginTop: "8%",
            width: "100%",
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
            //bgcolor:"#FFFCB1",
          }}
        >
          <img src={ayodh} alt="ayodhya" style={{ width: "100%", height: "auto" }} />
        </Box>
        {/******************************* part 4 **************************/}

        <Box sx={{
          marginTop: "6%",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }} >
          <Typography sx={{color: "#2C467B", fontSize: "32px", fontWeight:'500'}}><b>Services</b></Typography>
        </Box>

        <Box sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          gap: "80px",
          marginTop: "4%"
        }} >
          <Grid>
            <WifiIcon /> <br />
            Free Wifi
          </Grid>
          <Grid>
            <DirectionsCarIcon /> <br />
            Subtle Services
          </Grid>
          <Grid>
            <LocalBarIcon /> <br />
            Bar
          </Grid>
          <Grid>
            <RestaurantIcon /> <br />
            Restaurant
          </Grid>
          <Grid>
            <FitnessCenterIcon /> <br />
            Fitness
          </Grid>
          <Grid>
            <PoolIcon /> <br />
            Pool
          </Grid>
        </Box>

        {/****************************** part 5 *****************************/}


        <Box sx={{
          marginTop: "6%",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          color: "#2C467B",
          //fontSize:"24px"
        }} >
          <Typography sx={{ fontSize: "36px" }} >
            <b> Recommendations For Your Best Stay </b> </Typography>
          <Typography variant='h6' sx={{ color: "black", marginTop: "1%" }} >
            We have a lot of suggestions for you, check them out!
          </Typography>
        </Box>


        <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{
        marginTop: "1%",
        flexDirection:'column',
      }}
    >
      <HotelCard/>
      {/* <Grid className='f-div' item xs={12} sm={6} md={4} lg={3}>
        
      </Grid> */}

      {/* <Grid className='f-div' item xs={12} sm={6} md={4} lg={3}>
        <HotelCard
          image={palace2}
          title="Silver Palace"
          location="Marine Lines"
          rating={4.5}
          price={2000}
        />
      </Grid>

      <Grid className='f-div' item xs={12} sm={6} md={4} lg={3}>
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
      </Grid> */}
    </Grid>
        {/*********************************** part 6 *****************************/}
        <Box
          sx={{
            marginTop: "8%",
            width: "100%",
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
            //bgcolor:"#FFFCB1",
          }}
        >
          <img src={repb1} alt="offpic" style={{ width: "100%", height: "auto" }} />
        </Box>



        {/*************************************** part 7 *****************************/}


        <Box
          sx={{
            marginTop: "8%",
            width: "100%",
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
            //bgcolor:"#FFFCB1",
          }}
        >
          <img src={citiespic} alt="citiespic" style={{ width: "100%", height: "auto" }} />
        </Box>


        {/***************************************** part 8 **********************************/}

        <Box className='blog-sec' sx={{
          marginTop: "6%",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          color: "#2C467B",
          //fontSize:"24px"
        }} >
          <Typography sx={{ fontSize: "32px" }} >
            <b> Latest From Our Blogs </b> </Typography>

        </Box>

        <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{
        marginTop: "5%",
        justifyContent:"space-around",
        '@media (min-width: 910px)': {
          padding:'20px 147px',
        }
      }}
      className='featured-room'
    >
      <Grid className='f-div' item xs={12} sm={6} md={4} lg={4}>
        <TravelCard
          image={shimla1}
          title="Shimla"
          date="April 24, 2022"
          description="Shimla, A quick and handy Travel Guide. When hill retreats and summer getaways were ...."
          buttonLabel="Continue"
        />
      </Grid>

      <Grid className='f-div' item xs={12} sm={6} md={4} lg={4}>
        <TravelCard
          image={shimla1}
          title="Shimla"
          date="April 24, 2022"
          description="Shimla, A quick and handy Travel Guide. When hill retreats and summer getaways were ...."
          buttonLabel="Continue"
        />
      </Grid>

      <Grid className='f-div' item xs={12} sm={6} md={4} lg={4}>
        <TravelCard
          image={shimla1}
          title="Shimla"
          date="April 24, 2022"
          description="Shimla, A quick and handy Travel Guide. When hill retreats and summer getaways were ...."
          buttonLabel="Continue"
        />
      </Grid>
    </Grid>

        {/**************************************** part 9 ****************************************/}


        {/***********************8* part 10 **************************/}


        <Box sx={{
          marginTop: "6%",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          fontSize: "20px"
        }} >
          <Typography variant="h4" className="client-tab" sx={{ textAlign: "center", fontWeight:'500' }} >
            <b>What Clients Say</b>
          </Typography>
          <Carousel>
            {CARDS.map((item, i) => (
              <Card key={i} title={item.name} content={item.feedback} />
            ))}
          </Carousel>
        </Box>

        {/*********************************** part 11 ****************************/}

        <Box sx={{
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          fontSize: "36px",
          background:"#f9f9f9",
          padding:"40px",
          display:"flex",
          flexDirection:"column",
        }} >
          <b> Subscribe to Our Newsletter for Exclusive Updates! </b>
         <p style={{fontSize:'16px'}}> 
          Stay in the loop with the latest news, special offers, and exclusive content by subscribing to our newsletter.
Simply enter your email address below and hit 'Subscribe' to be part of our community. We respect your privacy and promise to only deliver valuable content to your inbox.</p>
          <SubscribeForm/>
        </Box>

        {/*********************************** end part ****************************/}

        <Box sx={{
          marginTop: "6%",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          color: "#2C467B",
        }} >
          <Typography sx={{fontSize: "32px",fontWeight:'500'}}><b> Idbook Hotel Coverage Report  </b></Typography>
        </Box>
        <Box sx={{
          marginTop: "6%",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }} >
          {/* <img src={hotelreport} alt="hotelreport" /> */}
          {/* <BrandCarousel/> */}
          <BrandCarousel items={brandImages} />
        </Box>


      </Box>


      <Footer />

    </>
  );
}

export default MainHomePage;
