import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Chip,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  title: {
    borderBottom: '1px solid #eee',
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  chip: {
    margin: theme.spacing(0.4),
  },
}))


export function Tags () {
  const classes = useStyles()
  return (
    <Box mb={4}>
      <Typography className={classes.title} variant="body2" component="div">Tags</Typography>
      <Box>
        <Chip label="Beauty" className={classes.chip} color="primary" />
        <Chip label="Fashion" className={classes.chip} color="primary" />
        <Chip label="Lifestyle" className={classes.chip} color="primary" />
        <Chip label="Advice" className={classes.chip} color="primary" />
      </Box>
    </Box>
  )
}
