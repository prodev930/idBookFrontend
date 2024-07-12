import React from "react";
import {
  Typography,
  Grid,
  Box,
  Paper,
  Container,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import franhotel from "../Images/franhotel.png";
import hotelovrly from "../Images/hotelovrly.png";
import franhl from "../Images/franhl.png";
import normalhl from "../Images/normalhl.png";
import Footer from "../components/Footer";
import bg from "../Images/bg.png";
import eo from "../Images/eo.png";
import py from "../Images/py.png";
import so from "../Images/so.png";
import sp from "../Images/sp.png";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Franchise = () => {
  const navigate = useNavigate();
  const containerStyle = {
    position: "relative",
  };

  const idbTextStyle = {
    color: "white",
    top: "10%",
    left: "15%",
    zIndex: "1",
    position: "absolute",
  };

  const textContainerStyle = {
    color: "white",
    top: "40%",
    display: "flex",
    zIndex: "1",
    flexDirection: "column",
    position: "absolute",
  };

  const handleNormalSignup = () => {
    const data = { name: "Listing" };
    localStorage.setItem("franchise", false);
    navigate("signup-franchise", { state: data });
  };

  const handleFranchiseSignup = () => {
    const data = { name: "Franchise" };
    localStorage.setItem("franchise", true);
    navigate("signup-franchise", { state: data });
  };
  const commissionData = [
    {
      id: 1,
      imageUrl: sp,
      title: "Sign Up Process",
      description:
        'Click on “Join Idbook” button, share your basic details and sign up in just 30 minutes.',
    },
    {
      id: 2,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/60c727ac19c4a0ed58f138cacab3f11a98e74ae40b31af22042e5361f501b7bf?apiKey=6fb128c63ad344b49d757598b5fc3074",
      title: "Commission Charges",
      description:
        "Flat 20% service fee and Rs 40 on every check-in. GST as applicable.",
    },
    {
      id: 3,
      imageUrl: py,
      title: "Payment Frequency",
      description:
        "All daily pending dues will be automatically credited to your bank account.",
    },
  ];

  const idbData = [
    {
      id: 1,
      imageUrl: so,
      title: "Self-Onboarding",
      description:
        "Self-onboard in 30 minutes and grow your business from Day 1.",
    },
    {
      id: 2,
      imageUrl: bg,
      title: "Business Growth",
      description:
        "Get 2x revenue jump using Idbook which works with OTAs and AI enabled pricings.",
    },
    {
      id: 3,
      imageUrl: eo,
      title: "Easy Operations",
      description:
        "Get support from Idbook in managing inventory and accessing real time bookings.",
    },
  ];

  return (
    <>
      <Box style={containerStyle}>
        <Grid style={idbTextStyle}>
          <Typography
            variant="body1"
            sx={{ fontWeight: "700", fontSize: "30px" }}
          >
            Idbook <span style={{ fontWeight: "100" }}>Hospitality Private Limited</span>
          </Typography>
        </Grid>
        <Grid container style={textContainerStyle}>
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "20px", md: "30px" } }}
          >
            Growing your business has never been so easy!
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: { xs: "400px", md: "700" },
              fontSize: { xs: "26px", md: "35px" },
              margin: "15px 0",
            }}
          >
            Presenting specially for your benefits, become an
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "18px", md: "26px" } }}
          >
            Idbook Partner
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "18px", md: "26px" } }}
          >
            In just 7 days!
          </Typography>
        </Grid>
        <img src={franhotel} alt="Bottom Image" className="franhotelimg" />
      </Box>

      <Box sx={{ color: "white", position: "relative" }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-around"
        >
          {commissionData.map((commission) => (
            <Grid key={commission.id} item xs={12} sm={6} md={4} lg={3}>
              <Paper
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "20px",
                  textAlign: "center",
                  background: "none",
                  boxShadow: "none",
                  color: "black",
                }}
              >
                <img
                  loading="lazy"
                  src={commission.imageUrl}
                  alt={commission.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "21px 21px 0 0",
                  }}
                />
                <Box
                  sx={{
                    background: "white",
                    borderRadius: "0 0 21px 21px",
                    marginTop: "-1px",
                  }}
                >
                  <Typography
                    variant="body1"
                    className="font-bold mb-4"
                    p={2}
                    sx={{
                      fontSize: "22px",
                      fontWeight: "700",
                      color: "#000000",
                    }}
                  >
                    {commission.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    className="text-zinc-600"
                    px={2}
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      textAlign: "start",
                      color: "#5A5A5A",
                    }}
                  >
                    {commission.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
        {/* <img
        src={hotelovrly}
        alt="Bottom Image"
        style={{ width: '100%', height: 'auto', position: 'absolute', bottom: 0, zIndex: -1, opacity: '0.5' }}
      /> */}
      </Box>

      {/* <Box mt={1} sx={{color:'white'}}>
    <Grid p={12} sx={{zIndex:'1', position:'absolute'}}>
<Grid container spacing={2} alignItems="center" justifyContent="space-around">
          {commissionData.map((commission) => (
            <Grid key={commission.id} item xs={7} md={4}>
              <Paper
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center', // Adjust as needed
                  padding: '20px',
                  textAlign: 'center',
                  background:'none',
                  boxShadow:'none',
                  color:'black',
                }}
              >
                <img
                  loading="lazy"
                  srcSet={`${commission.imageUrl}`}
                  alt={commission.title}
                  style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius:'21px 21px 0 0' }}
                />
               <Grid sx={{background:'white', borderRadius:'0 0 21px 21px'}}>
               <Typography variant="body1" className="font-bold mb-4" p={2} sx={{fontSize:'21px'}}>
                  {commission.title}
                </Typography>
                <Typography variant="body1" className="text-zinc-600" p={2} sx={{fontSize:'17px', textAlign:'start'}}>
                  {commission.description}
                </Typography>
               </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
    </Grid>
    <img src={hotelovrly} alt="Bottom Image" style={{ width: '100%', height: 'auto', position: 'relative', opacity:'0.5' }} />
</Box> */}
      <Box
        sx={{
          color: "white",
          background:
            " linear-gradient(to right, rgba(29, 73, 141, 1), rgba(60, 101, 164, 1))",
        }}
      >
        <Grid sx={{ padding: { xs: "20px", md: "50px" } }}>
          <Typography variant="h4" textAlign="start" ml={7}>
          Why join Idbook?
          </Typography>
          <Typography variant="body1" textAlign="start" ml={7} mb={6}>
          Idbook's advanced tools will bring more benefits to your business.
          </Typography>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="space-around"
          >
            {idbData.map((commission) => (
              <Grid key={commission.id} item xs={7} md={4}>
                <Paper
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start", // Adjust as needed
                    padding: "20px",
                    textAlign: "center",
                    background: "none",
                    boxShadow: "none",
                    color: "white",
                  }}
                >
                  <img
                    loading="lazy"
                    srcSet={`${commission.imageUrl}`}
                    alt={commission.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      borderRadius: "21px",
                    }}
                  />
                  <Typography
                    variant="body1"
                    className="font-bold mb-4"
                    p={2}
                    sx={{ fontSize: "21px", textAlign: "start", fontWeight:'bold' }}
                  >
                    {commission.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    className="text-zinc-600"
                    px={2}
                    sx={{ fontSize: "17px", textAlign: "start" }}
                  >
                    {commission.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>

      <Typography
        variant="h4"
        sx={{ margin: "30px 0", fontSize: "60px", fontWeight: "700", color:'rgb(44, 70, 123)' }}
      >
        Idbook Listing Works In Two Types
      </Typography>
      <div style={{ flexGrow: 1 }}>
        <Grid container spacing={0} sx={{ justifyContent: "space-around" }}>
          {/* Second half */}
          <Grid
            item
            xs={12}
            md={5}
            style={{
              height: "100%",
              padding: "28px",
              border: "1px solid black",
              borderRadius: "24px",
            }}
          >
            <img
              src={franhl}
              alt="Your Image"
              style={{ width: "100%", height: "auto", marginBottom: "8px" }}
            />

            {/* Content for the second half */}
            <Container
              maxWidth="md"
              className="py-12 pl-20 max-w-[760px] max-md:pl-5"
            >
              <Typography
                variant="h4"
                mt={2}
                sx={{
                  textAlign: "center",
                  color:'rgb(44, 70, 123)',
                  fontSize: "36px",
                  fontWeight: "600",
                }}
                className="header justify-center mt-2 text-neutral-500 max-md:mr-0.5 max-md:max-w-full"
              >
                Franchise Hotel Listing
              </Typography>

              <Grid sx={{ textAlign: "start" }}>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "start",
                    color: "#000000",
                    fontSize: "24px",
                    fontWeight: "400",
                  }}
                  mt={4}
                  className="summary mt-9 text-base text-neutral-400 max-md:mr-0.5 max-md:max-w-full"
                >
                  Franchise (10 Lakh cost valid for the 5 years)
                </Typography>
              </Grid>
              <Grid
                sx={{
                  textAlign: "start",
                  color: "#999999",
                  fontSize: "16px",
                  marginTop: "10px",
                }}
              >
                <Typography
                  variant="body1"
                  className="summary justify-center mt-9 text-base text-neutral-400 max-md:mr-0.5 max-md:max-w-full"
                >
                  1. Idbook listing on top search
                </Typography>
                <Typography
                  variant="body1"
                  className="summary justify-center mt-9 text-base text-neutral-400 max-md:mr-0.5 max-md:max-w-full"
                >
                  2. ⁠Official website
                </Typography>
                <Typography
                  variant="body1"
                  className="summary justify-center mt-9 text-base text-neutral-400 max-md:mr-0.5 max-md:max-w-full"
                >
                  3. ⁠Hotels branding  &#40;Flex light board, wall and reception, branded t-shirt to staff, Id card, bedsheet, pillow cover&#41;

                </Typography>
                <Typography
                  variant="body1"
                  className="summary justify-center mt-9 text-base text-neutral-400 max-md:mr-0.5 max-md:max-w-full"
                >
                 4. ⁠Toiletry kit &#40; Around 10 items for the use &#41;
                </Typography>
                <Typography
                  variant="body1"
                  className="summary justify-center mt-9 text-base text-neutral-400 max-md:mr-0.5 max-md:max-w-full"
                >
                  5. ⁠Google my business
                </Typography>
                <Typography
                  variant="body1"
                  className="summary justify-center mt-9 text-base text-neutral-400 max-md:mr-0.5 max-md:max-w-full"
                >
                  6. ⁠Social media promotion
                </Typography>
                <Typography
                  variant="body1"
                  className="summary justify-center mt-9 text-base text-neutral-400 max-md:mr-0.5 max-md:max-w-full"
                >
                  7. ⁠Offline and b2b sales
                </Typography>
                <Typography
                  variant="body1"
                  className="summary justify-center mt-9 text-base text-neutral-400 max-md:mr-0.5 max-md:max-w-full"
                >
                  8. ⁠Hotel will be recommended for the holiday package bookings
                </Typography>
                <Typography
                  variant="body1"
                  className="summary justify-center mt-9 text-base text-neutral-400 max-md:mr-0.5 max-md:max-w-full"
                >
                  9. Group bookings and marriage function bookings
                </Typography>

                <Typography
                  variant="body1"
                  mt={2}
                  sx={{ color: "#000000", fontSize: "24px", fontWeight: "400" }}
                  className="justify-center mt-6 text-base font-semibold text-zinc-600 max-md:mr-0.5 max-md:max-w-full"
                >
                  70% Occupancy guaranteed
                </Typography>
              </Grid>
            </Container>
            <Button
              sx={{
                textTransform: "none",
                marginTop: "30px",
                color: "white",
                padding: "2px 20px",
                borderRadius: "24px",
                background:
                  "linear-gradient(to right, rgba(29, 73, 141, 1), rgba(60, 101, 164, 1))",
              }}
              onClick={handleFranchiseSignup}
            >
              Sign-up
            </Button>
          </Grid>

          {/* First half */}
          <Grid
            item
            xs={12}
            md={5}
            style={{
              height: "100%",
              padding: "28px",
              border: "1px solid black",
              borderRadius: "24px",
            }}
          >
            {/* Content for the first half */}
            <img
              src={normalhl}
              alt="Your Image"
              style={{ width: "100%", height: "auto", marginBottom: "8px" }}
            />

            {/* Text below the image */}
            <Container
              maxWidth="md"
              className="py-12 pl-20 max-w-[760px] max-md:pl-5"
            >
              <Typography
                variant="h4"
                mt={2}
                sx={{
                  textAlign: "center",
                  color:'rgb(44, 70, 123)',
                  fontSize: "36px",
                  fontWeight: "600",
                }}
                className="header justify-center mt-2 text-neutral-500 max-md:mr-0.5 max-md:max-w-full"
              >
                Normal Hotel Listing
              </Typography>

              <Grid
                sx={{
                  textAlign: "center",
                  color: "#999999",
                  fontSize: "16px",
                  marginTop: "10px",
                }}
              >
                <Typography
                  variant="body1"
                  className="summary justify-center mt-9 text-base text-neutral-400 max-md:mr-0.5 max-md:max-w-full"
                >
                  1. Hotel listing with Idbook
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ paddingRight: "34px" }}
                  className="summary justify-center mt-9 text-base text-neutral-400 max-md:mr-0.5 max-md:max-w-full"
                >
                  2. Official website
                </Typography>
              </Grid>
              <Typography
                variant="body1"
                mt={2}
                sx={{ color: "#000000", fontSize: "24px", fontWeight: "400" }}
                className="justify-center mt-6 text-base font-semibold text-zinc-600 max-md:mr-0.5 max-md:max-w-full"
              >
                100 Bookings per month
              </Typography>
            </Container>
            <Button
              sx={{
                textTransform: "none",
                marginTop: "30px",
                color: "white",
                padding: "2px 20px",
                borderRadius: "24px",
                background:
                  "linear-gradient(to right, rgba(29, 73, 141, 1), rgba(60, 101, 1641))",
              }}
              onClick={handleNormalSignup}
            >
              Sign-up
            </Button>
          </Grid>
        </Grid>
      </div>

      <Divider sx={{ border: "1px solid #EBEBEB" }} />

      {/* <div
        style={{ padding: "30px 0", margin: "50px 0", background: "#FAFAFA" }}
        className="flex relative flex-col items-center mb-10 max-w-full"
      >
        <Typography
          variant="h4"
          sx={{ fontSize: "60px", fontWeight: "700" }}
          className="justify-center self-stretch text-6xl leading-[71.39px] max-md:max-w-full max-md:text-4xl"
        >
          Humare saath connected rahe!
        </Typography>
        <Typography
          variant="body1"
          className="justify-center mt-8 text-2xl leading-10 max-md:max-w-full"
        >
          Sign up karein aur janiye Idbook se judne ke fayede.
        </Typography>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          className="mt-16 max-md:mt-10"
        >
          <Grid item xs={12} md={8} lg={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Apna mobile number enter karein"
              id="mobile-number"
              aria-label="Mobile Number"
              sx={{
                border: "1px solid #A3BAC6",
                background: "white",
                margin: "30px 0",
                borderRadius: "1px",
              }}
            />
          </Grid>
        </Grid>
        <Button
          sx={{
            background:
              "linear-gradient(to right, rgba(29, 73, 141, 1), rgba(60, 101, 164, 1))",
            color: "white",
            borderRadius: "22px",
            width: "30%",
          }}
          type="submit"
          variant="contained"
          color="primary"
          className="justify-center items-center px-16 py-3 mt-11 max-w-full text-xl leading-6 text-center text-white whitespace-nowrap rounded-[41px] max-md:px-5 max-md:mt-10"
        >
          Submit
        </Button>
      </div> */}
      <Footer />
    </>
  );
};

export default Franchise;
