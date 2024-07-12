/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";

import { Card, Grid, Input, Button, CardContent } from "@mui/material";

// import { getPropertyId } from "src/sections/overview/helperFunction/helperFunction";
import useHotels from "../../hooks/useHotels";

const ImageUploadCard = ({ setImageUrl, imageUrl, contentStyle }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const { getPropertiesImagesData, propertiesList } = useHotels();
  const getData = localStorage.getItem("token");
  const token = JSON.parse(getData);
  //   const propertyId = getPropertyId();
  const [showUploadedImages, setShowUploadedImages] = useState(false);
  //   const getPropertyData = propertiesList?.find(
  //     (prop) => prop.custom_id === propertyId
  //   );

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log("event", file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage({
          file_path: file,
          file_name: file.name,
          //   property: getPropertyData.id,
          tags: "hotels in gurugram",
        });
      };
      reader.readAsDataURL(file);
      setShowUploadedImages(true);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const uploadImage = useCallback(async () => {
    const data = new FormData();
    data.append("file_path", selectedImage.file_path);
    data.append("file_name", selectedImage.file_name);
    data.append("property", selectedImage.property);
    data.append("tags", selectedImage.tags);

    const response = await axios.post(
      "https://backend.idbookhotels.com/api/v1/hotels/galleries/",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Important to set the content type
          Authorization: `Bearer ${token[1].access}`,
        },
      }
    );
    if (response) {
      getPropertiesImagesData();
      setImageUrl(response?.data.data.media.url);
      setSelectedImage(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImage]);

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    uploadImage();
  }, [selectedImage, uploadImage]);

  return (
    <Card style={{ position: "relative", width: "100%" }}>
      <CardContent>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: "16px" }}
        >
          {imageUrl && showUploadedImages ? (
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setShowUploadedImages(false)}
            >
              + upload Image
            </Button>
          ) : (
            <Input
              type="file"
              style={{ width: "100%" }}
              accept="image/*"
              id="image-upload"
              onChange={handleImageChange}
            />
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ImageUploadCard;
