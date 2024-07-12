import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import refundpic from '../Images/refundpolicypic.png';
import coin from '../Images/coin.png';
import redhalfspan from '../Images/redhalfspan.png';
import greenhalfspan from '../Images/greenhalfspan.png';
import Foop12 from '../components/Foop12';

import Header from '../components/Header';






const Refundpolicy = () => {
  return (
    <>

    <Header />
      
      <Box sx={{
        overflow:"hidden",
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center",
        marginTop:"5%"
      }}
     >
     
     <Box sx={{
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center",
        display:"flex",
        flexWrap:"wrap"
     }} >
        <Grid xs={12} sm={6} md={6} >
            <Box sx={{
                display:"flex",
                flexWrap:"wrap",
                gap:"5px"
            }} >
                <Grid xs={6} md={3} >
                <img src={coin} alt="coin" />
                </Grid>

                <Grid xs={6} md={3} sx={{marginTop:"6%"}}>
                <Typography variant='h4'>
          <b> REFUND POLICY</b>
        </Typography>
                </Grid>
            </Box>

            {/* <Typography variant='h4'>

          <img src={coin} alt="coin" /> <b> REFUND POLICY</b>

          </Typography> */}

            <Typography variant='subtitle1' sx={{textAlign:"left"}}>
            

            Our focus is complete customer satisfaction. In the event,if<br/>
             you are displeased with the services provided, we will refund<br/> 
             back the money, provided the reasons are genuine and proved <br/>
             after investigation. Please read the fine prints of each deal <br/>
             before buying it, it provides all the details about the services <br/>
             or the product you purchase.

            
            </Typography>

           

        </Grid>


        <Grid xs={12} sm={6} md={6} >
            <img src={refundpic} alt="refundpic" style={{width:"100%",height:"auto"}} />
        </Grid>

     </Box>
        
        <Box sx={{
            display:"flex"
        }} >
        <Grid xs={12} sm={6} md={6} sx={{textAlign:"left",marginTop:"-15%",marginLeft:"6%"}}>
        <img src={redhalfspan} alt="redhalfspan" style={{width:"45%",height:"auto"}}/>
        </Grid>
        <Grid xs={12} sm={6} md={6} sx={{textAlign:"left",marginTop:"-5%",marginLeft:"-42%"}} >
            <img src={greenhalfspan} alt="greenhalfspan" style={{width:"45%",height:"auto"}}/>  
        </Grid>

        </Box>

        <Grid xs={12} sm={12} md={12} sx={{justifyContent:"center",
        textAlign:"left",
        alignItems:"center",marginLeft:"16%",marginTop:"-14%"}}>
          <Typography variant='h5'>
            <b> Return and Refund Policy </b>
          </Typography>

            <Typography variant='subtitle1' >

            Last updated: December 08, 2023 <br/>

            Thank you for shopping at idbookhotels website and idbookhotels app.<br/>
            If, for any reason, You are not completely satisfied with a purchase We invite 
            You to review our policy on refunds and returns.<br/>
             This Return and Refund Policy has been created with the help of the Return and 
             Refund Policy Generator.<br/>
             The following terms are applicable for any products that You purchased with Us.


           
            </Typography>

            <Typography variant='h5' sx={{marginTop:"3%"}}>
            <b> Interpretation and Definitions</b>
            </Typography>

            <Typography variant='h6' sx={{marginTop:"2%"}}>
            <b> Interpretation</b>
            </Typography>

            <Typography variant='subtitle1' sx={{marginTop:"1%"}}>
            The words of which the initial letter is capitalized have meanings defined under the 
            following conditions. The following definitions <br/>shall have
             the same meaning regardless of whether they appear in singular or in plural.
            </Typography>

            <Typography variant='h6' sx={{marginTop:"2%"}}>
            <b>Definitions </b>
            </Typography>

            <Typography variant='subtitle1' sx={{marginTop:"1%"}}> 
            For the purposes of this Return and Refund Policy:<br/>
          <li>  Application means the software program provided by the Company downloaded by You on 
            any electronic device, named <br/>idbookhotels</li>
          <li> Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) 
            refers to IDBOOK TRADE & E-COMMERCE <br/>
            PRIVATE LIMITED, PLOT NO 234, GROUND FLOOR, OPPOSITE ICICI BANK ATM, NEAR POLICE STATION,
             SECTOR 18, SARHAUL,<br/> GURUGRAM,. </li> <br/>

             <li> Goods refer to the items offered for sale on the Service.</li> <br/>
             <li> Orders mean a request by You to purchase Goods from Us.</li> <br/>
             <li> Service refers to the Application or the Website or both.</li> <br/>
             <li> Website refers to idbookhotels, accessible from https://www.idbookhotels.com/contact.html</li> <br/>
             <li> You means the individual accessing or using the Service, or the company, or other 
              legal entity on behalf of which such <br/>
              individual is accessing or using the Service, as applicable.</li>
            
           

            </Typography>

            <Typography variant='h5'sx={{marginTop:"3%"}}>
              <b>Your Order Cancellation Rights</b>
            </Typography>

            <Typography variant='subtitle1' sx={{marginTop:"1%"}}>
            You are entitled to cancel Your Order within 7 days without giving any reason for doing so.<br/>
            The deadline for cancelling an Order is 7 days from the date on which You received the Goods 
            or on which a third party you have<br/>
             appointed, who is not the carrier, takes possession of the product delivered. <br/>

             In order to exercise Your right of cancellation, You must inform Us of your decision by 
             means of a clear statement. You can<br/> inform us of your decision by:
             <li>By email: accounts@idbookhotels.com</li> <br/>
             <li> By visiting this page on our website: https://www.idbookhotels.com</li> <br/>
             <li> By phone number: +91 81001 50924</li> <br/>
             We will reimburse You no later than 14 days from the day on which We receive the returned 
             Goods. We will use the same means <br/>
             of payment as You used for the Order, and You will not incur any fees for such
              reimbursement.
            </Typography>


            <Typography variant='h5' sx={{marginTop:"3%"}}>
            <b>Conditions for Returns</b>
            </Typography>

            <Typography variant='subtitle' sx={{marginTop:"1%"}} >
            In order for the Goods to be eligible for a return, please make sure that: <br/>
            <li> The Goods were purchased in the last 7 days</li> <br/>
            The following Goods cannot be returned:<br/>
            <li>The supply of Goods made to Your specifications or clearly personalized.</li> <br/>
            <li> The supply of Goods which according to their nature are not suitable to be
               returned, deteriorate rapidly or where the <br/>date of expiry is over.</li><br/>
               <li>The supply of Goods which are not suitable for return due to health protection 
                or hygiene reasons and were unsealed <br/>after delivery.</li><br/>
                <li>The supply of Goods which are, after delivery, according to their nature, inseparably
                   mixed with other items.</li><br/>
                   We reserve the right to refuse returns of any merchandise that does not meet the 
                   above return conditions in our sole discretion.<br/>
                   Only regular priced Goods may be refunded. Unfortunately, Goods on sale cannot be refunded. 
                   This exclusion may not apply to You if <br/>it is not permitted by applicable law.
            </Typography>


            <Typography variant='h5' sx={{marginTop:"3%"}}>
            <b>Returning Goods</b>
            </Typography>

            <Typography variant='subtitle' sx={{marginTop:"1%"}} >
            You are responsible for the cost and risk of returning the Goods to Us. You should send the 
            Goods at the following address: <br/>
            not required <br/>
            We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, We 
            recommend an insured and trackable mail <br/>
            service. We are unable to issue a refund without actual receipt of the Goods or proof of 
            received return delivery.<br/>
            </Typography>


            <Typography variant='h5' sx={{marginTop:"3%"}}>
           <b>Gifts</b>
</Typography>

<Typography variant='subtitle' sx={{marginTop:"1%"}} >
If the Goods were marked as a gift when purchased and then shipped directly to you, You'll receive a 
gift credit for the value <br/>
of your return. Once the returned product is received, a gift certificate will be mailed to You.<br/>
If the Goods weren't marked as a gift when purchased, or the gift giver had the Order shipped to 
themselves to give it to You <br/>later, We will send the refund to the gift giver.
</Typography>


<Typography variant='h5' sx={{marginTop:"3%"}}>
<b>Contact Us</b>
            </Typography>

            <Typography variant='subtitle' sx={{marginTop:"1%"}} >
            If you have any questions about our Returns and Refunds Policy, please contact us:<br/>
            <li>By email: accounts@idbookhotels.com</li><br/>
            <li>By visiting this page on our website: https://www.idbookhotels.com</li><br/>
            <li>By phone number: +91 81001 50924</li>
            </Typography>

             

        </Grid>





     </Box>

     <Foop12 />

    </>
  );
}

export default Refundpolicy;
