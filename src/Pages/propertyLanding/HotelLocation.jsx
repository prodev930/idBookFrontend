/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import {
  Box,
  Grid,
  Paper,
  Button,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Container,
} from "@mui/material";
// eslint-disable-next-line react/prop-types
const HotelLocation = ({
  setPropertyDetail,
  propertyDetail,
  setTabs,
  handleSubmit,
}) => {
  const mapStyles = {
    height: "100vh",
    width: "70%",
  };

  const defaultCenter = {
    lat: 40.712776,
    lng: -74.005974,
  };

  const { location, area_name, city_name, latitude, longitude, address } =
    propertyDetail;
  const [agree, setAgree] = useState(false);
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <Paper elevation={3} style={{ padding: "20px", width: "80%" }}>
          <Grid container spacing={3}>
            {/* First Column */}
            <Grid
              item
              xs={12}
              sm={6}
              container
              justifyContent="center"
              alignItems="center"
            >
              <Box textAlign="start">
                <Container maxWidth="xs">
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#2C467B",
                      textAlign: "start",
                      marginBottom: "8px",
                    }}
                  >
                    Address Details
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Search"
                        name="Search"
                        value={location}
                        onChange={(e) =>
                          setPropertyDetail({
                            ...propertyDetail,
                            location: e.target.value,
                          })
                        }
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="House/Building/Apartment"
                        name="house"
                        value={area_name}
                        onChange={(e) =>
                          setPropertyDetail({
                            ...propertyDetail,
                            area_name: e.target.value,
                          })
                        }
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="CityName"
                        name="CityName"
                        value={city_name}
                        onChange={(e) =>
                          setPropertyDetail({
                            ...propertyDetail,
                            city_name: e.target.value,
                          })
                        }
                        required
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="address"
                        name="address"
                        value={address}
                        onChange={(e) =>
                          setPropertyDetail({
                            ...propertyDetail,
                            address: e.target.value,
                          })
                        }
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={agree}
                            onChange={() => setAgree(true)}
                            name="agree"
                            color="primary"
                          />
                        }
                        label="I agree to the terms and conditions"
                      />
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            </Grid>

            {/* Second Column */}
            <Grid
              item
              xs={12}
              sm={6}
              container
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                {/* <LoadScript googleMapsApiKey="YOUR_API_KEY">
                  <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={10}
                    center={defaultCenter}
                  >
                    <Marker position={defaultCenter} />
                  </GoogleMap>
                </LoadScript> */}
                <Typography>Maps</Typography>
                {/* <img src={Logo} alt="Column1 " style={{ maxWidth: '100%', height: 'auto' }} /> */}
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      {/* <Paper
        elevation={3}
        style={{ padding: "10px", width: "90%", margin: "auto" }}
      > */}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        p={2}
      >
        <Button
          variant="contained"
          sx={{
            background:
              "linear-gradient(to right, rgba(29, 73, 141, 1), rgba(60, 101, 164, 1))",
          }}
          onClick={() => setTabs("BasicInfo")}
        >
          Back
        </Button>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={!agree}
          onClick={handleSubmit}
          sx={{
            maxWidth: "25%",
            color: "white",
            background:
              "linear-gradient(to right, rgba(29, 73, 141, 1), rgba(60, 101, 164, 1))",
          }}
        >
          Save & Continue
        </Button>
      </Box>
      {/* </Paper> */}
    </>
  );
};

export default HotelLocation;
