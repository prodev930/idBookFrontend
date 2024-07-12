import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Popover,
  Typography,
  IconButton,
} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const ImageGallery = ({ images, propertiesList }) => {
 // const [filteredImages, setFilteredImages] = useState([]);

  const [popoverOpen, setPopoverOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
 
  // useEffect(() => {
  //   if (images && propertiesList) {
  //     const filtered = propertiesList.map(property => {
        
  //       const image = images.find(img => img.property === property.id);
        
  //       return image && image.media ? image.media.url : null;
  //     }).filter(Boolean);
  //     setFilteredImages(filtered);

  //     console.log("filteredImages:", filtered);
      
  //   }
  // }, [images, propertiesList]);
console.log(images);
  const handleImageClick = (event, index) => {
    setSelectedImageIndex(index);
    setAnchorEl(event.currentTarget);
    setPopoverOpen(true);
  };

  const handlePopoverClose = () => {
    setPopoverOpen(false);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + filteredImages.length) % filteredImages.length
    );
  };

  return (
    <Box>
     <Grid container spacing={2}>
        {/* Display first index image from filteredImages */}
        <Grid item xs={12} md={5}>
        {images.length > 0 && images[0].media && (
            <img
              src={images[0].media.url || ''}
              alt="Large"
              style={{ width: '100%', height: '100%', objectFit: 'cover', maxHeight: '500px' }}
              onClick={(e) => handleImageClick(e, 0)}
            />
          )}
        </Grid>

        {/* Show rest of the array images from filteredImages, but only four images. The rest show in a popover when clicked over any image */}
        <Grid container item xs={12} md={7} spacing={2}>
        {images.slice(1, 5).map((image, index) => (
            <Grid item xs={6} key={index + 1}>
              {image.media && (
                <img
                  src={image.media.url || ''}
                  alt={`Thumbnail ${index + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', maxHeight: '240px' }}
                  onClick={(e) => handleImageClick(e, index + 1)}
                />
              )}
            </Grid>
          ))}
        </Grid>
       
      </Grid>

      {/* Popover */}
      {/* <Popover
        open={popoverOpen}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <Box p={2} display="flex" flexDirection="column" alignItems="center" width="70%" maxHeight="450px" margin='auto'>
          <IconButton onClick={handlePrevImage}>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <img
            src={images}
            alt={`Image ${selectedImageIndex}`}
            style={{ maxWidth: '100%', maxHeight: '450px', objectFit: 'cover' }}
          />
          <IconButton onClick={handleNextImage}>
            <KeyboardArrowRightIcon />
          </IconButton>
        </Box>
      </Popover> */}
    </Box>
  );
};

export default ImageGallery;
