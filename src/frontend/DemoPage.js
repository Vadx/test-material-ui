import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {
  Paper,
  Box
} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    maxWidth: '600px',
    margin: ' 30px auto 0'
  }
}))

export function DemoPage () {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Box fontFamily="fontFamily" textAlign="center">
        <Link to="/login" style={{color: '#3baaa6'}}>Login</Link>
      </Box>
    </Paper>
  )
}