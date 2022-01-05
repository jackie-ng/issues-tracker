import React from 'react'
import {connect} from 'react-redux'
import history from '../history'
import {Link} from 'react-router-dom'
import {getIssueThunk} from '../store'

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
    // console.log('this.props.issue', this.props.issue);
    const {issue} = this.props.issue || {}
    return (
      <div>
        <h2>Issue Details</h2>
        <h4>{issue.name}</h4>
        <p>Status: {issue.status}</p>
        <p>Severity: {issue.severity}</p>
        <img src={issue.imageUrl} />
        <p>Details: {issue.description}</p>
        <p>Created At: {issue.createdAt}</p>
        <p>Updated At: {issue.updatedAt}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    issue: state.issues
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getIssueThunk: id => dispatch(getIssueThunk(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleIssue)
