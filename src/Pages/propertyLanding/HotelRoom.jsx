/* eslint-disable react/prop-types */
import React, { useState } from "react";

import {
  Box,
  Card,
  Stack,
  Paper,
  AppBar,
  Button,
  Select,
  Toolbar,
  MenuItem,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import RoomAddForm from "./RoomAddForm";
// import Occupancy from "./Occupancy";

const HotelRoom = ({ setTabs, setShow, setRoomData, setCheck }) => {
  //   const { setHotelRoomsData, updateHotelRoomsData } = useHotels();

  const [values, setValues] = useState({
    custom_id: "",
    room_type: "",
    room_view: "",
    bed_type: "",
    description: "",
    carpet_area: 32767,
    bed_count: 2147483647,
    person_capacity: 32767,
    child_capacity: 32767,
    price_per_night: 1000,
    price_for_4_hours: 200,
    price_for_8_hours: 400,
    price_for_12_hours: 600,
    price_for_24_hours: 1000,
    discount: 32767,
    availability: true,
    active: true,
    property: "",
    amenities: [1],
  });

  const HandleSubmit = () => {
    // console.log("values", values);
    setTabs("Photos");
  };
  return (
    <Container maxWidth="xxl" sx={{textAlign:'start'}}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h3"  sx={{color:'#2C467B'}}>Products</Typography>

        <Button
          variant="contained"
          color="inherit"
          onClick={() => {
            setCheck();
            setRoomData();
            setShow("RoomView");
          }}
        >
          back to rooms
        </Button>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5, backgroundColor: "white" }}
      >
        <AppBar
          position="static"
          sx={{ backgroundColor: "white", color: "black" }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },

                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Add New Room
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </Stack>
      <Card>
        <Typography sx={{ margin: "25px", fontWeight:'bold', fontSize:'28px' }}>ROOM INFO</Typography>
        <RoomAddForm setValues={setValues} values={values} />
        <Typography
          variant="p"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            margin: 2,
            display: { xs: "none", md: "flex" },
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Dimensions
        </Typography>
        <Box
          sx={{
            // '& > :not(style)': { m: 1, width: '0ch' },
            margin: "10px",
            display: "flex",
          }}
        >
          <Box
            // component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "17ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <Button variant="outlined" sx={{ width: "100px" }}>
              Size
            </Button>
            <Button variant="outlined" sx={{ width: "100px" }}>
              Area
            </Button>
          </Box>
          <Box sx={{ "& > :not(style)": { m: 1, width: "17ch" }, gap: "30px" }}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{ height: "50px", width: "150px", mb: "20px" }}
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{ height: "50px", width: "150px", mb: "20px" }}
            />
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{ width: "250px", height: "35px", padding: "20px" }}
              value="Select"
              //label="Room Type"
              // onChange={handleChange}
            >
              <MenuItem value="Sq.ft">Sq.ft</MenuItem>
              <MenuItem value="Sq.mtr">Sq.mtr</MenuItem>
            </Select>
          </Box>
        </Box>
        {/* <Occupancy /> */}
      </Card>
      <Box display="flex" justifyContent="flex-end" sx={{ padding: "10px" }}>
        {/* <Paper style={{ width: "100%" }}> */}
          <Box p={2} display="flex" justifyContent="flex-end">
            <Button variant="contained" color="primary" onClick={HandleSubmit}
            sx={{background:  'linear-gradient(to right, rgba(29, 73, 141, 1), rgba(60, 101, 164, 1))'}}>
              SAVE & Continue
            </Button>
          </Box>
        {/* </Paper> */}
      </Box>
    </Container>
  );
};

export default HotelRoom;
