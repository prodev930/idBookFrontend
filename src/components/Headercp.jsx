import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
 
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ListItemIcon } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import vector from '../Images/Vectorblack.png';
import premium from '../Images/premium.png';
import CallIcon from '@mui/icons-material/Call';

//import call from '../Images/call.png';
import idbook from '../Images/idbook.png';
import { Link } from 'react-router-dom';
//import idbooklogo from '../Images/idbooklogo.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
//import Menu from '@mui/material/Menu';
//import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { display } from '@mui/system';
import '../App.css'

const pages = ["","Become A Pro","Be frenchise","","",""];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const tabs = ["","Become A Pro","Be frenchise","","","",""];

function Headercp() {

  const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{bgcolor:"#FFF"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          

          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}

          <Typography
            variant="h6"
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily:"inherit",
              fontSize:40,
              fontWeight: 700,
              color: '#00008B',
              textDecoration: 'none',
              marginTop:"0%"
            }}
          >
            <Link to="/" style={{textDecoration: 'none',  color: 'inherit'}}
 rel="noopener noreferrer"> 
            <div className="logo-label">
<div className="logo-text">Idbook</div>
</div>
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"            
            >
             
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            > 
              {tabs.map((page,index) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Button
              className='data1'
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' ,textTransform:"initial"}}
              >
                
                {index === 0 && <ListItemIcon> 
                  <Button variant="text" endIcon={<KeyboardArrowDownIcon />} sx={{color:"black"}}>
                  <Link to="/" style={{textDecoration: 'none',  color: 'inherit'}}
rel="noopener noreferrer">                  
  Home </Link>
</Button>
                  </ListItemIcon>}
                {index === 1}
                {index === 2}
                {/* {index === 3 && <ListItemIcon><Button variant="text" startIcon={<WhatsAppIcon style={{color:"green"}}/>} sx={{color:"black"}}>
                +91 88001 50924
</Button></ListItemIcon>} */}
{index === 3 && <ListItemIcon>  <Button
      
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{paddingLeft:'0'}}
       
      > 
          <b> 24/7 Support </b> 
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}> <Button variant="text" startIcon={<CallIcon />}>
        +91 8645663143

</Button>
</MenuItem>
        <MenuItem onClick={handleClose}><Button variant="text" startIcon={<WhatsAppIcon />}>
        +91 8800150924
</Button></MenuItem>
        
      </Menu>
  </ListItemIcon>}
                {index === 4 && <ListItemIcon><LightModeIcon /></ListItemIcon>}
                 {index === 5 && <ListItemIcon> <Link to="https://pages.razorpay.com/pl_NLzd5ZdUezy4Wl/view" 
                 style={{textDecoration: 'none',  color: 'black'}} rel="noopener noreferrer">
                  <Button variant='contained' sx={{ borderRadius:"22px", textTransform:"initial"}}  className='btn-grad' > 
                  Pay Now </Button>
                 </Link>
                  </ListItemIcon>}
                {page}
                {index === 6 && <Tooltip title="Open settings" sx={{display: { xs: 'block', sm:'block', md: 'none', lg:'none' }}}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Button variant='contained' sx={{
                  borderRadius:"32px",
                  bgcolor:"#1F4A8E",
                  color:'white',
                  textTransform:"initial",
                  textDecoration:"none",
                }} 
                className='btn-grad'> <Link to="/cp-signup" style={{textDecoration: 'none',  color: 'inherit'}}
                 rel="noopener noreferrer">

                  Log in/Sign up
                  </Link>
                </Button>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
              </IconButton>
            </Tooltip>}
              </Button>


                  {/* <Typography textAlign="center" > {page}</Typography> */}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              //mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              //fontWeight: 700,
              //letterSpacing: '.3rem',
              color: '#00008B',
              textDecoration: 'none',
              padding:"15px",
              height:"46px"
            }}
          >
            <div className="logo-label">
             <div className="logo-text">Idbook</div>
             </div>
          </Typography>
          <Box classname="head-cls" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',  }, justifyContent: 'space-evenly' }}>
            {pages.map((page,index) => (
              <Button
              className='data1'
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' ,textTransform:"initial"}}
              >
                
                {index === 0 && <ListItemIcon> 
                  <Button variant="text" sx={{color:"black"}}>
                  <Link to="/" style={{textDecoration: 'none',  color: 'inherit'}}
 rel="noopener noreferrer">                  
  Home </Link>
</Button>
                  </ListItemIcon>}
                {index === 1 && <ListItemIcon>
                  <img src={premium} alt="premium" style={{marginLeft:"35%"}}/></ListItemIcon>}
                {index === 2 && <ListItemIcon>
              <img src={vector} alt="vector" style={{marginLeft:"35%"}}/></ListItemIcon>}
                {/* {index === 3 && <ListItemIcon><Button variant="text" startIcon={<WhatsAppIcon style={{color:"green"}}/>} sx={{color:"black"}}>
                +91 88001 50924
</Button></ListItemIcon>} */}
{index === 3 && <ListItemIcon>  <Button
      
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
       
      > 
          <b> 24/7 Support </b> 
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}> <Button variant="text" startIcon={<CallIcon />}>
        +91 8645663143

</Button>
</MenuItem>
        <MenuItem onClick={handleClose}><Button variant="text" startIcon={<WhatsAppIcon />}>
        +91 8800150924
</Button></MenuItem>
        
      </Menu>
  </ListItemIcon>}
                {index === 4 && <ListItemIcon><LightModeIcon /></ListItemIcon>}
                 {index === 5 && <ListItemIcon> <Link to="https://pages.razorpay.com/pl_NLzd5ZdUezy4Wl/view" 
                 style={{textDecoration: 'none',  color: 'black'}} rel="noopener noreferrer">
                  <Button variant='contained' sx={{ borderRadius:"22px", textTransform:"initial"}} className='btn-grad' > 
                  Pay Now </Button>
                 </Link>
                  </ListItemIcon>}
              

               
                
                {page}
              </Button>

            

            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Button variant='contained' sx={{
                  borderRadius:"32px",
                  bgcolor:"#1F4A8E",
                  color:'white',
                  textTransform:"initial",
                  textDecoration:"none",
                  display: { xs: 'none', lg:'block', md:'block', sm:'block' }
                }} 
                className='btn-grad'
                > <Link to="/cp-signup" style={{textDecoration: 'none',  color: 'inherit'}}
                 rel="noopener noreferrer">

                  Log in/Sign up
                  </Link>
                </Button>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                //horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                //marginRight:"55%"
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            > 
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Headercp;