import Checkbox from '@mui/material/Checkbox';
import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import searchimage from '../Images/searchimage.png';
import FilterListIcon from '@mui/icons-material/FilterList';
import hotel1 from '../Images/hotel1.png';
import hotel2 from '../Images/hotel2.png';
import hotel3 from '../Images/hotel3.png';
import hotel4 from '../Images/hotel4.png';
import hotel5 from '../Images/hotel5.png';
import hotel6 from '../Images/hotel6.png';
import hotel7 from '../Images/hotel7.png';
import hotel8 from '../Images/hotel8.png';
import hotel9 from '../Images/hotel9.png';
import hotel10 from '../Images/hotel10.png';
import hotel11 from '../Images/hotel11.png';
import hotel12 from '../Images/hotel12.png';
import house1 from "../Images/house1.png";
import house2 from "../Images/house2.png";
import house3 from "../Images/house3.png";
import house4 from "../Images/house4.png";
import house5 from "../Images/house5.png";
import { Box, Button, Grid, MenuItem, IconButton, InputAdornment, Pagination, Divider, Rating, TextField, Typography, Drawer } from '@mui/material';
import tea from "../Images/tea.png";
import Buttonnews from '../Images/Buttonnews.png';
// import SearchCard from '../components/SearchHotelCard'
import SearchHotelCard from '../components/SearchHotelCard';
import HotelData from '../assets/HotelData.json'
import HotelCard from '../components/HotelCard';
import useHotels from '../hooks/useHotels';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const buttonStyle = {
  color: "black",
  backgroundColor: "#FFF",
  border: "1px solid black",
  borderRadius: '22px',
  textTransform: "initial",
  marginLeft: "8%",
  display: { xs: 'block', sm: 'none', md: 'none', lg: 'none' } // Default display is 'block' for xs and 'none' for other sizes
};

const SearchPage = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { getPropertyData, propertiesList } = useHotels();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProperties, setFilteredProperties] = useState(propertiesList);
  const [cityFilter, setCityFilter] = useState('');

  useEffect(() => {
    // Fetch data when component mounts
    getPropertyData();
  }, []);

  useEffect(() => {
    const filtered = propertiesList?.filter(hotel =>
      hotel.display_name?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
      hotel.city_name?.toLowerCase().includes(searchQuery?.toLowerCase())
    );
    setFilteredProperties(filtered);
  }, [propertiesList, searchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCityFilterChange = (event) => {
    setCityFilter(event.target.value);
  };

 const handleSearch = () => {
  let filtered = propertiesList;

  // Filter by city name if it's selected
  if (cityFilter !== '') {
    filtered = filtered?.filter(hotel => hotel.city_name?.toLowerCase() === cityFilter?.toLowerCase());
  }
  
  console.log("Filtered hotels:", filtered);
  console.log("City filter:", cityFilter);

  // Filter by search query
  if (searchQuery !== '') {
    const searchResult = propertiesList?.filter(hotel =>
      hotel.display_name?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
      hotel.city_name?.toLowerCase().includes(searchQuery?.toLowerCase())
    );

    // If a city is selected, only keep the search results within that city
    if (cityFilter !== '') {
      filtered = searchResult?.filter(hotel => hotel.city_name?.toLowerCase() === cityFilter?.toLowerCase());
    } else {
      filtered = searchResult;
    }
  }

  setFilteredProperties(filtered);
};


  
  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>

    <Box sx={{
        overflow:"hidden",
        width:"100%",
        marginTop:"0%",
    }}  >
      
      <div
        className='img-style'
         >
  <img src={searchimage} alt="searchimage" style={{ width: '100%' }} />

  <Box
    sx={{
      position: 'absolute',
      top: '55%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      color: 'white',
      width:'100%',
      '@media (max-width: 605px)': {
        top: '55%',
      },
      '@media (max-width: 850px)': {
        padding: '15px',
      },
    }}
  >
    <Box
      //id="tab-preference"
      sx={{
        width:{xs:'100%', sm:'80%', md:'60%', lg:'50%'},
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left',
        margin:'auto', // Center the box horizontally // Adjust the max width based on your design
        color: '#FFF',
        background:'white',
        borderRadius:'4px'
      }}
    >
     <TextField
              select
              fullWidth
              variant="outlined"
              label="Location"
              value={cityFilter}
              onChange={handleCityFilterChange}
              InputLabelProps={{
                sx: { color: 'black', fontWeight:'bolder' }
              }}
            >
              <MenuItem value="">All</MenuItem>
              {propertiesList.map(property => (
                <MenuItem key={property.id} value={property.city_name}>{property.city_name}</MenuItem>
              ))}
            </TextField>
            <Divider orientation="vertical" variant="middle" flexItem />
            <TextField
              fullWidth
              variant="outlined"
              label="Search"
              value={searchQuery}
              onChange={handleSearchInputChange}
              InputLabelProps={{
                sx: { color: 'black', fontWeight:'bolder' }
              }}
            />
            
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSearch}
              sx={{ height: '70px', borderRadius:'0 4px 4px 0', textTransform:'none', background:'linear-gradient(to right, rgba(29, 73, 141, 1), rgba(60, 101, 164, 1))' }}
            >
              <b>Explore</b>
            </Button>
    </Box>
  </Box>
</div>

      {/* <Box sx={{
      textAlign: 'center', // Adjust this to your preference
    }}>
      <Grid spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <img src={searchimage} alt="searchimage" style={{ width: '100%' }} />
          <Grid item xs={12} md={9} sx={{ maxWidth: '80%', margin:'auto', display: 'flex', flexDirection: 'row' }}>
        <TextField
              select
              fullWidth
              variant="outlined"
              label="Select city"
              value={cityFilter}
              onChange={handleCityFilterChange}
              sx={{ marginBottom: '8px' }}
            >
              <MenuItem value="">All</MenuItem>
              {propertiesList.map(property => (
                <MenuItem key={property.id} value={property.city_name}>{property.city_name}</MenuItem>
              ))}
            </TextField>
            
            <TextField
              fullWidth
              variant="outlined"
              label="Search by name"
              value={searchQuery}
              onChange={handleSearchInputChange}
              sx={{ marginBottom: '8px' }}
            />
            
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSearch}
              sx={{ marginTop: '8px' }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
        
      </Grid>
    </Box> */}


       <Grid container
       sx={{
        display:"flex",
        flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '5%',
      gap: '3%',
      padding:'0 20px 0 30px'
       }} >

<Grid item className='drawer-grid' sx={{alignItems:"left", maxWidth:'30%', display: {xs:'block', sm:'block', md:'none', lg:'none' }}}>
<Button variant='contained' style={buttonStyle} onClick={handleDrawerToggle}>
          <FilterListIcon/> <br />
        </Button>
        
<Drawer anchor="left" open={openDrawer} onClose={handleDrawerToggle}>
          <Box sx={{ width: 250, padding:'20px' }}>
            <IconButton onClick={handleDrawerToggle} sx={{ float: 'right' }}>
              <CloseIcon />
            </IconButton>
            <Button variant='contained' style={{color:"black",
            backgroundColor:"#FFF",
            border:"1px solid black",borderRadius:'22px',
            textTransform:"initial",marginLeft:"8%"}}>
                Types of Place <br/>
            </Button>
            {/* Filter options go here */}
            {/* Modify your filter options as needed */}
        
        <Box sx={{display:"flex",marginTop:"2%",flexWrap:"wrap"}} >
            <Box sx={{marginTop:"3%"}}>
            <Checkbox {...label} />            
            </Box>
            <Box  >
            <Typography  variant="h5" sx={{color:"grey",textAlign:"left",marginTop:"5%"}}>
            Entire place <br/> </Typography>          
            </Box>
            </Box>
            <Box sx={{display:"flex",marginTop:"2%"}} >
            <Box sx={{marginTop:"3%"}}>
            <Checkbox {...label} />            
            </Box>
        <Box  >
            <Typography  variant="h5" sx={{color:"grey",textAlign:"left",marginTop:"5%"}}>
            Private room <br/> </Typography>         
            </Box>
            </Box>

            <Box sx={{display:"flex",marginTop:"2%"}} >
            <Box sx={{marginTop:"3%"}}>
            <Checkbox {...label} />            
            </Box>
            <Box  >
            <Typography  variant="h5" sx={{color:"grey",textAlign:"left",marginTop:"5%"}}>
            Hotel room <br/> </Typography>
            </Box>
            </Box>

            <Box sx={{display:"flex",marginTop:"2%"}} >
            <Box sx={{marginTop:"3%"}}>
            <Checkbox {...label} />            
            </Box>
            <Box  >
            <Typography  variant="h5" sx={{color:"grey",textAlign:"left",marginTop:"5%"}}>
            Shared room <br/> </Typography>
            </Box>
            </Box>
            <hr/>
            <Typography variant='h6' sx={{
           marginTop:"5%"
            }} >
                <b> Hotel Categories</b>
            </Typography>
            <Box sx={{
                display:"flex",marginTop:"2%"
            }} >
                <Box sx={{marginTop:"3%",fontSize:"20px",color:"grey"}}>
            <Checkbox {...label} />  5 Star 
            
            </Box>
            </Box>

            <Box sx={{
                display:"flex",marginTop:"2%"
            }} >
                <Box sx={{marginTop:"0%",fontSize:"20px",color:"grey"}}>
            <Checkbox {...label} />  4 Star 
            
            </Box>
            </Box>

            <Box sx={{
                display:"flex",marginTop:"2%"
            }} >
                <Box sx={{marginTop:"0%",fontSize:"20px",color:"grey"}}>
            <Checkbox {...label} />  3 Star 
            
            </Box>
            </Box>
            <hr/>
            <Typography variant='h6' sx={{
           marginTop:"5%"
            }} >
                <b> Property Type</b>
            </Typography>
          
            <Box sx={{
                display:"flex",marginTop:"2%"
            }} >
                <Box sx={{marginTop:"3%",fontSize:"20px",color:"grey"}}>
            <Checkbox {...label} />  Hotel 
            
            </Box>
            </Box>

            <Box sx={{
                display:"flex",marginTop:"2%"
            }} >
                <Box sx={{marginTop:"0%",fontSize:"20px",color:"grey"}}>
            <Checkbox {...label} /> Apartment 
            
            </Box>
            </Box>

            <Box sx={{
                display:"flex",marginTop:"2%"
            }} >
                <Box sx={{marginTop:"0%",fontSize:"20px",color:"grey"}}>
            <Checkbox {...label} />  Villa 
            
            </Box>
            </Box>
            <hr/>
            <Typography variant='h6' sx={{
           marginTop:"5%"
            }} >
                <b> Price Per Night</b>
            </Typography>
          
            <Box sx={{
                display:"flex",marginTop:"2%"
            }} >
                <Box sx={{marginTop:"3%",fontSize:"20px",color:"grey"}}>
            <Checkbox {...label} />  ₹ 0-₹ 2000 
            
            </Box>
            </Box>

            <Box sx={{
                display:"flex",marginTop:"2%"
            }} >
                <Box sx={{marginTop:"0%",fontSize:"20px",color:"grey"}}>
            <Checkbox {...label} />₹ 2000-₹ 4000 
            
            </Box>
            </Box>

            <Box sx={{
                display:"flex",marginTop:"2%"
            }} >
                <Box sx={{marginTop:"0%",fontSize:"20px",color:"grey"}}>
            <Checkbox {...label} />  ₹ 4000- ₹ 7000
            
            </Box>
            </Box>
           

          </Box>
        </Drawer>
        </Grid>


        <Grid item className='filter-grid' sm={2} md={2} lg={2} sx={{alignItems:"left", maxWidth:'30%', display: {xs:'none', sm:'none', md:'block', lg:'block' }}}>
            <Button variant='contained' style={{color:"black",
            backgroundColor:"#FFF",
            border:"1px solid black",borderRadius:'22px',
            textTransform:"initial",marginLeft:"8%"}}>
                Types of Place <br/>
            </Button>
        
        <Box sx={{display:"flex",marginTop:"2%",flexWrap:"wrap"}} >
            <Box sx={{marginTop:"3%"}}>
            <Checkbox {...label} />            
            </Box>
            <Box  >
            <Typography  variant="h5" sx={{color:"grey",textAlign:"left",marginTop:"5%"}}>
            Entire place <br/> </Typography>          
            </Box>
            </Box>
            <Box sx={{display:"flex",marginTop:"2%"}} >
            <Box sx={{marginTop:"3%"}}>
            <Checkbox {...label} />            
            </Box>
        <Box  >
            <Typography  variant="h5" sx={{color:"grey",textAlign:"left",marginTop:"5%"}}>
            Private room <br/> </Typography>         
            </Box>
            </Box>

            <Box sx={{display:"flex",marginTop:"2%"}} >
            <Box sx={{marginTop:"3%"}}>
            <Checkbox {...label} />            
            </Box>
            <Box  >
            <Typography  variant="h5" sx={{color:"grey",textAlign:"left",marginTop:"5%"}}>
            Hotel room <br/> </Typography>
            </Box>
            </Box>

            <Box sx={{display:"flex",marginTop:"2%"}} >
            <Box sx={{marginTop:"3%"}}>
            <Checkbox {...label} />            
            </Box>
            <Box  >
            <Typography  variant="h5" sx={{color:"grey",textAlign:"left",marginTop:"5%"}}>
            Shared room <br/> </Typography>
            </Box>
            </Box>
            <hr/>
            <Typography variant='h6' sx={{
           marginTop:"5%"
            }} >
                <b> Hotel Categories</b>
            </Typography>
            <Box sx={{
                display:"flex",marginTop:"2%"
            }} >
                <Box sx={{marginTop:"3%",fontSize:"20px",color:"grey"}}>
            <Checkbox {...label} />  5 Star 
            
            </Box>
            </Box>

            <Box sx={{
                display:"flex",marginTop:"2%"
            }} >
                <Box sx={{marginTop:"0%",fontSize:"20px",color:"grey"}}>
            <Checkbox {...label} />  4 Star 
            
            </Box>
            </Box>

            <Box sx={{
                display:"flex",marginTop:"2%"
            }} >
                <Box sx={{marginTop:"0%",fontSize:"20px",color:"grey"}}>
            <Checkbox {...label} />  3 Star 
            
            </Box>
            </Box>
            <hr/>
            <Typography variant='h6' sx={{
           marginTop:"5%"
            }} >
                <b> Property Type</b>
            </Typography>
          
            <Box sx={{
                display:"flex",marginTop:"2%"
            }} >
                <Box sx={{marginTop:"3%",fontSize:"20px",color:"grey"}}>
            <Checkbox {...label} />  Hotel 
            
            </Box>
            </Box>

            <Box sx={{
                display:"flex",marginTop:"2%"
            }} >
                <Box sx={{marginTop:"0%",fontSize:"20px",color:"grey"}}>
            <Checkbox {...label} /> Apartment 
            
            </Box>
            </Box>

            <Box sx={{
                display:"flex",marginTop:"2%"
            }} >
                <Box sx={{marginTop:"0%",fontSize:"20px",color:"grey"}}>
            <Checkbox {...label} />  Villa 
            
            </Box>
            </Box>
            <hr/>
            <Typography variant='h6' sx={{
           marginTop:"5%"
            }} >
                <b> Price Per Night</b>
            </Typography>
          
            <Box sx={{
                display:"flex",marginTop:"2%"
            }} >
                <Box sx={{marginTop:"3%",fontSize:"20px",color:"grey"}}>
            <Checkbox {...label} />  ₹ 0-₹ 2000 
            
            </Box>
            </Box>

            <Box sx={{
                display:"flex",marginTop:"2%"
            }} >
                <Box sx={{marginTop:"0%",fontSize:"20px",color:"grey"}}>
            <Checkbox {...label} />₹ 2000-₹ 4000 
            
            </Box>
            </Box>

            <Box sx={{
                display:"flex",marginTop:"2%"
            }} >
                <Box sx={{marginTop:"0%",fontSize:"20px",color:"grey"}}>
            <Checkbox {...label} />  ₹ 4000- ₹ 7000
            
            </Box>
            </Box>
            
        </Grid>

        <Grid item xs={12} sm={12} md={9} lg={9} sx={{
        justifyContent:"center",
         textAlign:"center",
         alignItems:"center",
         margin:'auto'}}>
            <Typography variant='h4' sx={{textAlign:"left"}}>
             <b> Stays Near you</b> <br/>
            </Typography>

<SearchHotelCard properties={filteredProperties}/>

        <Grid sx={{m:3}} >
        <Pagination count={5} color="success" />
        </Grid>

        </Grid>
       </Grid>

       <Box
  sx={{
    overflow: "hidden",
    color: "black",
    background: "#D3D3D3",
    padding: "5%",
    borderRadius: "35px",
    marginInline: "7%",
    marginTop: "5%",
  }}
>

<Grid sx={{ justifyContent: "center", textAlign: "center",marginTop:"0%", }}>
              <Typography variant="h4">
                <b> Explore various types of accommodations</b>
              </Typography>
              <Typography variant="h7">
              Discover homes categorized by 10 different types of accommodations
              </Typography>
            </Grid>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop:"8%",
                textAlign:"center",
                flexWrap:"wrap",
              }}
            >

<Grid container spacing={3} sx={{ textAlign: 'center',alignItems:"center",justifyContent:"center" }}>
              <Grid>
                <img src={house1} style={{ width: "90%", height: "90%" }} />
                <Typography variant="h6">
          <b>Eco Retreat</b>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "2%" }}>
          17,288 Properties
        </Typography>
              </Grid>
              <Grid>
                <img src={house2} style={{ width: "90%", height: "90%" }} />
                <Typography variant="h6">
          <b>Wooden House</b>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "2%" }}>
          2,118 Properties
        </Typography>
              </Grid>
              <Grid>
                <img src={house3} style={{ width: "90%", height: "90%" }} />
                <Typography variant="h6">
          <b> Floating Residence <br/>
          </b>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "2%" }}>
          36,612 Properties
        </Typography>
              </Grid>
              <Grid>
                <img src={house4} style={{ width: "90%", height: "90%" }} />
                <Typography variant="h6">
          <b>Farm House</b>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "2%" }}>
          188,288 Properties
        </Typography>
              </Grid>
              <Grid>
                <img src={house5} style={{ width: "90%", height: "90%" }} />
                <Typography variant="h6">
          <b>Dome House</b>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "2%" }}>
          188,288 Properties
        </Typography>
              </Grid>
            </Grid>

            </Box>


    </Box>



    <Box
          sx={{
            overflow: "hidden",
            marginTop:"10%",
            marginInline:"10%"
          }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >

            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                 sx={{  marginLeft: "13%" ,marginTop:"5%"}}
              >
                <b>Join our newsletter 🎉 </b>
              </Typography>

              <Grid sx={{ marginTop:"4%", marginLeft:"13%"}} >

                 <Typography variant="h6" sx={{color:"lightblack"}}>
                 Read and share new perspectives on just about any topic.
                  Everyone’s welcome.
                 </Typography>
                </Grid>

                <Grid container spacing={2} sx={{justifyContent:"center",marginTop: "5%",}}>
                <Grid item xs={12} sm={2} sx={{textTransform:"initial",
               marginInline:"0%"}}>
              <Button
                variant="contained"
                sx={{
                  // marginTop: "10%",
                  marginLeft: "17%",
                  borderRadius: "42px",
                  bgcolor:"lightblue",
                  color:"blue",
                   height:"45px",
                  width:"5px",
                  fontSize:"20px",
                  //marginLeft:"35%"
                  mx: "auto",
                  display: "block",
                }}
              >
                <b>01</b>
                </Button>

                </Grid>

              <Grid item xs={12} sm={8} sx={{textTransform:"initial",
              fontSize:"23px",marginTop:"1%"}}>
                <b >Get more discount</b>
                </Grid>
                </Grid>

                <Grid container spacing={2} sx={{justifyContent:"center",marginTop: "5%",}}>
                <Grid item xs={12} sm={2} sx={{textTransform:"initial",
               marginInline:"0%"}}>
              <Button
                variant="contained"
                sx={{
                  marginLeft: "17%",
                  borderRadius: "42px",
                  bgcolor:"#FFCCCB",
                  color:"red",
                   height:"45px",
                  width:"5px",
                  fontSize:"20px",
                  mx: "auto",
                  display: "block",
                }}
              >  
                <b>02</b>

                </Button>

                </Grid>

              <Grid item xs={12} sm={8} sx={{textTransform:"initial",
              fontSize:"23px",marginTop:"1%"}}>
                <b >Get premium maganines</b>
                </Grid>
                </Grid>
              <Grid  item xs={12} sm={12} sx={{marginTop:"5%",marginLeft:"11%"}}>
            <TextField 
            id='email'
            name='email'
            label=" Email/Username"
            type="email"
            variant="outlined"
            InputProps={{
              sx: { borderRadius: "33px", width: "450px" },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <img src={Buttonnews} alt="Buttonnews" style={{width:"55px",height:"50px"}} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
             > 
            </TextField>
          </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src={tea} alt="tea" width="90%" height="150%" />
            </Grid>
          </Grid>
        </Box>
    </Box>
    </>
  );
}

export default SearchPage;
