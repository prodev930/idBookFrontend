/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

// eslint-disable-next-line react/prop-types
const PropertyAmenities = ({
  MenuItems,
  setSelectedMenuItem,
  selectedMenuItem,
  setTabs,
}) => {
  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };
  return (
    <>
      <Stack mr={5}>
        <Typography variant="h3" sx={{color:'#2C467B'}}>All Amenities</Typography>
      </Stack>
      <div style={{ display: "flex", padding: "10px" }}>
        {/* Menu */}
        <List style={{ width: "200px" }}>
          {MenuItems?.map((menuItem) => (
            <ListItem
              button
              key={menuItem.name}
              onClick={() => handleMenuItemClick(menuItem.name)}
              selected={selectedMenuItem === menuItem.name}
              sx={{
                bgcolor:
                  selectedMenuItem === menuItem.name
                    ? "#1434A4 !important"
                    : "",
                color:
                  selectedMenuItem === menuItem.name ? "white !important" : "",
              }}
            >
              <ListItemText primary={menuItem.name} />
            </ListItem>
          ))}
        </List>

        {/* Content based on selected menu item */}
        <div
          style={{ marginLeft: "20px", flexGrow: 1, border: "1px solid grey" }}
        >
          {MenuItems?.find(
            (menuItem) => menuItem.name === selectedMenuItem
          )?.content()}
        </div>
      </div>
      <Box sx={{ display: "flex", justifyContent: "flex-end", width: "99%" }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "rgb(53, 67, 191)" }}
          onClick={() => setTabs("Rooms")}
        >
          Save And Continue
        </Button>
      </Box>
    </>
  );
};

export default PropertyAmenities;
