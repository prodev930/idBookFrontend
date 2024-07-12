import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Header from '../components/Header';


import faq from '../Images/faq.png';
import Foop12 from '../components/Foop12';




const Faqholidaysite = () => {
  return (
    <>

    <Header />

<Box sx={{
        overflow:"hidden",
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center",
        marginTop:"5%"
    }}  >
       
       <Grid xs={12} sm={12} md={12} >
        <img src={faq} alt="faq" style={{width:"40%",height:"auto"}}/>
       </Grid>

       <Box sx={{
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center",
        marginTop:"8%",
        marginInline:"21%"
       }}  >

       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{color:"#5B89FC"}}>  <b> What are holiday packages? </b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          Booking holiday packages means accessing the readymade arrangement for the trip, 
          including transportation, accommodation, sightseeing places, pick & drop, hospitality, 
          etc. You need not worry about anything except your bag packing. 
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{color:"#5B89FC"}}>  
        <b> Which is the best place to visit? </b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          Every sight has its mesmerizing beauty, thrilling culture, vibrant features, amazing 
          destinations, etc. However, some are places that attract thousands of tourists every day, 
          such as <br/>
         holiday packages to the Maldives <br/>
          holiday packages for Goa <br/>
           holiday packages for Kashmir <br/>
          holiday packages for Manali <br/>
          Golden Temple, Shimla, Saputara, Bangalore, Dubai, Bali, etc. <br/>

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{color:"#5B89FC"}}> 
           <b> What is included in a package holiday? </b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          Package holiday consists of mainly accommodation and transport. It may also include 
          elements like flight booking, car hire, board (eg. breakfast only, half-board or 
          all-inclusive), transfers, evaluated luggage and tourist activities, entertainment 
          i.e. sightseeing, boat riding, and other travel services. 
          </Typography>
        </AccordionDetails>
      </Accordion>
 

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{color:"#5B89FC"}}>  <b> Which is the best holiday packages company in India? </b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          While choosing a holiday packages company in India, confirm the below aspects they cover: <br/>

        1. Any time check-in and check-out from the hotel <br/>
       2. Ensured security <br/>
       3. Minimal cost <br/>
       4. Neat, clean, safe, and secure accommodation <br/>
       5. Facilities like good breakfast, Wi-Fi access, TV, AC, etc. <br/>
       6. Transportation arrangement also for  sightseeing places <br/>
        7. Holiday packages with activities <br/>
          8. Covering all covid-precautions. <br/>

          At Idbook, we serve you with all these facilities for 360° service. 


          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{color:"#5B89FC"}}> 
           <b> Where to book holiday packages?</b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          You can perform the action from the best website to book vacation packages and flights 
          or download our app for holiday packages and accommodation while sitting in the comfort 
          of your home. Visit this holiday packages and tours page to explore the details 
          and make the booking. <br/>
        Or <br/>
        Download the Idbook hotels app. 

          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{color:"#5B89FC"}}> 
           <b> How to book holiday packages in India? </b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          You can explore a great number of holiday packages on the Idbook page. Then, explore 
          the beauty of the place and check other inclusive details. Choose any convenient payment 
          method and make the booking. 
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{color:"#5B89FC"}}>  
          <b> What are the different modes of payment for booking a trip on Idbook hotels? </b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          
        Idbook allows all modes of payment- <br/>
         Credit card, debit card, paytm wallet, UPI, Net banking, bank transfer.

          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{color:"#5B89FC"}}> 
           <b> What is Idbook cancellation policy?</b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          
In case of cancellation, <br/>
Before 30 days of the trip, 100% refund. <br/>
Before 15 days, 50 % refund <br/>
Before 1 week 30 % refund.<br/>
Only flight charges will be applicable, according to flight company's norms.
 


          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{color:"#5B89FC"}}> 
           <b> What is Idbook Refund Policy? </b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          In case date would be changed and you want the refund, the process will be same as 
          what above mentioned.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{color:"#5B89FC"}}>  <b> Does Idbook offer any discount? </b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          Idbook offer various types of offers and coupons, including banks offer, coupons code, 
          pro membership offers, and we have 2 wallet option as well. 
          </Typography>
        </AccordionDetails>
      </Accordion>


      




      </Box>


      </Box>


       <Foop12 />

    </>
  );
}

export default Faqholidaysite;
