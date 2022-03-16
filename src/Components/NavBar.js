import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";



const NavBar = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="static">
        <Toolbar>

          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Weatherly
          </Typography>
          <div>
            {isMobile ? (
              <>
                <IconButton
                  size="large"
                  edge="start"
                  onClick={handleMenu}
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Forecast</MenuItem>
                  <MenuItem onClick={handleClose}>Movies</MenuItem>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Menu>
              </>)
              : (<>
                <Button component={NavLink} to="/" color="inherit">Forecast</Button>
                <Button component={NavLink} to="/movies" color="inherit">Movies</Button>
                <Button component={NavLink} to="/signup" color="inherit">Profile</Button>
                <Button component={NavLink} to="/signup" color="inherit">Signup</Button>
                <Button color="inherit">Login</Button>
              </>)
            }
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar