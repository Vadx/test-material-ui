import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Box, Typography} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    // padding: theme.spacing(3, 2),
  },
  headline: {
    background: '#66aca9',
    borderBottom: '1px dashed #66aca9',
    padding: theme.spacing(1, 2),
    color: '#fff'
  },
  content: {
    padding: theme.spacing(2, 2),
    background: '#5c6474'
  }
}))

export function LeftForm () {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Box className={classes.headline}>
        <Typography variant="button" component="h6">Campaign Details</Typography>
      </Box>
      <Box className={classes.content}>
        Text
      </Box>
    </Box>
  )
}
