/* eslint-disable no-unsafe-optional-chaining */
import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Iconify from "../layouts/dashboard/common/iconify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FranchiseSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const paramData = location.state;
  const apiEndpoint =
    import.meta.env.VITE_BACKEND_URL ||
    "https://backend.idbookhotels.com/api/v1/";

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleMobileChange = (e) => {
    // Only allow numbers in the mobile TextField
    setMobile(e.target.value.replace(/^\+?1?\d{11,15}$/g, ""));
  };

  const handlePasswordChange = (e) => {
    setPassword(
      e.target.value.replace(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$!%^&*()\-_+=])[A-Za-z\d@#$!%^&*()\-_+=]{15,}$/g,
        ""
      )
    );
  };

  const handleSubmit = async () => {
    try {
      const data = {
        password,
        mobile_number: mobile,
        roles: [3],
      };
      const response = await axios.post(`${apiEndpoint}auth/signup`, data);
      const userData = response.data.data;
      localStorage.setItem("token", JSON.stringify(userData));
      toast.success(response?.message);
      navigate("/franchise/signup-franchise/createProperty", {
        state: paramData,
      });
    } catch (error) {
      const { mobile_number, password } = error?.response?.data.message;
      toast.error(mobile_number || password);
    }

    // signUp(data)
    // Add your login submission logic here
    // For example, you can check if mobile and password are valid and proceed with login
  };

  return (
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
          <b>{paramData?.name} SignUp</b>
        </Typography>
      </Grid>

      <Grid item xs={12} sm={12} sx={{ marginTop: "5%" }}>
        <TextField
          id="mobile"
          name="mobile"
          type="text"
          variant="outlined"
          value={mobile}
          sx={{ alignItems: "center" }}
          onChange={handleMobileChange}
          InputProps={{
            sx: {
              borderRadius: "33px",
              width: "450px",
              backgroundColor: "#F0F0F0",
            },
            placeholder: "Mobile",
            inputMode: "numeric", // Allow only numeric input
          }}
        ></TextField>
      </Grid>

      <Grid item xs={12} sm={12} sx={{ marginTop: "2%" }}>
        <TextField
          id="password"
          name="password"
          variant="outlined"
          sx={{ alignItems: "center" }}
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handlePasswordChange}
          InputProps={{
            sx: {
              borderRadius: "33px",
              width: "450px",
              backgroundColor: "#F0F0F0",
            },
            placeholder: "Password",
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePassword} edge="end">
                  {showPassword ? (
                    <Iconify icon="iconoir:eye-solid" />
                  ) : (
                    <Iconify icon="iconoir:eye" />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      <Grid sx={{ marginTop: "3%" }}>
        <Button
          // component={Link}
          // to="/"
          type="submit"
          onClick={handleSubmit}
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
      <ToastContainer />
      {/* {message && <Toast message={message} />} */}
    </Box>
  );
};

export default FranchiseSignup;
