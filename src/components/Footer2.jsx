import { Box, Button, Container, Divider, Grid, ListItem, ListItemText, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';




//Images


import visa from '../Images/visa.png';
import master from '../Images/master.png';
import card3 from '../Images/card3.png';
import paypal from '../Images/pay.png';
import vector from '../Images/Vector1.png';
import rupay from '../Images/rupay.png';
import upi from '../Images/upi.png';
import paytm from '../Images/paytm.png';
import pci from '../Images/pci.png';
//import { Instagram } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import appSt from "../Images/appSt.png";
import googleplay from "../Images/googleplay.png";
import RssFeedIcon from '@mui/icons-material/RssFeed';









const Footer2 = () => {
  return (
    <>


    <Box sx={{
      width: "100%",
      marginTop: "5%",
      overflow: "hidden",
      backgroundColor: "#1F4A8E",
      //backgroundImage:'url("Images/footerpic.png")'
    }} >

       {/* <Grid item xs={12} sm={6} md={12}>
        <img src={footerpic} alt="footerpic" />
       </Grid> */}
       

       {/* <Grid item xs={12} sm={6} md={12} >
        <img src={bgfooter} alt="bgfooter" />
       </Grid> */}

       {/* <Grid item xs={12} sm={6} md={12} >
        <img src={footerpic} alt="footerpic" />
       </Grid> */}


      <Box
      sx={{
         backgroundColor: "#1F4A8E",

        Color: "white",
        width: "100%",
        marginTop: "0%",
        overflow: "hidden",
        
        // paddingBottom:"2%",
         
      }}
    >
      
            
            <Grid container alignItems="center" spacing={2} sx={{marginTop:"0.3%",}}>
      <Grid item xs={12} md={8}>
        <Typography variant='h6' sx={{ color: "#FFF" ,marginLeft:"11%",}}>
          <b>Save on Marketing Expenses, Expand Your Business, and Join Our Network</b>
        </Typography>
      </Grid>

      <Grid item xs={12} md={4}>
      <Button
  variant="text"
  sx={{
    //backgroundColor: "blue",
    color: "#FFF",
    borderRadius: '10px',
    textTransform: "initial",
    border: "4px solid #C7C7C7",
    fontSize: "16px",
    display: 'flex',
    alignItems: 'center',
    marginLeft:"28%"
    //marginLeft:"42%"
  }}
>
  <b style={{ marginRight: '20px' }}>Get our Franchise</b>
  <img src={vector} alt="Vector" />
</Button>
      </Grid>
    </Grid>
   

    <ListItem button  divider >
        <ListItemText primary="" />
      </ListItem>
      <Divider sx={{border:"1px solid white"}}/>



      <Container maxWidth="xl" sx={{justifyContent:"center",textAlign:"left", alignItems:"center"}}>
        <Grid container spacing={1} sx={{ marginInline: "0%",justifyContent:"center", }}>
          <Grid
            item
            xs={12}
            sm={3}
            md={2}
            marginTop="2%"
            sx={{ color: "#C7C7C7" }}
          >
           

           <Typography variant="h6" sx={{ color: "#FFF" }}>
      <b> Idbook hotels</b> <br />
      </Typography>
      <Typography variant='h8'sx={{color:"#C7C7C7",lineHeight: "2" }}>
      <p sx={{ marginTop: "0%" }}>
        <Link to="/about" style={{textDecoration: 'none',  color: 'inherit'}}
        rel="noopener noreferrer">
        About Us <br /> 
        </Link>
       
        <Link to="/career" style={{textDecoration: 'none',  color: 'inherit'}}
        rel="noopener noreferrer">
        Careers <br />
        </Link>
        
        Blog <br />

        <Link to="/faqholidaysite" style={{textDecoration: 'none',  color: 'inherit'}}
       rel="noopener noreferrer">
        Holiday Package <br />
        </Link>

        Group booking <br />
        </p>
    </Typography>
  

           
          </Grid>

          <Grid item xs={12} sm={2} sx={{marginTop:"2%", color:"#FFF"}}>
          <Typography variant="h6" sx={{ color: "#FFF" }}>
      <b> Partnership with us</b> <br />
      </Typography>
      <Typography variant='h8'sx={{color:"#C7C7C7",lineHeight: "2" }}>
      <p sx={{ marginTop: "0%" }}>
        Get Franchise <br />
        Travel Agent <br />
        Corporate Enquiries <br />
        Flight <br />
        Transport
      </p>
    </Typography>
            
          </Grid>

          <Grid item xs={12} sm={2} sx={{marginTop:"2%", color: "#C7C7C7"}}>
          <Typography variant="h6" sx={{ color: "#FFF" }}>
      <b> Policies</b> <br />
      </Typography>
      <Typography variant='h8'sx={{color:"#C7C7C7",lineHeight: "2" }}>
      <p sx={{ marginTop: "0%" }}>
     <Link to="/faq" style={{textDecoration: 'none',  color: '#C7C7C7'}}
        rel="noopener noreferrer">
        FAQ <br/>
        </Link>
        
        FAQ Support <br />

        <Link to="/refundpolicy" style={{textDecoration: 'none',  color: '#C7C7C7'}}
        rel="noopener noreferrer">
        Cancellation & Refund Policy <br />
        </Link>

        <Link to="/privacy" style={{textDecoration: 'none',  color: '#C7C7C7'}}
        rel="noopener noreferrer">
        Privacy Policy <br />
        </Link>
        
        Terms & Conditions
      </p>
      
    </Typography>
            
          </Grid>


          <Divider orientation="vertical" sx={{border:"1px solid white", marginTop:"2%"}}flexItem>
        
        </Divider>



          <Grid item xs={12} sm={2} sx={{marginTop:"2%",marginLeft:"0%"}}>
          <Typography variant="h6" sx={{ color: "#FFF" }}>
      <b> Payments & Security</b> <br />
      </Typography>
      <Typography  >
      <Grid container sx={{marginTop:"12%"}}>
      <Grid item xs={12} sm={6} md={2} sx={{ textAlign: 'center',  }}>
        <img src={visa} alt="Visa" style={{ maxWidth: '150%', maxHeight: '150%',  }}/>

       
      </Grid>

      <Grid item xs={12} sm={6} md={2} sx={{ textAlign: 'center',marginLeft:"10%",marginTop:"5%" }}>
        <img src={master} alt="MasterCard" style={{ maxWidth: '150%', maxHeight: '150%',  }}/>

       

       </Grid>

      <Grid item xs={12} sm={6} md={2} sx={{ textAlign: 'center', marginLeft:"10%"}}>
        <img src={card3} alt="Card 3" style={{ maxWidth: '150%', maxHeight: '150%', }}/>

       

      </Grid>

      <Grid item xs={12} sm={6} md={2} sx={{ textAlign: 'center' ,marginLeft:"10%",marginTop:"5%"}}>
        <img src={paypal} alt="PayPal" style={{ maxWidth: '150%', maxHeight: '150%',  }}/>

        

            </Grid>
            </Grid>
      

            <Grid container sx={{marginTop:"4%"}}>
      <Grid item xs={12} sm={6} md={2} sx={{ textAlign: 'center', }}>
        <img src={rupay} alt="rupay" style={{ maxWidth: '150%', maxHeight: '150%',  }}/>

       
      </Grid>

      <Grid item xs={12} sm={6} md={2} sx={{ textAlign: 'center',marginLeft:"10%",marginTop:"-1%"  }}>
        <img src={upi} alt="upi" style={{ maxWidth: '150%', maxHeight: '150%',  }}/>

       

       </Grid>

      <Grid item xs={12} sm={6} md={2} sx={{ textAlign: 'center',marginLeft:"10%",marginTop:"-2%"  }}>
        <img src={paytm} alt="paytm" style={{ maxWidth: '150%', maxHeight: '150%',  }}/>

       

      </Grid>

      <Grid item xs={12} sm={6} md={2} sx={{ textAlign: 'center' ,marginLeft:"10%",marginTop:"-1%" }}>
        <img src={pci} alt="Pci" style={{ maxWidth: '150%', maxHeight: '150%', }}/>

        

            </Grid>
            </Grid>
      
    
    </Typography>
            
      </Grid>    

      

      <Divider orientation="vertical" sx={{border:"1px solid white",marginLeft:"6%",marginTop:"2%"}}flexItem>
        
        </Divider>

          <Grid item xs={12} sm={3} md={2} marginTop="2%">
          <Typography variant="h6" sx={{ color: "#FFF" }}>
      <b> Download our App </b> 
      </Typography>

      <Box sx={{
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        display:"flex",
        gap:"5px",
        marginLeft:"25%",
        marginTop:"8%"

      }} >

     <Grid >
      <img src={googleplay} alt="googleplay" />
     </Grid>

     <Grid >
      <img src={appSt} alt="appstore" />
     </Grid>


      </Box>

      <Box sx={{
      justifyContent:"center",
      alignItems:"center",
      textAlign:"center",
      marginTop:"10%",
      color:"#FFF",
      //display:"flex"
     }} >
  <b> Get letest offers</b>
  </Box>
  <Box sx={{
      justifyContent:"center",
      alignItems:"center",
      textAlign:"center",
      //marginTop:"10%",
      color:"#FFF",
      display:"flex"
     }} >
<TextField 
            id='email'
            name='email'
            label=" Email/Username"
            type="email"
            variant="outlined"
            InputProps={{ sx: { borderRadius: "3px",width: "25vh",height:"8vh",bgcolor:"white",marginTop:"5%" } }}
            
             > 
            </TextField>

            <Grid sx={{borderRadius: "3px",width: "5vh",height:"6vh",bgcolor:"#16458D"}} >
              <Button variant='contained' >
            <RssFeedIcon/> Subscribe
              </Button>
            </Grid>
     </Box>
      

          </Grid>
        </Grid>
      </Container>
   


<Box
      sx={{
        backgroundColor: "#1F4A8E",

        Color: "white",
        width: "100%",
        marginTop: "0%",
        overflow: "hidden",
        //paddingBottom:"5%"
      }}
    >

<ListItem button  divider >
        <ListItemText primary="" />
      </ListItem>
      <Divider sx={{border:"1px solid white"}}/>

        <Grid sx={{marginLeft:"7%", marginTop:"3%",color:"white"}}>
        <Typography variant="h6" gutterBottom>
              <b>Idbook hotels </b>
            </Typography>
            </Grid>

      <Container maxWidth="xl" sx={{justifyContent:"center", textAlign:"left", alignItems:"center"}}>
        <Grid container spacing={1} sx={{ marginInline: "5%",justifyContent:"center", }}>
          <Grid
            item
            xs={12}
            sm={3}
            md={2}
            marginTop="2%"
            sx={{ color: "#C7C7C7" }}
          >
           

            <Typography variant="h8" gutterBottom>
          Holiday in Manali <br/>
          Holiday in Shimla <br/>
          Holiday in Kedarnath <br/>
          Holiday in Badrinath <br/>
          Holiday in Yusmarg <br/>
          Holiday in Gulmarg <br/>
          Holiday in Sonmarg <br/>
          Holiday in Pahalgam <br/>
          Holiday in Verinag <br/>
          Holiday in Srinagar <br/>
          Holiday in Gangtok <br/>
            </Typography>
           

           
          </Grid>

          <Grid item xs={12} sm={2} sx={{marginTop:"2%", color:"#C7C7C7",marginLeft:"2%"}}>
            <Typography variant="h8" gutterBottom>
            Holiday in Vaishnodevi <br/>
            Holiday in Dehradun <br/>
            Holiday in Nainital <br/>
             Holiday in Almora <br/>
             Holiday in Landsdowne <br/>
             Holiday in Mussoorie <br/>
             Holiday in Jim Corbett <br/>
             Holiday in Dharamshala <br/>
             Holiday in Dalhousie <br/>
              Holiday in Hamirpur <br/>
              Holiday in Julma <br/>
            </Typography>
            
          </Grid>

          <Grid item xs={12} sm={2}  sx={{marginLeft:"3%",marginTop:"2%" }}>
            <Typography variant="h8" color="#C7C7C7" gutterBottom>
            Holiday in Udaipur <br/>
            Holiday in Jaipur <br/>
            Holiday in Jodhpur <br/>
              Holiday in Kasauli <br/>
             Holiday in Jaisalmer <br/>
            Holiday in Sirmaur <br/>
            Holiday in Pushkar <br/>
            Holiday in Lucknow <br/>
             Holiday in Ayodhaya <br/>
             Holiday in Khajuraho <br/>
             Holiday in Nangal
            </Typography>
            
          </Grid>

          <Grid item xs={12} sm={2} sx={{marginLeft:"1%",marginTop:"2%" }}>
            <Typography variant="h8" color="#C7C7C7" gutterBottom>
            Holiday in Ujjain <br/>
            Holiday in Binsar <br/>
             Holiday in Bathinda <br/>
              Holiday in Dwarka <br/>
              Holiday in Sanchi <br/>
              Holiday in Midnapore <br/>
              Holiday in Siliguri <br/>
              Holiday in Jalpaiguri <br/>
              Holiday in Bhubaneshwar <br/>
              Holiday in Puri <br/>
              Holiday in Patiala <br/>
            </Typography>
            
          </Grid>

          <Grid item xs={12} sm={3} sx={{marginLeft:"2%",marginTop:"2%" }}>
            <Typography variant="h8" color="#C7C7C7" gutterBottom>
            Holiday in Gwalior <br/>
Holiday in Bhopal <br/>
Holiday in Amritsar <br/>
Holiday in Bikaner <br/>
Holiday in Orchha <br/>
Holiday in Chandigarh <br/>
Holiday in Pali <br/>
Holiday in Mandu <br/>
Holiday in Ludhiana <br/>
Holiday in Somnath

            </Typography>
            
          </Grid>
        </Grid>
      </Container>
    </Box>



    </Box>

    <ListItem button  divider >
        <ListItemText primary="" />
      </ListItem>
      <Divider sx={{border:"1px solid white"}}/>

      <Box sx={{
        justifyContent:"center",
        textAlign:"left",
        alignItems:"center",
        display:"flex",
        color:"#FFF",
        gap:"255px",
        marginTop:"2%",
        flexWrap:"wrap",
        marginBottom:"3%"

      }} >

        <Grid xs={12} sm={6} md={4} >
          <Typography variant='h6'>
        <b>Registered Address</b>
        </Typography>
        <Typography variant='subtitle' sx={{color:"#C7C7C7"}}>
        VPO- Sarhaul, SEC-18, Gurugram,<br/>
         Gurugram, Haryana, 122001
        </Typography>
        </Grid>

        <Grid xs={12} sm={6} md={4} >
          <Typography variant='h6'>
        <b>Legal  Name & GST</b>
        </Typography>
        <Typography variant='subtitle1' sx={{color:"#C7C7C7"}}>
        dbook hospitality private limited<br/>
        GSTIN : 06AAECI8163K129  
        </Typography>
        </Grid>

        <Grid xs={12} sm={6} md={4} >
          <Typography variant='h6'>
        <b>CIN : U74999HR2018PTC073257</b>
        </Typography>
        <Typography variant='subtitle1' sx={{color:"#C7C7C7"}}>
        PAN No : AAECI8163K
        TAN : RTKI02839E  
        </Typography>
        </Grid>

       
      </Box>


      <Box sx={{
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center",
        display:"flex",
        color:"#FFF",
        
        
        marginTop:"2%",
        flexWrap:"wrap",
       
        bgcolor:"#11398B",
        padding:"1.5%",
        gap:"780px"

      }} >

        <Grid xs={12} sm={6} md={6} >

          <b> ©Idbook 2018-24 . All rights reserved </b>
        </Grid>

        <Grid xs={12} sm={6} md={6} >

<b> Find US : </b> <InstagramIcon /> 
<FacebookIcon />
<TwitterIcon />
<YouTubeIcon />
<LinkedInIcon />
</Grid>

      </Box>




</Box>
    </>
  );
}

export default Footer2;
