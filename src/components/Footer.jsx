import { Box, Divider, Grid, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import appSt from '../Images/appSt.png';
import googleplay from '../Images/googleplay.png';
import visa from '../Images/visa.png';
import master from '../Images/master.png';
import card3 from '../Images/card3.png';
import paypal from '../Images/pay.png';
import vector from '../Images/Vector1.png';
import rupay from '../Images/rupay.png';
import upi from '../Images/upi.png';
import paytm from '../Images/paytm.png';
import pci from '../Images/pci.png';

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

const Footer = () => {

  const handleLinkClick = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>

      <Box
        sx={{
          marginTop: "5%",
          width: "100%",
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#1D498D",
          color: "#FFF"
        }}
      >

        <Box sx={{
          //marginTop:"5%",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          bgcolor: "#1D498D",
          color: "#FFF"
        }} >

          <Box sx={{
            justifyContent: "center",
            textAlign: "center",
            alignItems: 'flex-start',
            display: "flex",
            flexWrap: "wrap",
            gap: "140px"
            //marginInline:"8%"  
          }}  >

            <Grid xs={12} sm={6} md={3} sx={{ marginTop: "2%", textAlign: "left" }}>
              <Typography sx={{ fontSize: "37.54px", textAlign: "left", marginTop: "-8%" }} >
                <b> Idbook</b>
              </Typography>
              <Typography sx={{ fontSize: "16px", textAlign: "left", marginTop: "6%" }} >
                VPO- SARHAUL,SEC-18, <br />
                {/* GURUGRAM, <br /> */}
                Gurgaon, <br />
                Haryana, 122001
              </Typography>
            </Grid>

            <Grid xs={12} sm={6} md={3} sx={{ marginTop: "2%", textAlign: "left" }}>
              <Typography variant="h6" sx={{ color: "#FFF" }}>
                <b> Our Services </b> <br />
              </Typography>
              <Typography variant='h8' sx={{ color: "#FFF", lineHeight: "2" }}>
                <p sx={{ marginTop: "0%" }}>
                  <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleLinkClick}
                    rel="noopener noreferrer">
                    About Us <br />
                  </Link>

                  <Link to="/career" style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleLinkClick}
                    rel="noopener noreferrer">
                    Careers <br />
                  </Link>

                  Blog <br />

                  <Link to="/holidays" style={{ textDecoration: 'none', color: 'inherit' }}
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}>
                    Holiday Package <br />
                  </Link>

                  Group booking <br />
                </p>
              </Typography>
            </Grid>

            <Grid xs={12} sm={6} md={3} sx={{ textAlign: "left", marginTop: "2%" }}>
              <Typography variant="h6" sx={{ color: "#FFF" }}>
                <b> Partnership with us</b> <br />
              </Typography>
              <Typography variant='h8' sx={{ color: "#FFF", lineHeight: "2" }}>
                <p sx={{ marginTop: "0%" }}>
                  <Link to="/franchise" style={{ textDecoration: 'none', color: 'inherit' }}
                     rel="noopener noreferrer">
                    Get Franchise </Link>
                  <br />
                  Travel Agent <br />
                  <Link to="/corporates" style={{ textDecoration: 'none', color: 'inherit' }}
                     rel="noopener noreferrer">
                    Corporate Enquiries <br />
                  </Link>
                  Flight <br />
                  Transport
                </p>
              </Typography>

            </Grid>

            <Grid item xs={12} sm={2} sx={{ marginTop: "2%", color: "#FFF", textAlign: "left" }}>
              <Typography variant="h6" sx={{ color: "#FFF" }}>
                <b> Policies</b> <br />
              </Typography>
              <Typography variant='h8' sx={{ color: "#FFF", lineHeight: "2" }}>
                <p sx={{ marginTop: "0%" }}>
                  <Link to="/faq" style={{ textDecoration: 'none', color: '#FFF' }}
                    onClick={handleLinkClick}
                    rel="noopener noreferrer">
                    FAQ <br />
                  </Link>

                  <Link to="/contactus" style={{ textDecoration: 'none', color: 'inherit' }}
                     rel="noopener noreferrer">
                    Contact Us <br />
                  </Link>

                  <Link to="/return-and-refund-policy" style={{ textDecoration: 'none', color: '#FFF' }}
                    onClick={handleLinkClick}
                    rel="noopener noreferrer">
                    Cancellation & Refund Policy <br />
                  </Link>

                  <Link to="/privacy-policy" style={{ textDecoration: 'none', color: '#FFF' }}
                    onClick={handleLinkClick}
                    rel="noopener noreferrer">
                    Privacy Policy <br />
                  </Link>

                  <Link to="/terms-and-conditions" style={{ textDecoration: 'none', color: 'inherit' }}
                     rel="noopener noreferrer">
                    Terms & Conditions
                  </Link>
                </p>

              </Typography>
            </Grid>

          </Box>

          <Grid sx={{ marginTop: "2%" }} > </Grid>

        </Box>

        <Divider orientation="vertical" sx={{ border: "1px solid white", marginTop: "2%" }} flexItem>

        </Divider>

        <Grid sx={{ marginLeft: "12%", marginTop: "3%", color: "white", textAlign: "left", }}>
          <Typography variant="h6" gutterBottom>
            <b>Idbook hotels </b>
          </Typography>
        </Grid>

        <Box sx={{
          justifyContent: "center",
          textAlign: "left",
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          marginTop: "1%"
        }}  >


          <Grid
            item
            xs={12}
            sm={3}
            md={2}
            marginTop="2%"
            sx={{ color: "#FFF" }}
          >


            <Typography variant="h8" gutterBottom>
              Hotels in Leh <br />
              Hotels in Ladakh<br />
              Hotels in Shimla<br />
              Hotels in Manali<br />
              Hotels in Jaipur<br />
              hotels in Darjeeling<br />
              Hotels in Jodhpur<br />
              Hotels in Jaisalmer<br />
              hotels in Mount Abu<br />
              Hotels in Bikaner<br />
              Hotels in Rameswaram<br />
              hotels in Ooty<br />
              Hotels in Kodaikanal<br />
            </Typography>



          </Grid>

          <Grid
            item
            xs={12}
            sm={3}
            md={2}
            marginTop="2%"
            sx={{ color: "#FFF" }}
          >


            <Typography variant="h8" gutterBottom>
              Hotels in Udaipur<br />
              Hotels in Goa<br />
              Hotels in Chandigarh<br />
              Hotels in Amritsar<br />
              Hotels in Ludhiana<br />
              Hotels in Delhi<br />
              Hotels in Gurgaon<br />
              Hotels in Noida<br />
              Hotels in Faridabad<br />
              Hotels in Gaziabaad<br />
              Hotels in Banglore<br />
              Hotels in Chennai<br />
              Hotels in Karnataka
            </Typography>



          </Grid>

          <Grid
            item
            xs={12}
            sm={3}
            md={2}
            marginTop="2%"
            sx={{ color: "#FFF" }}
          >


            <Typography variant="h8" gutterBottom>
              Hotels in Jalandhar<br />
              Hotels in Patiala<br />
              Hotels in Zirakpur<br />
              Hotels in Mussoorie<br />
              Hotels in Macleodganj<br />
              Hotels in Bhopal<br />
              Hotels in Khajuraho<br />
              Hotels in Gwalior<br />
              Hotels in Ujjain<br />
              Hotels in Indore<br />
              Hotels in Hyderabad<br />
              Hotels in Kolkata<br />
              Hotels in Mathura
            </Typography>



          </Grid>

          <Grid
            item
            xs={12}
            sm={3}
            md={2}
            marginTop="2%"
            sx={{ color: "#FFF" }}
          >


            <Typography variant="h8" gutterBottom>
              Hotels in Dharamshala<br />
              Hotels in Kasol<br />
              Hotels in Rishikesh<br />
              Hotels in Haridwar<br />
              Hotels in Auli<br />
              Hotels in Jabalpur<br />
              Hotels in Kanpur<br />
              Hotels in Amarkantak<br />
              Hotels in Rewa<br />
              Hotels in Katni<br />
              Hotels in Varanasi<br />
              Hotels in Vrindavan<br />
              Hotels in Mumbai
            </Typography>



          </Grid>

          <Grid
            item
            xs={12}
            sm={3}
            md={2}
            marginTop="2%"
            sx={{ color: "#FFF" }}
          >


            <Typography variant="h8" gutterBottom>
              Hotels in Dehradun<br />
              Hotels in Ranikhet<br />
              Hotels in Kedarnath<br />
              Hotels in Mukteshwar<br />
              Hotels in Dhanulti<br />
              Hotels in Maihar<br />
              Hotels in Satna<br />
              Hotels in Nagpur<br />
              Hotels in Pune<br />
              Hotels in Munnar<br />
              Hotels in Lucknow<br />
              Hotels in Prayagraj<br />
              Hotels in Chitrakoot<br />
            </Typography>



          </Grid>

          <Grid
            item
            xs={12}
            sm={3}
            md={2}
            marginTop="2%"
            sx={{ color: "#FFF" }}
          >


            <Typography variant="h8" gutterBottom>
              Hotels in Himachal<br />
              Hotels in Lansdowen<br />
              Hotels in Kathgodam<br />
              Hotels in Nainital<br />
              Hotels in Jim Corbett<br />
              Hotels in Alleppey<br />
              Hotels in Thekkady<br />
              Hotels in Kovalam<br />
              Hotels in Kanyakumari<br />
              Hotels inKochi<br />
              Hotels in Konark<br />
              Hotels in Puri <br />
              Hotels in Bhubaneswar
            </Typography>



          </Grid>

        </Box>

        <Grid sx={{ marginTop: "2%" }}></Grid>

        <ListItem button divider >
          <ListItemText primary="" />
        </ListItem>
        <Divider sx={{ border: "1px solid white" }} />

        <Box sx={{
          justifyContent: "center",
          textAlign: "left",
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          marginTop: "0%",
          justifyContent: 'space-around'
        }}  >

          <Grid xs={12} sm={6} md={4} >
            <Typography >
              <b> Follow Us</b>
            </Typography>
            <Box sx={{
              justifyContent: "center",
              textAlign: "left",
              alignItems: "center",
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
              marginTop: "5%"
            }} >

              {/* <TwitterIcon /> 
<FacebookIcon />
<YouTubeIcon />
<InstagramIcon /> */}

              <Link to={facebookUrl}>
                <img src={facebook} style={{ maxHeight: '25px', maxWidth: '25px' }} alt="Facebook" />
              </Link>

              <Link to={instagramUrl}>
                <img src={instagram} style={{ maxHeight: '25px', maxWidth: '25px' }} alt="Instagram" />
              </Link>

              <Link to={linkedinUrl}>
                <img src={linkedin} style={{ maxHeight: '25px', maxWidth: '25px' }} alt="LinkedIn" />
              </Link>

              <Link to={youtubeUrl}>
                <img src={youtube} style={{ maxHeight: '25px', maxWidth: '25px' }} alt="YouTube" />
              </Link>

              <Link to={quoraUrl}>
                <img src={quora} style={{ maxHeight: '25px', maxWidth: '25px' }} alt="Quora" />
              </Link>

              <Link to={pinterestUrl}>
                <img src={pinterest} style={{ maxHeight: '25px', maxWidth: '25px' }} alt="Pinterest" />
              </Link>

            </Box>

          </Grid>

          <Grid xs={12} sm={6} md={4} >
            <Typography >
              <b> Book Hotel Faster : Download our app</b>
            </Typography>
            <Box sx={{
              justifyContent: "center",
              textAlign: "left",
              alignItems: "center",
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
              marginTop: "5%"
            }} >

              <Grid>
                <img src={googleplay} alt="googleplay" />
              </Grid>

              <Grid className='appStore'>
                <img src={appSt} alt="appstore" />
              </Grid>
            </Box>

          </Grid>

          <Grid container md={4} className='payment-mmode' sx={{ display: 'flex', alignItems: 'center', width: '30%' }} spacing={2}>
            {/* Row 1 */}
            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
              <img src={visa} alt="Visa" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </Grid>

            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
              <img src={master} alt="MasterCard" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </Grid>

            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
              <img src={card3} alt="Card 3" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </Grid>

            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
              <img src={paypal} alt="PayPal" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </Grid>

            {/* Row 2 */}
            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center', marginTop: '4%' }}>
              <img src={rupay} alt="rupay" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </Grid>

            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center', marginTop: '4%' }}>
              <img src={upi} alt="upi" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </Grid>

            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center', marginTop: '4%' }}>
              <img src={paytm} alt="paytm" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </Grid>

            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center', marginTop: '4%' }}>
              <img src={pci} alt="Pci" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </Grid>
          </Grid>


        </Box>

        <ListItem button divider >
          <ListItemText primary="" />
        </ListItem>
        <Divider sx={{ border: "1px solid white" }} />

        <Box sx={{
          justifyContent: "center",
          textAlign: "left",
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
          gap: "100px",
          marginTop: "2%"
        }}  >

          <Grid xs={12} sm={6} md={4} >
            <Typography sx={{ fontSize: "20px" }}>
              <b> Idbook Hospitality Private Limited</b>
            </Typography>
          </Grid>

          <Grid xs={12} sm={6} md={4} >
            <Typography sx={{ fontSize: "20px" }}>
              <b> GSTIN : 06AAECI8163K129  </b>
            </Typography>
          </Grid>

          <Grid xs={12} sm={6} md={4} >
            <Typography sx={{ fontSize: "20px" }}>
              <b> © Idbook 2018-24 . All rights reserved.</b>
            </Typography>
          </Grid>

        </Box>






      </Box>

    </>
  );
}

export default Footer;
