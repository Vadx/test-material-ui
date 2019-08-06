import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Paper, Grid} from '@material-ui/core'
import {LeftBar} from './containers/LeftBar'
import {RightBar} from './containers/RightBar'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 3),
    maxWidth: '1024px',
    margin: '30px auto'
  }
}))

export function CampaignPreview () {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Grid container  spacing={3}>
        <Grid item xs={8}>
          <LeftBar />
        </Grid>
        <Grid item xs={4}>
          <RightBar />
        </Grid>
      </Grid>
    </Paper>
  )
}