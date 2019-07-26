import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Paper
} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  }
}))

export function Profile () {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      Profile
    </Paper>
  )
}
