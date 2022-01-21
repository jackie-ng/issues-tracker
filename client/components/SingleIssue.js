/* eslint-disable no-dupe-else-if */
import React from 'react'
import {connect} from 'react-redux'
import history from '../history'
import {Link} from 'react-router-dom'
import { getIssueThunk} from '../store'
import { Typography, Container, Button } from '@mui/material'
import StickyFooter from './UI/Footer'

class SingleIssue extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   }
  // }
  componentDidMount() {
    this.props.getIssueThunk(this.props.match.params.id)
  }
  render() {
    console.log('this.props.issue', this.props.issue);
    const {issue} = this.props.issue || {}

    return (
      <div>
        <Typography variant="h2" color="initial" align="center" gutterBottom>Issue Details</Typography>
        <Container maxWidth="lg" align="center">
        <img src={issue.imageUrl} align="left" />
        <Typography variant="h4" color="initial" align="left" gutterBottom>{issue.name}</Typography>
        <Typography variant="h6" color="teal" align="left" gutterBottom>{issue.status}</Typography>
        <Typography variant="h6" color="red" align="left" gutterBottom>Severity: {issue.severity}</Typography>
        <Typography variant="inherit" color="initial" align="left" gutterBottom>Details: {issue.description}</Typography>
        <Typography variant="body1" color="initial" align="left" gutterBottom>Created At: {issue.createdAt}</Typography>
        <Typography variant="body1" color="initial" align="left" gutterBottom>Updated At: {issue.updatedAt}</Typography>
        </Container>
        <Container maxWidth="sm" align="left">
        <Button align="left">Update Issue</Button>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    issue: state.issues
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getIssueThunk: id => dispatch(getIssueThunk(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleIssue)
