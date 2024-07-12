import React from 'react';
import { Grid, Typography, Paper, Chip } from '@mui/material';

const JewelryForm = ({ imageUrl, title, articleCount }) => {
  const srcSet = `${imageUrl}?width=100 100w, ${imageUrl}?width=200 200w, ${imageUrl}?width=400 400w, ${imageUrl}?width=800 800w, ${imageUrl}?width=1200 1200w, ${imageUrl}?width=1600 1600w, ${imageUrl}?width=2000 2000w`;

  return (
    <Paper component={Grid} container alignItems="center" className="border-t border-solid p-5" sx={{gap:'20px', boxShadow:'none', background:'#F3F4F6', padding:'10px'}}>
      <Grid item>
        <img loading="lazy" srcSet={srcSet} className="object-contain object-center w-12 h-12" alt="Jewelry Image" />
      </Grid>
      <Grid item xs container direction="column" className="ml-4" sx={{alignItems:'start'}}>
        <Typography variant="h6" component="header" fontWeight="600" sx={{fontSize:'16px', color:'#111827'}}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{fontSize:'12px', color:'#6B7280'}}>
          {`${articleCount} Articles`}
        </Typography>
      </Grid>
    </Paper>
  );
};

const JewelryList = () => {
  const jewelryData = [
    { imageUrl: 'url1', title: 'Jewelry 1', articleCount: 16 },
    { imageUrl: 'url2', title: 'Jewelry 2', articleCount: 22 },
    { imageUrl: 'url1', title: 'Jewelry 1', articleCount: 16 },
    { imageUrl: 'url2', title: 'Jewelry 2', articleCount: 22 },
    { imageUrl: 'url2', title: 'Jewelry 2', articleCount: 22 },
    // Add more data as needed
  ];

  return (
    <div>
      {jewelryData.map((jewelry, index) => (
        <JewelryForm key={index} {...jewelry} />
      ))}
    </div>
  );
};

export default JewelryList;
