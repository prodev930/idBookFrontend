import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const carouselContainerStyle = {
  overflow: 'hidden',
  width: '100%',
  position: 'relative',
};

const carouselInnerStyle = {
  display: 'flex',
  transition: 'transform 0.5s ease-in-out',
};

const carouselItemStyle = {
  minWidth: '100%',
  boxSizing: 'border-box',
};

const controlsStyle = {
  position: 'absolute',
  top: '50%',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  transform: 'translateY(-50%)',
};

const buttonStyle = {
  color: 'primary.main',
  outline:'none'
};

const BrandCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => {
      window.removeEventListener('resize', updateVisibleItems);
    };
  }, []);

  const updateVisibleItems = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      setVisibleItems(6);
    } else if (screenWidth >= 600) {
      setVisibleItems(4);
    } else {
      setVisibleItems(3);
    }

    setCurrentIndex((prevIndex) => Math.min(prevIndex, items.length - visibleItems));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div style={carouselContainerStyle}>
      <div
        style={{
          justifyContent:'space-around',
          ...carouselInnerStyle,
          //transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
        }}
      >
        {items.slice(currentIndex, currentIndex + visibleItems).map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`Brand ${currentIndex + index + 1}`}
            style={{ maxHeight: '50px', maxWidth: '190px', objectFit: 'cover' }}
          />
        ))}
      </div>
      <div style={controlsStyle}>
        <Button style={buttonStyle} onClick={prevSlide} disabled={currentIndex === 0}>
          <KeyboardArrowLeftIcon/>
        </Button>
        <Button
          style={buttonStyle}
          onClick={nextSlide}
          disabled={currentIndex >= items.length - visibleItems}
        >
          <KeyboardArrowRightIcon/>
        </Button>
      </div>
    </div>
  );
};

export default BrandCarousel;
