import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
//import Footer2 from '../components/Footer2';
import Header from '../components/Header';
import privacypic from '../Images/privacypic.png';
import redhalfspan from '../Images/redhalfspan.png';
import greenhalfspan from '../Images/greenhalfspan.png';
import Foop12 from '../components/Foop12';






const Privacy = () => {
  return (
    <>
      
      <Header />

      <Box sx={{
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        overflow:"hidden"
      }}
     >
      <Grid xs={12} sm={6} md={6} sx={{textAlign:"left",marginLeft:"-15%",marginTop:"-4%"}}>
      <img src={redhalfspan} alt="redhalfspan" style={{width:"30%", height:"auto"}}/>
      </Grid>

      <Box sx={{
        marginTop:"-25%",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"left",
        display:"flex",
        flexWrap:"wrap",
        //gap:"5px"
        
      }}
      >
        
        <Grid xs={12} sm={6} md={6} sx={{marginLeft:"6%"}}>
        <Typography variant='h4' >
            <b> PRIVACY POLICY</b>
        </Typography>

        <Typography variant='h6' sx={{marginTop:"2%"}}>
        {/* You have read the Skyway Privacy Policy, the terms of <br/>
        which are incorporated herein,and agree that the 
        <br/>terms of such policy are reasonable. */}

         Idbook is dedicated to safeguarding the privacy of its <br/>
         users, and this privacy policy outlines the information<br/>
          we collect, how we utilize it, and the measures we take <br/>
          to ensure its protection. The policy also elucidates user<br/>
           rights and provides contact information for any inquiries.

        </Typography>

        </Grid>

        <Grid xs={12} sm={6} md={6} >
        <img src={privacypic} alt="privacypic" style={{ maxWidth: '100%', height: 'auto' }}/>
        </Grid>

        </Box>

         <Grid container sx={{
          justifyContent:"center",
          alignItems:"center",
          textAlign:"left",
          marginLeft:"17%"
          
         }} 
         >

         
        <Grid xs={12} sm={12} md={12} sx={{marginTop:"5%"}}>
          <Typography variant='h6'>
        <b>Privacy Policy </b>
        </Typography>
        <Typography variant='subtitle1' sx={{marginTop:"1%"}}>
        
        Last updated: December 08, 2023 <br/>

        This Privacy Policy describes Our policies and procedures on the collection, use 
        and disclosure of Your information when You use the<br/> Service and tells You about Your 
        privacy rights and how the law protects You. <br/>

        We use Your Personal data to provide and improve the Service. By using the Service,
         You agree to the collection and use of information <br/>in accordance with this Privacy Policy.<br/>
        </Typography>

        <Typography variant='h5' sx={{marginTop:"2%"}}>
          <b>Interpretation and Definitions</b>
        </Typography>

        <Typography variant='h6'sx={{marginTop:"2%"}}>
        <b>Interpretation </b>
        </Typography>
   
        <Typography variant='subtitle1' sx={{marginTop:"1%"}}>
        The words of which the initial letter is capitalized have meanings defined under the following 
        conditions. The following definitions shall <br/>have the same meaning regardless of whether they
         appear in singular or in plural.
        </Typography>

        <Typography variant='h6'sx={{marginTop:"2%"}}>
        <b>Definitions </b>
        </Typography>

       
        <Typography variant='subtitle1' sx={{marginTop:"1%"}}>
        For the purposes of this Privacy Policy:<br/>
        <li>Account means a unique account created for You to access our Service or parts
           of our Service.</li><br/>

        <li>Affiliate means an entity that controls, is controlled by or is under common control with a
           party, where "control" means ownership of <br/>50% or more of the shares, equity interest or 
           other securities entitled to vote for election of directors or other managing authority.</li> <br/>

<li>Application refers to IdbookHotels, the software program provided by the Company.</li> <br/>
<li>Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to 
  IDBOOK TRADE & E-COMMERCE <br/>PRIVATE LIMITED, PLOT NO 234, GROUND FLOOR, OPPOSITE ICICI BANK ATM,
   NEAR POLICE STATION, SECTOR 18, SARHAUL,<br/> GURUGRAM.</li> <br/>

   <li>Cookies are small files that are placed on Your computer, mobile device or any other device by
     a website, containing the details of<br/> Your browsing history on that website among its many 
     uses.</li> <br/>

     <li>Country refers to: Haryana, India</li> <br/>
     <li>Device means any device that can access the Service such as a computer, a cellphone or a
       digital tablet.</li> <br/>

       <li>Personal Data is any information that relates to an identified or identifiable individual.</li> <br/>
       <li>Service refers to the Application or the Website or both.</li> <br/>
       <li>Service Provider means any natural or legal person who processes the data on behalf of the
         Company. It refers to third-party<br/> companies or individuals employed by the Company to facilitate 
         the Service, to provide the Service on behalf of the Company, to <br/>perform services related to the 
         Service or to assist the Company in analyzing how the Service is used.</li> <br/>

         <li>Third-party Social Media Service refers to any website or any social network website through 
          which a User can log in or create <br/>an account to use the Service.</li> <br/>
          <li>Usage Data refers to data collected automatically, either generated by the use of the Service
             or from the Service infrastructure <br/>itself (for example, the duration of a page visit).</li><br/>
            
            <li>Website refers to Idbook hotels, accessible from https://www.idbookhotels.com/</li> <br/>
            <li>You means the individual accessing or using the Service, or the company, or other legal 
              entity on behalf of which such individual<br/> is accessing or using the Service, as 
              applicable.</li> <br/>




        </Typography>

        <Typography variant='h5'sx={{marginTop:"2%"}}>
        <b>Collecting and Using Your Personal Data </b>
        </Typography>

        <Typography variant='h6'sx={{marginTop:"1%"}}>
        <b>Types of Data Collected</b>
        </Typography>

        <Typography variant='h6'sx={{marginTop:"1%"}}>
        <b>Personal Data </b>
        </Typography>

        <Typography variant='subtitle1' sx={{marginTop:"1%"}}>

        While using Our Service, We may ask You to provide Us with certain personally identifiable 
        information that can be used to contact or<br/> identify You. Personally identifiable information
         may include, but is not limited to:<br/>

         <li>Email address</li> <br/>
         <li>First name and last name</li> <br/>
         <li> Phone number</li> <br/>
         <li>Usage Data</li> <br/>

        </Typography>

        <Typography variant='h6' sx={{marginTop:"2%"}}>
          <b>Usage Data</b>
        </Typography>

        <Typography variant='subtitle1' sx={{marginTop:"2%"}}>
        Usage Data is collected automatically when using the Service.<br/>

        Usage Data may include information such as Your Device's Internet Protocol address 
        (e.g. IP address), browser type, browser version, the <br/>pages of our Service that You
         visit, the time and date of Your visit, the time spent on those pages, unique device 
         identifiers and other<br/> diagnostic data.<br/>

         When You access the Service by or through a mobile device, We may collect certain information 
         automatically, including, but not limited to, <br/>the type of mobile device You use, Your mobile
          device unique ID, the IP address of Your mobile device, Your mobile operating system, the <br/>
          type of mobile Internet browser You use, unique device identifiers and other diagnostic
           data.<br/>

           We may also collect information that Your browser sends whenever You visit our Service or 
           when You access the Service by or through a<br/> mobile device.<br/>
        </Typography>

        <Typography variant='h6' sx={{marginTop:"2%"}}>
          <b>Information from Third-Party Social Media Services</b>
        </Typography>

        <Typography variant='subtitle1' sx={{marginTop:"1%"}}>
        The Company allows You to create an account and log in to use the Service through the following 
        Third-party Social Media Services:<br/>

        <li>  Google</li> <br/>
        <li> Facebook </li> <br/>
        <li>  Instagram</li> <br/>
        <li> Twitter </li> <br/>
        <li> LinkedIn </li> <br/>
        
        If You decide to register through or otherwise grant us access to a Third-Party Social Media 
        Service, We may collect Personal data that is<br/> already associated with Your Third-Party Social 
        Media Service's account, such as Your name, Your email address, Your activities or Your<br/> contact
         list associated with that account.<br/>

         You may also have the option of sharing additional information with the Company through Your
          Third-Party Social Media Service's account. <br/>If You choose to provide such information 
          and Personal Data, during registration or otherwise, You are giving the Company
           permission to <br/>, share, and store it in a manner consistent with this Privacy Policy.<br/>



        </Typography>

        <Typography variant='h6' sx={{marginTop:"2%"}}>
          <b>Information Collected while Using the Application</b>
        </Typography>

        <Typography variant='subtitle1' sx={{marginTop:"1%"}}>
        While using Our Application, in order to provide features of Our Application, We may collect, with Your prior permission:<br/>
        <li>Information regarding your location</li> <br/>
        <li>Information from your Device's phone book (contacts list)</li> <br/>
        <li>Pictures and other information from your Device's camera and photo library</li> <br/>

        We use this information to provide features of Our Service, to improve and customize Our Service.
         The information may be uploaded to <br/>the Company's servers and/or a Service Provider's 
         server or it may be simply stored on Your device.<br/>

        You can enable or disable access to this information at any time, through Your Device settings.
        </Typography>


        <Typography variant='h6' sx={{marginTop:"2%"}}>
          <b>Tracking Technologies and Cookies</b>
        </Typography>

        <Typography variant='subtitle1' sx={{marginTop:"1%"}}>
        We use Cookies and similar tracking technologies to track the activity on Our Service
         and store certain information. Tracking technologies <br/>used are beacons, tags, and 
         scripts to collect and track information and to improve and analyze Our Service. 
         The technologies We use<br/> may include:<br/>

        <li> Cookies or Browser Cookies. A cookie is a small file placed on Your Device. You can 
          instruct Your browser to refuse all Cookies or to <br/>indicate when a Cookie is being sent.
           However, if You do not accept Cookies, You may not be able to use some parts of our Service.<br/>
            Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service 
            may use Cookies.</li> <br/>

            <li>Web Beacons. Certain sections of our Service and our emails may contain 
              small electronic files known as web beacons 
              (also referred <br/>to as clear gifs, pixel tags, and single-pixel gifs)
               that permit the Company, for example, to count users who have visited those pages or <br/>
               opened an email and for other related website statistics (for example, recording the
                popularity of a certain section and verifying system <br/>
                and server integrity).</li> <br/>

            Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your 
            personal computer or mobile device when You go <br/>
            offline, while Session Cookies are deleted as soon as You close Your web browser.<br/>


We use both Session and Persistent Cookies for the purposes set out below: <br/>

<li> <b> Necessary / Essential Cookies</b></li> <br/>

Type: Session Cookies <br/>
Administered by: Us<br/>
Purpose: These Cookies are essential to provide You with services available through the Website
 and to enable You to use some of its <br/>
 features. They help to authenticate users and prevent 
 fraudulent use of user accounts. Without these Cookies, the services that You<br/> have 
 asked for 
 cannot be provided, and We only use these Cookies to provide You with those services.<br/>

 <li> <b>Cookies Policy / Notice Acceptance Cookies</b></li> <br/>

 Type: Persistent Cookies<br/>
 Administered by: Us<br/>
 Purpose: These Cookies identify if users have accepted the use of cookies on the Website.<br/>

 <li> <b>Functionality Cookies</b></li> <br/>
 Type: Persistent Cookies<br/>
 Administered by: Us <br/>

 Purpose: These Cookies allow us to remember choices You make when You use the Website, 
 such as remembering your login details <br/>
 or language preference. The purpose of these Cookies is to <br/>provide You with a more personal 
 experience and to avoid You having to re-enter your preferences every time You use the Website.<br/>

 For more information about the cookies we use and your choices regarding cookies, please 
 visit our Cookies <br/>Policy or the Cookies section of our Privacy Policy.

        </Typography>


        <Typography variant='h6' sx={{marginTop:"2%"}}>
          <b>Use of Your Personal Data</b>
        </Typography>

        <Typography variant='subtitle1' sx={{marginTop:"1%"}}>
        The Company may use Personal Data for the following purposes:<br/>
        <li>To provide and maintain our Service, including to monitor the usage of our Service.</li> <br/>

        <li>To manage Your Account: to manage Your registration as a user of the Service. 
          The Personal Data You provide can give You access <br/>to different functionalities 
          of the Service that are available to You as a registered user.

</li> <br/>

<li>For the performance of a contract: the development, compliance and undertaking of the 
  purchase contract for the products, items or <br/>
  services You have purchased or of any other contract with Us through the Service.

</li> <br/>

<li>To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms
   of electronic communication, such as a <br/>
   mobile application's push notifications regarding updates or 
   informative communications related to the functionalities, products or <br/>contracted services, including the security updates, when necessary or reasonable for their implementation.

</li> <br/>

<li>To provide You with news, special offers and general information about other
   goods, services and events which we offer that are <br/>similar to those that you have already purchased or enquired about unless You have opted not to receive such information</li> <br/>

<li>To manage Your requests: To attend and manage Your requests to Us.</li> <br/>

<li>For business transfers: We may use Your information to evaluate or conduct
   a merger, divestiture, restructuring, reorganization,<br/> dissolution, or other sale or transfer
    of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation,<br/>
     or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.

</li> <br/>

<li>For other purposes: We may use Your information for other purposes, such as data analysis,
   identifying usage trends, determining <br/>the effectiveness of our promotional campaigns and 
   to evaluate and improve our Service, products, services, marketing and your <br/>experience.

</li> <br/>

We may share Your personal information in the following situations: <br/>

<li>With Service Providers: We may share Your personal information with Service Providers 
  to monitor and analyze the use of <br/>our Service, to contact You.</li> <br/>

<li> For business transfers: We may share or transfer Your personal information in connection
   with, or during negotiations of, any merger,<br/>
    sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
</li> <br/>

<li>With Affiliates: We may share Your information with Our affiliates, in which case
   we will require those affiliates to honor this Privacy<br/>
    Policy. Affiliates include Our parent company and any other subsidiaries,
     joint venture partners or other companies that We control or <br/>that are under common control with Us.
</li> <br/>

<li>With business partners: We may share Your information with Our business partners
   to offer You certain products, services or <br/>promotions.</li> <br/>

<li>With other users: when You share personal information or
   otherwise interact in the public areas with other users, such information<br/>
    may be viewed by all users and may be publicly distributed outside. If You 
    interact with other users or register through a Third-Party <br/>
    Social Media Service, Your contacts on the Third-Party Social Media Service 
    may see Your name, profile, pictures and description of <br/>Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.</li> <br/>

<li>With Your consent: We may disclose Your personal information for any other 
  purpose with Your consent.</li>


        </Typography>


        <Typography variant='h6' sx={{marginTop:"2%"}}>
          <b>Retention of Your Personal Data</b>
        </Typography>

        <Typography variant='subtitle1' sx={{marginTop:"1%"}}>
        The Company will retain Your Personal Data only for as long as is necessary for 
        the purposes set out in this Privacy Policy. We will<br/>
         retain and use Your Personal Data to the extent necessary to comply with our 
         legal obligations (for example, if we are required to <br/>
         retain your data to comply with applicable laws), resolve disputes,
          and enforce our legal agreements and policies.<br/>

The Company will also retain Usage Data for internal analysis purposes. Usage Data is 
generally retained for a shorter period of time,<br/> except when this data is
 used to strengthen the security or to improve the functionality of Our Service,
  or We are legally obligated to<br/> retain this data for longer time periods.
        </Typography>


        <Typography variant='h6' sx={{marginTop:"2%"}}>
          <b>Transfer of Your Personal Data</b>
        </Typography>

        <Typography variant='subtitle1' sx={{marginTop:"1%"}}>
        Your information, including Personal Data, is processed at the Company's operating 
        offices and in any other places where the parties <br/>involved in the processing are located.
         It means that this information may be transferred to â€” and maintained on â€” computers<br/>
          located outside of Your state, province, country or other governmental jurisdiction where
           the data protection laws may differ than those <br/>from Your jurisdiction.<br/>

Your consent to this Privacy Policy followed by Your submission of such information 
represents Your agreement to that transfer.<br/>

The Company will take all steps reasonably necessary to ensure that Your data is
 treated securely and in accordance with this Privacy <br/>Policy and no transfer of Your
  Personal Data will take place to an organization or a country unless there are adequate
   controls in place <br/>including the security of Your data and other personal information.
        </Typography>


        <Typography variant='h6' sx={{marginTop:"2%"}}>
          <b>Delete Your Personal Data</b>
        </Typography>

        <Typography variant='subtitle1' sx={{marginTop:"1%"}}>
        You have the right to delete or request that We assist in deleting the Personal Data that
         We have collected about You.<br/>

Our Service may give You the ability to delete certain information about You from within the Service.<br/>

You may update, amend, or delete Your information at any time by signing in to Your Account,
 if you have one, and visiting the account<br/> settings section that allows you to manage Your
  personal information. You may also contact Us to request access to, correct, or delete<br/>
   any personal information that You have provided to Us.<br/>

Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.
        </Typography>


        <Typography variant='h5' sx={{marginTop:"2%"}}>
          <b>Disclosure of Your Personal Data</b>
        </Typography>

        <Typography variant='h6' sx={{marginTop:"2%"}}>
          <b>Business Transactions</b>
        </Typography>

        <Typography variant='subtitle1' sx={{marginTop:"1%"}}>
        If the Company is involved in a merger, acquisition or asset sale, Your Personal
         Data may be transferred. We will provide notice before <br/>Your Personal Data is transferred and becomes subject to a different Privacy Policy.
        </Typography>


        <Typography variant='h6' sx={{marginTop:"2%"}}>
          <b>Law enforcement</b>
        </Typography>

        <Typography variant='subtitle1' sx={{marginTop:"1%"}}>
        Under certain circumstances, the Company may be required to disclose Your Personal
         Data if required to do so by law or in response to <br/>valid requests by public authorities (e.g. a court or a government agency).
        </Typography>

        <Typography variant='h6' sx={{marginTop:"2%"}}>
          <b>Other legal requirements</b>
        </Typography>

        <Typography variant='subtitle1' sx={{marginTop:"1%"}}>
        The Company may disclose Your Personal Data in the good faith belief that such 
        action is necessary to:<br/>

        <li> Comply with a legal obligation </li> <br/>
        <li> Protect and defend the rights or property of the Company </li> <br/>
        <li> Prevent or investigate possible wrongdoing in connection with the Service </li> <br/>
        <li> Protect the personal safety of Users of the Service or the public </li> <br/>
        <li> Protect against legal liability </li> <br/>
        
        </Typography>

        <Typography variant='h6' sx={{marginTop:"2%"}}>
          <b>Security of Your Personal Data</b>
        </Typography>

        <Typography variant='subtitle1' sx={{marginTop:"1%"}}>
        The security of Your Personal Data is important to Us, but remember that no method of 
        transmission over the Internet, or method of<br/>
         electronic storage is 100% secure. While We strive to use commercially 
         acceptable means to protect Your Personal Data, We cannot<br/> guarantee its absolute security.
        </Typography>

        

        <Typography variant='h6' sx={{marginTop:"2%"}}>
          <b>Children's Privacy</b>
        </Typography>

        <Typography variant='subtitle1' sx={{marginTop:"1%"}}>
        Our Service does not address anyone under the age of 13. We do not knowingly 
        collect personally identifiable information from anyone <br/>under the age of 13. If You are
         a parent or guardian and You are aware that Your child has provided Us with 
         Personal Data, please<br/> contact Us. If We become aware that We have collected Personal
          Data from anyone under the age of 13 without verification of parental <br/>consent
          , We take steps to remove that information from Our servers.<br/>

        If We need to rely on consent as a legal basis for processing Your information 
        and Your country requires consent from a parent, We<br/> may require Your parent's consent before We collect and use that information.<br/>
        </Typography>


        <Typography variant='h6' sx={{marginTop:"2%"}}>
          <b>Links to Other Websites</b>
        </Typography>

        <Typography variant='subtitle1' sx={{marginTop:"1%"}}>
        Our Service may contain links to other websites that are not operated by Us. If You
         click on a third party link, You will be directed to that <br/>third party's site. We 
         strongly advise You to review the Privacy Policy of every site You visit.<br/>

We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
        </Typography>

        <Typography variant='h6' sx={{marginTop:"2%"}}>
          <b>Changes to this Privacy Policy</b>
        </Typography>

        <Typography variant='subtitle1' sx={{marginTop:"1%"}}>
        We may update Our Privacy Policy from time to time. We will notify You of any changes
         by posting the new Privacy Policy on this page.<br/>

We will let You know via email and/or a prominent notice on Our Service, prior to the
 change becoming effective and update the<br/> "Last updated" date at the top of this Privacy Policy.<br/>

You are advised to review this Privacy Policy periodically for any changes. Changes to this
 Privacy Policy are effective when they are<br/> posted on this page.
        </Typography>

        <Typography variant='h6' sx={{marginTop:"2%"}}>
          <b>Contact Us</b>
        </Typography>

        <Typography variant='subtitle1' sx={{marginTop:"1%"}}>
        If you have any questions about this Privacy Policy, You can contact us:<br/>

        <li>By email: accounts@idbookhotels.com</li><br/>
            <li>By visiting this page on our website: https://www.idbookhotels.com</li><br/>
            <li>By phone number: +91 81001 50924</li> <br/>

            <li>By mail: PLOT NO 234, GROUND FLOOR, OPPOSITE ICICI BANK ATM, NEAR POLICE STATION, SECTOR 18, SARHAUL, <br/>
            GURUGRAM, HARYANA, 122015</li> <br/>
        </Typography>

        

        </Grid>

        </Grid>

        <Grid xs={12} sm={6} md={6} sx={{textAlign:"right",marginRight:"-15%",marginTop:"-5%"}}>
      <img src={greenhalfspan} alt="greenhalfspan" style={{width:"30%", height:"auto"}}/>
      </Grid>
   
   </Box>

  <Grid sx={{marginTop:"-20%",overflow:"hidden"}} ></Grid>

    <Foop12 />

    </>
  );
}

export default Privacy;
