import React from 'react'
import {connect} from 'react-redux'
import {getAllIssuesThunk} from '../store/issue'
import history from '../history'
import {Link} from 'react-router-dom'

class AllIssues extends React.Component {
  componentDidMount() {
    this.props.getAllIssuesThunk()
  }

  render() {
    const {issues} = this.props.issues || []
    // console.log('all issues props', this.props.issues.issues[0])
    // console.log('issues', issues);
    return (
      <div>
        <h2>All Issues</h2>
        <Link className="create-button" to="/submitissue">
          Add New Issue
        </Link>
        <div>
          {issues.length === 0 ? (
            <h4>NO ISSUES TO SHOW</h4>
          ) : (
            <div>
              {issues.map(issue => {
                const {name, id, severity, status} = issue
                return (
                  <div key={id}>
                    <Link to={`/issues/${id}`}>
                      <h4>{name}</h4>
                    </Link>
                    <p>Severity: {severity}</p>
                    <p>Status: {status}</p>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    issues: state.issues
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllIssuesThunk: () => dispatch(getAllIssuesThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllIssues)
