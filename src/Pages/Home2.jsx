import { Box, Button, Container, Grid, IconButton, InputAdornment, Rating, TextField, Typography } from "@mui/material";

//Images

import header2 from "../Images/header2.png";
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
import alric from "../Images/alric.png";
import birrel from "../Images/birrel.png";
import agnes from "../Images/agnes.png";
import foulchor from "../Images/foulchor.png";
import friar from "../Images/friar.png";
import royal from "../Images/royal.png";
import mimi from "../Images/mimi.png";
import sleite from "../Images/sleite.png";
import vern from "../Images/vern.png";
import vita from "../Images/vita.png";
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
import search from '../Images/search.png';
//import new from '../../Images/new.png';
import sing from '../Images/sing.png';
import pari from '../Images/pari.png';
import lond from '../Images/lond.png';
import maldiv from '../Images/maldiv.png';
import tok from '../Images/tok.png';
import newyork1 from '../Images/new.png';
import newcalendar from '../Images/newcalendar.png';
import Buttonnews from '../Images/Buttonnews.png';



//Icons

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Footer2 from "../components/Footer2";
import Header from '../components/Header';
import music from '../Images/music.png';
import music2 from '../Images/music2.png';
//import { DateCalendar } from '@mui/x-date-pickers-pro';



const Home2 = () => {
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
          <Box sx={{}}>
            <img src={header2} alt="Header" style={{ width: "100%", height:"auto" }} />
            <Grid>
              <Typography variant="h4"
                sx={{
                  justifyContent: "center",
                  textAlign: "center",
                  marginTop: "-14%",
                  color:"#FFF"
                }}
              >
                <b> India’s Leading Budget Hotels Chain </b>
              </Typography>

             <Button
  variant="contained"
  sx={{
    marginTop: "1%",
    borderRadius: "62px",
    border: '0px solid black',
    width: "60%",
    bgcolor: '#FFF',
    color: "black",
    display: 'flex',              // Center horizontally
    flexDirection: 'column', 
    justifyContent: "center",
    alignItems: "center",
    paddingY: "17px", 
    marginLeft:"20%"
  }}
>
  <Grid container spacing={2} sx={{marginLeft:"8%"}}>
  <Grid item xs={12} sm={6} md={2} style={{ textTransform: 'initial' }}>
     <b> Tokyo, Japan </b><br />
    <LocationOnIcon />Location
  </Grid>

  <Grid item xs={12} sm={6} md={2} sx={{marginLeft:"7%",textTransform: 'initial'}}>
     <b> 12 Dec </b><br />
    <CalendarMonthIcon/>checkin
  </Grid>

  <Grid item xs={12} sm={6} md={2} sx={{marginLeft:"4%",textTransform: 'initial'}}>
     <b> 16 Dec </b><br />
    <CalendarMonthIcon/>checkout
  </Grid>

  <Grid item xs={12} sm={6} md={2}sx={{marginLeft:"5%",textTransform: 'initial'}}>
     <b> 5 guests </b><br />
    <PersonAddIcon/>guests
  </Grid>

  <Grid item xs={12} sm={6} md={2} >
     <img src={search} />
  </Grid>
</Grid>

</Button>


           </Grid>


          </Box>

          {/*************************************** Part2 *********************************/}

          <Box
            sx={{
              width: "100%",
              overflow: "hidden",
              justifyContent: "center",
              alignItems: "center",
               //opacity: [ 0.2],
              bgcolor:"#D3D3D3",
              
            }}
          >

{/* <Grid item xs={12} sm={12} sx={{justifyContent:"center",marginTop:"2%",
           alignItems:"center",textAlign:"center",marginLeft:"16%"
           }}>
            <img src={calendar} alt="calendar" style={{height:"46%",width:"46%",
          border:"1px solid black ",borderRadius:"35px",bgcolor:"#FFF"}}/>
           </Grid> */}


            <Grid sx={{ justifyContent: "center", textAlign: "center",marginTop:"8%", 
             
          }}>
              <Typography variant="h4">
                <b> Explore by types of stays</b>
              </Typography>
              <Typography variant="h7">
                Explore houses based on 10 types of stays
              </Typography>
            </Grid>

            <Box
              sx={{
                marginLeft:"15%",
                // marginInline:"15%",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop:"4%",
                
   
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={2}>
                  <img src={house1} style={{ width: "90%", height: "90%" }} /> 
                  {/* <Typography variant="h8" sx={{marginTop:"2%"}}>
                  <b> Nature House </b> <br />
                </Typography>
                <Typography variant="h10" sx={{ marginTop: "2%" }}>
                  17,288 Properties
                </Typography> */}
                </Grid>
                
                <Grid item xs={12} md={2}>
                  <img src={house2} style={{ width: "90%", height: "90%" }} />
                  {/* <Typography variant="h8" sx={{marginTop:"2%"}}>
                  <b> Nature House </b> <br />
                </Typography>
                <Typography variant="h10" sx={{ marginTop: "2%" }}>
                  17,288 Properties
                </Typography> */}
                </Grid>
                <Grid item xs={12} md={2} >
                  <img src={house3} style={{ width: "90%", height: "90%" }} />
                </Grid>
                <Grid item xs={12} md={2}>
                  <img src={house4} style={{ width: "90%", height: "90%" }} />
                </Grid>
                <Grid item xs={12} md={2}>
                  <img src={house5} style={{ width: "90%", height: "90%" }} />
                </Grid>
              </Grid>
            </Box>
          

          {/****************************** nature house ********************************/}

          <Box sx={{ marginInline: "17%", marginTop: "2%" }}>
            <Grid container spacing={3}>
              <Grid>
                <Typography variant="h8">
                  <b> Nature House </b> <br />
                </Typography>
                <Typography variant="h10" sx={{ marginTop: "2%" }}>
                  17,288 Properties
                </Typography>
              </Grid>
              <Grid sx={{ marginLeft: "9%" }}>
                <Typography variant="h8">
                  <b> Wooden House </b> <br />
                </Typography>
                <Typography variant="h10" sx={{ marginTop: "2%" }}>
                  2,118 Properties
                </Typography>
              </Grid>
              <Grid sx={{ marginLeft: "9%" }}>
                <Typography variant="h8">
                  <b>Houseboat </b> <br />
                </Typography>
                <Typography variant="h10" sx={{ marginTop: "2%" }}>
                  36,612 Properties
                </Typography>
              </Grid>
              <Grid sx={{ marginLeft: "10%" }}>
                <Typography variant="h8">
                  <b>Farm House </b> <br />
                </Typography>
                <Typography variant="h10" sx={{ marginTop: "2%" }}>
                  188,288 properties
                </Typography>
              </Grid>
              <Grid sx={{ marginLeft: "10%" }}>
                <Typography variant="h8">
                  <b>Dome House </b> <br />
                </Typography>
                <Typography variant="h10" sx={{ marginTop: "2%" }}>
                  188,288 properties
                </Typography>
              </Grid>
            </Grid>
          </Box>

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


          <Grid item xs={12} sm={12} sx={{justifyContent:"center",marginTop:"-32%",
           alignItems:"center",textAlign:"center",marginLeft:"16%",
           }}>
            <img src={newcalendar} alt="newcalendar" style={{height:"35%",width:"40%",
          border:"3px white ",borderRadius:"35px",bgcolor:"#FFF"}}/>
           </Grid>


          {/***************************** Heading section *****************************/}

          <Grid container>
            <Grid xs={12} sm={6}>
              <Grid sx={{ marginLeft: "29%", marginTop: "36%" }}>
                <Typography variant="h4">
                  <b> Heading of sections</b>
                </Typography>
                <Typography variant="h7">Discriptions for sections</Typography>
              </Grid>
            </Grid>

            <Grid xs={12} sm={6}>
              <Grid
                sx={{
                  textAlign: "right",
                  marginTop: "36%",
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

          {/********************************* newyork *****************************/}

          <Box
            sx={{
              marginLeft: "13%",
              marginTop: "5%",
              display: 'flex',
                flexDirection: 'column',
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Grid container spacing={3}>
              <Grid>
                <img src={newyork} style={{ width: "90%", height: "90%" }} />
              </Grid>
              <Grid>
                <img src={singapore} style={{ width: "90%", height: "90%" }} />
              </Grid>
              <Grid>
                <img src={paris} style={{ width: "90%", height: "90%" }} />
              </Grid>
              <Grid>
                <img src={london} style={{ width: "90%", height: "90%" }} />
              </Grid>
              <Grid>
                <img src={tokyo} style={{ width: "90%", height: "90%" }} />
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ marginLeft: "16%", marginTop: "2%" }}>
            <Grid container spacing={3}>
              <Grid>
                <Typography variant="h8">
                  <b> New Yourk </b> <br />
                </Typography>
                <Typography variant="h10" sx={{ marginTop: "2%" }}>
                  188,288 properties
                </Typography>
              </Grid>
              <Grid sx={{ marginLeft: "8%" }}>
                <Typography variant="h8">
                  <b> Singapore </b> <br />
                </Typography>
                <Typography variant="h10" sx={{ marginTop: "2%" }}>
                  188,288 properties
                </Typography>
              </Grid>
              <Grid sx={{ marginLeft: "9%" }}>
                <Typography variant="h8">
                  <b>Paris </b> <br />
                </Typography>
                <Typography variant="h10" sx={{ marginTop: "2%" }}>
                  188,288 properties
                </Typography>
              </Grid>
              <Grid sx={{ marginLeft: "7%" }}>
                <Typography variant="h8">
                  <b> Londan </b> <br />
                </Typography>
                <Typography variant="h10" sx={{ marginTop: "2%" }}>
                  188,288 properties
                </Typography>
              </Grid>
              <Grid sx={{ marginLeft: "7%" }}>
                <Typography variant="h8">
                  <b> Tokyo </b> <br />
                </Typography>
                <Typography variant="h10" sx={{ marginTop: "2%" }}>
                  188,288 properties
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
                <b>Happening cities</b>
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
                <b> Cost-effective advertising  </b> <br/>
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
                <b> Reach millions with chisfis  </b> <br/>
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
              <b> How it work </b>
            </Typography>
            <Typography variant="h7">Keep calm & travel on</Typography>
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
                  <b>Suggestions and discovery</b>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    marginTop: "1%",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  Popular places to stay that Chisfis recommends for you
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ marginTop: "6%",marginInline:"0.5%" }}>
            <Grid xs={12} sm={3} >
              <img src={h11} style={{height:"95%", width:'90%'}}/> 
              <Grid sx={{marginTop:"4%", alignItems:"center",marginLeft:"10%"}} >
              <Typography variant="h7"  >
                <b> Enjoy the great cold </b> <br/>
                <Typography> 188,288 properties</Typography>
              </Typography>
              </Grid>
            </Grid>

            
              <Grid xs={12} sm={6} md={3}>
              <img src={h22}   style={{height:"95%", width:'90%'}} />
              <Grid sx={{marginTop:"4%", alignItems:"center",marginLeft:"10%"}} >
              <Typography variant="h7"  >
                <b> Sleep in a floating way </b> <br/>
                <Typography> 188,288 properties</Typography>
              </Typography>
              </Grid>
              </Grid>

              <Grid xs={12} sm={6} md={3}>
                <img src={h33}  style={{height:"95%", width:'90%'}} />
                <Grid sx={{marginTop:"4%", alignItems:"center",marginLeft:"10%"}} >
              <Typography variant="h7"  >
                <b> In the billionaire's house</b> <br/>
                <Typography> 188,288 properties</Typography>
              </Typography>
              </Grid>
              </Grid>

              <Grid xs={12} sm={6} md={3}>
                <img src={h44}  style={{height:"95%", width:'90%'}} />
                <Grid sx={{marginTop:"4%", alignItems:"center",marginLeft:"10%"}} >
              <Typography variant="h7"  >
                <b> Cool in the deep forest </b> <br/>
                <Typography> 188,288 properties</Typography>
              </Typography>
              </Grid>
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
              
                <b>01</b>

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

<Box
  sx={{
    overflow: "hidden",
    color: "black",
    background: "#FFF7ED",
    padding: "8%",
    borderRadius: "35px",
    marginInline: "7%",
    marginTop: "5%",
    // marginBottom:"-19%"
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

  <Grid container spacing={0} sx={{ textAlign: "center", marginInline:"9%" }}>
            <Grid
              item
              xs={12}
              md={2}
              sx={{ border: "0px solid  black" ,bgcolor:"#FFF", borderRadius:'22px',
               margin: "3rem", marginLeft:"-5%" }}>
            <Typography sx={{marginTop:"15%"}} >
              <img src={alric} style={{ borderRadius: "50px" }}></img> </Typography>
              <Typography variant="h7">
                <b>Truelock Alric</b> <br/>
              </Typography>
              <Typography variant="h8"> New York</Typography>
              
              <Button
                variant="contained"
                sx={{
                  marginTop: "13%",
                  marginInline: "17%",
                  borderRadius: "22px",
                  bgcolor:"#FFF",
                  border:"0px solid black",
                  color:"black",
                  height:"35px",
                  width:"75px",
                  fontSize:"16px",
                  marginBottom:"20%"
                }}
              >
                4.9  <Rating name="customized-1" defaultValue={1} max={1} />
              </Button>
             
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
              sx={{ border: "0px solid black" ,bgcolor:"#FFF", borderRadius:'22px', margin: "3rem", marginLeft:"-2%" }}
            >
              <Typography sx={{marginTop:"15%"}} >
              <img src={birrel} style={{ borderRadius: "50px" }}></img> 
              </Typography>
              <Typography variant="h7">
                <b>Birrell Chariot</b> <br/>
              </Typography>
              <Typography variant="h8"> New York</Typography>
              
              <Button
                variant="contained"
                sx={{
                  marginTop: "13%",
                  marginInline: "17%",
                  borderRadius: "22px",
                  bgcolor:"#FFF",
                  border:"0px solid black",
                  color:"black",
                  height:"35px",
                  width:"75px",
                  fontSize:"16px",
                  marginBottom:"20%"
                }}
              >
                4.9  <Rating name="customized-1" defaultValue={1} max={1} />
              </Button>

              
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
              sx={{ border: "0px solid black" ,bgcolor:"#FFF", borderRadius:'22px', margin: "3rem", marginLeft:"-2%" }}
            >
             <Typography sx={{marginTop:"15%"}} >
              <img src={foulchor} style={{ borderRadius: "50px" }}></img> 
              </Typography>
              <Typography variant="h7">
                <b>Foulcher Nathanil</b> <br/>
              </Typography>
              <Typography variant="h8"> New York</Typography>
              
              <Button
                variant="contained"
                sx={{
                  marginTop: "13%",
                  marginInline: "17%",
                  borderRadius: "22px",
                  bgcolor:"#FFF",
                  border:"0px solid black",
                  color:"black",
                  height:"35px",
                  width:"75px",
                  fontSize:"16px",
                  marginBottom:"20%"
                }}
              >
                4.9  <Rating name="customized-1" defaultValue={1} max={1} />
              </Button>
            </Grid>

            <Grid
              item
              xs={12}
              md={2}
              sx={{ border: "0px solid black" ,bgcolor:"#FFF", borderRadius:'22px',
               margin: "3rem",marginLeft:"-2%"  }}
            >
              <Typography sx={{marginTop:"15%"}} >
              <img src={agnes} style={{ borderRadius: "50px" }}></img> 
              </Typography>
              <Typography variant="h7">
                <b>Falconar Agnes</b> <br/>
              </Typography>
              <Typography variant="h8"> New York</Typography>
              
              <Button
                variant="contained"
                sx={{
                  marginTop: "13%",
                  marginInline: "17%",
                  borderRadius: "22px",
                  bgcolor:"#FFF",
                  border:"0px solid black",
                  color:"black",
                  height:"35px",
                  width:"75px",
                  fontSize:"16px",
                  marginBottom:"20%"
                }}
              >
                4.9  <Rating name="customized-1" defaultValue={1} max={1} />
              </Button>
            </Grid>

            <Grid
              item
              xs={12}
              sm={2}
              sx={{ border: "0px solid black" ,bgcolor:"#FFF", borderRadius:'22px', margin: "3rem", marginLeft:"-2%" }}
            >
              <Typography sx={{marginTop:"15%"}} >
              <img src={vita} style={{ borderRadius: "50px" }}></img>
               </Typography>
              <Typography variant="h7">
                <b>Tousy vita</b> <br/>
              </Typography>
              <Typography variant="h8"> New York</Typography>
              
              <Button
                variant="contained"
                sx={{
                  marginTop: "13%",
                  marginInline: "17%",
                  borderRadius: "22px",
                  bgcolor:"#FFF",
                  border:"0px solid black",
                  color:"black",
                  height:"35px",
                  width:"75px",
                  fontSize:"16px",
                  marginBottom:"20%"
                }}
              >
                4.9  <Rating name="customized-1" defaultValue={1} max={1} />
              </Button>
            </Grid>

          </Grid>


          <Grid container spacing={0} sx={{ textAlign: "center", marginInline:"9%" }}>
            <Grid
              item
              xs={12}
              md={2}
              sx={{ border: "0px solid  black" ,bgcolor:"#FFF", borderRadius:'22px',
               margin: "3rem", marginLeft:"-5%" }}>
            <Typography sx={{marginTop:"15%"}} >
              <img src={friar} style={{ borderRadius: "50px" }}></img> </Typography>
              <Typography variant="h7">
                <b>Friar Donna</b> <br/>
              </Typography>
              <Typography variant="h8"> New York</Typography>
              
              <Button
                variant="contained"
                sx={{
                  marginTop: "13%",
                  marginInline: "17%",
                  borderRadius: "22px",
                  bgcolor:"#FFF",
                  border:"0px solid black",
                  color:"black",
                  height:"35px",
                  width:"75px",
                  fontSize:"16px",
                  marginBottom:"20%"
                }}
              >
                4.9  <Rating name="customized-1" defaultValue={1} max={1} />
              </Button>
             
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
              sx={{ border: "0px solid black" ,bgcolor:"#FFF", borderRadius:'22px', margin: "3rem", marginLeft:"-2%" }}
            >
              <Typography sx={{marginTop:"15%"}} >
              <img src={royal} style={{ borderRadius: "50px" }}></img> 
              </Typography>
              <Typography variant="h7">
                <b> Royal Sergei</b> <br/>
              </Typography>
              <Typography variant="h8"> New York</Typography>
              
              <Button
                variant="contained"
                sx={{
                  marginTop: "13%",
                  marginInline: "17%",
                  borderRadius: "22px",
                  bgcolor:"#FFF",
                  border:"0px solid black",
                  color:"black",
                  height:"35px",
                  width:"75px",
                  fontSize:"16px",
                  marginBottom:"20%"
                }}
              >
                4.9  <Rating name="customized-1" defaultValue={1} max={1} />
              </Button>

              
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
              sx={{ border: "0px solid black" ,bgcolor:"#FFF", borderRadius:'22px', margin: "3rem", marginLeft:"-2%" }}
            >
             <Typography sx={{marginTop:"15%"}} >
              <img src={sleite} style={{ borderRadius: "50px" }}></img> 
              </Typography>
              <Typography variant="h7">
                <b>Sleite Claudetta</b> <br/>
              </Typography>
              <Typography variant="h8"> New York</Typography>
              
              <Button
                variant="contained"
                sx={{
                  marginTop: "13%",
                  marginInline: "17%",
                  borderRadius: "22px",
                  bgcolor:"#FFF",
                  border:"0px solid black",
                  color:"black",
                  height:"35px",
                  width:"75px",
                  fontSize:"16px",
                  marginBottom:"20%"
                }}
              >
                4.9  <Rating name="customized-1" defaultValue={1} max={1} />
              </Button>
            </Grid>

            <Grid
              item
              xs={12}
              md={2}
              sx={{ border: "0px solid black" ,bgcolor:"#FFF", borderRadius:'22px',
               margin: "3rem",marginLeft:"-2%"  }}
            >
              <Typography sx={{marginTop:"15%"}} >
              <img src={vern} style={{ borderRadius: "50px" }}></img> 
              </Typography>
              <Typography variant="h7">
                <b>Pillifant Vern</b> <br/>
              </Typography>
              <Typography variant="h8"> New York</Typography>
              
              <Button
                variant="contained"
                sx={{
                  marginTop: "13%",
                  marginInline: "17%",
                  borderRadius: "22px",
                  bgcolor:"#FFF",
                  border:"0px solid black",
                  color:"black",
                  height:"35px",
                  width:"75px",
                  fontSize:"16px",
                  marginBottom:"20%"
                }}
              >
                4.9  <Rating name="customized-1" defaultValue={1} max={1} />
              </Button>
            </Grid>

            <Grid
              item
              xs={12}
              sm={2}
              sx={{ border: "0px solid black" ,bgcolor:"#FFF", borderRadius:'22px', margin: "3rem", marginLeft:"-2%" }}
            >
              <Typography sx={{marginTop:"15%"}} >
              <img src={mimi} style={{ borderRadius: "50px" }}></img>
               </Typography>
              <Typography variant="h7">
                <b>Fones Mimi</b> <br/>
              </Typography>
              <Typography variant="h8"> New York</Typography>
              
              <Button
                variant="contained"
                sx={{
                  marginTop: "13%",
                  marginInline: "17%",
                  borderRadius: "22px",
                  bgcolor:"#FFF",
                  border:"0px solid black",
                  color:"black",
                  height:"35px",
                  width:"75px",
                  fontSize:"16px",
                  marginBottom:"20%"
                }}
              >
                4.9  <Rating name="customized-1" defaultValue={1} max={1} />
              </Button>
            </Grid>
          </Grid>


          <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={-55}>
        <Grid item xs={12} md={6} container justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            sx={{
              marginTop: "5%",
              borderRadius: "22px",
              bgcolor: "#FFF",
              color: "black",
              height: "55px",
              width: "255px",
              fontSize: "20px",
              textTransform:"initial",
              border:"2px solid white"
              //marginBottom: "20%"
            }}
          >
            <b> Show me more </b>
          </Button>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            sx={{
              marginTop: "5%", // Adjust this margin if needed
              borderRadius: "22px",
              bgcolor: "#00B589",
              color: "#FFF",
              height: "55px",
              width: "255px",
              fontSize: "20px",
              textTransform:"initial"
              
              //marginBottom: "20%"
            }}
          >
            <b> Become a host </b>
          </Button>
        </Grid>
      </Grid>
    </Container>

                  
          </Box>;


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
                <b> Explore nearby</b>
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
                 <b>Why did you choose us? </b>
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
                   borderRadius: "22px",
                   bgcolor:"#00B589",
                   color:"#FFF",
                   height:"55px",
                   width:"255px",
                   fontSize:"20px",
                   marginBottom:"20%",
                   textTransform:"initial"
                 }}
               >
               <b> Become a host </b>
               </Button>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <img src={workman} alt="workman" width="100%" height="230%" />
            </Grid>

          </Grid>


      </Box>


{/********************************** Explore types *************************************/}

          
<Grid container>
            <Grid xs={12} sm={6}>
              <Grid sx={{ marginLeft: "29%", marginTop: "14%" }}>
                <Typography variant="h4">
                  <b> Explore by types of stays</b>
                </Typography>
                <Typography variant="h7">Explore houses based on 10 types of stays</Typography>
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
                marginLeft:"15%",
                // marginInline:"15%",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop:"4%"
   
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={2}>
                  <img src={house1} style={{ width: "90%", height: "90%" }} /> 
                  {/* <Typography variant="h8" sx={{marginTop:"2%"}}>
                  <b> Nature House </b> <br />
                </Typography>
                <Typography variant="h10" sx={{ marginTop: "2%" }}>
                  17,288 Properties
                </Typography> */}
                </Grid>
                
                <Grid item xs={12} md={2}>
                  <img src={house2} style={{ width: "90%", height: "90%" }} />
                  {/* <Typography variant="h8" sx={{marginTop:"2%"}}>
                  <b> Nature House </b> <br />
                </Typography>
                <Typography variant="h10" sx={{ marginTop: "2%" }}>
                  17,288 Properties
                </Typography> */}
                </Grid>
                <Grid item xs={12} md={2}>
                  <img src={house3} style={{ width: "90%", height: "90%" }} />
                </Grid>
                <Grid item xs={12} md={2}>
                  <img src={house4} style={{ width: "90%", height: "90%" }} />
                </Grid>
                <Grid item xs={12} md={2}>
                  <img src={house5} style={{ width: "90%", height: "90%" }} />
                </Grid>
              </Grid>
            </Box>





            <Box sx={{ marginInline: "17%", marginTop: "2%" }}>
            <Grid container spacing={3}>
              <Grid>
                <Typography variant="h8">
                  <b> Nature House </b> <br />
                </Typography>
                <Typography variant="h10" sx={{ marginTop: "2%" }}>
                  17,288 Properties
                </Typography>
              </Grid>
              <Grid sx={{ marginLeft: "9%" }}>
                <Typography variant="h8">
                  <b> Wooden House </b> <br />
                </Typography>
                <Typography variant="h10" sx={{ marginTop: "2%" }}>
                  2,118 Properties
                </Typography>
              </Grid>
              <Grid sx={{ marginLeft: "9%" }}>
                <Typography variant="h8">
                  <b>Houseboat </b> <br />
                </Typography>
                <Typography variant="h10" sx={{ marginTop: "2%" }}>
                  36,612 Properties
                </Typography>
              </Grid>
              <Grid sx={{ marginLeft: "10%" }}>
                <Typography variant="h8">
                  <b>Farm House </b> <br />
                </Typography>
                <Typography variant="h10" sx={{ marginTop: "2%" }}>
                  188,288 properties
                </Typography>
              </Grid>
              <Grid sx={{ marginLeft: "10%" }}>
                <Typography variant="h8">
                  <b>Dome House </b> <br />
                </Typography>
                <Typography variant="h10" sx={{ marginTop: "2%" }}>
                  188,288 properties
                </Typography>
              </Grid>
            </Grid>
          </Box>


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

            <Grid xs={12} sm={6} sx={{justifyContent:"center",
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
        <b> Good news from far away</b>
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
        Let's see what people think of Chisfis
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
          <img src={music} alt="music" />This place is exactly like the picture posted on Chisfis.
          <img src={music2} alt="music2" /><br/>
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

      <Footer2 />

    </>
  )
};

export default Home2;
