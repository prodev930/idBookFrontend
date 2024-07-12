import React from 'react';
import { Box, Button, Grid, IconButton, InputAdornment, Stack, Switch, TextField, Typography } from "@mui/material";
import Header from '../components/Header';

import { styled } from '@mui/material/styles';

import Headerpic1 from '../Images/Headerpic1.png';
import house1 from "../Images/house1.png";
import house2 from "../Images/house2.png";
import house3 from "../Images/house3.png";
import house4 from "../Images/house4.png";
import house5 from "../Images/house5.png";
import dashdash from "../Images/dashdash.png";
import newyork from "../Images/newyork.png";
import singapore from "../Images/singapore.png";
import paris from "../Images/paris.png";
import london from "../Images/london.png";
import tokyo from "../Images/tokyo.png";
import globe from "../Images/globe.png";
import trolley from '../Images/trolly.png';
import ucap from '../Images/ucap.png';
import coconut from '../Images/coconut.png';
import h11 from "../Images/h11.png";
import h22 from "../Images/h22.png";
import h33 from "../Images/h33.png";
import h44 from "../Images/h44.png";
import tea from "../Images/tea.png";

import workman from '../Images/workman.png';
import backpic from '../Images/backpic.png';
import front from '../Images/front.png';
import a1 from '../Images/a1.png';
import a2 from '../Images/a2.png';
import a3 from '../Images/a3.png';
import a4 from '../Images/a4.png';
import clip from '../Images/clip.png';
import vita2 from '../Images/vita2.png';
import friar2 from '../Images/friar2.png';
import ygirl from '../Images/ygirl.png';
import smallb from '../Images/smallb.png';
import smallg from '../Images/smallg.png';
import skyman from '../Images/skyman.png';
import sgirl from '../Images/sgirl.png';
//import search from '../Images/searcher2.png';
//import new from '../../Images/new.png';
import sing from '../Images/sing.png';
import pari from '../Images/pari.png';
import lond from '../Images/lond.png';
import maldiv from '../Images/maldiv.png';
import tok from '../Images/tok.png';
import newyork1 from '../Images/new.png';
import searcher2 from '../Images/searcher2.png';
import Holidaysform from '../components/Holidaysform';
import BookingHourly from '../components/BookingHourly';
// import BrandCarousel from '../components/BrandCarousel';


import Buttonnews from '../Images/Buttonnews.png';
import music from '../Images/music.png';
import music2 from '../Images/music2.png';




//Icons

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
//import CelebrationIcon from '@mui/icons-material/Celebration';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Foop12 from "../components/Foop12";



const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor:  '#1F4A8E' ,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 22,
    height: 22,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));


const Holidays = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [activeTab, setActiveTab] = React.useState('hourly');

  const switchToHourly = () => {
    setActiveTab('hourly');
  };

  const switchToFullDay = () => {
    setActiveTab('fullDay');
  };
  return (
    <>

    <Header />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {/************************** Part1 *****************************/}

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
  <img src={Headerpic1} alt="Headerpic1" style={{ objectFit: 'cover' }}  />

  <Box
    sx={{
      position: 'absolute',
      top: '75%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      color: 'white', // Set text color
    }}
  >
    <div>
      <Typography
        variant="h4"
        sx={{
          justifyContent: 'center',
          textAlign: 'center',
          marginTop: '-13%',
          color: '#FFF',
        }}
      >
        <b> Explore the world with Idbook Holidays </b>
      </Typography>
    </div>

    <Box
      id="tab-preference"
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left',
        marginTop: '2%',
        marginLeft: 'auto',
        marginRight: 'auto', // Center the box horizontally
        maxWidth: '600px', // Adjust the max width based on your design
        color: '#FFF',
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Box>
        <Box className="tab-content">
        <Holidaysform/>
          </Box>
          {/* <div className="tab-buttons">
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
          </div> */}
          {/* <Box className="tab-content">
            {activeTab === 'hourly' && <BookingHourly />}

            {activeTab === 'fullDay' && <BookingForm />}
          </Box> */}
        </Box>
      </Stack>
    </Box>
  </Box>
</div>;

          {/*************************************** Part2 *********************************/}

          <Box
            sx={{
              width: "100%",
              overflow: "hidden",
              justifyContent: "center",
              alignItems: "center",
              bgcolor:"#D3D3D3",
              
            }}
          >
            <Grid sx={{ justifyContent: "center", textAlign: "center",marginTop:"8%", }}>
              <Typography variant="h4">
                <b> Explore various types of accommodations</b>
              </Typography>
              <Typography variant="h7">
              Discover homes categorized by 10 different types of accommodations
              </Typography>
            </Grid>

            <Box
              sx={{
                //marginLeft:"5%",
                // marginInline:"5%",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop:"8%",
                textAlign:"center",
                
              }}
            >
              
        
   <Grid container spacing={3} sx={{ textAlign: 'center',alignItems:"center",justifyContent:"center" }}>
              <Grid>
                <img src={house1} style={{ width: "90%", height: "90%" }} />
                <Typography variant="h6">
          <b>Eco Retreat</b>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "2%" }}>
          17,288 Properties
        </Typography>
              </Grid>
              <Grid>
                <img src={house2} style={{ width: "90%", height: "90%" }} />
                <Typography variant="h6">
          <b>Wooden House</b>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "2%" }}>
          2,118 Properties
        </Typography>
              </Grid>
              <Grid>
                <img src={house3} style={{ width: "90%", height: "90%" }} />
                <Typography variant="h6">
          <b> Floating Residence <br/>
          {/* or Floating Houseboat */}
          </b>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "2%" }}>
          36,612 Properties
        </Typography>
              </Grid>
              <Grid>
                <img src={house4} style={{ width: "90%", height: "90%" }} />
                <Typography variant="h6">
          <b>Farm House</b>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "2%" }}>
          188,288 Properties
        </Typography>
              </Grid>
              <Grid>
                <img src={house5} style={{ width: "90%", height: "90%" }} />
                <Typography variant="h6">
          <b>Dome House</b>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "2%" }}>
          188,288 Properties
        </Typography>
              </Grid>
            </Grid>
         




        </Box>
          

          {/****************************** nature house ********************************/}

          

          <Grid
            sx={{
              justifyContent: "center",
              textAlign: "center",
              marginTop: "2%",
            }}
          >
            <Typography variant="h4">
              <ArrowCircleLeftIcon />
              <ArrowCircleRightIcon />
            </Typography>
          </Grid>

       

          </Box>
          


          {/***************************** Heading section *****************************/}

          <Grid container sx={{marginTop:'20px', padding:'40px'}}>
            <Grid xs={12} sm={6}>
              <Grid sx={{ textAlign: 'start'}}>
                <Typography variant="h4">
                  <b> Section Headings</b>
                </Typography>
                <Typography variant="h7">Discriptions for sections</Typography>
              </Grid>
            </Grid>

            <Grid xs={12} sm={6}>
              <Grid
                sx={{
                  textAlign: "right",
                }}
              >
                <Typography variant="h4">
                  <ArrowCircleLeftIcon />
                  <ArrowCircleRightIcon />
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/********************************* newyork *****************************/}

          <Box
            sx={{
              //marginLeft: "13%",
              marginTop: "5%",
              display: 'flex',
                flexDirection: 'column',
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Grid container spacing={3} sx={{ textAlign: 'center',alignItems:"center",justifyContent:"center" }}>
              <Grid>
                <img src={newyork} style={{ width: "90%", height: "90%" }} />
                <Typography variant="h6">
          <b>New York</b>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "2%" }}>
          188,288 Properties
        </Typography>
              </Grid>
              <Grid>
                <img src={singapore} style={{ width: "90%", height: "90%" }} />
                <Typography variant="h6">
          <b>Singapore</b>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "2%" }}>
          188,288 Properties
        </Typography>
              </Grid>
              <Grid>
                <img src={paris} style={{ width: "90%", height: "90%" }} />
                <Typography variant="h6">
          <b> Paris </b>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "2%" }}>
          188,288 Properties
        </Typography>
              </Grid>
              <Grid>
                <img src={london} style={{ width: "90%", height: "90%" }} />
                <Typography variant="h6">
          <b> London</b>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "2%" }}>
          188,288 Properties
        </Typography>
              </Grid>
              <Grid>
                <img src={tokyo} style={{ width: "90%", height: "90%" }} />
                <Typography variant="h6">
          <b>Tokyo</b>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "2%" }}>
          188,288 Properties
        </Typography>
              </Grid>
            </Grid>
          </Box>
          

          {/************************  Benefits ************************/}
           <Box
          sx={{
            overflow: "hidden",
            marginTop:"10%",
            marginInline:"10%"
          }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <img src={globe} alt="globe" width="110%" height="150%" />
            </Grid>


            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{  marginInline: "20%" }}
              >
                <b>Vibrant Cities</b>
              </Typography>
              
              <Button
                variant="contained"
                sx={{
                  marginTop: "5%",
                  marginInline: "20%",
                  borderRadius: "22px",
                  bgcolor:"lightblue",
                  color:"blue",
                  height:"30px",
                  width:"120px",
                  fontSize:"12px"
                }}
              >
                <b>Advertising </b>
              </Button>

              <Typography variant="h6" sx={{marginTop:"1%", marginLeft:"19%"}}>
                <b> Economical Advertising  </b> <br/>
                 <Typography variant="h7" sx={{fontSize:"14px",color:"lightblack"}}>
                   With a free listing, you can advertise your rental with no  <br/>
                 upfront costs </Typography>
              </Typography>
              

              <Button
                variant="contained"
                sx={{
                  marginTop: "5%",
                  marginInline: "20%",
                  borderRadius: "22px",
                  bgcolor:"lightgreen",
                  color:"green",
                   height:"30px",
                  width:"120px",
                  fontSize:"12px"
                }}
              >
                <b> Exposure </b>
              </Button>

              <Typography variant="h6" sx={{marginTop:"2%", marginLeft:"19%"}}>
                <b> Connect with millions through Idbook  </b> <br/>
                 <Typography variant="h7" sx={{fontSize:"14px",color:"lightblack"}}>
                  Millions of people are searching for unique places to <br/>
                  stay around the world
                 </Typography>
              </Typography>
              

              <Button
                variant="contained"
                sx={{
                  marginTop: "5%",
                  marginInline: "20%",
                  borderRadius: "22px",
                  bgcolor:"#FFCCCB",
                  color:"red",
                   height:"30px",
                  width:"120px",
                  fontSize:"12px"
                }}
              >
                <b> Secure </b>
              </Button>

              <Typography variant="h6" sx={{marginTop:"2%", marginLeft:"19%"}}>
                <b> Secure and Simple  </b> <br/>
                 <Typography variant="h7" sx={{fontSize:"14px",color:"lightblack"}}> 
                A Holiday Lettings listing gives you a secure and easy <br/>
                way to take bookings and payments online
          </Typography>
              </Typography>
              
              
            </Grid>
            
          </Grid>
        </Box>
      


          {/********** how it work ***************/}
          <Grid
            sx={{
              marginTop: "7%",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h4">
              <b> How it works </b>
            </Typography>
            <Typography variant="h7">Stay Calm and Keep Traveling</Typography>
          </Grid>

          
          <Grid container spacing={3} sx={{ marginTop: "8%", justifyContent: "center",
           alignItems: "center" }}>
  <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', flexDirection: 'column', 
  alignItems: 'center', textAlign: 'center' }}>
    <img src={trolley} alt="Trolley" /> <br />
    <Typography variant="h6" sx={{ marginTop: "5%" }}>
      <b> Book & Relax</b>
    </Typography>
    <Typography variant="h8" sx={{ textAlign: "center" }}>
      Let each trip be an inspirational journey,
      <br />
      each room a peaceful space
    </Typography>
  </Grid>

  <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', flexDirection: 'column', 
  alignItems: 'center', textAlign: 'center' }}>
    <img src={ucap} alt="UCap" /> <br />
    <Typography variant="h6" sx={{ marginTop: "9%" }}>
      <b> Smart checklist</b>
    </Typography>
    <Typography variant="h8" sx={{ justifyContent: "center" }}>
      Let each trip be an inspirational journey,
      <br />
      each room a peaceful space
    </Typography>
  </Grid>

  <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', 
  flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
    <img src={coconut} alt="Coconut" /> <br />
    <Typography variant="h6" sx={{ marginTop: "6%" }}>
      <b> Book & Relax</b>
    </Typography>
    <Typography variant="h8" sx={{ justifyContent: "center" }}>
      Let each trip be an inspirational journey,
      <br />
      each room a peaceful space
    </Typography>
  </Grid>
</Grid>


          <Grid
            sx={{
              marginTop: "-17%",
              justifyContent: "center",
              marginInline: "8%",
            }}
          >
            <img src={dashdash} />
          </Grid>


          {/******************** suggestions ******************/}

          <Box
            sx={{
              overflow: "hidden",
              color: "black",
              background: "#FFF7ED",
              padding: "8%",
              borderRadius: "35px",
              marginInline: "7%",
              marginTop: "15%",
            }}
          >
            <Grid
              container
              sx={{
                justifyContent: "center",
                fontSize: "13px",
                marginTop: "-4%",
              }}
            >
              <Grid>
                <Typography variant="h4">
                  <b>Recommendations and Exploration</b>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    marginTop: "1%",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  Popular places to stay that Idbook recommends for you
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ marginTop: "6%", justifyContent: "center", textAlign: "center", alignItems: "center" }}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <img src={h11} style={{ height: "95%", width: '100%' }} alt="Property 1" />
        <Typography variant="h7">
          <b>Embrace the Chill</b> <br />
          <Typography>188,288 properties</Typography>
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <img src={h22} style={{ height: "95%", width: '100%' }} alt="Property 2" />
        <Typography variant="h7">
          <b>Experience Floating Slumber</b> <br />
          <Typography>188,288 properties</Typography>
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <img src={h33} style={{ height: "95%", width: '100%' }} alt="Property 3" />
        <Typography variant="h7">
          <b>In the House of a Billionaire</b> <br />
          <Typography>188,288 properties</Typography>
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <img src={h44} style={{ height: "95%", width: '100%' }} alt="Property 4" />
        <Typography variant="h7">
          <b>Chill in the Deep Forest</b> <br />
          <Typography>188,288 properties</Typography>
        </Typography>
      </Grid>
    </Grid>
            
          </Box>


            {/************************* join our *********************************/}
                               
          <Box
          sx={{
            overflow: "hidden",
            marginTop:"10%",
            marginInline:"10%"
          }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >

            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                 sx={{  marginLeft: "13%" ,marginTop:"5%"}}
              >
                <b>Join our newsletter 🎉 </b>
              </Typography>
              
              <Grid sx={{ marginTop:"4%", marginLeft:"13%"}} >
              
                 <Typography variant="h6" sx={{color:"lightblack"}}>
                 Read and share new perspectives on just about any topic.
                  Everyone’s welcome.
                 </Typography>
                </Grid>
              
                <Grid container spacing={2} sx={{justifyContent:"center",marginTop: "5%",}}>
                <Grid item xs={12} sm={2} sx={{textTransform:"initial",
               marginInline:"0%"}}>
              <Button
                variant="contained"
                sx={{
                  // marginTop: "10%",
                  marginLeft: "17%",
                  borderRadius: "42px",
                  bgcolor:"lightblue",
                  color:"blue",
                   height:"45px",
                  width:"5px",
                  fontSize:"20px",
                  //marginLeft:"35%"
                  mx: "auto",
                  display: "block",

                }}
              >  
              
                <b>01</b>

                </Button>

                </Grid>
                
              
              <Grid item xs={12} sm={8} sx={{textTransform:"initial",
              fontSize:"23px",marginTop:"1%"}}>
                <b >Get more discount</b>
                </Grid>
                </Grid>

              
                <Grid container spacing={2} sx={{justifyContent:"center",marginTop: "5%",}}>
                <Grid item xs={12} sm={2} sx={{textTransform:"initial",
               marginInline:"0%"}}>
              <Button
                variant="contained"
                sx={{
                  // marginTop: "10%",
                  marginLeft: "17%",
                  borderRadius: "42px",
                  bgcolor:"#FFCCCB",
                  color:"red",
                   height:"45px",
                  width:"5px",
                  fontSize:"20px",
                  //marginLeft:"35%"
                  mx: "auto",
                  display: "block",

                }}
              >  
              
                <b>02</b>

                </Button>

                </Grid>
                
              
              <Grid item xs={12} sm={8} sx={{textTransform:"initial",
              fontSize:"23px",marginTop:"1%"}}>
                <b >Get premium maganines</b>
                </Grid>
                </Grid>
              <Grid  item xs={12} sm={12} sx={{marginTop:"5%",marginLeft:"11%"}}>
            <TextField 
            id='email'
            name='email'
            label=" Email/Username"
            type="email"
            variant="outlined"
            InputProps={{
              sx: { borderRadius: "33px", width: "450px" },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={Button} edge="end">
                    <img src={Buttonnews} alt="Buttonnews" style={{width:"55px",height:"50px"}} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
             > 
            </TextField>
          </Grid>
              
              
              
            </Grid>
            
            <Grid item xs={12} md={6}>
              <img src={tea} alt="tea" width="90%" height="150%" />
            </Grid>

          </Grid>
        </Box>

{/******************************* top 10 author *******************************/}

{/* <Box
  sx={{
    overflow: "hidden",
    color: "black",
    background: "#FFF7ED",
    padding: "8%",
    borderRadius: "35px",
    //marginInline: "7%",
    marginTop: "5%",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center"
  }}
>
  <Grid
    container
    sx={{
      justifyContent: "center",
      fontSize: "13px",
      marginTop: "-8%",
    }}
  >
    <Grid>
      <Typography variant="h4">
        <b> Top 10 author of the month</b>
      </Typography>
      <Typography
        variant="h6"
        sx={{
          marginTop: "2%",
          justifyContent: "center",
          textAlign: "center",
          // marginLeft: "13%",
        }}
      >
        Rating based on customer reviews
      </Typography>
    </Grid>
  </Grid>

   <Grid container spacing={2} sx={{ textAlign: "center", justifyContent:"center",
   alignItems:"center", marginTop:"5%" }}>
            <Grid
              item
              xs={12} sm={6}
              md={2}
              sx={{ border: "1px solid black" ,bgcolor:"#FFF", borderRadius:'22px', margin:"1rem",
               justifyContent:"center",
               alignItems:"center",
               textAlign:"center" }}
            >
             <Typography sx={{marginTop:"15%"}} >
              <img src={foulchor} style={{ borderRadius: "50px" }}></img> 
              </Typography>
              <Typography variant="h7">
                <b>Ravi Singh</b> <br/>
              </Typography>
              <Typography variant="h8"> Kolkata</Typography>
              
              <Button
                variant="contained"
                sx={{
                  marginTop: "13%",
                  marginInline: "17%",
                  borderRadius: "22px",
                  bgcolor:"#FFF",
                  border:"0px solid black",
                  color:"black",
                  // height:"35px",
                  // width:"75px",
                  fontSize:"16px",
                  marginBottom:"20%",
                  justifyContent:"center",
                  alignItems:"center",
                  textAlign:"center",
                  '@media (min-width:304px) and (max-width:900px)': {
                    width: '50%', // Adjust the width based on your design
                  },
                }}
              >
                4.9  <Rating name="customized-1" defaultValue={1} max={1} />
              </Button>
            </Grid>

            <Grid
              item
              xs={12} sm={6}
              md={2}
              sx={{ border: "1px solid black" ,bgcolor:"#FFF", borderRadius:'22px', margin:"1rem",
              justifyContent:"center",
               alignItems:"center",
               textAlign:"center" }}
            >
              <Typography sx={{marginTop:"15%"}} >
              <img src={birrel} style={{ borderRadius: "50px" }}></img> 
              </Typography>
              <Typography variant="h7">
                <b>Rishi Malhotra</b> <br/>
              </Typography>
              <Typography variant="h8"> Rajasthan</Typography>
              
              <Button
                variant="contained"
                sx={{
                  marginTop: "13%",
                  marginInline: "17%",
                  borderRadius: "22px",
                  bgcolor:"#FFF",
                  border:"0px solid black",
                  color:"black",
                  // height:"35px",
                  // width:"75px",
                  fontSize:"16px",
                  marginBottom:"20%",
                  justifyContent:"center",
                  alignItems:"center",
                  textAlign:"center",
                  '@media (min-width:304px) and (max-width:900px)': {
                    width: '50%', // Adjust the width based on your design
                  },
                }}
              >
                4.9  <Rating name="customized-1" defaultValue={1} max={1} />
              </Button>

              
            </Grid>
            <Grid
              item
              xs={12} sm={6}
              md={2}
              sx={{ border: "1px solid black" ,bgcolor:"#FFF", borderRadius:'22px', margin:"1rem",
               justifyContent:"center",
               alignItems:"center",
               textAlign:"center" }}
            >
             <Typography sx={{marginTop:"15%"}} >
              <img src={foulchor} style={{ borderRadius: "50px" }}></img> 
              </Typography>
              <Typography variant="h7">
                <b>Raj Grover</b> <br/>
              </Typography>
              <Typography variant="h8"> Mumbai</Typography>
              
              <Button
                variant="contained"
                sx={{
                  marginTop: "13%",
                  marginInline: "17%",
                  borderRadius: "22px",
                  bgcolor:"#FFF",
                  border:"0px solid black",
                  color:"black",
                  // height:"35px",
                  // width:"75px",
                  fontSize:"16px",
                  marginBottom:"20%",
                  justifyContent:"center",
                  alignItems:"center",
                  textAlign:"center",
                  '@media (min-width:304px) and (max-width:900px)': {
                    width: '50%', // Adjust the width based on your design
                  },
                }}
              >
                4.9  <Rating name="customized-1" defaultValue={1} max={1} />
              </Button>
            </Grid>

            <Grid
              item
              xs={12} sm={6}
              md={2}
              sx={{ border: "1px solid black" ,bgcolor:"#FFF", borderRadius:'22px', margin:"1rem",
               justifyContent:"center",
               alignItems:"center",
               textAlign:"center"  }}
            >
              <Typography sx={{marginTop:"15%"}} >
              <img src={agnes} style={{ borderRadius: "50px" }}></img> 
              </Typography>
              <Typography variant="h7">
                <b>Sarika Chauhan</b> <br/>
              </Typography>
              <Typography variant="h8"> Nagpur</Typography>
              
              <Button
                variant="contained"
                sx={{
                  marginTop: "13%",
                  marginInline: "17%",
                  borderRadius: "22px",
                  bgcolor:"#FFF",
                  border:"0px solid black",
                  color:"black",
                  // height:"35px",
                  // width:"75px",
                  fontSize:"16px",
                  marginBottom:"20%",
                  justifyContent:"center",
                  alignItems:"center",
                  textAlign:"center",
                  '@media (min-width:304px) and (max-width:900px)': {
                    width: '50%', // Adjust the width based on your design
                  },
                }}
              >
                4.9  <Rating name="customized-1" defaultValue={1} max={1} />
              </Button>
            </Grid>

            <Grid
              item
              xs={12} sm={6}
              md={2}
              sx={{ border: "1px solid black" ,bgcolor:"#FFF", borderRadius:'22px', margin:"1rem",
               justifyContent:"center",
              alignItems:"center",
              textAlign:"center" }}
            >
              <Typography sx={{marginTop:"15%"}} >
              <img src={vita} style={{ borderRadius: "50px" }}></img>
               </Typography>
              <Typography variant="h7">
                <b>Risha Khan</b> <br/>
              </Typography>
              <Typography variant="h8"> Benguluru</Typography>
              
              <Button
                variant="contained"
                sx={{
                  marginTop: "13%",
                  marginInline: "17%",
                  borderRadius: "22px",
                  bgcolor:"#FFF",
                  border:"0px solid black",
                  color:"black",
                  // height:"35px",
                  // width:"75px",
                  fontSize:"16px",
                  marginBottom:"20%",
                   justifyContent:"center",
                   alignItems:"center",
                   textAlign:"center",
                   '@media (min-width:304px) and (max-width:900px)': {
                    width: '50%', // Adjust the width based on your design
                  },
                }}
              >
                4.9  <Rating name="customized-1" defaultValue={1} max={1} />
              </Button>
            </Grid>

          </Grid>


          <Grid container spacing={2} sx={{ textAlign: "center", justifyContent:"center",
   alignItems:"center", marginTop:"5%" }}>
            <Grid
              item
              xs={12} sm={6}
              md={2}
              sx={{ border: "1px solid black" ,bgcolor:"#FFF", borderRadius:'22px', margin:"1rem",
               justifyContent:"center",
               alignItems:"center",
               textAlign:"center",
                }}>
            <Typography sx={{marginTop:"15%"}} >
              <img src={friar} style={{ borderRadius: "50px" }}></img> </Typography>
              <Typography variant="h7">
                <b>Anant Sharma</b> <br/>
              </Typography>
              <Typography variant="h8"> Chennai</Typography>
              
              <Button
                variant="contained"
                sx={{
                  marginTop: "13%",
                  marginInline: "17%",
                  borderRadius: "22px",
                  bgcolor:"#FFF",
                  border:"0px solid black",
                  color:"black",
                  // height:"35px",
                  // width:"75px",
                  fontSize:"16px",
                  marginBottom:"20%",
                  justifyContent:"center",
                  alignItems:"center",
                  textAlign:"center",
                  '@media (min-width:304px) and (max-width:900px)': {
                    width: '50%', // Adjust the width based on your design
                  },
                }}
              >
                4.9  <Rating name="customized-1" defaultValue={1} max={1} />
              </Button>
             
            </Grid>
            <Grid
              item
              xs={12} sm={6}
              md={2}
              sx={{ border: "1px solid black" ,bgcolor:"#FFF", borderRadius:'22px', margin:"1rem",
              justifyContent:"center",
               alignItems:"center",
               textAlign:"center" }}
            >
              <Typography sx={{marginTop:"15%"}} >
              <img src={royal} style={{ borderRadius: "50px" }}></img> 
              </Typography>
              <Typography variant="h7">
                <b>Aman Agrawal</b> <br/>
              </Typography>
              <Typography variant="h8"> Haryana</Typography>
              
              <Button
                variant="contained"
                sx={{
                  marginTop: "13%",
                  marginInline: "17%",
                  borderRadius: "22px",
                  bgcolor:"#FFF",
                  border:"0px solid black",
                  color:"black",
                  // height:"35px",
                  // width:"75px",
                  fontSize:"16px",
                  marginBottom:"20%",
                  justifyContent:"center",
                  alignItems:"center",
                  textAlign:"center",
                  '@media (min-width:304px) and (max-width:900px)': {
                    width: '50%', // Adjust the width based on your design
                  },
                }}
              >
                4.9  <Rating name="customized-1" defaultValue={1} max={1} />
              </Button>

              
            </Grid>
            <Grid
              item
              xs={12} sm={6}
              md={2}
              sx={{ border: "1px solid black" ,bgcolor:"#FFF", borderRadius:'22px', margin:"1rem",
               justifyContent:"center",
               alignItems:"center",
               textAlign:"center" }}
            >
             <Typography sx={{marginTop:"15%"}} >
              <img src={sleite} style={{ borderRadius: "50px" }}></img> 
              </Typography>
              <Typography variant="h7">
                <b>Rahul Modi</b> <br/>
              </Typography>
              <Typography variant="h8"> Gandhinagar</Typography>
              
              <Button
                variant="contained"
                sx={{
                  marginTop: "13%",
                  marginInline: "17%",
                  borderRadius: "22px",
                  bgcolor:"#FFF",
                  border:"0px solid black",
                  color:"black",
                  // height:"35px",
                  // width:"75px",
                  fontSize:"16px",
                  marginBottom:"20%",
                  justifyContent:"center",
                  alignItems:"center",
                  textAlign:"center",
                  '@media (min-width:304px) and (max-width:900px)': {
                    width: '50%', // Adjust the width based on your design
                  },
                }}
              >
                4.9  <Rating name="customized-1" defaultValue={1} max={1} />
              </Button>
            </Grid>

            <Grid
              item
              xs={12} sm={6}
              md={2}
              sx={{ border: "1px solid black" ,bgcolor:"#FFF", borderRadius:'22px', margin:"1rem",
               justifyContent:"center",
               alignItems:"center",
               textAlign:"center"  }}
            >
              <Typography sx={{marginTop:"15%"}} >
              <img src={vern} style={{ borderRadius: "50px" }}></img> 
              </Typography>
              <Typography variant="h7">
                <b>Saurav Joshi</b> <br/>
              </Typography>
              <Typography variant="h8"> Ahmedabad</Typography>
              
              <Button
                variant="contained"
                sx={{
                  marginTop: "13%",
                  marginInline: "17%",
                  borderRadius: "22px",
                  bgcolor:"#FFF",
                  border:"0px solid black",
                  color:"black",
                  // height:"35px",
                  // width:"75px",
                  fontSize:"16px",
                  marginBottom:"20%",
                  justifyContent:"center",
                  alignItems:"center",
                  textAlign:"center",
                  '@media (min-width:304px) and (max-width:900px)': {
                    width: '50%', // Adjust the width based on your design
                  },
                }}
              >
                4.9  <Rating name="customized-1" defaultValue={1} max={1} />
              </Button>
            </Grid>

            <Grid
              item
              xs={12} sm={6}
              md={2}
              sx={{ border: "1px solid black" ,bgcolor:"#FFF", borderRadius:'22px', margin:"1rem",
               justifyContent:"center",
              alignItems:"center",
              textAlign:"center" }}
            >
              <Typography sx={{marginTop:"15%"}} >
              <img src={mimi} style={{ borderRadius: "50px" }}></img>
               </Typography>
              <Typography variant="h7">
                <b>Awani Jain</b> <br/>
              </Typography>
              <Typography variant="h8"> Lucknow</Typography>
              
              <Button
                variant="contained"
                sx={{
                  marginTop: "13%",
                  marginInline: "17%",
                  borderRadius: "22px",
                  bgcolor:"#FFF",
                  border:"0px solid black",
                  color:"black",
                  // height:"35px",
                  // width:"75px",
                  fontSize:"16px",
                  marginBottom:"20%",
                   justifyContent:"center",
                   alignItems:"center",
                   textAlign:"center",
                   '@media (min-width:304px) and (max-width:900px)': {
                    width: '50%', // Adjust the width based on your design
                  },
                }}
              >
                4.9  <Rating name="customized-1" defaultValue={1} max={1} />
              </Button>
            </Grid>

          </Grid>


         
      <Box sx={{ display: 'flex', justifyContent: 'center', gap:"20px", 
       alignItems: 'center',marginTop: "5%", textAlign:"center" }}>
        <Grid item xs={12} sm={6} md={6} >
          <Button
            variant="contained"
            sx={{
              borderRadius: "32px",
              bgcolor: "#FFF",
              color: "black",
              
              fontSize: "18px",
              textTransform:"initial",
              border:"2px solid white"
              
            }}
          >
            <b> Show me more </b>
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6} 
        sx={{justifyContent:"center", alignItems:"center", }} >
          <Button
            variant="contained"
            sx={{
              
              borderRadius: "32px",
              bgcolor: "#0F8EDB",
              color: "#FFF",
              
              fontSize: "18px",
              textTransform:"initial"
              
             
            }}
          >
            <b> Become a host </b>
          </Button>
        </Grid>
      </Box>
    

                  
          </Box>; */}


       {/******************************* Explore nearby ****************************************/}


       <Box
            sx={{
              width: "100%",
              overflow: "hidden",
              justifyContent: "center",
              alignItems: "center",
              marginTop:"5%"
            }}
          >
            <Grid sx={{ justifyContent: "center", textAlign: "center" }}>
              <Typography variant="h4">
                <b> Discover Nearby</b>
              </Typography>
              <Typography variant="h7">
                Discover great places near where you live
              </Typography>
            </Grid>

            <Grid container spacing={0} sx={{ textAlign: "center",justifyContent:"center", marginTop:"3%" }}>
            
            <Grid
              item
              xs={12}
              md={2}
               sx={{ margin:"1rem" }}
            >
              <Button
            variant="contained"
            sx={{
              marginTop: "5%", // Adjust this margin if needed
              borderRadius: "22px",
              bgcolor: "#FFF",
              color: "black",
               height: "95%",
               width: "105%",
              fontSize: "18px",
              border: "0px solid black"
              //marginBottom: "20%"
            }}
          >
            
            <Grid item xs={12} sm={6} md={6}>
            <Typography sx={{marginTop:"4%",marginBottom:"4%"}}>
           <img src={newyork1} alt="newyork1" style={{borderRadius:"55px"}}/>
           </Typography>
           </Grid>

           <Grid item xs={12} sm={6} md={6} >
            <Typography sx={{textTransform:"initial"}}>
           <b> New York</b> 
           </Typography>
           <Typography variant="subtitle2" sx={{textTransform:"lowercase",}}>
            19 minuts drive
           </Typography>
           </Grid>

          </Button>
              
              
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
               sx={{  margin: "1rem",  }}
            >
              <Button
            variant="contained"
            sx={{
              marginTop: "5%", // Adjust this margin if needed
              borderRadius: "22px",
              bgcolor: "#FFF",
              color: "black",
              height: "95%",
               width: "105%",
              fontSize: "18px",
              border: "0px solid black" 
              //marginBottom: "20%"
            }}
          >
           <Grid item xs={12} sm={6} md={6}>
            <Typography sx={{marginTop:"4%",marginBottom:"4%"}}>
           <img src={sing} alt="sing" style={{borderRadius:"55px"}}/>
           </Typography>
           </Grid>

           <Grid item xs={12} sm={6} md={6} >
            <Typography sx={{textTransform:"initial"}}>
           <b> Singapore</b> 
           </Typography>
           <Typography variant="subtitle2" sx={{textTransform:"lowercase",}}>
            19 minuts drive
           </Typography>
           </Grid>
          </Button>
             
            </Grid>

            <Grid
              item
              xs={12}
              md={2}
               sx={{ margin: "1rem" }}
            >
              <Button
            variant="contained"
            sx={{
              marginTop: "5%", // Adjust this margin if needed
              borderRadius: "22px",
              bgcolor: "#FFF",
              color: "black",
              height: "95%",
               width: "105%",
              fontSize: "18px",
              border: "0px solid black" 
              //marginBottom: "20%"
            }}
          >
            <Grid item xs={12} sm={6} md={6}>
            <Typography sx={{marginTop:"4%",marginBottom:"4%"}}>
           <img src={pari} alt="pari" style={{borderRadius:"55px"}}/>
           </Typography>
           </Grid>

           <Grid item xs={12} sm={6} md={6} >
            <Typography sx={{textTransform:"initial"}}>
           <b> Paris</b> 
           </Typography>
           <Typography variant="subtitle2" sx={{textTransform:"lowercase",}}>
            19 minuts drive
           </Typography>
           </Grid>
          </Button>

              
            </Grid>

            <Grid
              item
              xs={12}
              md={2}
               sx={{  margin: "1rem" }}
            >
              <Button
            variant="contained"
            sx={{
              marginTop: "5%", // Adjust this margin if needed
              borderRadius: "22px",
              bgcolor: "#FFF",
              color: "black",
              height: "95%",
              width: "105%",
              fontSize: "18px",
              border: "0px solid black" 
              //marginBottom: "20%"
            }}
          >
            <Grid item xs={12} sm={6} md={6}>
            <Typography sx={{marginTop:"4%",marginBottom:"4%"}}>
           <img src={lond} alt="lond" style={{borderRadius:"55px"}}/>
           </Typography>
           </Grid>

           <Grid item xs={12} sm={6} md={6} >
            <Typography sx={{textTransform:"initial"}}>
           <b> London</b> 
           </Typography>
           <Typography variant="subtitle2" sx={{textTransform:"lowercase",}}>
            19 minuts drive
           </Typography>
           </Grid>
          </Button>

              
            </Grid>

            
          </Grid>


          <Grid container spacing={0} sx={{ textAlign: "center",justifyContent:"center",marginTop:"0%" }}>
            
            <Grid
              item
              xs={12}
              md={2}
               sx={{ margin:"1rem" }}
            >
              <Button
            variant="contained"
            sx={{
              marginTop: "5%", // Adjust this margin if needed
              borderRadius: "22px",
              bgcolor: "#FFF",
              color: "black",
               height: "95%",
               width: "105%",
              fontSize: "18px",
              border: "0px solid black"
              //marginBottom: "20%"
            }}
          >
            
            <Grid item xs={12} sm={6} md={6}>
            <Typography sx={{marginTop:"4%",marginBottom:"4%"}}>
           <img src={tok} alt="tok" style={{borderRadius:"55px"}}/>
           </Typography>
           </Grid>

           <Grid item xs={12} sm={6} md={6} >
            <Typography sx={{textTransform:"initial"}}>
           <b> Tokyo</b> 
           </Typography>
           <Typography variant="subtitle2" sx={{textTransform:"lowercase",}}>
            19 minuts drive
           </Typography>
           </Grid>

          </Button>
              
              
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
               sx={{  margin: "1rem",  }}
            >
              <Button
            variant="contained"
            sx={{
              marginTop: "5%", // Adjust this margin if needed
              borderRadius: "22px",
              bgcolor: "#FFF",
              color: "black",
              height: "95%",
               width: "105%",
              fontSize: "18px",
              border: "0px solid black" 
              //marginBottom: "20%"
            }}
          >
           <Grid item xs={12} sm={6} md={6}>
            <Typography sx={{marginTop:"4%",marginBottom:"4%"}}>
           <img src={maldiv} alt="maldiv" style={{borderRadius:"55px"}}/>
           </Typography>
           </Grid>

           <Grid item xs={12} sm={6} md={6} >
            <Typography sx={{textTransform:"initial"}}>
           <b> Maldives</b> 
           </Typography>
           <Typography variant="subtitle2" sx={{textTransform:"lowercase",}}>
            19 minuts drive
           </Typography>
           </Grid>
          </Button>
             
            </Grid>

            <Grid
              item
              xs={12}
              md={2}
               sx={{ margin: "1rem" }}
            >
              <Button
            variant="contained"
            sx={{
              marginTop: "5%", // Adjust this margin if needed
              borderRadius: "22px",
              bgcolor: "#FFF",
              color: "black",
              height: "95%",
               width: "105%",
              fontSize: "18px",
              border: "0px solid black" 
              //marginBottom: "20%"
            }}
          >
            <Grid item xs={12} sm={6} md={6}>
            <Typography sx={{marginTop:"4%",marginBottom:"4%"}}>
           <img src={newyork1} alt="newyork1" style={{borderRadius:"55px"}}/>
           </Typography>
           </Grid>

           <Grid item xs={12} sm={6} md={6} >
            <Typography sx={{textTransform:"initial"}}>
           <b> New York</b> 
           </Typography>
           <Typography variant="subtitle2" sx={{textTransform:"lowercase",}}>
            19 minuts drive
           </Typography>
           </Grid>
          </Button>

              
            </Grid>

            <Grid
              item
              xs={12}
              md={2}
               sx={{  margin: "1rem" }}
            >
              <Button
            variant="contained"
            sx={{
              marginTop: "5%", // Adjust this margin if needed
              borderRadius: "22px",
              bgcolor: "#FFF",
              color: "black",
              height: "95%",
              width: "105%",
              fontSize: "18px",
              border: "0px solid black" 
              //marginBottom: "20%"
            }}
          >
            <Grid item xs={12} sm={6} md={6}>
            <Typography sx={{marginTop:"4%",marginBottom:"4%"}}>
           <img src={sing} alt="sing" style={{borderRadius:"55px"}}/>
           </Typography>
           </Grid>

           <Grid item xs={12} sm={6} md={6} >
            <Typography sx={{textTransform:"initial"}}>
           <b> Singapore</b> 
           </Typography>
           <Typography variant="subtitle2" sx={{textTransform:"lowercase",}}>
            19 minuts drive
           </Typography>
           </Grid>
          </Button>

              
            </Grid>

            
          </Grid>






            </Box>


           {/************************** Idbook ***********************/}

          
   <Box
  sx={{
    overflow: "hidden",
    color: "black",
    background: "#D3D3D3",
    padding: "8%",
    borderRadius: "35px",
    marginInline: "7%",
    marginTop: "5%",
    // marginBottom:"-19%"
  }}
>
             
        <Grid    
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >

            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                 sx={{  marginTop:"20%", color:"#00008B"}}
              >
                <b> Idbook</b> 
              </Typography>
              
              <Grid sx={{ marginTop:"4%", marginLeft:"0%"}} >
              
                 <Typography variant="h4" sx={{color:"lightblack"}}>
                 <b>Why Choose Us? </b>
                 </Typography >
                 <Grid sx={{marginTop:"5%"}} >
                 <Typography variant="h7">
                 Accompanying us, you have a trip full of experiences. With <br/>
                 Idbook, booking accommodation, resort villas, hotels, private<br/>
                  houses, apartments... becomes fast, convenient and easy.
                 </Typography>
                 </Grid>
                </Grid>
                <Button
                 variant="contained"
                 sx={{
                  marginTop:"8%",
                   marginLeft: "0%",
                   borderRadius: "32px",
                   bgcolor:"#0F8EDB",
                   color:"#FFF",
                   height:"55px",
                   width:"255px",
                   fontSize:"20px",
                   marginBottom:"20%",
                   textTransform:"initial"
                 }}
               >
               <b> Become a author </b>
               </Button>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <img src={workman} alt="workman" width="100%" height="230%" />
            </Grid>

          </Grid>


      </Box>


{/********************************** Explore types *************************************/}

          
{/* <Grid container>
            <Grid xs={12} sm={6}>
              <Grid sx={{ marginLeft: "23%", marginTop: "14%" }}>
                <Typography variant="h4">
                  <b> Explore various types of accommodations</b>
                </Typography>
                <Typography variant="h7">Discover homes categorized by 10 different types of accommodations</Typography>
              </Grid>
            </Grid>

            <Grid xs={12} sm={6}>
              <Grid
                sx={{
                  textAlign: "right",
                  marginTop: "14%",
                  marginRight: "20%",
                }}
              >
                <Typography variant="h4">
                  <ArrowCircleLeftIcon />
                  <ArrowCircleRightIcon />
                </Typography>
              </Grid>
            </Grid>
          </Grid>

         
          <Box
              sx={{
                //marginLeft:"5%",
                // marginInline:"5%",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop:"8%",
                textAlign:"center",
                
              }}
            >
              
        
   <Grid container spacing={3} sx={{ textAlign: 'center',alignItems:"center",justifyContent:"center" }}>
              <Grid>
                <img src={house1} style={{ width: "90%", height: "90%" }} />
                <Typography variant="h6">
          <b>Eco Retreat</b>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "2%" }}>
          17,288 Properties
        </Typography>
              </Grid>
              <Grid>
                <img src={house2} style={{ width: "90%", height: "90%" }} />
                <Typography variant="h6">
          <b>Wooden House</b>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "2%" }}>
          2,118 Properties
        </Typography>
              </Grid>
              <Grid>
                <img src={house3} style={{ width: "90%", height: "90%" }} />
                <Typography variant="h6">
          <b> Floating Residence <br/>
          {/* or Floating Houseboat */}
          {/* </b>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "2%" }}>
          36,612 Properties
        </Typography>
              </Grid>
              <Grid>
                <img src={house4} style={{ width: "90%", height: "90%" }} />
                <Typography variant="h6">
          <b>Farm House</b>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "2%" }}>
          188,288 Properties
        </Typography>
              </Grid>
              <Grid>
                <img src={house5} style={{ width: "90%", height: "90%" }} />
                <Typography variant="h6">
          <b>Dome House</b>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "2%" }}>
          188,288 Properties
        </Typography>
              </Grid>
            </Grid>
          */}




        {/* </Box>  */}


{/******************************* the videos *************************************/}

<Grid container>
            <Grid xs={12} sm={6}>
              <Grid sx={{ marginLeft: "29%", marginTop: "14%" }}>
                <Typography variant="h4">
                  <b> 🎬 The Videos</b>
                </Typography>
                <Grid sx={{marginTop:"4%"}} >
             <Typography variant="h7" >
              Check out our hottest videos. View more and share more new <br/>
              perspectives on just about any topic. Everyone’s welcome.
              </Typography>
              </Grid>
              </Grid>
            </Grid>

            <Grid xs={12} sm={6}>
            </Grid>
          </Grid>


          <container >
          
            <Grid xs={12} sm={6} sx={{justifyContent:"center",
             alignItems:"center", 
             marginLeft:"52%", marginTop:"5%"}}>
              <img src={backpic} style={{width:"75%", height:"75%",borderRadius:"22px"}}/>
            </Grid>
            <Grid sx={{marginTop:"-38%"}}>
            <Grid sx={{marginLeft:'72%'}} >
              <img src={a1} />
            </Grid>

            <Grid sx={{marginLeft:'72%'}} >
              <img src={a2} />
            </Grid>

            <Grid sx={{marginLeft:'72%'}} >
              <img src={a3} />
            </Grid>

            <Grid sx={{marginLeft:'72%'}} >
              <img src={a4} />
            </Grid>
            </Grid>

            <Grid xs={12}  sx={{justifyContent:"center",
             alignItems:"center", 
             marginLeft:"13%", marginTop:"-36%",direction:"flex"}}>
              <img src={front} style={{width:"65%", height:"65%",borderRadius:"22px"}}/>
            </Grid>
            <Grid sx={{marginLeft:"35%", alignItems:"center",marginTop:"-24%"}}>
              <img src={clip} />
            </Grid>

          </container>


{/******************************** good news **********************************/}


<Box
  sx={{
    overflow: "hidden",
    color: "black",
    background: "#D3D3D3",
    padding: "8%",
    borderRadius: "35px",
    marginInline: "7%",
    marginTop: "20%",
    
  }}
>

<Grid
    container
    sx={{
      justifyContent: "center",
      fontSize: "13px",
      marginTop: "-8%",
    }}
  >
    <Grid>
      <Typography variant="h4">
        <b> Positive Updates from Afar</b>
      </Typography>
      <Typography
        variant="h6"
        sx={{
          marginTop: "2%",
          justifyContent: "center",
          textAlign: "center",
          // marginLeft: "13%",
        }}
      >
        Let's see what people think of Idbook
      </Typography>
       
    </Grid>
          <Grid container spacing={3} sx={{marginTop:"4%",marginLeft:"10%"}}>
         <Grid xs={12} sm={6} md={4} sx={{marginTop:"4%"}}>
         <img src={sgirl} />
         </Grid>

         <Grid xs={12} sm={6} md={4} sx={{marginTop:"0%"}}>
         <img src={vita2} />
         </Grid>

         <Grid xs={12} sm={6} md={4} sx={{marginLeft:"74%",marginTop:"-10%"}}>
         <img src={friar2} />
         </Grid>
         </Grid>

         <Grid sx={{textAlign:"center",marginTop:"4%"}}>
          <Typography variant="h6">
         <img src={music} alt="music" /> 
         This place is exactly like the picture posted on Idbook. <img src={music2} alt="music" /><br/>
            Great service, we had a great stay!  
             
          </Typography>
         </Grid>

         <Grid container spacing={3} sx={{marginTop:"5%",marginLeft:"4%"}}>
         <Grid xs={12} sm={6} md={4} >
         <img src={ygirl} />
         </Grid>

         <Grid xs={12} sm={6} md={4} sx={{textAlign:"center",fontSize:"25px",marginLeft:"-5%"}}>
         <b> Tiana Abie</b><br/>
         <Typography sx={{fontSize:"18px"}}>
         <LocationOnIcon /> malaysia 
         </Typography>
         </Grid>

         <Grid xs={12} sm={6} md={4} sx={{marginLeft:"84%",marginTop:"-6%"}}>
         <img src={skyman} />
         </Grid>
         </Grid>

         <Grid container spacing={3} sx={{marginTop:"12%",marginLeft:"33%"}}>
         <Grid xs={12} sm={6} md={6} >
         <img src={smallg} />
         </Grid>

         <Grid xs={12} sm={6} md={6} sx={{marginLeft:"56%",marginTop:"-15%"}}>
         <img src={smallb} />
         </Grid>
         </Grid>

  </Grid>
  </Box>
</Box>




        </Box>
      
      <Foop12 />
    </>
  );
};

export default Holidays;


