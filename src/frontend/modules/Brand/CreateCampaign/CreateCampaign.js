import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Grid
} from '@material-ui/core'
import { Header } from './containers/Header'
import { LeftForm } from './containers/LeftForm'
import { RightForm } from './containers/RightForm'
import { Footer } from './containers/Footer'

const useStyles = makeStyles(theme => ({
  root: {
  },
  inner: {
    maxWidth: '1170px',
    margin: '0 auto 50px',
    boxShadow: '0 0 20px #eee',
    border: '1px solid #ddd',
  },
  leftCol: {
    background: '#5c6474'
  }
}))

export function CreateCampaign () {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Header/>
      <Box className={classes.inner}>
        <Grid container spacing={0}>
          <Grid item xs={6} className={classes.leftCol}>
            <LeftForm />
          </Grid>
          <Grid item xs={6}>
            <RightForm />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  )
}
