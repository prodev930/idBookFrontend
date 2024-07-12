import { Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import Facebook from '../Images/Facebook.png';
import Google from '../Images/Google.png';
import Linkedin from '../Images/Linkedin.png';
import { Link } from 'react-router-dom';
import loginBg from '../Images/loginBg.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CpSignup = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          width: "100%",
          height: "auto",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          display: { xs: 'flex', justifyContent: 'space-around' }
        }}
      >
        <Box className='banner-content' sx={{ display: { xs: 'none', sm: 'none', md: 'block' }, width: '50%' }} >
          <Grid xs={12} sm={6} md={2} >
            <img src={loginBg} alt="signup" style={{ width: "80%", height: "auto" }} />
          </Grid>
        </Box>
        <div className='sinup-content'>
          <Grid sx={{ textAlign: "center" }}>
            <Typography variant="h3" sx={{ marginTop: "6%", color: "black" }}>
              <b>SignUp</b>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} sx={{ marginTop: "2%" }}>
            <TextField
              id='name'
              name='name'
              label=" Company Legal Name"
              type="text"
              variant="outlined"
              InputProps={{ sx: { borderRadius: "33px", width: "450px" } }}

            >
            </TextField>
          </Grid>
          <Grid item xs={12} sm={12} sx={{ marginTop: "2%" }}>
            <TextField
              id='address'
              name='address'
              label="Company Addres"
              type="text"
              variant="outlined"
              InputProps={{ sx: { borderRadius: "33px", width: "450px" } }}

            >
            </TextField>
          </Grid>
          <Grid item xs={12} sm={12} sx={{ marginTop: "2%" }}>
            <TextField
              id='gstin'
              name='gstin'
              label="GSTIN"
              type="text"
              variant="outlined"
              InputProps={{ sx: { borderRadius: "33px", width: "450px" } }}
            >
            </TextField>
          </Grid>
          <Grid item xs={12} sm={12} sx={{ marginTop: "2%" }}>
            <TextField
              id='pan'
              name='pan'
              label="PAN"
              type="text"
              variant="outlined"
              InputProps={{ sx: { borderRadius: "33px", width: "450px" } }}

            >
            </TextField>
          </Grid>
          <Grid item xs={12} sm={12} sx={{ marginTop: "2%" }}>
            <TextField
              id='numb'
              name='number'
              label="Mobile Number"
              type="text"
              variant="outlined"
              InputProps={{ sx: { borderRadius: "33px", width: "450px" } }}
            >
            </TextField>
          </Grid>
          <Grid item xs={12} sm={12} sx={{ marginTop: "2%" }}>
            <TextField
              id='email'
              name='email'
              label="Official Email address"
              type="email"
              variant="outlined"
              InputProps={{ sx: { borderRadius: "33px", width: "450px" } }}

            >
            </TextField>
          </Grid>

          <Grid item xs={12} sm={12} sx={{ marginTop: "2%" }}>
            <TextField
              id='Password'
              name='Password'
              label=" Password"
              type="Password"
              variant="outlined"
              InputProps={{ sx: { borderRadius: "33px", width: "450px" } }}

            >
            </TextField>
          </Grid>


          <Grid sx={{ marginTop: "3%" }}>
            <Button
              type="submit"
              sx={{
                border: "1px",
                borderRadius: "34px",
                color: "#FFF",
                background: "#1F4A8E",
                width: "450px",
                height: "50px",
                "&:hover": {
                  backgroundColor: "#1F4A8E",
                },
                margin: "0 auto",
              }}
            >

              <b> Continue </b>
            </Button>
          </Grid>

          <Grid sx={{ marginTop: "4%" }}>
            <Typography variant='h6'>
              Already have an account?
              <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}
               rel="noopener noreferrer">
                <u>Login </u>
              </Link>
            </Typography>
          </Grid>


          <Grid
            item
            xs={12} sm={12} sx={{ marginTop: "4%" }}
            container
            alignItems="center"
            justifyContent="center"

          >
            <IconButton type="default">
              <img src={Google} alt="" />
            </IconButton>

            <IconButton type="default">

              <img src={Facebook} alt="" />
            </IconButton>

            <IconButton type="default">
              <img src={Linkedin} alt="" />
            </IconButton>
          </Grid>
        </div>
      </Box>

      <Footer />
    </>
  );
}

export default CpSignup;
