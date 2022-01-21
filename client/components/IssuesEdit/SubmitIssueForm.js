// eslint-disable-next-line no-dupe-else-if
import React from 'react'
import { connect } from 'react-redux'
import { submitNewIssueThunk } from '../../store'
import { Link } from 'react-router-dom'
/***
 * UI *
 **
 ***/
import Button from '@mui/material/Button'
import StickyFooter from '../UI/Footer'
import { withStyles } from '@mui/styles/withStyles'
import { Grid } from '@mui/material'
import MakeCard from '../UI/MakeCard'
import { Typography } from '@mui/material'
import { Input } from '@mui/material'
import { Container } from '@mui/material'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Select } from '@mui/material'
import { MenuItem, InputLabel, FormControl } from '@mui/material'

class SubmitIssueForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      description: '',
      severity: '',
      status: '',
      imageUrl: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.submitNewIssueThunk({
      name: this.state.name,
      description: this.state.description,
      severity: this.state.severity,
      status: this.state.status,
      imageUrl: this.state.imageUrl,
    })
  }
  handleChange(event) {
    event.preventDefault()
    const value = event.target.value
    this.setState({
      [event.target.name]: value
    })
  }

  render() {
    console.log(this.state)
    const { handleChange, handleSubmit } = this || {}
    const { name, description, imageUrl, severity, status } = this.state
    return (
      <div>
        <Container maxWidth="lg" align="center">
          <Typography variant="h3" color="initial" align="center">Submit New Issue</Typography>
        </Container>

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >
            {/* <form onSubmit={handleSubmit} > */}
            <Grid container spacing={2} align="center">
              <Grid item xs={12}>
                <label htmlFor="name" />
                <TextField id="standard-basic" label="Issue Name" variant="standard"
                  onChange={handleChange}
                  type="text"
                  name="name"
                  value={name}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="description" />
                <TextField label="Issue Description" variant="standard"
                  onChange={handleChange}
                  type="text"
                  name="description"
                  value={description}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="imageUrl" />
                <TextField label="Issue ImageUrl" variant="standard"
                  onChange={handleChange}
                  type="text"
                  name="imageUrl"
                  value={imageUrl}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl align="center" variant="standard" sx={{ m: 1, minWidth: 200 }}>
                <InputLabel>Severity Level</InputLabel>
                <label htmlFor="severity" />
                  <Select fullWidth onChange={handleChange} name="severity" type="text" value={severity} required>
                    <MenuItem value="" disabled><em>Required</em></MenuItem>
                    <MenuItem value="Minor">Minor</MenuItem>
                    <MenuItem value="Major">Major</MenuItem>
                    <MenuItem value="Critical">Critical</MenuItem>
                    <MenuItem value="Show Stopper">Show Stopper</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="status" />
                <FormControl align="center" variant="standard" sx={{ m: 1, minWidth: 200 }} >
                    <InputLabel>Status</InputLabel>
                  <Select fullWidth onChange={handleChange} name="status" type="text" value={status} required>
                    <MenuItem value="" disabled><em>Required</em></MenuItem>
                    <MenuItem value="Open">Open</MenuItem>
                    <MenuItem value="In progress">In progress</MenuItem>
                    <MenuItem value="Fixed">Fixed</MenuItem>
                    <MenuItem value="To be tested">To be tested</MenuItem>
                    <MenuItem value="Waiting for test">Waiting for test</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="contained-button-file" />
                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                <Button variant="contained" component="span">
                  Upload
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit">
                  Submit New Issue
                </Button>
              </Grid>
            </Grid>

          </Box>
          <StickyFooter />
        </Box>
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    submitNewIssueThunk: issue => dispatch(submitNewIssueThunk(issue))
  }
}
export default connect(null, mapDispatch)(SubmitIssueForm)

