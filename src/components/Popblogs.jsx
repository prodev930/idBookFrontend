import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

const PopBlogs = ({ continueBlogs }) => {

  return (
      <Grid
      className='in-div' sx={{background:'#E5E7EB', padding:'16px', borderRadius:'24px'}}>
      {continueBlogs.map((blog, index) => (
        <Grid container key={index} sx={{flexDirection:'row', padding:'10px', justifyContent:'space-between'}}>
          <Grid >
                        <Typography variant="subtitle2" align="left" sx={{fontSize:'14px', color:'#4B5563'}}>
              By {blog.author}
            </Typography>
            <Typography variant="h6" align="left" gutterBottom sx={{fontSize:'16px', color:'#111827'}}>
              {blog.title}
            </Typography>

          </Grid>
          <Grid>
          {blog.image && (
              <img src={blog.image} alt={`Continue Blog ${index + 1} Image`} style={{ width: '100%', height: 'auto' }} />
            )}
          </Grid>
        </Grid>
      ))}
      </Grid>
  );
};

export default PopBlogs;
