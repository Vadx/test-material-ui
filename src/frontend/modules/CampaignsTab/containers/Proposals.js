import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Paper, Typography} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}))

export function Proposals () {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">Proposals</Typography>
    </Paper>
  )
}