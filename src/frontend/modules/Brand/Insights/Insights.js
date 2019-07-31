import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Paper, Typography, Grid, Tooltip} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  styledPaper: {
    padding: theme.spacing(3, 2),
    height: '100%'
  },
  topTitle: {
    marginBottom: '20px'
  },
  countTitle: {
    marginBottom: '25px'
  }
}))

export function Insights () {
  const classes = useStyles()
  return (
    <Grid 
      container 
      spacing={3} 
      className={classes.root}
      direction="row"
      justify="center"
      alignItems="stretch"
      style={{textAlign: 'center', maxWidth: '1060px', margin: 'auto'}}>
      <Grid item xs={4}>
        <Paper className={classes.styledPaper}>
          <Typography variant="button" component="h6" color="textSecondary" className={classes.topTitle}>Average Cost Per Click (CPC)</Typography>
          <Typography variant="h3" component="p" color="primary" className={classes.countTitle}>$0.00</Typography>
          <Typography variant="caption" component="p" color="textSecondary" style={{marginBottom: '10px'}}>CPC is about <Tooltip title="714.55$" placement="bottom"><Typography variant="caption" component="span" style={{textDecoration: 'underline', cursor: 'help'}}>average</Typography></Tooltip></Typography>
          <Typography variant="caption" component="p" color="textSecondary">Calculated per click on videos that have been live for more than 10 days and have click tracking installed.</Typography>
        </Paper>
      </Grid>

      <Grid item xs={4}>
        <Paper className={classes.styledPaper}>
          <Typography variant="button" component="h6" color="textSecondary" className={classes.topTitle}>Creator Engagement</Typography>
          <Typography variant="h3" component="p" style={{color: '#7a8597'}} className={classes.countTitle}>63rd–%</Typography>
          <Typography variant="body2" component="p" color="textSecondary">Your brand is in the 63rd percentile of creator engagement by number of applications compared to other campaigns live for as long </Typography>
        </Paper>
      </Grid>

      <Grid item xs={4}>
        <Paper className={classes.styledPaper} style={{backgroundColor: '#7b8cbf'}}>
          <Typography variant="button" component="h6" style={{color: '#fff'}}>Top content</Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}
