import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Box, Typography, Fab, Paper} from '@material-ui/core'
import ArrowBack from '@material-ui/icons/ArrowBack'
import { Statistic } from './Statistic'

const useStyles = makeStyles(theme => ({
  wrap: {
    borderRadius: 0,
    padding: '5px 10px',
    marginBottom: '20px'
  },
  styleFub: {
    padding: '5px 7px',
    minWidth: 'auto',
    borderRadius: '3px',
    boxShadow: 'none',
    height: '34px',
    marginRight: '20px'
  }
}))

export function TopStatusBar () {
  const classes = useStyles()
  return (
    <Paper className={classes.wrap}>
          <Box 
            display="flex" 
            justify="center" 
            spacing={0}
            alignItems="center"
            justifyContent="space-between"
            >
            <Box display="flex" alignItems="center" xs={8}>
              <Fab className={classes.styleFub} variant="extended"><ArrowBack /></Fab>
              <Typography variant="subtitle1" gutterBottom>Sed nec mattis leo</Typography>
            </Box>
            <Box display="flex" alignItems="center" justify="flex-end" xs={4}><Statistic /></Box>
          </Box>
    </Paper>
  )
}
