import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';

import LocationOnIcon from '@mui/icons-material/LocationOn';

import Header from '../components/Header';

import first from '../Images/first.png';
import Foop12 from '../components/Foop12';

import { styled } from '@mui/material/styles';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SendIcon from '@mui/icons-material/Send';
  
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const Career = () => {
  return (
    <>

    {/*********************************** Header *************************/}

    <Header />



    <Box sx={{
       overflow:"hidden",
       width:"100%",
       marginTop:"3%"
    }} >
      

       
<Box sx={{
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    marginTop:"3%",
    display:"flex",
    //flexWrap:"wrap",
    flexDirection: "column",
    gap: "20px",
    
   }}
>



 {/* <Grid xs={12}  md={6} >
  
  <Typography variant='h3' >
    <b> Become a <br/>
         Idbookpreneur</b>
   </Typography>

   
   </Grid> */}



</Box>

<Box sx={{
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    //marginTop:"4%", 
  }}>
<Box sx={{display:"flex", gap:"20px",flexWrap:"wrap"}}>
<Grid xs={12}  md={9} sx={{marginTop:"6%",fontSize:"55px",marginLeft:"13%"}}>
  <b> Become a <br/>
Idbookpreneur</b>
</Grid>

<Grid xs={12}  md={3} sx={{marginTop:"-5%",}}>
   <img src={first} alt="first" style={{width:"90%",height:"auto",}} />
  </Grid>
  </Box>

  </Box>

<Box sx={{
  justifyContent:"center",
  textAlign:"center",
  alignItems:"center",
  marginTop:"0%",
  display:"flex",
  flexWrap:"wrap",
  gap:"40px"
  
}}  >

  <Grid xs={12} sm={6} md={6} > 

  <Typography variant='h3' sx={{color:"#3543BF",textAlign:"left"}}>
    <b>Career</b>
  </Typography>

  <Typography sx={{marginTop:"5%"}} ></Typography>

  <Typography variant='h5' sx={{color:"#195AFE",marginTop:"0%",textAlign:"left"}}>
    <b> What we are looking for?</b>
  </Typography>

  <Typography variant='h6' sx={{marginTop:"3%",textAlign:"left",color:"grey"}}>
  Dynamic and agile thinkers, adept at swift execution,<br/>
  proactive achievement,and dedicated hard work—<br/>
  qualities that define our approach to success in<br/> the hospitality industry.
  </Typography>


  <Typography variant='h5' sx={{color:"#195AFE",marginTop:"3%",textAlign:"left"}}>
    <b> What you will gain?</b>
  </Typography>

  <Typography variant='h6' sx={{marginTop:"3%",textAlign:"left",color:"grey"}}>
  Extensive experience in a dynamic startup environment,<br/>
   collaborating on groundbreaking products and solutions<br/>
    within the hospitality industry. Thrive in fast-paced <br/>
    settings and contribute to the evolution of cutting-edge <br/>
offerings.
  </Typography>

  {/* <Typography variant='h5' sx={{color:"#195AFE",marginTop:"3%",textAlign:"left"}}>
    <b> Reach out to us for employment</b>
  </Typography>

  <Button variant='contained' sx={{
    marginTop:"3%",
   

    textAlign:"left",
   
    bgcolor:"#1F4A8E",
   '& hover':{
    bgcolor:"#1F4A8E",
    
   },
 
  }} >
    <Typography variant='subtitle1' sx={{ }}>
      <b>Contact Us</b>
    </Typography>
  </Button> */}

  </Grid>

  

  <Grid xs={12} sm={6} md={6} sx={{marginTop:"3%"}}>

<Typography variant='h6' sx={{color:"#195AFE",textAlign:"left"}}>
  <b> Ready to revolutionize the hospitality <br/>
  industry and make a lasting impact on <br/>
  the world through cutting-edge <br/>technology?</b>
</Typography>


<Typography variant='h6' sx={{marginTop:"8%",textAlign:"left",color:"grey"}}>
Join us in shaping the future of hospitality <br/>
with innovative solutions and a commitment<br/> to
 excellence.
</Typography>


<Typography variant='h6' sx={{marginTop:"8%",textAlign:"left",color:"grey"}}>
We are looking for driven and motivated <br/>
individuals, who can think deeply, work <br/>
with rigor, and envision a new world.
</Typography>



  </Grid>

</Box>

<Box sx={{
  justifyContent:"center",
  textAlign:"center",
  alignItems:"center",
  marginTop: "2%",}} >
<Grid xs={12} md={12} >
  <Button variant='contained' 
   sx={{marginTop:"2%",bgcolor:"#3543BF", color:"white",textTransform:"initial",borderRadius:"42px"}} >
    <b> Explore Career Opportunities </b>
   </Button>
  </Grid>

  </Box>


<Box sx={{
  justifyContent:"center",
  textAlign:"center",
  alignItems:"center",
  marginTop: "5%",
  display:"flex",
  flexWrap:"wrap"
}} >

   <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 288,
          height: 198,
        },
      }}
    >
      
      <Paper elevation={3} >
     <Typography sx={{marginTop:"3%",textAlign:"left",margin: 2}} >
     <b>Bussiness Development Manager</b> <br/>
     <LocationOnIcon />Mumbai
     </Typography>
     
    <Button variant="contained" sx={{
      color:"white",
      bgcolor:"ADD8E6",
      textTransform:"initial",
      fontSize:"10px",
      textAlign:"left",
      justifyContent:"left",
      marginTop:"9%"
    }}>
    <b> Go to marketing - commercial </b>
    </Button>

        </Paper>
    
     </Box>
 
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 288,
          height: 198,
        },
      }}
    >
      
      <Paper elevation={3} >
      
      <Typography sx={{marginTop:"3%",textAlign:"left",margin: 2}} >
     <b>Travel Expert</b> <br/>
     <LocationOnIcon /> Delhi
     </Typography>
     
    <Button variant="contained" sx={{
      color:"white",
      bgcolor:"ADD8E6",
      textTransform:"initial",
      fontSize:"10px",
      textAlign:"left",
      justifyContent:"left",
      marginTop:"18%"
    }}>
    <b> operation </b>
    </Button>


        </Paper>

</Box>

        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 288,
          height: 198,
        },
      }}
    >
      
      <Paper elevation={3} >
     
      <Typography sx={{marginTop:"3%",textAlign:"left",margin: 2}} >
     <b>Zonal Head for Southern Region</b> <br/>
     <LocationOnIcon /> Mumbai
     </Typography>
     
    <Button variant="contained" sx={{
      color:"white",
      bgcolor:"ADD8E6",
      textTransform:"initial",
      fontSize:"10px",
      textAlign:"left",
      justifyContent:"left",
      marginTop:"18%"
    }}>
    <b> Go to marketing - commercial </b>
    </Button>

        </Paper>

   </Box>


        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 288,
          height: 198,
        },
      }}
    >
      
      <Paper elevation={3} >

      <Typography sx={{marginTop:"3%",textAlign:"left",margin: 2}} >
     <b>Zonal Head for North East Region</b> <br/>
     <LocationOnIcon /> Mumbai
     </Typography>
     
    <Button variant="contained" sx={{
      color:"white",
      bgcolor:"ADD8E6",
      textTransform:"initial",
      fontSize:"10px",
      textAlign:"left",
      justifyContent:"left",
      marginTop:"9%"
    }}>
    <b> Go to marketing - commercial </b>
    </Button>

        </Paper>

      </Box>

  </Box>
  



  <Box sx={{
  justifyContent:"center",
  textAlign:"center",
  alignItems:"center",
  margin: 1,
  display:"flex",
  flexWrap:"wrap"
}} >

   <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 288,
          height: 198,
        },
      }}
    >
      
      <Paper elevation={3} >
     <Typography sx={{marginTop:"3%",textAlign:"left",margin: 2}} >
     <b>Zonal Head for the North West Region</b> <br/>
     <LocationOnIcon /> Mumbai
     </Typography>
     
    <Button variant="contained" sx={{
      color:"white",
      bgcolor:"ADD8E6",
      textTransform:"initial",
      fontSize:"10px",
      textAlign:"left",
      justifyContent:"left",
      marginTop:"9%"
    }}>
    <b> Marketing </b>
    </Button>

        </Paper>
    
     </Box>
 
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 288,
          height: 198,
        },
      }}
    >
      
      <Paper elevation={3} >
      
      <Typography sx={{marginTop:"3%",textAlign:"left",margin: 2}} >
     <b>India sales Head</b> <br/>
     <LocationOnIcon /> Mumbai
     </Typography>
     
    <Button variant="contained" sx={{
      color:"white",
      bgcolor:"ADD8E6",
      textTransform:"initial",
      fontSize:"10px",
      textAlign:"left",
      justifyContent:"left",
      marginTop:"18%"
    }}>
    <b> Go to marketing - commercial </b>
    </Button>


        </Paper>

</Box>

        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 288,
          height: 198,
        },
      }}
    >
      
      <Paper elevation={3} >
     
      <Typography sx={{marginTop:"3%",textAlign:"left",margin: 2}} >
     <b>Reservation Team </b> <br/>
     <LocationOnIcon /> Mumbai
     </Typography>
     
    <Button variant="contained" sx={{
      color:"white",
      bgcolor:"ADD8E6",
      textTransform:"initial",
      fontSize:"10px",
      textAlign:"left",
      justifyContent:"left",
      marginTop:"18%"
    }}>
    <b> Bussiness</b>
    </Button>

        </Paper>

   </Box>


        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 288,
          height: 198,
        },
      }}
    >
      
      <Paper elevation={3} >

      <Typography sx={{marginTop:"3%",textAlign:"left",margin: 2}} >
     <b>Holiday Operation Team</b> <br/>
     <LocationOnIcon /> Mumbai
     </Typography>
     
    <Button variant="contained" sx={{
      color:"white",
      bgcolor:"ADD8E6",
      textTransform:"initial",
      fontSize:"10px",
      textAlign:"left",
      justifyContent:"left",
      marginTop:"18%"
    }}>
    <b> R&D </b>
    </Button>

        </Paper>

      </Box>

  </Box>

       
       



      {/********************************** part 3 *********************************/}

     {/* <Grid sx={{ 
      marginTop:"8%",
      justifyContent:"center",
      textAlign:"center",
      alignItems:"center"
     }}
     >
   <Typography variant='h6'>
  <b>Trusted by over 3500+ global customers </b>
  </Typography>
     </Grid> */}

     {/* <Box sx={{
      marginTop:"3%",
      justifyContent:"center",
      textAlign:"center",
      alignItems:"center",
      flexWrap: "wrap",
      display:"flex",
      gap:"10px",
     }}
    >
    
      <Grid xs={12} sm={6} md={2} >
      <motion.div
  initial={{ x: -300, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }} 
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }} 
  
  > <img src={logo1} alt="logo1" style={{width:"100%",height:"auto"}}/> </motion.div>

     
      </Grid>

      <Grid xs={12} sm={6} md={2} >
      <img src={logo2} alt="logo2" style={{width:"100%",height:"auto"}}/>
      </Grid>

      <Grid xs={12} sm={6} md={2} >
        <img src={logo3} alt="logo3" style={{width:"100%",height:"auto"}}/>
      </Grid>

      <Grid xs={12} sm={6} md={2} >
      <img src={logo4} alt="logo4" style={{width:"100%",height:"auto"}}/>
      </Grid>

      <Grid xs={12} sm={6} md={2} >
      <img src={logo5} alt="logo5" style={{width:"100%",height:"auto"}}/>
      </Grid>

      <Grid xs={12} sm={6} md={2} >
      <img src={logo6} alt="logo6" style={{width:"100%",height:"auto"}}/>
      </Grid>

      <Grid xs={12} sm={6} md={2} >
      <img src={logo7} alt="logo7" style={{width:"100%",height:"auto"}}/>
      </Grid>

      <Grid xs={12} sm={6} md={2} >
      <img src={logo8} alt="logo8" style={{width:"100%",height:"auto"}}/>
      </Grid>

      <Grid xs={12} sm={6} md={2} >
      <img src={logo9} alt="logo9" style={{width:"100%",height:"auto"}}/>
      </Grid>

    </Box> */}


 {/******************************* mid part *******************************/}


  {/* <Box sx={{
    marginTop:"-20%",
   justifyContent:"center",
   textAlign:"center",
   alignItems:"center",
  //  display:"flex",
  //  gap:"20px"
  }} >

   <Grid xs={12} sm={12} md={12} >
    <Typography >
  <img src={orangeswoosh} alt="orangeswoosh" />
  </Typography>
  </Grid>
   
   <Grid xs={12} sm={12} md={12} sx={{marginTop:"-55%",marginLeft:"22%"}}>
  <Typography >
    <img src={skyswoosh} alt="skyswoosh" style={{width:"100%", height:"auto"}}/>
  </Typography>
  </Grid>

  <Grid xs={12} sm={12} md={12} sx={{marginTop:"-25%"}}>
  <Typography variant='h5'>
      <b>Here's the Data</b>
     </Typography>
  </Grid>


  </Box>


   
  <Box sx={{
    marginTop:"6%",
   justifyContent:"center",
   textAlign:"center",
   alignItems:"center",
  display:"flex",
   //gap:"5px",
   flexWrap:"wrap",
  }} >
     
    <Grid xs={12} sm={6} md={3} >
      <img src={employ} alt="employ" style={{width:"100%", height:"auto"}}/>
    </Grid>

    <Grid xs={12} sm={6} md={3} >
      <img src={global} alt="global" style={{width:"100%", height:"auto"}}/>
    </Grid>

    <Grid xs={12} sm={6} md={3} >
      <img src={itb2} alt="itb2" style={{width:"100%", height:"auto"}}/>
    </Grid>

    <Grid xs={12} sm={6} md={3} >
      <img src={infinite} alt="infinite" style={{width:"100%", height:"auto"}}/>
    </Grid>

  </Box>





 */}





    {/************************************ part 4 ******************************/}

    {/* <Box sx={{
      marginTop:"8%",
      justifyContent:"center",
      alignItems:"center",
      textAlign:"center"
    }} >
      <Typography variant='h6' >
      <b> The People Behind the Insights</b>
      </Typography>
     
     <Box sx={{
      marginTop:"6%",
      display:"flex",
      gap:'50px',
      justifyContent:"center",
      alignItems:"center",
      textAlign:"center",
      flexWrap:"wrap",
      marginLeft:"20%"
     }}
>
    <Grid xs={12} sm={12} md={6} >
      
    <img src={women} alt="women" style={{width:'100%', height:"auto",}}/>
    </Grid>

    <Grid xs={12} sm={12} md={6} sx={{textAlign:"left",marginTop:"5%"}}>
      <Typography >
      I was heard and trusted from day one. The <br/>
      innovative entrepreneurial culture of Similarweb <br/>
      distinguishes it from other tech companies. <br/>
      </Typography>
      <Typography sx={{marginTop:"3%"}}>
        <img src={massalha} alt="massalha" style={{width:"100%", height:"auto"}}/>
      </Typography>

      <Typography sx={{marginTop:"3%"}}>
        <img src={massalha2} alt="massalha2" style={{width:"100%", height:"auto"}}/>
      </Typography>

    </Grid>
 
    </Box>
   </Box> */}

{/****************************** part 5 ***************************************/}





 {/*********************************** part 6 ***********************************/}


  {/* <Grid xs={12} sm={12} md={12} sx={{
     justifyContent:"center",
     alignItems:"center",
     textAlign:"center",
     marginTop:"8%"
  }}> 
  <Typography variant='h5'>
    <b> The Whole Package </b>
    </Typography>

  </Grid>

   <Box sx={{
    justifyContent:"center",
    alignItems:"center",
    textAlign:"left",
    marginTop:"8%",
    display:"flex",
    flexWrap:"wrap",
    gap:"150px",
    //marginInline:"10%"
   }}
>
  <Box >
   <img src={hybrid1} alt="hybrid1" />
   <Typography variant='h6' sx={{color:"#195AFE",marginTop:"2%"}} >
    <b> Hybrid work model</b>
   </Typography>
   <Typography variant='subtitle1' sx={{textAlign:"left",marginTop:"2%"}}>
   Joint days for in-office<br/>
collaboration <br/>
In-office team activities <br/>
Fully stocked kitchen
   </Typography>
  </Box>

  <Box >
  <img src={profes1} alt="profes1" />
  <Typography variant='h6' sx={{color:"#195AFE",marginTop:"2%"}} >
    <b> Hybrid work model</b>
   </Typography>
   <Typography variant='subtitle1' sx={{textAlign:"left",marginTop:"2%"}}>
   Joint days for in-office<br/>
collaboration <br/>
In-office team activities <br/>
Fully stocked kitchen
   </Typography>
  </Box>

  <Box >
  <img src={leaves1} alt="leaves1" />
  <Typography variant='h6' sx={{color:"#195AFE",marginTop:"2%"}} >
    <b> Hybrid work model</b>
   </Typography>
   <Typography variant='subtitle1' sx={{textAlign:"left",marginTop:"2%"}}>
   Joint days for in-office<br/>
collaboration <br/>
In-office team activities <br/>
Fully stocked kitchen
   </Typography>
  </Box>

  <Box >
  <img src={truetik} alt="truetik" />
  <Typography variant='h6' sx={{color:"#195AFE",marginTop:"2%"}} >
    <b> Hybrid work model</b>
   </Typography>
   <Typography variant='subtitle1' sx={{textAlign:"left",marginTop:"2%"}}>
   Joint days for in-office<br/>
collaboration <br/>
In-office team activities <br/>
Fully stocked kitchen
   </Typography>
  </Box>
</Box> */}


{/************************************ part 7 ***********************/}

{/* <Box sx={{
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    marginTop:"8%",
    display:"flex",
    flexWrap:"wrap",
    gap:"40px",
    //marginInline:"10%"
   }}
>
 <Grid xs={12} sx={6} md={6} >
  
  <Typography variant='h5' >
    <b> We take your career as <br/>
      seriously as you do</b>
   </Typography>

   <Typography variant='subtitle2' sx={{marginTop:"4%"}} >
     Similarweb's award-winning employee development <br/>
     programs offer you so many ways to level up your skills <br/>
      and careers. Our unique programs empower you to clearly <br/>
      see the next steps of your career and acquire the skills you <br/>
      need to get there.
   </Typography>
   </Grid>

 <Grid xs={12} sx={6} md={6} >
   <img src={simiclass} alt="simiclass" style={{width:"100%",height:"auto"}} />
  </Grid>

</Box> */}


{/********************************** part 8 *****************************/}

{/* <Grid sx={{marginTop:"18%"}}>
<Typography sx={{ textAlign:"left", mr:82}} >
  <img src={leftshade} alt="leftshade" />
  </Typography>
  </Grid>


<Box sx={{
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    marginTop:"-29%",
    display:"flex",
    flexWrap:"wrap",
    gap:"60px",
    //marginInline:"10%"
   }}
>

 <Grid xs={12} sx={6} md={6} >
   <img src={newspaper} alt="newspaper" style={{width:"90%",height:"auto"}} />
  
  </Grid>
 
  <Grid xs={12} sx={6} md={6} >
  
  <Typography variant='h5' >
    <b> Diversity, it’s more than just <br/>
     a buzzword</b>
   </Typography>

   <Typography variant='subtitle2' sx={{marginTop:"4%"}} >
   You deserve to work in a place where you can be your full <br/>
   authentic self.At Similarweb, we cherish the diversity that <br/>
   comes with all sorts of cultures and identities, because we <br/>
   know it makes us a better company for ourselves and our <br/>
   customers.
   </Typography>
   </Grid>

</Box> */}


{/************************************* added part ******************************/}








  

  {/**************************************** end part ********************************/}


  <Box sx={{
    justifyContent:"center",
    alignItems:"center",
    textAlign:"left",
    marginTop:"8%",
    //marginLeft:"10%"
  }}  >

    <Grid sx={{marginLeft:"22%"}} >
    <Typography variant='h4'>
      <b> Intrested in the Future Opportunities - Submit Your CV </b>
    </Typography>

   <Typography variant='h6' sx={{color:"grey"}}>
   Or Share with <b style={{color:"blue"}}>hr@idbookhotels.com</b>
   </Typography>

   </Grid>

   {/* <Box sx={{
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    display:"flex",
    gap:"5px",
    flexWrap:"wrap"
   }} >

    <Grid xs={12} sm={6} md={4} >

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '43ch' },
      }}
      noValidate
      autoComplete="off"
    >


   <TextField 
   id="outlined"
   label="search" 
   helperText="Search here"
   >
    <SearchIcon />
   </TextField>

</Box>
    </Grid>

    <Grid xs={12} sm={6} md={4} >

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="All Locations"
          helperText="Please select your location"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        </Box>

    </Grid>
  
 

    <Grid xs={12} sm={6} md={4} >

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-department"
          select
          label="Select"
          defaultValue="All Departments"
          helperText="Please select your Department"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        </Box>

</Grid>

</Box> */}

<Box sx={{
          justifyContent:"center",
          alignItems:"center",
          textAlign:"center",
            marginTop:"2%",
            display:"flex",
            gap:"10px",
            flexWrap:"wrap",
           // marginLeft:"1%"
        }} >
            <Grid xs={12} sm={6} md={4} >
            <TextField id="outlined-basic" label="Email" variant="outlined" sx={{  width: '43ch' }}/>
            </Grid>

            <Grid xs={12} sm={6} md={4} >
            <TextField id="outlined-basic" label="Your name" variant="outlined" />

            </Grid>

            <Grid xs={12} sm={6} md={4} >
            <TextField id="outlined-basic" label="Contact Number" variant="outlined" />
            </Grid>

           
        </Box>


        <Box sx={{
          justifyContent:"center",
          alignItems:"center",
          textAlign:"center",
            marginTop:"2%",
            display:"flex",
            gap:"10px",
            flexWrap:"wrap",
           // marginLeft:"1%"
        }} >

<Grid xs={12} sm={6} md={3} >
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button>

    <Button variant="contained" sx={{marginTop:"3%",m:1}}
        endIcon={<SendIcon />}>
          {/* <Link to="/hr@idbookhotels.com" style={{textDecoration: 'none',  color: 'inherit'}}
        target="_blank" rel="noopener noreferrer" > */}
          Send
          {/* </Link> */}
        </Button>


            </Grid> 

        </Box>



   </Box>


   </Box>




   


 <Foop12 />
      
    </>
  );
}

export default Career;
