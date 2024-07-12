import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import Header from '../components/Header';

//Icons

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import RoomRoundedIcon from '@mui/icons-material/RoomRounded';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

//Images 

import professional from '../Images/professional.png';
import { EmailRounded } from '@mui/icons-material';
import Foop12 from '../components/Foop12';

const Contactus = () => {
  return (
    <>
 
    <Header />
    {/********************************* part 1 *****************************************/}

    <Box sx={{
        marginTop:"3%",
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center",
        display:"flex",
        flexWrap:"wrap"

    }} >

      <Grid xs={12} sm={6} md={6} >
        <Typography variant='h3' >
            <b> Contact <br/>
             Idbook hotels </b>

        </Typography>
      </Grid>

      <Grid xs={12} sm={6} md={6} >
      <img src={professional} alt="professinal" style={{width:"100%",height:"auto"}}/>
      </Grid>

    </Box>


    {/*************************************** part 2 ************************************/}
      

    <Box sx={{
        marginTop:"5%",
        justifyContent:"center",
        textAlign:"left",
        alignItems:"center",
        display:"flex",
        gap:"80px",
        flexWrap:"wrap"

    }}  >
       
       <Grid xs={12} sm={6} md={6} >
        <Typography variant='h6' sx={{color:"grey"}}>
        Would like to talk?
        </Typography>

        <Typography variant='h4'>
            <b> Contact Details </b>
        </Typography>

        <Typography variant='subtitle2' sx={{marginTop:"5%",color:"grey"}}>
        If you have a question that has not been answered on our website, please get in <br/>
touch with us via contact details listed below or fill in the form on the right.
        </Typography>

        <Typography variant='subtitle2' sx={{m:2,color:"#4090E5"}}>
       <RoomRoundedIcon color="primary"/> 
        <b> VPO- SARHAUL,SEC-18,GURUGRAM,Haryana, 122001</b> <br/>
        <PhoneIcon color="primary"/> <b>+91 81001 50924</b> <br/>
        <WhatsAppIcon color="success" /> <b>+91 81001 50924</b> <br/>
        <EmailRounded color="primary"/> <b>info@idbookhotels.com </b><br/>
        </Typography>

       <Box sx={{gap:"10px",display:"flex",m:2}} >
        <Grid>
        <InstagramIcon  color="secondary" />
        </Grid>
        <Grid>
        <FacebookIcon color="primary"/>
        </Grid>
        <Grid >
        <TwitterIcon color="primary"/>
        </Grid>
        <Grid>
        <YouTubeIcon color="error"/>
        </Grid>
        <Grid>
        <LinkedInIcon color="primary"/>
        </Grid>
        </Box>
       </Grid>


       <Grid xs={12} sm={6} md={6} sx={{marginTop:"0%"}}>
        <Typography variant='subtitle1' sx={{color:"grey"}}>
        Have a question?
        </Typography>

        <Typography variant='h4' >
            <b> Get in Touch </b>
        </Typography>

        <Box sx={{
            marginTop:"2%",
            display:"flex",
            gap:"10px",
            flexWrap:"wrap"
        }} >
            <Grid xs={6} sm={3} md={3} >
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            </Grid>

            <Grid xs={6} sm={3} md={3} >
            <TextField id="outlined-basic" label="Your name" variant="outlined" />
            </Grid>

        </Box>

        <Box sx={{
            marginTop:"3%",
            display:"flex",
            gap:"10px",
            flexWrap:"wrap"
        }} >
            <Grid xs={6} sm={3} md={3} >
            <TextField id="outlined-basic" label="phone" variant="outlined" />
            </Grid>

            <Grid xs={6} sm={3} md={3} >
            <TextField id="outlined-basic" label="Inserted destination" variant="outlined" />
            </Grid>

            </Box>
         
         <Box sx={{
             marginTop:"3%",
             display:"flex",
             gap:"10px",
             flexWrap:"wrap"
         }} >
            <Grid xs={6} sm={6} md={6} >
            <TextField id="outlined-basic" label="Subject" variant="outlined" style={{width:"205%"}}/>
            </Grid>

        </Box>

        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { marginTop: '3%', width: '52ch' },
      }}
      noValidate
      autoComplete="off"
    >
            <Grid xs={6} sm={6} md={6} >
            <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={8}
          defaultValue="Default Value"
        />
            </Grid>

        </Box>

        <Button variant="contained" sx={{marginTop:"3%"}}
        endIcon={<SendIcon />}>
          Send
        </Button>

       </Grid>

    </Box>



 <Foop12 />




    </>
  );
}

export default Contactus;
