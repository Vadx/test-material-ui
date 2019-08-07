import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box, 
  Typography,
  Grid
} from '@material-ui/core'
import { LeftForm } from './containers/LeftForm'
import { RightForm } from './containers/RightForm'
import { Footer } from './containers/Footer'

const useStyles = makeStyles(theme => ({
  root: {
    // padding: theme.spacing(3, 2),
  },
}))

export function CreateCampaign () {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Grid container  spacing={0}>
        <Grid item xs={6}>
          <LeftForm />
        </Grid>
        <Grid item xs={6}>
          <RightForm />
        </Grid>
      </Grid>
      <Typography variant="h5" component="h3">CreateCampaign</Typography>
      <Footer />
    </Box>
  )
}
