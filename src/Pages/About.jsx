import { Box, Button, Grid, IconButton,  Paper,  Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import Header from '../components/Header';


//Images

import pigs from '../Images/pigs.png';
//import man from '../Images/man.png';
//import jame from '../Images/jame.png';
//import orla from '../Images/orla.png';
//import dara from '../Images/dara.png';
// import green from '../Images/green.png';
// import pink from '../Images/pink.png';
// import voilet from '../Images/voilet.png';
// import yellow from '../Images/yellow.png';
import centerline from '../Images/centerline.png';
import dot from '../Images/dot.png';
// import milli1 from '../Images/mill1.png';
// import milli2 from '../Images/milli2.png';
//import milli3 from '../Images/milli3.png';
import Buttonnews from '../Images/Buttonnews.png';
import tea from '../Images/tea.png';
import redspan from '../Images/redspan.png';
import skyspan from '../Images/skyspan.png';
import Foop12 from '../components/Foop12';
import manish from '../Images/manish.jpeg';
import shubham from '../Images/shubham.jpeg';
import sameet from '../Images/sameet.jpeg';
import atul from '../Images/atul.jpeg';




const About = () => {
  return (
    <>

    <Header />

    <Box sx={{
        overflow:"hidden",
        width:"100%",
        marginTop:"3%"
    }} 
    >
       

      {/********************************** 1st part *******************************************/}

      <Box sx={{
                justifyContent:"center",
                alignItems:"center",
                textAlign:"center",
                marginTop:"5%",
                display:"flex",
                //gap: "10px",
                marginInline: "100px",
            }}  >

       <Grid container spacing={2} sx={{
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center",
        color:"black",
        width:'100%'
        //fontFamily:"poppins"
       }} >


      
        <Grid xs={12} sm={12} md={6} >
         <Typography variant='h4' >

            <b> 👋 About Us</b>
         </Typography>
         <Typography variant='h6' sx={{marginTop:"4%",textAlign:"left",marginLeft:"20%",color:"grey", textWrap:'unset'}}>
          
          {/* We’re impartial and independent, and every day we <br/>
          create distinctive, world-class programmes and content <br/>
          which inform, educate and entertain millions of people in <br/>
          the around the world. */}

Idbook Hospitality Private Limited is a leading hospitality solutions provider in India, offering personalized and innovative solutions for business and leisure travellers. With a chain of 500+ hotels and 10,000+ rooms, we ensure perfection at any holiday destination across India, Nepal, Bhutan, Sri Lanka, Maldives, Singapore, Malaysia, Vietnam, Bali, Europe, Turkey, and Thailand. We focus on cost-effective stays and flexibility with our trend of hourly hotels, striving to enhance customer experiences.
          {/* Idbook Hospitality Pvt Ltd is a leading hospitality <br/>
          solutions provider in India. We offer a wide range of <br/> 
          services to enhance your travel and accommodation <br/> 
          experiences,providing personalized and innovative <br/>
          solutions for business and leisure travelers. */}
         </Typography>

         

        </Grid>
  
        <Grid xs={12} sm={12} md={6} >
         
          <img src={pigs} alt="pigs" style={{ maxWidth: '100%', maxHeight: 'auto' }}/>
            
         
        </Grid>
 
        </Grid>

        </Box>

        
        <Grid sx={{marginTop:"-16%"}}>
        <Typography >
            <img src={redspan} alt="redspan" style={{width:"30%", height:"auto"}}/>
         </Typography>
        </Grid>

        <Grid sx={{marginTop:"-20%",marginLeft:"12%"}}>
        <Typography >
            <img src={skyspan} alt="skyspan" style={{width:"30%", height:"auto"}}/>
         </Typography>
        </Grid>

       
{/**************************** 2nd part *******************************************/}





<Grid container>
            <Grid xs={12} sm={6}>
              <Grid sx={{ marginLeft: "18%", marginTop: "-20%" }}>
                <Typography variant="h4">
                  <b> ⛱ Team Idbook</b>
                </Typography>
                <Typography sx={{marginTop:"2%",fontSize:"20px",color:"grey", textAlign:'left'}}>We’re impartial and independent, and every day we create <br/>
                distinctive, world-class programmes and content</Typography>
              </Grid>
            </Grid>

            </Grid>
            

            <Box sx={{
                justifyContent:"center",
                alignItems:"center",
                textAlign:"center",
                marginTop:"5%",
                display:"flex",
                gap: "10px",
                marginInline: "100px",
            }}  >
             
             <Grid container spacing={2}>
             <Grid item xs={12} sm={6} md={3} lg={3} >
                <img src={shubham} alt="shubham" style={{borderRadius:"22px", width: '100%',height:"76%"}}/>
                <Typography variant='h6' >
                    <b> Shubham Shahu</b>
                </Typography>
                <Typography variant='h7'>
                Founder & CEO
                </Typography>
             </Grid>

             <Grid item xs={12} sm={6} md={3} lg={3} >
                <img src={manish} alt="manish" style={{borderRadius:"22px", width: '100%',height:"76%"}}/>
                <Typography variant='h6' >
                    <b> Manish Dogra</b>
                </Typography>
                <Typography variant='h7'>
                Zonal Sales Head
                </Typography>
             </Grid>

             <Grid item xs={12} sm={6} md={3} lg={3} >
                <img src={sameet} alt="sameet" style={{borderRadius:"22px", width: '100%',height:"auto"}}/>
                <Typography variant='h6' >
                    <b> Sameet Patil</b>
                </Typography>
                <Typography variant='h7'>
               Head HR
                </Typography>
             </Grid>

             <Grid item xs={12} sm={6} md={3} lg={3} >
                <img src={atul} alt="atul" style={{borderRadius:"22px", width: '100%',height:"76%"}}/>
                <Typography variant='h6' >
                    <b> Atul Patel</b>
                </Typography>
                {/* <Typography variant='h7'>
                Co-Founder, Chief Strategy Officer
                </Typography> */}
             </Grid>
            
             </Grid>

            </Box>

   
      {/************************************** part 3 ***********************************/}

         {/* <Box sx={{
            justifyContent:"center",
            alignItems:"center",
            textAlign:"center",
            marginTop:"8%",
            color:"#1F4A8E"
         }}>
            <Typography variant='h3'>
                <b> Milestone</b>
            </Typography>
         </Box> */}

{/* 
          <Box
    sx={{
    overflow: "hidden",
    color: "black",
    background: "#D3D3D3",
    //padding: "8%",
    borderRadius: "35px",
    marginInline: "7%",
    marginTop: "3%",
    //marginBottom:"55%"
    
   }}
   >
   
     
      <Grid container spacing={2} sx={{
        marginTop:"10%",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        marginLeft:"3%"
        //gap:"10px"
      }} >
      
      <Grid item xs={12} sm={6} md={6} >

    <Box sx={{
      display:"flex",
      gap:"0px",
      flexWrap:"wrap"
    }} >
 
 <Box
sx={{
 display: 'flex',
 flexWrap: 'wrap',
 '& > :not(style)': {
   m: 1,
   width: 388,
   height: 100,
   bgcolor:"#AFE1AF"
 },
}}
>

<Paper elevation={3} >

<Typography variant='h5' sx={{textAlign:"left",margin:1}} >
<b>10 Million</b> <br/>
</Typography>

<Typography variant='subtitle2' sx={{textAlign:"left",margin:1,color:"grey"}} >
  Articles have been public around the world<br/>
  (as 30 sept)
</Typography>



 </Paper>

</Box>




<Box
sx={{
 display: 'flex',
 flexWrap: 'wrap',
 '& > :not(style)': {
   //m: 1,
   width: 100,
   height: 100,
   bgcolor:"#AFE1AF",
   marginTop:"8%"
 },
}}
>

<Paper elevation={3} sx={{justifyContent:"center",textAlign:"center",alignItems:"center",}}>

<Typography variant='subtitle2' sx={{textAlign:"center",marginTop:"5%"}} >
  Dec <br/>
</Typography>

<Typography variant='h4' sx={{textAlign:"center",}} >
<b>10 </b> <br/>
</Typography>

<Typography variant='subtitle2' sx={{textAlign:"center",}} >
  2023
</Typography>
</Paper>
</Box>
</Box>
      </Grid>

      
     
      <Grid item xs={12} sm={6} md={6} >
    
        
      <Box sx={{
      display:"flex",
      gap:"0px",
      flexWrap:"wrap"
    }} >
 
 <Box
sx={{
 display: 'flex',
 flexWrap: 'wrap',
 '& > :not(style)': {
   m: 1,
   width: 388,
   height: 100,
   bgcolor:"#FFA6C9"
 },
}}
>

<Paper elevation={3} >

<Typography variant='h5' sx={{textAlign:"left",margin:1}} >
<b>10 Million</b> <br/>
</Typography>

<Typography variant='subtitle2' sx={{textAlign:"left",margin:1,color:"grey"}} >
  Articles have been public around the world<br/>
  (as 30 sept)
</Typography>



 </Paper>

</Box>




<Box
sx={{
 display: 'flex',
 flexWrap: 'wrap',
 '& > :not(style)': {
   //m: 1,
   width: 100,
   height: 100,
   bgcolor:"#FFA6C9",
   marginTop:"8%"
 },
}}
>

<Paper elevation={3} sx={{justifyContent:"center",textAlign:"center",alignItems:"center",}}>

<Typography variant='subtitle2' sx={{textAlign:"center",marginTop:"5%"}} >
  Dec <br/>
</Typography>

<Typography variant='h4' sx={{textAlign:"center",}} >
<b>10 </b> <br/>
</Typography>

<Typography variant='subtitle2' sx={{textAlign:"center",}} >
  2023
</Typography>
</Paper>
</Box>
</Box>



        </Grid>


      </Grid>

      <Grid xs={12} sm={12} md={12} sx={{
        marginTop:"8%",
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center"
      }}>
        <img src={centerline} alt="centerline" style={{width:"100" , height:"auto"}}/>
        </Grid> 







        <Box sx={{
            display:"flex",
            justifyContent:"center",
            textAlign:"center",
            alignItems:"center",
            gap:"300px",
            marginTop:"-1.3%",
            //flexDirection: { xs: "column", sm: "row" },
        }} >

        <Grid xs={12} sm={6} md={3} sx={{
      }}>
        <img src={dot} alt="dot" style={{width:"100" , height:"auto"}}/>
        </Grid> 

        <Grid xs={12} sm={6} md={3} sx={{
      }}>
        <img src={dot} alt="dot" style={{width:"100" , height:"auto"}}/>
        </Grid> 

        <Grid xs={12} sm={6} md={3} sx={{
       }}>
        <img src={dot} alt="dot" style={{width:"100" , height:"auto"}}/>
        </Grid> 

        <Grid xs={12} sm={6} md={3} sx={{
      }}>
        <img src={dot} alt="dot" style={{width:"100" , height:"auto"}}/>
        </Grid> 
        
        </Box>








        <Grid container spacing={2} sx={{
        marginTop:"10%",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        marginLeft:"12%"
        //gap:"10px"
      }} >
      
      <Grid item xs={12} sm={6} md={6} >
      <Box sx={{
      display:"flex",
      gap:"0px",
      flexWrap:"wrap"
    }} >
 
 <Box
sx={{
 display: 'flex',
 flexWrap: 'wrap',
 '& > :not(style)': {
   m: 1,
   width: 388,
   height: 100,
   bgcolor:"#87CEEB"
 },
}}
>

<Paper elevation={3} >

<Typography variant='h5' sx={{textAlign:"left",margin:1}} >
<b>10 Million</b> <br/>
</Typography>

<Typography variant='subtitle2' sx={{textAlign:"left",margin:1,color:"grey"}} >
  Articles have been public around the world<br/>
  (as 30 sept)
</Typography>



 </Paper>

</Box>




<Box
sx={{
 display: 'flex',
 flexWrap: 'wrap',
 '& > :not(style)': {
   //m: 1,
   width: 100,
   height: 100,
   bgcolor:"#87CEEB",
   marginTop:"8%"
 },
}}
>

<Paper elevation={3} sx={{justifyContent:"center",textAlign:"center",alignItems:"center",}}>

<Typography variant='subtitle2' sx={{textAlign:"center",marginTop:"5%"}} >
  Dec <br/>
</Typography>

<Typography variant='h4' sx={{textAlign:"center",}} >
<b>10 </b> <br/>
</Typography>

<Typography variant='subtitle2' sx={{textAlign:"center",}} >
  2023
</Typography>
</Paper>
</Box>
</Box>





      </Grid>
     
      <Grid item xs={12} sm={6} md={6} sx={{marginLeft:"0%"}}>
    

      
 
 <Box
sx={{
 display: 'flex',
 flexWrap: 'wrap',
 '& > :not(style)': {
   m: 1,
   width: 288,
   height: 100,
   bgcolor:"#F0E130",
   marginLeft:"27%"
 },
}}
>

<Paper elevation={3} >

<Typography variant='h5' sx={{textAlign:"left",margin:1}} >
<b>10 Million</b> <br/>
</Typography>

<Typography variant='subtitle2' sx={{textAlign:"left",margin:1,color:"grey"}} >
  Articles have been public around the world<br/>
  (as 30 sept)
</Typography>



 </Paper>

</Box>







        </Grid>

      </Grid>
      <Grid sx={{marginTop:"8%"}} >

      </Grid>

    </Box> */}


{/************************************* part 4 *********************************/}

<Grid container justifyContent='center'>
            <Grid xs={12} sm={6}>
              <Grid sx={{ marginLeft: "16%", marginTop: "14%" }}>
                <Typography variant="h4">
                  <b> 🚀 Fast Facts</b>
                </Typography>
                <Typography variant="h6" sx={{marginTop:"2%",color:"grey"}}>We’re impartial and independent, and every day we create <br/>
                distinctive, world-class programmes and content</Typography>
              </Grid>
            </Grid>

            </Grid>
    

            <Box sx={{
                justifyContent:"center",
                alignItems:"center",
                textAlign:"center",
                marginTop:"8%",
                display:"flex",
                gap: "20px",
                marginInline: "130px",
            }}  >
             
             <Grid container spacing={2}>
             <Grid item xs={12} sm={6} md={4} lg={4} >

              <Typography variant='h4'sx={{textAlign:"left"}}>
               <b> 7000+ </b>
              </Typography>

              <Typography variant='subtitle1' sx={{textAlign:"left",marginTop:"2%",color:"grey"}}>
              Happy Customers for Hotel Bookings
              </Typography>


                
                
             </Grid>

             <Grid item xs={12} sm={6} md={4} lg={4} >

             <Typography variant='h4'sx={{textAlign:"left"}}>
               <b> 5000+</b>
              </Typography>

              <Typography variant='subtitle1' sx={{textAlign:"left",marginTop:"2%",color:"grey"}}>
              Holiday Tours Done Successfully
              </Typography>

               
                
             </Grid>

             <Grid item xs={12} sm={6} md={4} lg={4} >

             <Typography variant='h4'sx={{textAlign:"left"}}>
               <b> Up to 30% </b>
              </Typography>

              <Typography variant='subtitle1' sx={{textAlign:"left",marginTop:"2%",color:"grey"}}>
              Lower rates for Tourism Provided
              </Typography>
                
                
             </Grid>

            
            
             </Grid>

            </Box>


  {/************************************** part 5 **********************************/}



  <Box
          sx={{
            overflow: "hidden",
            marginTop:"10%",
            marginInline:"10%"
          }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >

            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                 sx={{  marginLeft: "13%" ,marginTop:"5%"}}
              >
                <b>Join our newsletter 🎉 </b>
              </Typography>
              
              <Grid sx={{ marginTop:"4%", marginLeft:"13%"}} >
              
                 <Typography  sx={{color:"grey",fontSize:"16px"}}>
                 Read and share new perspectives on just about any topic.<br/>
                  Everyone’s welcome.
                 </Typography>
                </Grid>
              
                <Grid container spacing={2} sx={{justifyContent:"center",marginTop: "5%",}}>
                <Grid item xs={12} sm={2} sx={{textTransform:"initial",
               marginInline:"0%"}}>
              <Button
                variant="contained"
                sx={{
                  // marginTop: "10%",
                  marginLeft: "17%",
                  borderRadius: "42px",
                  bgcolor:"lightblue",
                  color:"blue",
                   height:"45px",
                  width:"5px",
                  fontSize:"20px",
                  //marginLeft:"35%"
                  mx: "auto",
                  display: "block",

                }}
              >  
              
                <b>01</b>

                </Button>

                </Grid>
                
              
              <Grid item xs={12} sm={8} sx={{textTransform:"initial",
              fontSize:"23px",marginTop:"1%"}}>
                <b >Get more discount</b>
                </Grid>
                </Grid>

              
                <Grid container spacing={2} sx={{justifyContent:"center",marginTop: "5%",}}>
                <Grid item xs={12} sm={2} sx={{textTransform:"initial",
               marginInline:"0%"}}>
              <Button
                variant="contained"
                sx={{
                  // marginTop: "10%",
                  marginLeft: "17%",
                  borderRadius: "42px",
                  bgcolor:"#FFCCCB",
                  color:"red",
                   height:"45px",
                  width:"5px",
                  fontSize:"20px",
                  //marginLeft:"35%"
                  mx: "auto",
                  display: "block",

                }}
              >  
              
                <b>02</b>

                </Button>

                </Grid>
                
              
              <Grid item xs={12} sm={8} sx={{textTransform:"initial",
              fontSize:"23px",marginTop:"1%"}}>
                <b >Get premium maganines</b>
                </Grid>
                </Grid>
              <Grid  item xs={12} sm={12} sx={{marginTop:"5%",marginLeft:"11%"}}>
              <TextField 
            id='email'
            name='email'
            label=" Email/Username"
            type="email"
            variant="outlined"
            sx={{border:'1px solid', borderRadius:'24px'}}
            InputProps={{
              sx: { borderRadius: "33px", maxWidth: "450px" },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={Button} edge="end">
                    <img src={Buttonnews} alt="Buttonnews" style={{width:"55px",height:"50px"}} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
             > 
            </TextField>
          </Grid>
              
              
              
            </Grid>
            
            <Grid item xs={12} md={6}>
              <img src={tea} alt="tea" width="90%" height="150%" />
            </Grid>

          </Grid>
        </Box>




    </Box>

   
    <Foop12 />
      
    </>
  );
}

export default About;
