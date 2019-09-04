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


export function AudienceStats () {
  const classes = useStyles()
  return (
    <Box mb={4}>
      <Typography className={classes.title} variant="body2" component="div">Audience Stats</Typography> 
      <Typography variant="caption" color="textSecondary" align="center" component="div">Audience data for this creator is temporarily unavailable.</Typography>
    </Box>
  )
}
