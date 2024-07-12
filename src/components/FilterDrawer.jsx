import React, { useState } from 'react';
import { Grid, Button, Box, Typography, Checkbox, Drawer, IconButton, Pagination } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const FilterDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerToggle = ({ open, onClose }) => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Drawer anchor="left" open={open} onClose={handleDrawerToggle}>
    <Box sx={{ width: 250 }}>
      <IconButton onClick={onClose} sx={{ float: 'right' }}>
        <CloseIcon />
      </IconButton>
      <Button variant='contained' style={{color:"black",
      backgroundColor:"#FFF",
      border:"1px solid black",borderRadius:'22px',
      textTransform:"initial",marginLeft:"8%"}}>
          Types of Place <br/>
      </Button>
      {/* Filter options go here */}
      {/* Modify your filter options as needed */}
  
  <Box sx={{display:"flex",marginTop:"2%",flexWrap:"wrap"}} >
      <Box sx={{marginTop:"3%"}}>
      <Checkbox {...label} />            
      </Box>
      <Box  >
      <Typography  variant="h5" sx={{color:"grey",textAlign:"left",marginTop:"5%"}}>
      Entire place <br/> </Typography>          
      </Box>
      </Box>
      <Box sx={{display:"flex",marginTop:"2%"}} >
      <Box sx={{marginTop:"3%"}}>
      <Checkbox {...label} />            
      </Box>
  <Box  >
      <Typography  variant="h5" sx={{color:"grey",textAlign:"left",marginTop:"5%"}}>
      Private room <br/> </Typography>         
      </Box>
      </Box>

      <Box sx={{display:"flex",marginTop:"2%"}} >
      <Box sx={{marginTop:"3%"}}>
      <Checkbox {...label} />            
      </Box>
      <Box  >
      <Typography  variant="h5" sx={{color:"grey",textAlign:"left",marginTop:"5%"}}>
      Hotel room <br/> </Typography>
      </Box>
      </Box>

      <Box sx={{display:"flex",marginTop:"2%"}} >
      <Box sx={{marginTop:"3%"}}>
      <Checkbox {...label} />            
      </Box>
      <Box  >
      <Typography  variant="h5" sx={{color:"grey",textAlign:"left",marginTop:"5%"}}>
      Shared room <br/> </Typography>
      </Box>
      </Box>
      <hr/>
      <Typography variant='h6' sx={{
     marginTop:"5%"
      }} >
          <b> Hotel Categories</b>
      </Typography>
      <Box sx={{
          display:"flex",marginTop:"2%"
      }} >
          <Box sx={{marginTop:"3%",fontSize:"20px",color:"grey"}}>
      <Checkbox {...label} />  5 Star 
      
      </Box>
      </Box>

      <Box sx={{
          display:"flex",marginTop:"2%"
      }} >
          <Box sx={{marginTop:"0%",fontSize:"20px",color:"grey"}}>
      <Checkbox {...label} />  4 Star 
      
      </Box>
      </Box>

      <Box sx={{
          display:"flex",marginTop:"2%"
      }} >
          <Box sx={{marginTop:"0%",fontSize:"20px",color:"grey"}}>
      <Checkbox {...label} />  3 Star 
      
      </Box>
      </Box>
      <hr/>
      <Typography variant='h6' sx={{
     marginTop:"5%"
      }} >
          <b> Property Type</b>
      </Typography>
    
      <Box sx={{
          display:"flex",marginTop:"2%"
      }} >
          <Box sx={{marginTop:"3%",fontSize:"20px",color:"grey"}}>
      <Checkbox {...label} />  Hotel 
      
      </Box>
      </Box>

      <Box sx={{
          display:"flex",marginTop:"2%"
      }} >
          <Box sx={{marginTop:"0%",fontSize:"20px",color:"grey"}}>
      <Checkbox {...label} /> Apartment 
      
      </Box>
      </Box>

      <Box sx={{
          display:"flex",marginTop:"2%"
      }} >
          <Box sx={{marginTop:"0%",fontSize:"20px",color:"grey"}}>
      <Checkbox {...label} />  Villa 
      
      </Box>
      </Box>
      <hr/>
      <Typography variant='h6' sx={{
     marginTop:"5%"
      }} >
          <b> Price Per Night</b>
      </Typography>
    
      <Box sx={{
          display:"flex",marginTop:"2%"
      }} >
          <Box sx={{marginTop:"3%",fontSize:"20px",color:"grey"}}>
      <Checkbox {...label} />  ₹ 0-₹ 2000 
      
      </Box>
      </Box>

      <Box sx={{
          display:"flex",marginTop:"2%"
      }} >
          <Box sx={{marginTop:"0%",fontSize:"20px",color:"grey"}}>
      <Checkbox {...label} />₹ 2000-₹ 4000 
      
      </Box>
      </Box>

      <Box sx={{
          display:"flex",marginTop:"2%"
      }} >
          <Box sx={{marginTop:"0%",fontSize:"20px",color:"grey"}}>
      <Checkbox {...label} />  ₹ 4000- ₹ 7000
      
      </Box>
      </Box>
     

    </Box>
  </Drawer>
  );
};

export default FilterDrawer;
