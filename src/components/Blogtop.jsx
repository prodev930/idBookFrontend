import React, { useState } from 'react';
import { Grid, Typography, Button, Pagination } from '@mui/material';

const BlogTopSection = ({ continueBlogs, selectedTags = [] }) => {
  const blogsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleBlogs, setVisibleBlogs] = useState(6);

  const filteredBlogs = continueBlogs.filter((blog) => {
    return selectedTags.length === 0 || (blog.tags && selectedTags.every((tag) => blog.tags.includes(tag)));
  });

  const handleShowMore = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 3);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    setVisibleBlogs(value * blogsPerPage);
  };

  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + visibleBlogs;

  const hasMoreBlogs = endIndex < filteredBlogs.length;

  return (
    <Grid
      sx={{
        width: '50%',
        '@media (max-width: 850px)': {
          width: '100%',
        },
      }}
      className='in-div'
    >
      {filteredBlogs.slice(startIndex, endIndex).map((blog, index) => (
        <Grid
          item
          key={index}
          sx={{
            display: 'flex',
            '@media (max-width: 425px)': {
              display: 'flex',
              flexDirection: 'column-reverse',
            },
          }}
        >
          <Grid
            sx={{
              width: '50%',
              '@media (max-width: 425px)': {
                width: '100%',
              },
            }}
          >
            <Typography variant="h6" align="left" gutterBottom sx={{fontSize:'16px', color:'#111827'}}>
              {blog.title}
            </Typography>
            <Typography variant="body2" align="left" mb={4} paragraph sx={{fontSize:'16px', color:'#6B7280'}}>
              {blog.description}
            </Typography>
            <Typography variant="subtitle2" align="left" mb={4} sx={{fontSize:'14px', color:'#4B5563'}}>
              By {blog.author}
            </Typography>
          </Grid>
          <Grid
            sx={{
              width: '50%',
              '@media (max-width: 425px)': {
                width: '100%',
              },
            }}
          >
            {blog.image && (
              <img src={blog.image} alt={`Continue Blog ${index + 1} Image`} style={{ width: '100%', height: 'auto' }} />
            )}
          </Grid>
        </Grid>
      ))}

      <Grid container justifyContent='space-between'>
      {filteredBlogs.length > blogsPerPage && (
        <Grid  justifyContent="center" sx={{ marginTop: '10px', maxWidth:'50%' }}>
          <Pagination count={Math.ceil(filteredBlogs.length / blogsPerPage)} page={currentPage} onChange={handlePageChange}/>
        </Grid>
      )}
      {hasMoreBlogs && (
        <Grid  justifyContent="center" sx={{ marginTop: '10px', maxWidth:'50%' }}>
          <Button variant="outlined" color="primary" sx={{color:'white', borderRadius:'22px', background:' linear-gradient(to right, rgba(29, 73, 141, 1), rgba(60, 101, 164, 1))'}} onClick={handleShowMore}>
            Show More
          </Button>
        </Grid>
      )}
      </Grid>
     
    </Grid>
  );
};

export default BlogTopSection;
