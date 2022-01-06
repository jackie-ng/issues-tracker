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

class SubmitIssueForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      description: '',
      severity: '',
      imageUrl: ''
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
      imageUrl: this.state.imageUrl
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
    const { name, description, imageUrl, severity } = this.state
    return (
      <div>
        <Typography variant="h2" color="initial" align="center" gutterBottom>Submit New Issue</Typography>
        <div>
          {
            <form onSubmit={handleSubmit} >
              <label htmlFor="name">Name: </label>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                value={name}
                required
              />
              <label htmlFor="description">Description: </label>
              <input
                onChange={handleChange}
                type="integer"
                name="description"
                value={description}
                required
              />
              <label htmlFor="severity">Severity: </label>
              <select onChange={handleChange} name="severity" type="text" value={severity} required>
                <option value="minor">Minor</option>
                <option value="major">Major</option>
                <option value="critical">Critical</option>
                <option value="show stopper">Show Stopper</option>
              </select>
              <label htmlFor="imageUrl">Proof: </label>
              <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                <Button variant="contained" component="span">
                  Upload
                </Button>
              </label>
              <button className="btn" type="submit">
                Submit New Issue
              </button>
            </form>
          }
        </div>
        <StickyFooter />
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

