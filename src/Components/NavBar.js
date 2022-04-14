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
import { useHistory } from 'react-router-dom';


const NavBar = ({ loggedIn, logout }) => {

  const history = useHistory();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (url) => {
    history.push(url)
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="static">
        <Toolbar>

          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 1 }}
            >
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
                {loggedIn
                  ? (<Menu
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
                    onClose={() => setAnchorEl(null)}
                  >
                    <MenuItem onClick={() => handleMenuClick('/home')}>Home</MenuItem>
                    <MenuItem onClick={() => handleMenuClick('/search')}>Search</MenuItem>
                    <MenuItem onClick={() => handleMenuClick('/forecast')}>Forecast</MenuItem>
                    <MenuItem onClick={() => handleMenuClick('/movies')}>Movies</MenuItem>
                    <MenuItem onClick={() => handleMenuClick('/profile')}>Profile</MenuItem>
                    <MenuItem onClick={() => {
                      logout();
                      handleMenuClick('/profile');
                    }}>Logout</MenuItem>
                  </Menu>)
                  : (<Menu
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
                    onClose={() => setAnchorEl(null)}
                  >
                    <MenuItem onClick={() => handleMenuClick('/signup')}>Signup</MenuItem>
                    <MenuItem onClick={() => handleMenuClick('/login')}>Login</MenuItem>
                  </Menu>)}
              </>)
              : (<>
                {loggedIn
                  ? (<>
                    <Button component={NavLink} to="/home" color="secondary">Home</Button>
                    <Button component={NavLink} to="/search" color="inherit">Search</Button>
                    <Button component={NavLink} to="/forecast" color="inherit">Forecast</Button>
                    <Button component={NavLink} to="/movies" color="inherit">Movies</Button>
                    <Button component={NavLink} to="/profile" color="inherit">Profile</Button>
                    <Button component={NavLink} to="/home" onClick={logout} color="warning">Logout</Button>
                  </>
                  )
                  : (<>
                    <Button component={NavLink} to="/signup" color="primary">Signup</Button>
                    <Button component={NavLink} to="/login" color="secondary">Login</Button>
                  </>
                  )}
              </>)
            }
          </div>
        </Toolbar>
      </AppBar>
    </Box >
  );
}

export default NavBar