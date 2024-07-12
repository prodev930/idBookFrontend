/* eslint-disable react/prop-types */
import React from "react";

import {
  Box,
  Grid,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  Typography,
  FormControl,
} from "@mui/material";

const RoomAddForm = ({ setValues, values }) => (
  <Box
    sx={{
      "& > :not(style)": { m: 1, width: "155ch" },
      display: "flex",
      flexDirection: "row",
      gap: "35px",
      margin: "20px",
    }}
    noValidate
    autoComplete="off"
  >
    <Box>
      <Typography sx={{ mb: "10px" }}>Display Name</Typography>
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={values.room_type}
        onChange={(e) => setValues({ ...values, description: e.target.value })}
        sx={{ height: "50px", width: "500px", mb: "40px" }}
      />
      <Typography sx={{ mb: "10px" }}>Description</Typography>
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={values.description}
        onChange={(e) => setValues({ ...values, description: e.target.value })}
        sx={{ height: "100px", width: "500px", mb: "20px" }}
      />
    </Box>
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={8}>
          <InputLabel>
            Room Type <span style={{ color: "red" }}>*</span>
          </InputLabel>

          <FormControl fullWidth>
            <Select
              value={values?.room_type}
              onChange={(e) =>
                setValues({ ...values, room_type: e.target.value })
              }
            >
              <MenuItem value="DELUXE">DELUXE</MenuItem>
              <MenuItem value="CLASSIC">CLASSIC</MenuItem>
              <MenuItem value="PREMIUM">PREMIUM</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <InputLabel>
            Room View <span style={{ color: "red" }}>*</span>
          </InputLabel>
          <FormControl fullWidth>
            <Select
              value={values?.room_view}
              onChange={(e) =>
                setValues({ ...values, room_view: e.target.value })
              }
            >
              <MenuItem value="SEA VIEW">SEA VIEW</MenuItem>
              <MenuItem value="RIVER VIEW">RIVER VIEW</MenuItem>
              <MenuItem value="VALLEY VIEW">VALLEY VIEW</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <InputLabel>
            Bed Type <span style={{ color: "red" }}>*</span>
          </InputLabel>
          <FormControl fullWidth>
            <Select
              value={values?.bed_type}
              onChange={(e) =>
                setValues({ ...values, bed_type: e.target.value })
              }
            >
              <MenuItem value="KING">KING</MenuItem>
              <MenuItem value="QUEEN">QUEEN</MenuItem>
              <MenuItem value="SINGLE">SINGLE</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>

    <Box>
      <Typography>Total Rooms</Typography>
      <TextField
        id="outlined-basic"
        variant="outlined"
        onChange={(e) => setValues({ ...values, bed_count: e.target.value })}
        sx={{ width: "250px", height: "25px" }}
      />
    </Box>
  </Box>
);

export default RoomAddForm;
