import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Header from '../components/Header';

import faq from '../Images/faq.png';
import Foop12 from '../components/Foop12';

const Faq = () => {
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

        <Typography variant='h4' sx={{color:"#5B89FC",marginTop:"3%"}}>
          <b> FAQ  for Hotels</b>
        </Typography>

        <Typography sx={{marginTop:"8%"}}></Typography>

       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{color:"#5B89FC"}}>  <b> What is idbook? </b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          Idbook is India's hospitality company, disrupting the traditional industry by provide 
          hourly stay and anytime check-in and check-out facility. We offer standardized rooms 
          in different locations across the country on hourly basis.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{color:"#5B89FC", textAlign:"left"}}>  
        <b> How is idbook different from an online travel agent or an online marketplace of hotel rooms?... </b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          When you book Idbook hotels, you get a guaranteed amazing Idbook experience across all 
          hotels under the idbook network unlike an online marketplace where the end-user experience 
          is not standardized. In short, when you book Idbook, you get to stay in idbook and not any
           random XYZ hotel. <br/>
           Unlike most other companies, we follow pay per stay model, where the customers can book 
           any idbook hotel for minimum 4 hours of stay. In addition to that, the customer can check 
           in at any time, instead of traditional 12 noon check-in.
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
           <b> What is the minimum duration of stay in any hotel?... </b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          We provide a minimum length of 4-hours of stay.
          </Typography>
        </AccordionDetails>
      </Accordion>
 

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{color:"#5B89FC"}}>  <b> How big is the idbook network?... </b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          We have presence over most places in NCR, and some part of other cities. Please check the 
          app/website for our presence in different cities.
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
           <b> What are the key features of 'standardized' idbook?...</b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          The key features include AC rooms with TV, spotless linen, complimentary tea/coffee for 
          4 hours stay and complimentary breakfast for 8+ hours of stay, free Wi-Fi and hygienic 
          washrooms.
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
           <b> How much does an Idbook cost? Are there any hidden charges to be paid?... </b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          Rooms usually start at Rs 400 for short stays but can be lower than this price due to Sale,
           Coupon Discounts etc. There are no hidden charges.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{color:"#5B89FC"}}>  <b> How can one book an idbook?... </b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          idbook can be booked in through our own idbook app, through the www.idbook.co website and on
           phone by calling 9599916085 or via whatsapp number 7897717337. In addition, one can book 
           idbook through any of our partner online travel agents. However online travel agents 
           might not be able to provide short duration of bookings
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
           <b> Does any payment need to be made at the time of booking?...</b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          Customers have the option to either make an advance payment through our payment gateway 
          in app/website or pay at the hotel during check-in/check-out.
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
           <b> What are the standard check-in and check-out times?... </b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          Unlike traditional model, we do not have any standard check-in time. 
          You can check-in at the time you like. You can select the check in time through our 
          app/website/call/whatsapp.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{color:"#5B89FC"}}>  <b> Can I get my booking revised?... </b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          Of course! Simply call us at 9599916085 or whatsapp 7897717337.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{color:"#5B89FC"}}>  <b> Can I get my booking cancelled?... </b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          To cancel your booking, you have several options available:

Utilize our website or mobile app.
Contact us directly by calling +91-9599916085.
The applicable refund amount will be credited to you within 4 working days. Please be aware that it may take an additional 3-14 working days for the refund to reflect in your account, depending on the processing time of your bank.

Please note: It's crucial to review the cancellation policy while making your reservation.
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
             <b> What documents do I need to carry to the hotel to ensure a quick check-in?... </b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          You need to carry the confirmation e-mail/ booking ID sent to you at the time of booking 
          and any of your ID proofs that should have your address and photograph. These include your 
          passport, Aadhaar card, driving license and voter's ID card. Please note that PAN card does 
          not qualify as an acceptable ID proof.
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
         <b> I intend to stay at idbook for a long period. Am I eligible for any special discounts?... </b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          You could be eligible for a special discount based on the duration of your stay. 
          Please send an e-mail to bookings@idbook.co or call 9599916085 for details.
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
             <b> I am looking for corporate bookings with idbook. How should I go about it?... </b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          For corporate bookings, please send an e-mail to bookings@idbook.co or call +91 9599916085.
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
             <b> I am a hotel owner. How can I partner with idbook?... </b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          To join our ever-expanding network of hotels, simply call us at 95999-16085 and 
          we will get back to you with all the details.
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
             <b> I have further questions. How should I contact idbook?... </b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          please send an e-mail to bookings@idbook.co or call +91 9599916085.


          </Typography>
        </AccordionDetails>
      </Accordion>


     <Box >
      <Typography variant='h4' sx={{marginTop:"11%",color:"#5B89FC"}}>
          <b> FAQ  for Holidays</b>
        </Typography>
        </Box>

        <Typography sx={{marginTop:"8%"}}>

        </Typography>


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

export default Faq;
