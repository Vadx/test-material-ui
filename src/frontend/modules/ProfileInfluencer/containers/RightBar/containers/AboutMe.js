import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  title: {
    borderBottom: '1px solid #eee',
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}))


export function AboutMe () {
  const classes = useStyles()
  return (
    <Box mb={4}>
      <Typography className={classes.title} variant="body2" component="div">About me</Typography> 
      <Typography color="textSecondary" variant="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
    </Box>
  )
}
