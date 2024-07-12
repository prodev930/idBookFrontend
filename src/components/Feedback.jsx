import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import '../App.css'

//const CARDS = 4;
const MAX_VISIBILITY = 3;

// const Card = ({title, content}) => (
//   <div className='card'>
//     <h2>{title}</h2>
//     <p>{content}</p>
//   </div>
// );

const Carousel = ({children}) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  
  return (
    <Box className='carousel-tab'>
    <div className='carousel'>
      {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><FaArrowLeft />
</button>}
      {React.Children.map(children, (child, i) => (
        <div className='card-container' style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}>
          {child}
        </div>
      ))}
      {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><FaArrowRight />
</button>}
    </div>
    </Box>
  );
};

export default Carousel;