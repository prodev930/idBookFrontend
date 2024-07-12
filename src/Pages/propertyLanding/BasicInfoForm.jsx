/* eslint-disable react/prop-types */
import React from "react";

import {
  Box,
  Button,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
// eslint-disable-next-line react/prop-types
const BasicInfoForm = ({ propertyDetail, setPropertyDetail, setTabs }) => {
  const { name, rating, build_year, phone_no, email } = propertyDetail;
  return (
    <Container maxWidth="xxl" sx={{ textAlign: "start" }}>
      <Paper
        elevation={3}
        style={{ width: "50%", margin: "auto", marginBottom: "10px" }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          p={2}
        >
          <Typography
            variant="h3"
            sx={{ color: "#2C467B", textAlign: "start", marginBottom: "4px" }}
          >
            Basic Information
          </Typography>
          <Typography variant="p">
            Please fill in details of your property.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 300,
            margin: "auto",
          }}
        >
          <Grid item xs={6}>
            <InputLabel>Property Name</InputLabel>
            <TextField
              variant="outlined"
              margin="normal"
              value={name}
              onChange={(e) =>
                setPropertyDetail({
                  ...propertyDetail,
                  name: e.target.value,
                })
              }
            />
          </Grid>

          <Grid item xs={6} mb={4}>
            <InputLabel>Hotel Star Rating</InputLabel>
            <Select
              label="Select"
              value={rating}
              onChange={(e) =>
                setPropertyDetail({ ...propertyDetail, rating: e.target.value })
              }
              variant="outlined"
              margin="normal"
              sx={{ width: "100%" }}
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={6} mb={4}>
            <InputLabel>When was this property built</InputLabel>
            <Select
              label="Select"
              value={build_year}
              onChange={(e) =>
                setPropertyDetail({
                  ...propertyDetail,
                  build_year: e.target.value,
                })
              }
              variant="outlined"
              margin="normal"
              sx={{ width: "100%" }}
            >
              <MenuItem value="1">2024</MenuItem>
              <MenuItem value="2">2023</MenuItem>
              <MenuItem value="3">2022</MenuItem>
              <MenuItem value="4">2021</MenuItem>
              <MenuItem value="5">2020</MenuItem>
            </Select>
          </Grid>
        </Box>
      </Paper>
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          width: "50%",
          margin: "auto",
          marginBottom: "10px",
        }}
      >
        <Box display="flex" justifyContent="space-between" p={2}>
          <Typography variant="h3" sx={{ color: "#2C467B" }}>
            Contact Details
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 300,
            margin: "auto",
          }}
        >
          <Grid item xs={6}>
            <InputLabel>Mobile Number</InputLabel>
            <TextField
              variant="outlined"
              margin="normal"
              value={phone_no}
              onChange={(e) =>
                setPropertyDetail({
                  ...propertyDetail,
                  phone_no: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel>Email</InputLabel>
            <TextField
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) =>
                setPropertyDetail({ ...propertyDetail, email: e.target.value })
              }
            />
          </Grid>
        </Box>
      </Paper>
      {/* <Paper
        elevation={3}
        style={{ padding: "20px", width: "50%", margin: "auto" }}
      > */}
      <Box display="flex" flexDirection="row" justifyContent="flex-end" p={2}>
        <Button
          variant="contained"
          disabled={!name}
          sx={{
            background:
              "linear-gradient(to right, rgba(29, 73, 141, 1), rgba(60, 101, 164, 1))",
          }}
          onClick={() => setTabs("Location")}
        >
          Save & Continue
        </Button>
      </Box>
      {/* </Paper> */}
    </Container>
  );
};

export default BasicInfoForm;
