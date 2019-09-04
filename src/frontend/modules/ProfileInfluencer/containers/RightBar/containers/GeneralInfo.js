import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Grid,
  Link,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  title: {
    borderBottom: '1px solid #eee',
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}))


export function GeneralInfo () {
  const classes = useStyles()
  return (
    <Box mb={4}>
      <Typography className={classes.title} variant="body2" component="div">General Info</Typography> 
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Typography variant="caption" color="textSecondary">YouTube Channel</Typography>
        </Grid>
        <Grid item xs={6} style={{textAlign: 'right'}}>
          <Link variant="caption">User Name</Link>
          <Typography variant="caption" color="textSecondary" component="div">0 subscribers</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="caption" color="textSecondary">Minimum cost on YouTube</Typography>
        </Grid>
        <Grid item xs={6} style={{textAlign: 'right'}}>
          <Typography variant="caption" color="textSecondary" component="div">$25 and up</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
