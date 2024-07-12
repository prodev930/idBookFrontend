import { Box, Button, Container, Divider, Grid, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import visa from '../Images/visa.png';
import master from '../Images/master.png';
import card3 from '../Images/card3.png';
import paypal from '../Images/pay.png';
import vector from '../Images/Vector1.png';
import rupay from '../Images/rupay.png';
import upi from '../Images/upi.png';
import paytm from '../Images/paytm.png';
import pci from '../Images/pci.png';
import googleplay from '../Images/googleplay.png';
import appSt from '../Images/appSt.png';
import subscribe from '../Images/subscribe.png';

import facebook from '../Images/facebook.png'
import instagram from '../Images/instagram.png'
import linkedin from '../Images/linkedin.png'
import pinterest from '../Images/pinterest.png'
import quora from '../Images/quora.png'
import youtube from '../Images/youtube.png'

const facebookUrl = 'https://www.facebook.com/p/Idbook-hotels-100063459046918/';
const instagramUrl = 'https://www.instagram.com/idbookhotels/';
const linkedinUrl = 'https://www.linkedin.com/company/idbook-hotels/?originalSubdomain=in';
const youtubeUrl = 'https://www.youtube.com/channel/UCv6CYWYoDo9Kyow5BMzJfAQ';
const quoraUrl = 'https://www.quora.com/profile/Idbook-Hotels';
const pinterestUrl = 'https://in.pinterest.com/idbookhotel/';


const Foop12 = () => {
  return (
    <>


    <Box sx={{
      width: "100%",
      marginTop: "5%",
      overflow: "hidden",
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
        marginTop: "5%",
        overflow: "hidden",
        
        // paddingBottom:"2%",
         
      }}
    >
            
            <Grid container alignItems="center" spacing={2} sx={{marginTop:"0.5%",}}>
      <Grid item xs={12} md={8}>
        <Typography variant='h6' sx={{ color: "#FFF" ,marginLeft:"9%",}}>
          <b>SAVE YOUR MARKETING COST, GROW YOUR BUSINESS AND JOIN OUR NETWORK</b>
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
    marginLeft:"20%"
    //marginLeft:"42%"
  }}
>
  <b style={{ marginRight: '30px' }}>Get our Franchise</b>
  <img src={vector} alt="Vector" />
</Button>
      </Grid>
    </Grid>
   

    <ListItem button  divider >
        <ListItemText primary="" />
      </ListItem>
      <Divider sx={{border:"1px solid #C7C7C7"}}/>

    <Box sx={{
      display:"flex",
      justifyContent:"center",
      textAlign:"center",
      alignItems:"center"
    }} >

    






      {/* <Container maxWidth="xl" sx={{justifyContent:"center",textAlign:"left", alignItems:"center"}}>
        <Grid container spacing={1} sx={{ marginInline: "0%",justifyContent:"center", }}>
          <Grid
            item
            xs={12}
            sm={3}
            md={2}
            marginTop="2%"
            sx={{ color: "white" }}
          >
            */}

           {/* <Typography variant="h6" sx={{ color: "#FFF" }}>
      <b> Idbook hotels</b> <br />
      </Typography> */}
      {/* <Typography variant='h8'sx={{color:"#FFF",lineHeight: "2" }}>
      <p sx={{ marginTop: "2%" }}>
       
      <Link to="/about" style={{textDecoration: 'none',  color: 'inherit'}}
       target="_blank" rel="noopener noreferrer">
        About Us <br /> 
       </Link>

       <Link to="/career" style={{textDecoration: 'none',  color: 'inherit'}}
       target="_blank" rel="noopener noreferrer">
        Careers <br />
        </Link>

        Blog <br />
        Holiday Package <br />
        Group booking <br />
        </p>
    </Typography>
  

           
          </Grid>

          <Grid item xs={12} sm={2} sx={{marginTop:"2%", color:"#FFF"}}>
          <Typography variant="h6" sx={{ color: "#FFF" }}>
      <b> Partnership with us</b> <br />
      </Typography>
      <Typography variant='h8'sx={{color:"#FFF",lineHeight: "2" }}>
      <p sx={{ marginTop: "0%" }}>
        Get Franchise <br />
        Travel Agent <br />
        Corporate Enquiries <br />
        Flight <br />
        Transport
      </p>
    </Typography>
            
          </Grid>

          <Grid item xs={12} sm={2} marginTop="2%">
          <Typography variant="h6" sx={{ color: "#FFF" }}>
      <b> Policies</b> <br />
      </Typography>
      <Typography variant='h8'sx={{color:"#FFF",lineHeight: "2" }}>
      <p sx={{ marginTop: "0%" }}>

      <Link to="/faq" style={{textDecoration: 'none',  color: 'inherit'}}
       target="_blank" rel="noopener noreferrer">
        FAQ <br/>
        </Link>


        FAQ Support <br />

        <Link to="/refundpolicy" style={{textDecoration: 'none',  color: 'inherit'}}
       target="_blank" rel="noopener noreferrer">
        Cancellation & Refund Policy <br />
        </Link>

        <Link to="/privacy" style={{textDecoration: 'none',  color: 'inherit'}}
       target="_blank" rel="noopener noreferrer">
        Privacy Policy <br />
        </Link>
        
        Terms & Conditions
      </p>
      
    </Typography> */}

     <Box sx={{
      marginTop:"3%",
      justifyContent:"center",
      textAlign:"left",
      alignItems:"center",
      display:"flex",
      gap:"40px",
      flexWrap:"wrap",
      color:"#C7C7C7",
      //flexDirection:"row"
      marginLeft:"4%",
      //marginRight:"2%"
     }} >


      <Grid xs={12} sm={6} md={4}>
        <Typography variant='h6' sx={{color:"#FFF"}} >
          <b> Idbook hotels</b> <br/>
        </Typography>

        <Typography variant='h8' >
        <p sx={{ marginTop: "2%" }}>
       
       <Link to="/about" style={{textDecoration: 'none',  color: 'inherit'}}
        rel="noopener noreferrer">
         About Us <br /> 
        </Link>

        
        <Link to="/career" style={{textDecoration: 'none',  color: 'inherit'}}
        rel="noopener noreferrer">
         Careers <br />
         </Link>
 
         Blog <br />
         <Link to="/holidays" style={{textDecoration: 'none',  color: 'inherit'}}
        rel="noopener noreferrer">
         Holiday Package <br />
         </Link>
         Group booking <br />
         </p>
        </Typography>

      </Grid>

      <Grid >
        <Typography variant='h6' sx={{color:"#FFF"}} >
          <b> Partner With Us</b> <br/>
        </Typography>

        <Typography variant='h8' >
        <p sx={{ marginTop: "2%" }}>
        Get Franchise <br />
        Travel Agent <br />
        <Link to="/corporates" style={{textDecoration: 'none',  color: 'inherit'}}
 rel="noopener noreferrer">
        Corporate Enquiries <br />
        </Link>
        Flight <br />
        Transport
      </p>
        </Typography>

      </Grid>

      <Grid >
        <Typography variant='h6' sx={{color:"#FFF"}} >
          <b> Policies</b> <br/>
        </Typography>

        <Typography variant='h8' >
        <p sx={{ marginTop: "2%" }}>

<Link to="/faq" style={{textDecoration: 'none',  color: 'inherit'}}
 rel="noopener noreferrer">
  FAQ <br/>
  </Link>


  <Link to="/contactus" style={{textDecoration: 'none',  color: 'inherit'}}
        rel="noopener noreferrer">
         Contact Us <br /> 
        </Link>
 

  <Link to="/return-and-refund-policy" style={{textDecoration: 'none',  color: 'inherit'}}
 rel="noopener noreferrer">
  Cancellation & Refund Policy <br />
  </Link>

  <Link to="/privacy-policy" style={{textDecoration: 'none',  color: 'inherit'}}
 rel="noopener noreferrer">
  Privacy Policy <br />
  </Link>
  
  <Link to="/terms-and-conditions" style={{textDecoration: 'none',  color: 'inherit'}}
 rel="noopener noreferrer">
  Terms & Conditions
  </Link>
</p>
        </Typography>

      </Grid>



     </Box>





            
          {/* </Grid> */}


          <Divider orientation="vertical" sx={{border:"1px solid #C7C7C7",marginLeft:"2%",marginTop:"2%"}}flexItem>
        
        </Divider>



          <Box sx={{marginTop:"2%",marginLeft:"0%"}}>
          <Typography variant="h6" sx={{ color: "#FFF" }}>
      <b> Payments & Security</b> <br />
      </Typography>
      {/* <Typography  >
      <Grid container sx={{marginTop:"12%"}}>
      <Grid item xs={12} sm={6} md={2} sx={{ textAlign: 'center',margin:"0.3rem"  }}>
        <img src={visa} alt="Visa" style={{ maxWidth: '100%', maxHeight: '100%', margin: 'auto' }}/>

       
      </Grid>

      <Grid item xs={12} sm={6} md={2} sx={{ textAlign: 'center',margin:"0.3rem"  }}>
        <img src={master} alt="MasterCard" style={{ maxWidth: '100%', maxHeight: '100%', margin: 'auto' }}/>

       

       </Grid>

      <Grid item xs={12} sm={6} md={2} sx={{ textAlign: 'center',margin:"0.3rem"  }}>
        <img src={card3} alt="Card 3" style={{ maxWidth: '100%', maxHeight: '100%', margin: 'auto' }}/>

       

      </Grid>

      <Grid item xs={12} sm={6} md={2} sx={{ textAlign: 'center' ,margin:"0.3rem" }}>
        <img src={paypal} alt="PayPal" style={{ maxWidth: '100%', maxHeight: '100%', margin: 'auto' }}/>

        

            </Grid>
            </Grid>
      

            <Grid container sx={{marginTop:"4%"}}>
      <Grid item xs={12} sm={6} md={2} sx={{ textAlign: 'center',margin:"0.3rem"  }}>
        <img src={rupay} alt="rupay" style={{ maxWidth: '100%', maxHeight: '100%', margin: 'auto' }}/>

       
      </Grid>

      <Grid item xs={12} sm={6} md={2} sx={{ textAlign: 'center',margin:"0.3rem"  }}>
        <img src={upi} alt="upi" style={{ maxWidth: '100%', maxHeight: '100%', margin: 'auto' }}/>

       

       </Grid>

      <Grid item xs={12} sm={6} md={2} sx={{ textAlign: 'center',margin:"0.3rem"  }}>
        <img src={paytm} alt="paytm" style={{ maxWidth: '100%', maxHeight: '100%', margin: 'auto' }}/>

       

      </Grid>

      <Grid item xs={12} sm={6} md={2} sx={{ textAlign: 'center' ,margin:"0.3rem" }}>
        <img src={pci} alt="Pci" style={{ maxWidth: '100%', maxHeight: '100%', margin: 'auto' }}/>

        

            </Grid>
            </Grid>
      
    
    </Typography> */}
      <Container >    
    <Box sx={{
      marginTop:"3%",
      justifyContent:"center",
      textAlign:"center",
      alignItems:"center",
      display:"flex",
      gap:"10px",
      flexWrap:"wrap"
    
    }} >

      <Grid >
      <img src={visa} alt="Visa" style={{ maxWidth: '100%', maxHeight: 'auto' }}/>
      </Grid>

      <Grid >
      <img src={master} alt="master" style={{ maxWidth: '100%', maxHeight: 'auto' }}/>
      </Grid>

      <Grid >
      <img src={card3} alt="card3" style={{ maxWidth: '100%', maxHeight: 'auto' }}/>
      </Grid>

      <Grid >
      <img src={paypal} alt="paypal" style={{ maxWidth: '100%', maxHeight: 'auto' }}/>
      </Grid>
      
      </Box>

      <Box sx={{
      marginTop:"0%",
      justifyContent:"center",
      textAlign:"center",
      alignItems:"center",
      display:"flex",
      gap:"10px",
      flexWrap:"wrap"
    
    }} >

      <Grid >
      <img src={rupay} alt="rupay" style={{ maxWidth: '100%', maxHeight: 'auto' }}/>
      </Grid>

      <Grid >
      <img src={upi} alt="upi" style={{ maxWidth: '100%', maxHeight: 'auto' }}/>
      </Grid>

      <Grid >
      <img src={paytm} alt="paytm" style={{ maxWidth: '100%', maxHeight: 'auto' }}/>
      </Grid>

      <Grid >
      <img src={pci} alt="pci" style={{ maxWidth: '100%', maxHeight: 'auto' }}/>
      </Grid>

      

    </Box>
    
    </Container>  

    </Box>
      {/* </Grid>     */}


      

      <Divider orientation="vertical" sx={{border:"1px solid #C7C7C7",marginLeft:"0%",marginTop:"2%"}}flexItem>
        
        </Divider>

        <Box sx={{
          marginTop:"2%",
      justifyContent:"center",
      textAlign:"center",
      alignItems:"center",
      }}>

          <Typography variant="h6" sx={{ color: "#FFF" }}>
      <b> Download our App </b> <br/>
      </Typography>

      <Box sx={{
          marginTop:"8%",
      justifyContent:"center",
      textAlign:"center",
      alignItems:"center",
      display:"flex",
      gap:"10px",
      //marginLeft:"0%",
      flexWrap:"wrap"}}>


      <Grid sx={{marginLeft:"0%"}}>
        <img src={googleplay} aly="googleplay" style={{width:"100%",height:"auto"}}/>
      </Grid>
      
      <Grid >
        <img src={appSt} aly="appstore" style={{width:"100%",height:"auto"}}/>
      </Grid>
 </Box>

    <Box sx={{
   marginTop:"5%",
   justifyContent:"center",
   textAlign:"center",
   alignItems:"center",
   color:"#FFF",
   marginLeft:"9%"
   
    }} >
      <b> Get letest offers</b> <br/>
      <Typography sx={{marginTop:"2%"}}>
      <img src={subscribe} alt="subscribe" style={{width:"90%",height:"auto"}}/>
      </Typography>
    </Box>

          </Box>
        {/* </Grid> */}
      {/* </Container> */}
      </Box>


<Box
      sx={{
        backgroundColor: "#1F4A8E",

        Color: "white",
        width: "100%",
        marginTop: "0%",
        overflow: "hidden",
        paddingBottom:"5%"
      }}
    >

<ListItem button  divider >
        <ListItemText primary="" />
      </ListItem>
      <Divider sx={{border:"1px solid #C7C7C7"}}/>

      <Grid sx={{marginLeft:"6%", marginTop:"3%",color:"white"}}>
        <Typography variant="h6" gutterBottom>
              <b>Idbook hotels </b>
            </Typography>
            </Grid>

      <Container maxWidth="xl" sx={{justifyContent:"center", textAlign:"left", alignItems:"center"}}>
        <Grid container spacing={1} sx={{ marginInline: "4%",justifyContent:"center", }}>
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



    <ListItem button  divider >
        <ListItemText primary="" />
      </ListItem>
      <Divider sx={{border:"1px solid #C7C7C7"}}/>

      <Box sx={{
        // justifyContent:"center",
        textAlign:"left",
        alignItems:"center",
        display:"flex",
        color:"#FFF",
        justifyContent:'space-around',
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
        Idbook Hospitality Private Limited<br/>
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
        textAlign:"center",
        alignItems:"center",
        display:"flex",
        color:"#FFF",        
        marginTop:"2%",
        flexWrap:"wrap",      
        bgcolor:"#11398B",
        padding:"1.5%",
        justifyContent:'space-between'
      }} >

        <Grid xs={12} sm={6} md={6} >

          <b> ©Idbook 2018-24 . All rights reserved </b>
        </Grid>

        <Grid xs={12} sm={6} md={6}  sx={{display:'flex', alignItems:'center'}}>

<b> <span style={{paddingRight:'10px'}}> Find US : </span></b>
<Link to={facebookUrl}>
                <img src={facebook} style={{marginRight:'4px', maxHeight: '25px', maxWidth: '25px' }} alt="Facebook" />
              </Link>

              <Link to={instagramUrl}>
                <img src={instagram} style={{marginRight:'4px',  maxHeight: '25px', maxWidth: '25px' }} alt="Instagram" />
              </Link>

              <Link to={linkedinUrl}>
                <img src={linkedin} style={{marginRight:'4px',  maxHeight: '25px', maxWidth: '25px' }} alt="LinkedIn" />
              </Link>

              <Link to={youtubeUrl}>
                <img src={youtube} style={{marginRight:'4px',  maxHeight: '25px', maxWidth: '25px' }} alt="YouTube" />
              </Link>

              <Link to={quoraUrl}>
                <img src={quora} style={{marginRight:'4px',  maxHeight: '25px', maxWidth: '25px' }} alt="Quora" />
              </Link>

              <Link to={pinterestUrl}>
                <img src={pinterest} style={{marginRight:'4px',  maxHeight: '25px', maxWidth: '25px' }} alt="Pinterest" />
              </Link>
</Grid>

      </Box>




    </Box>






</Box>
    </>
  );
}

export default Foop12;
