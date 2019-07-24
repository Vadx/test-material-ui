import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Paper, Typography, Box} from '@material-ui/core'

import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}))

export function CampaignsList () {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">Compaigns list</Typography>
      <Box>
        <Link to="/brand/campaign">Campaign #1</Link>
      </Box>
    </Paper>
  )
}
