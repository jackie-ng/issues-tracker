import React from 'react'
import { Button, TextField, Typography, InputBase, Box, Paper, Grid, ButtonBase, IconButton } from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from '../UI/AppBar'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
function AllProjects() {

  return (
    <div>
    <ResponsiveAppBar/>
      <Typography variant='h2' align='center'>All Projects</Typography>
      <Box sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', borderRadius: 1 }}>
        <Search sx={{ flexGrow: 1 }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Button variant='contained' color='secondary'>Create Project</Button>
      </Box>
      <Box>
        <Paper>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase>
              <img
                // className={classes.img}
                // alt="complex"
                src="/img/uhoh.png"
              />
            </ButtonBase>
          </Grid>
          <Grid item sm container>
            <Grid item sm container align="left" direction="column" spacing={2}>
              <Grid item sm>
                <Link href='/projects/id' underline="hover">
                  Project Name
                </Link>
                <Typography>description</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h5">Ongoing</Typography>
              <Grid item>
                <Typography variant="h5" style={{cursor: 'pointer'}}>
                  Edit
                </Typography>
                <Typography variant="h5" style={{cursor: 'pointer'}}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </Paper>
      </Box>
    </div>
  )
}

export default AllProjects
