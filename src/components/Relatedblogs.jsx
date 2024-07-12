import React, { useState } from 'react';
import { Container, Box, Typography, Divider, Avatar, IconButton, Grid, Button, Chip } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

// Sample data for related posts
const relatedPostsData = [
  { id: 1, image: 'url_to_image1.jpg', category: 'Technology', title: 'Related Post 1', author: 'Author 1', date: 'June 2, 2024' },
  { id: 2, image: 'url_to_image2.jpg', category: 'Travel', title: 'Related Post 2', author: 'Author 2', date: 'June 3, 2024' },
  { id: 3, image: 'url_to_image3.jpg', category: 'Food', title: 'Related Post 3', author: 'Author 3', date: 'June 4, 2024' },
  { id: 4, image: 'url_to_image4.jpg', category: 'Fashion', title: 'Related Post 4', author: 'Author 4', date: 'June 5, 2024' },
  // Add more related posts as needed
];

const BlogCard = ({ post }) => (
  <Box
    bgcolor="white"
    boxShadow={3}
    borderRadius={2}
    overflow="hidden"
    position="relative"
    mb={2}
    sx={{ '&:hover img': { transform: 'scale(1.1)', transition: 'transform 0.3s ease' }, minHeight:'350px' }}
  >
    <img src={post.image} alt={post.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <Box classname='text-area' position="absolute" bottom={0} left={0} px={2} sx={{textAlign:'start'}}>
      <Chip label={post.category} color="primary" mb={1} />
      <Typography variant="h6" fontWeight="bold" mb={1} textAlign='left'>
        {post.title}
      </Typography>
      
      <Box display="flex" alignItems="center" mb={1} >
        <Avatar alt={post.author} src="url_to_author_image.jpg" sx={{ width: 20, height: 20, marginRight: 1 }} />
        <Typography variant="caption">{post.author}</Typography>
        <Typography variant="caption" color="textSecondary">
        {post.date}
      </Typography> 
      </Box>
      </Box>
  </Box>
);

const RelatedPosts = () => {
  const [visiblePosts, setVisiblePosts] = useState(4);

  const handleShowMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 4);
  };

  return (
    <Container maxWidth="100%" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h5" mb={2}>
        Related Posts
      </Typography>

        {/* Existing content goes here */}
        <Grid container spacing={2}>
        {relatedPostsData.slice(0, visiblePosts).map((post) => (
          <Grid item xs={12} md={6} lg={3} key={post.id}>
            <BlogCard post={post} />
          </Grid>
        ))}
      </Grid>
      {visiblePosts < relatedPostsData.length && (
        <Button variant="contained" color="primary" onClick={handleShowMore} mt={2}>
          Show More
        </Button>
      )}
      
      <Divider mb={2} />
      
    </Container>
  );
};

export default RelatedPosts;
