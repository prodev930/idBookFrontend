import '../App.css';
import { Box } from '@mui/material';

const AmenityItem = ({ imgSrc, altText, text }) => (
  <div className="div">
    <div className="group-2">
      <img className="img" alt={altText} src={imgSrc} />
      <div className="text-wrapper">{text}</div>
    </div>
  </div>
);

const AmenitiesBox = ({ amenities }) => (
    <div className="am-group">
        <div className="amenity-title">Amenities</div>
        <Box className="amenity-wrapper" sx={{display:'flex', flexWrap:'wrap', justifyContent:'space-around', padding:'40px', background:'#D3FFD5'}}>
          {amenities.map((amenity, index) => (
            <AmenityItem key={index} {...amenity} />
          ))}
        </Box>

    </div>
);

export default AmenitiesBox;

