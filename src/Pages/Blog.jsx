import React, { useState } from 'react';
import { Box, Grid, Paper, Typography, Button, Chip, TextField } from '@mui/material';
import BlogTopSection from '../components/Blogtop';
import JewelryList from '../components/Blogtopics';
import PopBlogs from '../components/Popblogs';
import subs2 from '../Images/subs2.png';
import ads from '../Images/ads.png';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../App.css';

const Blog = () => {
    const [selectedTags, setSelectedTags] = useState([]);

  const blogData = {
    bigImage: 'path/to/big-image.jpg',
    title: 'Main Blog Title',
    description: 'Main Blog Description...',
    author: 'Main Blog Author',
    rightTitle: 'Right Blog Title',
    rightDescription: 'Right Blog Description...',
    rightAuthor: 'Right Blog Author',
    rightImage: 'path/to/right-blog-image.jpg',
  };

  const continueBlogs = [
    { title: 'Continue Blog 1', description: 'Continue Blog 1 Description...', author: 'Continue Blog 1 Author',image:'path/to/big-image.jpg', tags: ['Science', 'Data Science', 'Python'], },
    { title: 'Continue Blog 2', description: 'Continue Blog 2 Description...', author: 'Continue Blog 2 Author',image:'path/to/big-image.jpg', tags: ['Design', 'UI/UX', 'Web Development'], },
    { title: 'Continue Blog 3', description: 'Continue Blog 3 Description...', author: 'Continue Blog 3 Author',image:'path/to/big-image.jpg', tags: ['Science', 'Data Science', 'Python'], },
  ];
  const continueBlogs2 = [
    { title: 'Continue Blog 1', description: 'Continue Blog 1 Description...', author: 'Continue Blog 1 Author',image:'path/to/big-image.jpg', tags: ['Science', 'Data Science', 'Python'], },
    { title: 'Continue Blog 2', description: 'Continue Blog 2 Description...', author: 'Continue Blog 2 Author',image:'path/to/big-image.jpg', tags: ['Design', 'UI/UX', 'Web Development'], },
    { title: 'Continue Blog 3', description: 'Continue Blog 3 Description...', author: 'Continue Blog 3 Author',image:'path/to/big-image.jpg', tags: ['Science', 'Data Science', 'Python'], },
    { title: 'Continue Blog 4', description: 'Continue Blog 1 Description...', author: 'Continue Blog 1 Author',image:'path/to/big-image.jpg', tags: ['Science', 'Data Science', 'Python'], },
    { title: 'Continue Blog 5', description: 'Continue Blog 2 Description...', author: 'Continue Blog 2 Author',image:'path/to/big-image.jpg', tags: ['Design', 'UI/UX', 'Web Development'], },
    { title: 'Continue Blog 3', description: 'Continue Blog 3 Description...', author: 'Continue Blog 3 Author',image:'path/to/big-image.jpg', tags: ['Design', 'UI/UX', 'Web Development'], },
    { title: 'Continue Blog 7', description: 'Continue Blog 1 Description...', author: 'Continue Blog 1 Author',image:'path/to/big-image.jpg', tags: ['Science', 'Data Science', 'Python'], },
    { title: 'Continue Blog 8', description: 'Continue Blog 2 Description...', author: 'Continue Blog 2 Author',image:'path/to/big-image.jpg', tags: ['Design', 'UI/UX', 'Web Development'], },
    { title: 'Continue Blog 3', description: 'Continue Blog 3 Description...', author: 'Continue Blog 3 Author',image:'path/to/big-image.jpg', tags: ['Science', 'Data Science', 'Python'], },
    { title: 'Continue Blog 10', description: 'Continue Blog 1 Description...', author: 'Continue Blog 1 Author',image:'path/to/big-image.jpg', tags: ['Science', 'Data Science', 'Python'], },
    { title: 'Continue Blog 11', description: 'Continue Blog 2 Description...', author: 'Continue Blog 2 Author',image:'path/to/big-image.jpg', tags: ['Design', 'UI/UX', 'Web Development'], },
    { title: 'Continue Blog 3', description: 'Continue Blog 3 Description...', author: 'Continue Blog 3 Author',image:'path/to/big-image.jpg', tags: ['Design', 'UI/UX', 'Web Development'], },
];

const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      // If the tag is already selected, remove it
      setSelectedTags((prevSelectedTags) => prevSelectedTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      // If the tag is not selected, add it
      setSelectedTags((prevSelectedTags) => [...prevSelectedTags, tag]);
    }
  };

  const clearSelectedTags = () => {
    setSelectedTags([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div>
        <Header />
<Grid p={6} sx={{display:'flex', flexDirection:'row',
'@media (max-width: 850px)': {
   flexDirection:'column',
  }
}} spacing={2}>
<Grid
sx={{
    width:'50%',
  '@media (max-width: 850px)': {
    width: '100%',
  },
  }}>
        <Paper sx={{boxShadow:'none'}}>
          <img src={blogData.bigImage} alt="Big Blog Image" style={{ width: '100%', height: 'auto' }} />
          <Typography variant="h4" align="left" gutterBottom sx={{fontSize:'32px', color:'#111827'}}>
            {blogData.title}
          </Typography>
          <Typography variant="body1" align="left" paragraph sx={{fontSize:'16px', color:'#6B7280'}}>
            {blogData.description}
          </Typography>
          <Typography variant="subtitle2" align="left" sx={{fontSize:'14px', color:'#4B5563'}}>
            By {blogData.author}
          </Typography>
        </Paper>
      </Grid>
      <BlogTopSection continueBlogs={continueBlogs} />
</Grid>

<Box
      sx={{
        maxWidth: '100%',
        height: 'auto',
        margin: '25px auto', // Center the image
      }}
    >
      <img src={ads} alt="Advertisement" style={{ width: '100%', height: 'auto' }} />
    </Box>
      <Grid container spacing={2} p={6}>
      {/* Left Section (60% of the screen on larger screens) */}
      <Grid item xs={12} md={8}>
      <Typography variant="h6" align="left" gutterBottom sx={{fontSize:'36px', color:'#111827'}}>
        Latest Articles 🎈
            </Typography>
            <Typography variant="h6" align="left" gutterBottom sx={{fontSize:'20px', color:'#6B7280'}}>
            Popular blogs
            </Typography>
        <Paper className='div-sec' sx={{boxShadow:'none'}}>
          {/* Your content for the left section goes here */}
          <BlogTopSection continueBlogs={continueBlogs2} selectedTags={selectedTags} />
        </Paper>
      </Grid>

      {/* Right Section (40% of the screen on larger screens) */}
      <Grid item xs={12} md={4}>
        <Paper sx={{boxShadow:'none', background:'#F3F4F6', padding:'15px', borderRadius:'24px', marginBottom:'30px'}}>
          {/* Your content for the right section goes here */}
          <Typography variant="h6" align="left" gutterBottom sx={{fontSize:'18px', color:'#111827'}}>
          🏷 Discover more tags
            </Typography>
            <div style={{ overflowY: 'auto', maxHeight: '300px', fontSize:'14px', color:'#4B5563', borderRadius:'8px' }}>
              {continueBlogs2.reduce((allTags, blog) => [...allTags, ...blog.tags], []).filter((tag, index, self) => self.indexOf(tag) === index).map((tag, index) => (
                <Chip
                  key={index}
                  label={tag}
                  color={selectedTags.includes(tag) ? 'primary' : 'default'}
                  onClick={() => handleTagClick(tag)}
                  style={{ marginRight: '5px', marginBottom: '5px', cursor: 'pointer', color:'black', backgroundColor: selectedTags.includes(tag) ? undefined : 'white', }}
                />
              ))}
            </div>
            {selectedTags.length > 0 && (
              <Button variant="outlined" color="primary" onClick={clearSelectedTags} style={{ marginTop: '10px' }}>
                Clear Tags
              </Button>
            )}
        </Paper>
        <Paper style={{boxShadow:'none', background:'#F3F4F6', padding:'15px', borderRadius:'24px', marginBottom:'30px' }}>
          {/* Your content for the right section goes here */}
          <Typography variant="h6" align="left" gutterBottom>
          ✨ Trending topic
            </Typography> 

<JewelryList/>

        </Paper>
        <PopBlogs continueBlogs={continueBlogs}/>
      </Grid>
    </Grid>
    <Grid container flexDirection='column' p={6}>
    <Typography variant="h5" align="left" gutterBottom sx={{fontSize:'36px', color:'#111827'}}>
    Join our newsletter 🎉
            </Typography> 
            <Typography variant="p" align="left" gutterBottom sx={{fontSize:'16px', color:'#6B7280'}}>
            Read and share new perspectives on just about any topic.
Everyone’s welcome.
            </Typography> 
            <form onSubmit={handleSubmit}>
      <Box display="flex" alignItems="center" justifyContent="start">
        <TextField
          type="text"
          label="Email address"
          variant="outlined"
          inputProps={{ 'aria-label': 'Email address' }}
        />
        <Button type="submit" aria-label="Submit">
        <img src={subs2} />
        </Button>
      </Box>
    </form>
    </Grid>
    <Footer />
    </div>
  );
};

export default Blog;