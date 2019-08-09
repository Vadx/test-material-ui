import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Grid, Typography} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 2),
    background: '#fafafa',
    borderBottom: '1px dashed #ccc',
    position: 'relative',
    top: '-42px'
  },
}))

export function Header () {
  const classes = useStyles()
  return (
    <Grid container justify="space-between" alignItems="center" className={classes.root}>
        <Grid item>
          <Typography variant="h6">Create Campaign</Typography>
        </Grid>
        <Grid item><Typography variant="button" component="span" color="textSecondary">Not saved</Typography></Grid>
    </Grid>
  )
}
