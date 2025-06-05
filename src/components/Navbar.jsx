import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; // Import Link for routing
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FAQ from './FAQ';
import Gallery from './Gallery';
import About from './About';
const drawerWidth = 240;
const navItems = ['Home', 'Search', 'Contact', 'Login'];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Blood Heroes
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link
                to={`/${item.toLowerCase()}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
        {/* About Dropdown */}
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: 'center' }}
            onClick={handleClick}
          >
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
                <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About BloodHeroes</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/Gallery" style={{ textDecoration: 'none', color: 'inherit' }}>Gallery</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/FAQ" style={{ textDecoration: 'none', color: 'inherit' }}>Blood Heroes FAQ</Link>
              </MenuItem>
        </Menu>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Blood Heroes
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Button
              sx={{ color: '#fff' }}
              onClick={handleClick}
            >
              About
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
            <MenuItem onClick={handleClose}>
                <Link to="/donation" style={{ textDecoration: 'none', color: 'inherit' }}>About BloodHeroes</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/Gallery" style={{ textDecoration: 'none', color: 'inherit' }}> Gallery</Link>
              </MenuItem>
              
              <MenuItem onClick={handleClose}>
                <Link to="/donation" style={{ textDecoration: 'none', color: 'inherit' }}>Blood Heroes FAQ</Link>
              </MenuItem>
            </Menu>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                <Link to={`/${item.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {item}
                </Link>
              </Button>
            ))}
            {/* About Dropdown for larger screens */}
            
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
