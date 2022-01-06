import React from 'react'
import { connect } from 'react-redux'
import { getAllIssuesThunk } from '../store/issue'
import history from '../history'
import { Link } from 'react-router-dom'
/***
 * UI *
 **
 ***/
import Button from '@mui/material/Button'
import StickyFooter from './UI/Footer'
import { withStyles } from '@mui/styles/withStyles'
import { Grid } from '@mui/material'
import MakeCard from './UI/MakeCard'
import { Typography } from '@mui/material'

const styles = theme => ({
  root: {
    flexGrow: 1,
    direction: 'row',
    justify: 'flex-start',
    alignItems: 'baseline'
  }
})

class AllIssues extends React.Component {
  componentDidMount() {
    this.props.getAllIssuesThunk()
  }

  render() {
    const { issues } = this.props.issues || []
    // console.log('all issues props', this.props.issues.issues[0])
    // console.log('issues', issues);
    return (
      <div>
        <Typography variant="h2" color="initial" align="center" gutterBottom>All Issues</Typography>
        <Link to="/submitissueform">
          <Button variant="outlined" color="secondary">Submit New Issue</Button>
        </Link>
        <Grid container justify="center" spacing={16}>
          {issues.length === 0 ? (
            <h4>NO ISSUES TO SHOW</h4>
          ) : (
            <Grid key={issues.id} item>
              {issues.map(issue => {
                const { name, id, severity, status } = issue
                return (
                  <MakeCard
                    key={id}
                    id={id}
                    name={name}
                    severity={severity}
                    status={status} >
                  </MakeCard>
                )
              })}
            </Grid>
          )}
        </Grid>
        <StickyFooter />
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
