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
import { Typography, Box, Grid } from '@mui/material'
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
    direction: 'row',
    justify: 'flex-start',
    alignItems: 'baseline'
  }
})

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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

        <Grid container
          direction="row"
          justifyContent="center"
          alignItems="baseline">
          {issues.length === 0 ? (
            <h4>NO ISSUES TO SHOW</h4>
          ) : (
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} key={issues.id}>
              {issues.map(issue => {
                const { name, id, severity, status } = issue
                return (
                  <Grid item xs={2} sm={4} md={4} key={id}>
                    {/* <MakeCard
                    key={id}
                    id={id}
                    name={name}
                    severity={severity}
                    status={status} >
                  </MakeCard> */}
                    <Item>
                      <Typography gutterBottom variant="h5" component="h2">{name}</Typography>
                      <Typography gutterBottom variant="p" component="h3" color="red">{severity}</Typography>
                      <Typography gutterBottom variant="p" component="h3" color="teal">{status}</Typography>
                      <Button
                        onClick={() =>
                          history.push(`/issues/${id}`)
                        }
                        size="small"
                        color="primary"
                      >
                        Details
                      </Button>
                    </Item>
                  </Grid>

                )
              })}
              <Grid item xs={2} sm={4} md={4} key='new issue'>
              <Link to="/submitissueform">
              <Item>
                <Typography gutterBottom variant="h5" component="h2" color="primary">

            Submit New Issue
                </Typography>
              </Item>
          </Link>
              </Grid>
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
