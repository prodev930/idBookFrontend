import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Grid, Divider, Paper } from '@mui/material';
import '../App.css';
import Loginheader from '../components/Loginheader';
import PaymentDetails from '../components/Paymentdetails';
import Footer from '../components/Footer';

const Booking = () => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [passcodeSent, setPasscodeSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerificationCodeValid, setIsVerificationCodeValid] = useState(false);
  const [isVerifyButtonClicked, setIsVerifyButtonClicked] = useState(false);
  const [isContinueButtonVisible, setIsContinueButtonVisible] = useState(false);
  const [isContinueButtonClicked, setIsContinueButtonClicked] = useState(false);
  const [isPaymentDetailsVisible, setIsPaymentDetailsVisible] = useState(false);
  const [validationMessages, setValidationMessages] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });


  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value.replace(/[^a-zA-Z\s]/g, '')); // Allow only letters and spaces
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value.replace(/[^0-9]/g, '')); // Allow only numeric input
  };

  const handleSendPasscodeClick = () => {
    let isValid = true;
    const updatedValidationMessages = { fullName: '', email: '', phoneNumber: '' };

    if (fullName.trim() === '') {
      updatedValidationMessages.fullName = 'Full Name is required';
      isValid = false;
    }

    if (!validateEmail(email)) {
      updatedValidationMessages.email = 'Enter a valid email address';
      isValid = false;
    }

    if (phoneNumber.trim() === '') {
      updatedValidationMessages.phoneNumber = 'Mobile Number is required';
      isValid = false;
    }

    setValidationMessages(updatedValidationMessages);

    if (isValid) {
      // Add your logic to send passcode (e.g., API call)
      setPasscodeSent(true);
    }
  };

  const handleVerificationCodeChange = (event) => {
    setVerificationCode(event.target.value.replace(/[^0-9]/g, '')); // Allow only numeric input
    setIsVerificationCodeValid(event.target.value.length === 4);
  };

  const handleVerifyContinueClick = () => {
    setIsContinueButtonClicked(true);
    // Add your logic for verification and continue
    // Redirect to payments page or perform other actions
    // if (isVerificationCodeValid) {
    //   window.location.href = 'https://pages.razorpay.com/pl_NLzd5ZdUezy4Wl/view';
    // }
  };

  const handleVerifyClick = () => {
    setIsVerifyButtonClicked(true);
    setIsContinueButtonVisible(true);
  };

  const handleContinueClick = () => {
    setIsContinueButtonClicked(true);
    setIsPaymentDetailsVisible(true);
  };
  return (
    <>
    <Loginheader/>
    <div style={{display:'block', color:'#1D498D', textAlign:'start', padding:'0 50px'}} id='booking-mode'>
        <Typography sx={{fontSize:'32px', padding:'40px 0'}}>
  Modify your booking
</Typography>
<Grid sx={{
    background:'#FEF6E9',
    color:'#EB6B6B',
    padding:'20px',
    textAlign:'center'
}}><Typography
>
Yay! you just saved ₹ 298 on this booking!
</Typography></Grid>

<Box
      sx={{
        mx: 'auto',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        mt: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
      }}
    >
      <Box
        sx={{
          boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
          bg: 'white',
          p: '15px',
          display: 'flex',
          alignItems: 'stretch',
          gap: 2,
          flexWrap: 'wrap',
          background: '#F9F9FB',
          marginBottom: '20px',
        }}
      >
        <div
          className="header text-black text-base font-medium tracking-tight aspect-[1.04] justify-center items-stretch px-2.5 py-2 rounded-full self-start"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          1
        </div>
        <Typography
          variant="h4"
          className="booking-text text-stone-300 text-2xl font-medium tracking-tight grow shrink basis-auto"
          sx={{ flexGrow: 1, alignSelf: 'center', fontSize: '32px', padding: '30px' }}
        >
          Enter Your Details
        </Typography>
      </Box>

      <Typography variant="body2" mb={3} color="textSecondary" sx={{ padding: '0 15px', textAlign: 'start' }}>
        We will use these details to share your booking information
      </Typography>

      <form style={{ padding: '20px' }}>
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              aria-label="Enter your full name"
              value={fullName}
              onChange={handleFullNameChange}
              error={validationMessages.fullName !== ''}
              helperText={validationMessages.fullName}
              inputProps={{ maxLength: 50 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              aria-label="Enter your email address"
              value={email}
              onChange={handleEmailChange}
              error={validationMessages.email !== ''}
              helperText={validationMessages.email}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Mobile Number"
              variant="outlined"
              fullWidth
              aria-label="Enter your mobile number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              error={validationMessages.phoneNumber !== ''}
              helperText={validationMessages.phoneNumber}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            {passcodeSent ? (
              <>
                <TextField
                  label="Enter Passcode"
                  variant="outlined"
                  fullWidth
                  aria-label="Enter passcode"
                  value={verificationCode}
                  onChange={handleVerificationCodeChange}
                  inputProps={{ maxLength: 4 }}
                />
                 <Button
        variant="contained"
        color="success"
        fullWidth
        onClick={handleVerifyClick}
        disabled={!isVerificationCodeValid}
        sx={{ marginTop: '10px', display: isContinueButtonVisible ? 'none' : 'block' }}
      >
        Verify
      </Button>
      <Button
        variant="contained"
        color="success"
        fullWidth
        onClick={handleContinueClick}
        disabled={!isVerificationCodeValid || !isContinueButtonVisible}
        sx={{ marginTop: '10px', display: isContinueButtonVisible ? 'block' : 'none' }}
      >
        Continue
      </Button>
              </>
            ) : (
              <Button
                variant="outlined"
                fullWidth
                onClick={handleSendPasscodeClick}
              >
                Send Passcode
              </Button>
            )}
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ width: '40%', marginTop: '10px' }}
          onClick={handleVerifyContinueClick}
        >
          Submit
        </Button>
      </form>
    </Box>

     {isContinueButtonClicked ? (
        <PaymentDetails />
      ) : (
        <Box
      sx={{
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
        bg: 'white',
        display: 'flex',
        alignItems: 'stretch',
        gap: 2,
        flexWrap: 'wrap',
        padding:'20px',
        margin:'30px auto'
      }}
    >
      <div
        className="header text-black text-base font-medium tracking-tight aspect-[1.04] justify-center items-stretch px-2.5 py-2 rounded-full self-start"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        2
      </div>
      <Typography
        variant="h4"
        className="booking-text text-stone-300 text-2xl font-medium tracking-tight grow shrink basis-auto"
        sx={{ flexGrow: 1, alignSelf: 'center' }}
      >
        Complete Your Booking
      </Typography>
    </Box>
      )}
    

    <Box sx={{  padding: 3, color:'black',
 width: { xs: '100%', md: '60%' },
border: '1px solid #ddd',
borderRadius: '8px',
boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
mt: 4,
display: 'flex',
flexDirection: 'column',
alignItems: 'stretch', }}
>
      <Typography variant="h4" mb={2}>
        Hotel Page Title
      </Typography>
      <Typography variant="body1" mb={2}>
        Hotel Location Details
      </Typography>

      <Grid container spacing={2} alignItems="center" mb={2}>
        <Grid item xs={6} sx={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
          <Typography variant="h6">4.5</Typography>
          <Typography variant="body1">(1200)</Typography>
        </Grid>
        {/* <Grid item xs={6}>
          <Typography variant="h6">Number of Ratings:</Typography>
          <Typography variant="body1">1200</Typography>
        </Grid>*/}
      </Grid> 

      <Typography variant="body1" mb={1}>
        3 Nights
      </Typography>
      
<Paper sx={{ p: 2, margin:'14px 0', border:'1px solid #C4C4C4', boxShadow:'none'}}>
From 01/01/2024 (Monday) to 03/01/2024 (Wednesday)
</Paper>
<Paper sx={{ p: 2, margin:'14px 0', border:'1px solid #C4C4C4', boxShadow:'none'}}>
Deluxe Room
</Paper>
{/* <Typography variant="body1" mb={1}>
        Booking Dates: From 01/01/2024 (Monday) to 03/01/2024 (Wednesday)
      </Typography> */}
      <Box sx={{display:'flex', justifyContent:'space-between'}}>
      <Typography variant="body1" mb={1}>
        Rooms and Guests
      </Typography>
      <Typography variant="body1" mb={1}>
      ₹ 2099
      </Typography>
      </Box>

      <Box sx={{display:'flex', justifyContent:'space-between'}}>
      <Typography variant="body1" mb={1}>
      Price Drop
      </Typography>
      <Typography variant="body1" mb={1}>
      -₹ 908
      </Typography>
      </Box>
      <Box sx={{display:'flex', justifyContent:'space-between'}}>
      <Typography variant="body1" mb={1}>
      25% Couppon Discount
      </Typography>
      <Typography variant="body1" mb={1}>
      -₹ 298
      </Typography>
      </Box>

      <Divider mb={2} />

      <Paper elevation={3} sx={{ py: 2, display:'flex', justifyContent:'space-between', boxShadow:'none' }}>
        <Typography variant="h6">Total Payable Amount:</Typography>
        <Typography variant="h4">$280</Typography>
      </Paper>
    </Box>

    </div>
    <Footer />
    </>
  )
}

export default Booking