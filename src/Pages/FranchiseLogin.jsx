import React, { useState } from 'react';
import idblogo from '../Images/idblogo.png';
import { Link } from 'react-router-dom';
import { Typography, TextField, Button, Grid, Box } from '@mui/material';
import '../App.css'


const FranchiseLogin = () => {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(false);
  
    const handleChange = (e) => {
      setEmail(e.target.value);
      setIsValid(!!e.target.value); // Check if the email field is not empty
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
    };
  
    const handleSignUp = () => {
       
    };

    return (
      <>
      <Box sx={{height:'60px', background:'linear-gradient(to right, rgba(29, 73, 141, 1), rgba(60, 101, 164, 1))'}}>
        <Link to="/" style={{textDecoration: 'none',  color: 'inherit'}} rel="noopener noreferrer"> 
            <div className="logo-label" >
<div style={{color:'white', padding:'18px 0'}} >Idbook</div>
{/* <img src={idblogo} alt="Logo" className="logo-image" style={{maxWidth:'150px', maxHeight:'56px'}} /> */}
</div>
            </Link></Box>
      <Box maxWidth={600} mx="auto" p={2}>
        <Typography variant="h5" textAlign='start'>Create your partner account</Typography>
        <Typography variant="body1" textAlign='start'>Create an account to list and manage your property.</Typography>

                    <form onSubmit={handleSubmit}>
                        <Grid container sx={{flexDirection:'column'}} spacing={2} alignItems="start">
                            <Grid item xs={12} sm={8} md={12} lg={12} sx={{flexDirection:'column', display:'flex'}}>
                                <label htmlFor="email" style={{textAlign:'start'}}>Email address</label>
                                <input type="email" id="email" name="email" value={email} onChange={handleChange} required />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Button type="submit" variant="contained" color="primary" fullWidth disabled={!isValid}>
                                    Continue
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
               
        <Typography variant="body1">
          Questions about your property or the Extranet? Check out{' '}
          <Link to="/partner-help">Partner Help</Link> or ask another partner in the{' '}
          <Link to="/partner-community">Partner Community</Link>.
        </Typography>
        <Button variant="outlined" color="primary" onClick={handleSignUp}>
          Sign in
        </Button>
        <Typography variant="body1">
          By signing in or creating an account, you agree with our{' '}
          <Link to="/terms">Terms & Conditions</Link> and{' '}
          <Link to="/privacy">Privacy Statement</Link>
        </Typography>
        <Typography variant="body1">Do not sell my personal information – California residents only</Typography>
        <Typography variant="body1">
          All rights reserved. Copyright (2006-2024) – Idbookhotels.com™
        </Typography>
      </Box>
      </>
  )
}

export default FranchiseLogin