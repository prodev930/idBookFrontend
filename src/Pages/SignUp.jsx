import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Facebook from "../Images/Facebook.png";
import Google from "../Images/Google.png";
import Linkedin from "../Images/Linkedin.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          justifyContent: "center", // Center content vertically
          alignItems: "center",
          textAlign: "center", // Center content horizontally
        }}
      >
        <Grid sx={{ textAlign: "center" }}>
          <Typography variant="h3" sx={{ marginTop: "6%", color: "black" }}>
            <b>SignUp</b>
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} sx={{ marginTop: "5%" }}>
          <TextField
            id="email"
            name="email"
            label=" Email/Username"
            type="email"
            variant="outlined"
            InputProps={{ sx: { borderRadius: "33px", width: "450px" } }}
          ></TextField>
        </Grid>

        <Grid item xs={12} sm={12} sx={{ marginTop: "2%" }}>
          <TextField
            id="Password"
            name="Password"
            label=" Password"
            type="Password"
            variant="outlined"
            InputProps={{ sx: { borderRadius: "33px", width: "450px" } }}
          ></TextField>
        </Grid>

        <Grid sx={{ marginTop: "3%" }}>
          <Button
            // component={Link}
            // to="/"
            type="submit"
            sx={{
              border: "1px",
              borderRadius: "34px",
              color: "#FFF",
              background: "#1F4A8E",
              width: "450px",
              height: "50px",
              "&:hover": {
                backgroundColor: "#1F4A8E",
              },
              margin: "0 auto", // Center the button horizontally
            }}
            // onClick={() => setIsLoggedIn(true)}
            // onClick={setIsLoggedIn(true)}
          >
            {/* <NavLink to="/">

                  Login
                  </NavLink> */}

            <b> Continue </b>
          </Button>
        </Grid>

        <Grid sx={{ marginTop: "4%" }}>
          <Typography variant="h6">
            Already have an account?
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "inherit" }}
              
              rel="noopener noreferrer"
            >
              <u>Login </u>
            </Link>
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          sx={{ marginTop: "4%" }}
          container
          alignItems="center"
          justifyContent="center"
        >
          <IconButton type="default">
            <img src={Google} alt="" />
          </IconButton>

          <IconButton type="default">
            <img src={Facebook} alt="" />
          </IconButton>

          <IconButton type="default">
            <img src={Linkedin} alt="" />
          </IconButton>
        </Grid>
      </Box>
    </>
  );
};

export default SignUp;
