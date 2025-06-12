import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Box, CssBaseline, Divider, Drawer,
  IconButton, List, ListItem, ListItemButton,
  ListItemText, Menu, MenuItem, Toolbar,
  Typography, Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Hook to detect route changes
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Re-check token on every route change
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, [location]);

  const handleDrawerToggle = () => setMobileOpen(prev => !prev);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
    setIsLoggedIn(false);
  };

  const drawerNavItems = ['Home', 'Search', 'Contact'];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Blood Heroes
      </Typography>
      <Divider />
      <List>
        {drawerNavItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link
                to={`/${item.toLowerCase()}`}
                style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
              >
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} onClick={handleClick}>
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
        {isLoggedIn ? (
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={handleLogout}>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        ) : (
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to="/login" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                <ListItemText primary="Login" />
              </Link>
            </ListItemButton>
          </ListItem>
        )}
      </List>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => { handleClose(); navigate('/about'); }}>About BloodHeroes</MenuItem>
        <MenuItem onClick={() => { handleClose(); navigate('/gallery'); }}>Gallery</MenuItem>
        <MenuItem onClick={() => { handleClose(); navigate('/faq'); }}>Blood Heroes FAQ</MenuItem>
      </Menu>
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
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Blood Heroes
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button sx={{ color: '#fff' }} onClick={handleClick}>About</Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem onClick={() => { handleClose(); navigate('/about'); }}>About BloodHeroes</MenuItem>
              <MenuItem onClick={() => { handleClose(); navigate('/gallery'); }}>Gallery</MenuItem>
              <MenuItem onClick={() => { handleClose(); navigate('/faq'); }}>Blood Heroes FAQ</MenuItem>
            </Menu>
            {drawerNavItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                <Link to={`/${item.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {item}
                </Link>
              </Button>
            ))}
            {isLoggedIn ? (
              <Button onClick={handleLogout} sx={{ color: '#fff' }}>Logout</Button>
            ) : (
              <Button sx={{ color: '#fff' }}>
                <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
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
