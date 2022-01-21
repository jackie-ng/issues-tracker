import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Typography, Container, Grid } from '@mui/material'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, name} = props

  return (
    <Container fixed align="center">
      <Typography variant="h2" color="initial" justifyContent="center" gutterBottom>Welcome, {name}!</Typography>
    </Container>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    name: state.user.name
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string
}
