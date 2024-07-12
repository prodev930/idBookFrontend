import React, { useState } from 'react';
import { Box, Typography,
    TextField, Button, Grid, Divider, Paper,
    Radio, RadioGroup, FormControlLabel,
    Select, MenuItem,InputLabel, FormControl } from '@mui/material';

    

const PaymentDetails = () => {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('');
  const [paymentForm, setPaymentForm] = useState({
    upi: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [validationMessages, setValidationMessages] = useState({
    upi: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    expMnth: '',
    fullName: '',
    nameOnCard: '',
  });

  const handlePaymentOptionChange = (option) => {
    setSelectedPaymentOption(option);
    setPaymentForm({
      upi: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      expMnth: '',
    fullName: '',
    nameOnCard: '',
    });
    setValidationMessages({
      upi: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      expMnth: '',
    fullName: '',
    nameOnCard: '',
    selectedBank: ''
    });
  };

  const handleInputChange = (field, value) => {
    setPaymentForm({
      ...paymentForm,
      [field]: value,
    });
    setValidationMessages({
      ...validationMessages,
      [field]: '',
    });
  };

  const handlePayNowClick = () => {
    let isValid = true;
    const updatedValidationMessages = { upi: '', cardNumber: '', expiryDate: '', cvv: '', expMnth: '',
    fullName: '',
    nameOnCard: '',
    selectedBank: ''
    };

    if (!paymentForm.selectedBank && !paymentForm.otherBank) {
        updatedValidationMessages.selectedBank = 'Please select a bank';
        isValid = false;
      }

    Object.keys(paymentForm).forEach((field) => {
      if (paymentForm[field].trim() === '') {
        updatedValidationMessages[field] = `${field === 'expiryDate' ? 'Expiry Date' : field} is required`;
        isValid = false;
      }
    });

    setValidationMessages(updatedValidationMessages);

    if (isValid) {
      // Add your logic for payment submission
      console.log('Payment submitted successfully');
    }
  };

  return (
    <Box
      sx={{
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
        bg: 'white',
        display: 'flex',
        alignItems: 'stretch',
        gap: 2,
        flexWrap: 'wrap',
        padding: '20px',
        margin: '30px auto',
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
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} sx={{color:'black', background:'#F9F9FB'}}>
          <Typography variant="h6">Payment Options</Typography>
          <div className='payment-mode' style={{display:'flex', flexDirection:'column'}}>
          <Divider sx={{border:"1px solid #C4C4C4"}}/>
            <Button
              variant={selectedPaymentOption === 'upi' ? 'contained' : 'outlined'}
              onClick={() => handlePaymentOptionChange('upi')}
              sx={{ margin: '5px' }}
            >
              UPI
            </Button>
            <Divider sx={{border:"1px solid #C4C4C4"}}/>
            <Button
              variant={selectedPaymentOption === 'card' ? 'contained' : 'outlined'}
              onClick={() => handlePaymentOptionChange('card')}
              sx={{ margin: '5px' }}
            >
              Credit/Debit Card
            </Button>
            <Divider sx={{border:"1px solid #C4C4C4"}}/>
            <Button
              variant={selectedPaymentOption === 'nb' ? 'contained' : 'outlined'}
              onClick={() => handlePaymentOptionChange('nb')}
              sx={{ margin: '5px' }}
            >
              Net Banking
            </Button>
            <Divider sx={{border:"1px solid #C4C4C4"}}/>
            <Button
              variant={selectedPaymentOption === 'gwm' ? 'contained' : 'outlined'}
              onClick={() => handlePaymentOptionChange('gwm')}
              sx={{ margin: '5px' }}
            >
              Gift Cards, Wallets & More
            </Button>
            <Divider sx={{border:"1px solid #C4C4C4"}}/>
            <Button
              variant={selectedPaymentOption === 'gp' ? 'contained' : 'outlined'}
              onClick={() => handlePaymentOptionChange('gp')}
              sx={{ margin: '5px' }}
            >
              GooglePay
            </Button>
            <Divider sx={{border:"1px solid #C4C4C4"}}/>
            <Button
              variant={selectedPaymentOption === 'pp' ? 'contained' : 'outlined'}
              onClick={() => handlePaymentOptionChange('pp')}
              sx={{ margin: '5px' }}
            >
              PhonePe
            </Button>
            <Divider sx={{border:"1px solid #C4C4C4"}}/>
            {/* Add more payment options as needed */}
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Payment Information</Typography>
          {selectedPaymentOption === 'upi' && (
            <TextField
              label="UPI ID"
              variant="outlined"
              fullWidth
              value={paymentForm.upi}
              onChange={(e) => handleInputChange('upi', e.target.value)}
              error={validationMessages.upi !== ''}
              helperText={validationMessages.upi}
            />
          )}
          {selectedPaymentOption === 'gp' && (
            <TextField
              label="UPI ID"
              variant="outlined"
              fullWidth
              value={paymentForm.upi}
              onChange={(e) => handleInputChange('upi', e.target.value)}
              error={validationMessages.upi !== ''}
              helperText={validationMessages.upi}
            />
          )}
          {selectedPaymentOption === 'pp' && (
            <TextField
              label="UPI ID"
              variant="outlined"
              fullWidth
              value={paymentForm.upi}
              onChange={(e) => handleInputChange('upi', e.target.value)}
              error={validationMessages.upi !== ''}
              helperText={validationMessages.upi}
            />
          )}
          {selectedPaymentOption === 'card' && (
            <>
              <TextField
                label="Card Number"
                variant="outlined"
                fullWidth
                value={paymentForm.cardNumber}
                onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                error={validationMessages.cardNumber !== ''}
                helperText={validationMessages.cardNumber}
              />
              <TextField
                label="Expiry Date"
                variant="outlined"
                fullWidth
                value={paymentForm.expiryDate}
                onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                error={validationMessages.expiryDate !== ''}
                helperText={validationMessages.expiryDate}
              />
              <TextField
                label="CVV"
                variant="outlined"
                fullWidth
                value={paymentForm.cvv}
                onChange={(e) => handleInputChange('cvv', e.target.value)}
                error={validationMessages.cvv !== ''}
                helperText={validationMessages.cvv}
              />
            </>
          )}
          {selectedPaymentOption === 'nb' && (
            <>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                value={paymentForm.cardNumber}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                error={validationMessages.cardNumber !== ''}
                helperText={validationMessages.cardNumber}
              />
              <TextField
                label="Expiry Month & Year"
                variant="outlined"
                fullWidth
                value={paymentForm.expiryDate}
                onChange={(e) => handleInputChange('expMnth', e.target.value)}
                error={validationMessages.expiryDate !== ''}
                helperText={validationMessages.expiryDate}
              />
              <TextField
                label="CVV"
                variant="outlined"
                fullWidth
                value={paymentForm.cvv}
                onChange={(e) => handleInputChange('cvv', e.target.value)}
                error={validationMessages.cvv !== ''}
                helperText={validationMessages.cvv}
              />
            </>
          )}
          {selectedPaymentOption === 'gwm' && (
            <>
            <Typography variant="h6" mb={1} mt={5} color="black">
            Popular Banks
    </Typography>
              <RadioGroup
                aria-label="Bank Options"
                name="bankOptions"
                value={paymentForm.selectedBank}
                onChange={(e) => handleInputChange('selectedBank', e.target.value)}
              >
                <FormControlLabel value="sbi" control={<Radio />} label="SBI" />
                <FormControlLabel value="hdfc" control={<Radio />} label="HDFC" />
                <FormControlLabel value="icici" control={<Radio />} label="ICICI" />
              </RadioGroup>

              <Typography variant="h6" mb={1} mt={5} color="black">
              Other Banks
    </Typography>
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Select Bank</InputLabel>
  <Select
  label="Select Bank"
  variant="outlined"
  fullWidth
  value={paymentForm.otherBank}
  onChange={(e) => handleInputChange('otherBank', e.target.value)}
  displayEmpty
  inputProps={{ 'aria-label': 'Select Bank' }}
>
  {!paymentForm.otherBank && (
    <MenuItem value="" disabled>
      Select Bank
    </MenuItem>
  )}
  <MenuItem value="axis">Axis Bank</MenuItem>
  <MenuItem value="kotak">Kotak Mahindra Bank</MenuItem>
  <MenuItem value="others">Other Banks</MenuItem>
</Select> 
</FormControl>
            </>
          )}
          <Button variant="contained" color="primary" fullWidth onClick={handlePayNowClick} sx={{ marginTop: '10px' }}>
            Pay Now
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentDetails;
