import React from 'react';
import corpologo1 from '../Images/corpologo1.png';
import corpologo2 from '../Images/corpologo2.png';
import corpologo3 from '../Images/corpologo3.png';
import corpologo4 from '../Images/corpologo4.png';
import promisepics from '../Images/promisepics.png';
import promise1 from '../Images/promise1.png';
import promise2 from '../Images/promise2.png';
import promise3 from '../Images/promise3.png';
import mores from '../Images/mores.png';
import clientstories from '../Images/clientstories.png';
import leftarrow from '../Images/leftarrow.png';
import rytarrow from '../Images/rytarrow.png';
import nestle from '../Images/nestle.png';
import byjus from '../Images/byjus.png';
import lava from '../Images/lava.png';
import essar from '../Images/essar.png';
import corpopic from '../Images/corpopic.png';
import gst from '../Images/gst.png';

import { Box, Grid,  Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';

import Headercp from '../components/Headercp';
import Footer from '../components/Footer';

import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import '../App.css';

const Corporates = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>

    <Headercp />

<Box
          sx={{
            width: "100%",
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
            marginTop:"2%"
          }}
        >
          <Box sx={{
            display:"flex",
            flexWrap:"wrap",
            textAlign:"center",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Grid sx={{color:"#2C2E7B",fontSize:"48px"}}>
            <b> Idbook Hotel <br/>
            & Corporate <br/>
            Partners </b>
            </Grid>
            <Grid>
            <img src={corpopic} alt="corpopic" style={{ width: "100%", height:"auto" }} />
              </Grid>
              </Box>

<Box sx={{
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",
    fontSize:"36px",
    marginTop:"5%"
}}  >
<b> Idbook Hotel is offering special innovating Hospitality solutions to <br/>
      ease their business travel  </b>
</Box>

<Box sx={{
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",
    fontSize:"36px",
    marginTop:"5%",
    display:"flex",
    flexWrap:"wrap",
    gap:"40px"
}}  >
   <Grid >
    <img src={corpologo1} alt="corpologo1" />
   </Grid>

   <Grid >
    <img src={corpologo2} alt="corpologo2" />
   </Grid>

   <Grid >
    <img src={corpologo3} alt="corpologo3" />
   </Grid>

   <Grid >
    <img src={corpologo4} alt="corpologo4" />
   </Grid>

</Box>

<Box sx={{
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",
    fontSize:"36px",
    marginTop:"5%"
}}  >
<b>   Idbook Promise  </b>
</Box>

<Box sx={{
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",
    //fontSize:"36px",
    marginTop:"5%",
    display:"flex",
    flexWrap:"wrap",
    gap:"40px"
}}  >
   <Grid >
    <img src={promisepics} alt="promisepics" />
   </Grid>
   <Grid>
   <Box sx={{
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",
    //fontSize:"36px",
    //marginTop:"5%",
    display:"flex",
    flexWrap:"wrap",
    gap:"40px"
}}  >
   <Grid >
    <img src={promise1} alt="promise1" />
   </Grid>
   <Grid sx={{color:"",textAlign:"left"}}>
    <Typography variant='h6' >
        <b> Save Cost</b>
    </Typography>
    <Typography variant='subtitle1' sx={{marginTop:"2%"}}>
    Get easy access to 4000+ Idbook properties with up to 40% savings, <br/>
manage all your company bookings on a single portal, and say <br/>
 good-bye to third-party commissions.
    </Typography>
   </Grid>
   </Box>

   <Box sx={{
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",
    display:"flex",
    flexWrap:"wrap",
    gap:"40px"
}}  >
   <Grid >
    <img src={promise2} alt="promise2" />
   </Grid>
   <Grid sx={{textAlign:"left",marginTop:"5%"}}>
    <Typography variant='h6' >
        <b> Save Time</b>
    </Typography>
    <Typography variant='subtitle1' sx={{marginTop:"2%"}}>
    With Idbook's B’s effortless interface, have all your bookings at your<br/>
 fingertips anytime you need them.
    </Typography>
   </Grid>
   </Box>

   <Box sx={{
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",
    display:"flex",
    flexWrap:"wrap",
    gap:"40px"
}}  >
   <Grid >
    <img src={promise3} alt="promise3" />
   </Grid>
   <Grid sx={{color:"",textAlign:"left",marginTop:"5%"}}>
    <Typography variant='h6' >
        <b> Provide Transparency</b>
    </Typography>
    <Typography variant='subtitle1' sx={{marginTop:"2%"}}>
    Get invoices directly from us without any human intervention, <br/>
and always be in the know.
    </Typography>
   </Grid>
   </Box>


   </Grid>

   </Box>

   <Box sx={{
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",
    fontSize:"36px",
    marginTop:"8%",
   }} >
<Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Typography sx={{color:"black", fontSize:"32px",textTransform:"initial"}} >
        <b> There's more!</b>  </Typography>
      </Button>
      <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: '2rem',
        marginTop: '5%',
        justifyContent:'flex-end'
      }}
    >
      {/* Image Box */}
      <Box sx={{ textAlign: 'center' }} className='img-ban'>
        <img src={mores} alt="mores" />
      </Box>

      {/* Text Box */}
      <Box className='text-box' sx={{ position:'absolute', marginRight:'54px' }}>
        <Typography className='text-in' sx={{ bgcolor: "#1D498D", color: "#FFF" }}>
          <MenuItem><StackedBarChartIcon /> <p sx={{ marginTop: "2%" }}><b> Hassle-Free GST </b></p></MenuItem>
          <MenuItem><ReceiptLongIcon /> <p sx={{ marginTop: "2%" }}><b> Automatic and easy invoices </b></p></MenuItem>
          <MenuItem><TrackChangesIcon /> <p sx={{ marginTop: "2%" }}><b> Dedicated dashboard to track payments </b></p></MenuItem>
          <MenuItem><SmartphoneIcon /> <p sx={{ marginTop: "2%" }}><b> Mobile app with built-in approval flow and <br />
            custom budget limits </b></p></MenuItem>
          <MenuItem><WifiCalling3Icon /> <p sx={{ marginLeft: "2%" }}><b> Round-the-clock support of Idbook Team </b></p></MenuItem>
        </Typography>
      </Box>
    </Box>
   </Box>

   {/* <Menu
      > 
      <Typography sx={{bgcolor:"#1D498D",color:"#FFF"}} > 
        <MenuItem onClick={handleClose}> <StackedBarChartIcon /> <p sx={{marginTop:"2%"}} > <b>  Hassle-Free GST </b> </p>
        </MenuItem> 
        <MenuItem onClick={handleClose}> <ReceiptLongIcon /> <p sx={{marginTop:"2%"}} > <b> Automatic and easy invoices </b> </p>
        </MenuItem>
        <MenuItem onClick={handleClose}> <TrackChangesIcon /> <p sx={{marginTop:"2%"}} > <b>  Dedicated dashboard to track payments </b> </p>
          </MenuItem> 
          <MenuItem onClick={handleClose}> <SmartphoneIcon />  <p sx={{marginTop:"2%"}} > <b> Mobile app with built-in approval flow and <br/>  
custom budget limits </b> </p>
          </MenuItem> 
          <MenuItem onClick={handleClose}> <WifiCalling3Icon />  <p sx={{marginLeft:"2%"}} >  <b> Round-the-clock support of Idbook Team </b> </p>
          </MenuItem> 
        </Typography>
      </Menu> */}



   <Box sx={{
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",
    fontSize:"36px",
    marginTop:"8%",
   }} >
   <b>  Hassle-free GST  </b>
   </Box>

   <Box sx={{
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",
    //fontSize:"36px",
    //marginTop:"5%",
    display:"flex",
    flexWrap:"wrap",
    gap:"0px",
}}  >

   <Grid >
     <Accordion style={{ maxWidth: '500px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Claim input credit in every state</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ maxWidth: '500px',marginTop:"5%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Claim input credit for full GST amount</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ maxWidth: '500px',marginTop:"5%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>One - time Vendor Registratio & Payment</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

   </Grid>

   <Grid sx={{marginTop:"5%", maxWidth:'50%'}}>
    <img src={gst} alt="gst" />
   </Grid>

   </Box>

   <Box sx={{
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",
    marginTop:"5%"
   }} > 

   <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          marginLeft: "11%",
          width: 1128,
          height: 528,
          justifyContent:"center",
          textAlign:"center",
          alignItems:"center",
          
        },
      }}
    >
      <Paper elevation={6} >
     <Typography sx={{fontSize:"36px",marginTop:"5%"}}>
      <b> Stories from those who love us</b>
     </Typography>

     <Box sx={{
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",
    //fontSize:"36px",
    marginTop:"5%",
    display:"flex",
    flexWrap:"wrap",
    gap:"40px"
}}  >
<Grid>
<img src={leftarrow} alt="leftarrow" />
</Grid>

<Grid>
<img src={clientstories} alt="clientstories" />
</Grid>

<Grid sx={{textAlign:"left"}}>
Idbook’s corporate portal, expense tracking feature and<br/>
 GST proposition have made travel convenient and <br/>
 efficient for our employees. Additionally, with this <br/>
 partnership we are saving significantly on our travel <br/>
 expenses. "
</Grid>

<Grid>
<img src={rytarrow} alt="rytarrow" />
</Grid>

</Box>
      </Paper>
      
    </Box>

    </Box>


    <Box sx={{
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",
    marginTop:"9%",
    bgcolor:"#ECF6F8"
   }} >

{/* <Box sx={{
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",
    //fontSize:"36px",
    marginTop:"5%",
    display:"flex",
    flexWrap:"wrap",
    gap:"80px"
}}  >

  <Grid sx={{marginTop:"3%",marginBottom:"3%"}}>
<img src={nestle} alt="nestle" />
  </Grid>
  <Grid sx={{marginTop:"3%",marginBottom:"3%"}}>
<img src={byjus} alt="byjus" />
  </Grid>
  <Grid sx={{marginTop:"3%",marginBottom:"3%"}}>
<img src={lava} alt="lava" />
  </Grid>
  <Grid sx={{marginTop:"3%",marginBottom:"3%"}}>
<img src={essar} alt="essar" />
  </Grid>

</Box> */}

   </Box>










              </Box>

              <Footer />
      
    </>
  );
}

export default Corporates;
