import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Avatar,
  Grid,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 20
  },
  avatar: {
    marginRight: 10,
    display: 'inline-flex',
    verticalAlign: 'inherit',
    width: 100,
    height: 100
  }
}))


export function MainInfo () {
  const classes = useStyles()
  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item>
        <Avatar alt="User Name" className={classes.avatar} src="https://i.pravatar.cc/100?img=1" />
      </Grid>
      <Grid item>
        <Typography variant="h4" gutterBottom>User Name</Typography>
        <Typography color="textSecondary" variant="caption" component="div" gutterBottom>city, LI, US</Typography>
        <Typography color="textSecondary" variant="caption" component="div" gutterBottom>GV Sertified</Typography>
      </Grid>
    </Grid>
  )
}
