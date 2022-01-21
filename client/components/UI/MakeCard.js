import React, { Children } from 'react'
import PropTypes from 'prop-types'
import withStyles from '@mui/styles/withStyles'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
// import history from '../history'
import { connect } from 'react-redux'

const styles = {
  card: {
    width: 400,
    height: 400
  },
  actionArea: {
    height: 350
  },
  media: {
    height: 'auto',
    paddingTop: '56.25%' // 16:9
  },
  actions: {
    display: 'flex'
  }
}

function MakeCard(props) {
  const { classes, name, severity, status, id} = props
  console.log('props', props);
  console.log('classes', props.classes);
  return (
    <React.Fragment>
      <Card className={classes.card} raised={false}>
        <CardActionArea
          className={classes.actionArea}
          onClick={() => history.push(`/issues/${id}`)}
        >
          <CardMedia
            className={classes.media}
            name={name}
            severity={severity}
            status={status}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">{name}</Typography>
            <Typography gutterBottom variant="h5" component="h2">{severity}</Typography>
            <Typography gutterBottom variant="h5" component="h2">{status}</Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button
            onClick={() =>
              history.push(`/issues/${id}`)
            }
            size="small"
            color="primary"
          >
            See Details
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  )
}

MakeCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MakeCard)
