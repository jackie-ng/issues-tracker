import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { auth } from '../store'
import StickyFooter from './UI/Footer'
import { Typography, Container, Button, TextField, Box, Grid } from '@mui/material'
import ResponsiveAppBar from './UI/AppBar'
/**
 * COMPONENT
 */
const AuthForm = props => {
  const { name, displayName, handleSubmit, error } = props
  console.log(props)

  return (
    <div>
    <ResponsiveAppBar/>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} name={name}>

            {/* <form onSubmit={handleSubmit} name={name}> */}
            <Grid container spacing={2} align="center">
              <Grid item xs={12}>
                <label htmlFor="email" />
                <TextField label="Email" variant="standard" name="email" type="text" fullWidth/>
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="password" />
                <TextField label="Password" variant="standard" name="password" type="password" fullWidth/>
              </Grid>
            </Grid>

              <Button type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ mt: 3, mb: 2 }}>
                {displayName}
              </Button>
            {error && error.response && <div> {error.response.data} </div>}
            {/* </form> */}
          </Box>
        </Box>
        <Button
          type="button"
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ mt: 3, mb: 2 }}
          href="/auth/google"
        >
          {displayName} with Google
        </Button>
      </Container>

      <StickyFooter />
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}


