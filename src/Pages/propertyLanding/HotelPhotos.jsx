/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ImageUploadCard from "./ImageUploadCard";
import {
  Box,
  Button,
  Card,
  CardContent,
  Paper,
  Typography,
} from "@mui/material";

const HotelPhotos = ({ getPropertyImages, uploadValue, setTabs }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState();

  const getMedia =
    getPropertyImages.length === 0
      ? [{ id: 0, value: "empty" }]
      : getPropertyImages?.map((item) => item.media);

  const imageStyle = {
    height: "70%",
    width: "100%",
    objectFit: "cover",
  };

  const contentStyle = {
    width: "100%",
    boxSizing: "border-box",
    padding: "16px",
  };

  const blankRowStyle = {
    height: "30%",
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {uploadValue && (
          <div>
            <ImageUploadCard setImageUrl={setImageUrl} imageUrl={imageUrl} />
          </div>
        )}

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {getMedia?.map((card, index) => (
            <div
              key={card?.id}
              style={{
                marginBottom: 16,
                position: "relative", // Set the position to relative for the container
                marginRight: 16,
                boxSizing: "border-box",
              }}
            >
              {index === 0 ? (
                <div>
                  <ImageUploadCard
                    setImageUrl={setImageUrl}
                    imageUrl={imageUrl}
                  />
                </div>
              ) : (
                <Card style={{ position: "relative", width: "100%" }}>
                  <img
                    src={card?.url}
                    alt="new"
                    style={{ ...imageStyle, width: "100%" }}
                  />
                  <CardContent style={contentStyle}>
                    <Button
                      onClick={() => {
                        setModalData(card);
                        setOpen(true);
                      }}
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        zIndex: 1, // Ensure the button appears above the image
                      }}
                    >
                      Edit
                    </Button>

                    <Typography variant="body2" color="text.secondary">
                      Image tag
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Image Quality
                    </Typography>
                  </CardContent>
                  <div style={blankRowStyle} />
                </Card>
              )}
            </div>
          ))}
        </div>
      </div>
      <Box display="flex" justifyContent="flex-end" sx={{ padding: "10px" }}>
        {/* <Paper style={{ width: "100%" }}> */}
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
          onClick={() => {
            console.log("1222");
          }}
          sx={{
            maxWidth: "25%",
            color: "white",
            background:
              "linear-gradient(to right, rgba(29, 73, 141, 1), rgba(60, 101, 164, 1))",
          }}
        >
          Save & Continue
        </Button>
        {/* </Paper> */}
      </Box>
    </>
  );
};

export default HotelPhotos;
