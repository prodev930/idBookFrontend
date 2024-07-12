import React from 'react';
import { Container, Box, Typography, Divider, Avatar, IconButton, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import RelatedPosts from '../components/Relatedblogs';

const BlogPost = () => {
  return (
    <>
    <Container maxWidth="md" style={{ height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', marginTop:'50px' }}>
      <Box width="75%" p={3} bgcolor="white" textAlign='left'>
        <Typography variant="h4" gutterBottom>
          Blog Title
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer facilisis arcu ut turpis efficitur, vel blandit purus laoreet. Proin auctor, mi eu efficitur
          fermentum, justo quam suscipit odio, sit amet malesuada turpis sapien vel libero.
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Grid container alignItems="center">
          <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', maxWidth:{xs:'100%', md:'50%', sm:'50%'} }}>
            <Avatar alt="Author" src="url_to_author_image.jpg" sx={{ width: 60, height: 60, marginRight: 2 }} />
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">
                Author Name
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Written on June 1, 2024
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: {xs:'flex-start', sm:'flex-end', md:'flex-end'}, maxWidth:{xs:'100%', sm:'50%', md:'50%'} }}>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      
    </Container>
    <img src="url_to_image.jpg" alt="Blog Image" style={{ width: '95%' }} />
    <Container maxWidth="md" style={{ height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', marginTop:'50px' }}>
      <Box width="75%" p={3} bgcolor="white" textAlign='left'>
      <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer facilisis arcu ut turpis efficitur, vel blandit purus laoreet. Proin auctor, mi eu efficitur
          fermentum, justo quam suscipit odio, sit amet malesuada turpis sapien vel libero.
        </Typography>
      </Box>
      <img src="url_to_image.jpg" alt="Blog Image" style={{ width: '70%', marginTop: '20px' }} />
      <Box width="75%" p={3} bgcolor="white" textAlign='left'>
      <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer facilisis arcu ut turpis efficitur, vel blandit purus laoreet. Proin auctor, mi eu efficitur
          fermentum, justo quam suscipit odio, sit amet malesuada turpis sapien vel libero.
        </Typography>
      </Box>
      <Divider sx={{border:'1px solid #F3F4F6'}}/>
      </Container>
      <RelatedPosts/>
    </>
  );
};

export default BlogPost;
