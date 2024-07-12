/* eslint-disable react/prop-types */
import { Box, Button, Paper } from "@mui/material";
import React from "react";

const PropertyFinance = ({ setTabs }) => {
  return (
    <Box display="flex" justifyContent="flex-end" sx={{ padding: "10px" }}>
      {/* <Paper style={{ width: "100%" }}> */}
        <Box p={2} display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setTabs("BasicInfo")}
            sx={{background:  'linear-gradient(to right, rgba(29, 73, 141, 1), rgba(60, 101, 164, 1))'}}
          >
            SAVE & Continue
          </Button>
        </Box>
      {/* </Paper> */}
    </Box>
  );
};

export default PropertyFinance;
