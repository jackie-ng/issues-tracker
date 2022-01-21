import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../store'


const ResponsiveAppBar = ({ handleClick, isLoggedIn }) => {
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
  const pages = ['home', 'issues', 'users', 'dashboard', 'projects'];

  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
          </Menu>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Issues Tracker
          </Typography>

          {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}> */}

          {/* </Box> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Issues Tracker
          </Typography>
          {isLoggedIn ? (<div>
              <Link to="/home">
                <Button
                  key="home"
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  home
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button
                  key="home"
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  dashboard
                </Button>
              </Link>
              <Link to="/issues">
                <Button
                  key="issues"
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  issues
                </Button>
              </Link>
              <Link to="/users">
                <Button
                  key="users"
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  users
                </Button>
              </Link>

            {/* <Box sx={{ flexGrow: 0 }}> */}
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/img/uhoh.png" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >

              <MenuItem key="profile" onClick={handleCloseNavMenu}>

                <Typography textAlign="center">
                  Profile
                </Typography>
              </MenuItem>


              <MenuItem key="account" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  Account
                </Typography>
              </MenuItem>

              <MenuItem key="dashboard" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  Dashboard
                </Typography>
              </MenuItem>

              <MenuItem key="logout" onClick={handleClick} href="#">
                <Typography textAlign="center">
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
            {/* </Box> */}
          </div>
          ) : (
            <Box>
              {/* The navbar will show these links before you log in */}
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                <Link to="/login"><Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  <Button
                    key="home"
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    LOGIN
                  </Button>
                </Box>
                </Link>
                <Link to="/signup"><Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  <Button
                    key="home"
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    SIGN UP
                  </Button>
                </Box></Link>
              </Box>
            </Box>
          )}

        </Toolbar>
      </Container>
    </AppBar>
  );
};

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}
// export default ResponsiveAppBar;
export default connect(mapState, mapDispatch)(ResponsiveAppBar)

/**
 * PROP TYPES
 */
ResponsiveAppBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
