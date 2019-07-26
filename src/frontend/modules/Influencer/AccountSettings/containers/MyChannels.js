import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Paper,
  Grid,
  Typography,
  Link,
  Button,
  IconButton
} from '@material-ui/core'
import { AddCircle, Autorenew } from '@material-ui/icons'


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 3),
  },
  iconSmall: {
    fontSize: 20,
    marginRight: theme.spacing(1)
  },
  border: {
    borderBottom: '1px solid #eee',
    marginBottom: '20px'
  }
}))

export function MyChannels () {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Typography variant="body1">Instagram</Typography>
        </Grid>
        <Grid item xs={2}>
          <Link><Typography component="span" gutterBottom>@johnloremcr</Typography></Link>
          <Typography variant="caption" component="div"><Link>Disconnect</Link></Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="body2" color="textSecondary">Your Instagram account has 1 followers. We require a minimum of 25 followers to participate in sponsored posts. We'll let you know when you're eligible!</Typography>
        </Grid>
        <Grid item xs={3} style={{textAlign: 'right'}}>
          <Typography component="span" variant="body2">1 followers</Typography>
          <IconButton color="primary" aria-label="autorenew">
            <Autorenew />
          </IconButton>
        </Grid>

        <Grid item xs={12} className={classes.border}></Grid>

        <Grid item xs={1}>
          <Typography variant="body1">YouTube</Typography>
        </Grid>
        <Grid item xs={11} style={{textAlign: 'center'}}>
          <Button color="primary" size="small">
            <AddCircle className={classes.iconSmall} />
            Connect Account
          </Button>
        </Grid>

        <Grid item xs={12} className={classes.border}></Grid>

        <Grid item xs={1}>
          <Typography variant="body1">Facebook</Typography>
        </Grid>
        <Grid item xs={11} style={{textAlign: 'center'}}>
          <Typography variant="body2" color="error" style={{textAlign: 'center'}}>Facebook doesn't allow auth to localhost, set dev.grapevinelogic.com in hosts file</Typography>
        </Grid>

        <Grid item xs={12} className={classes.border}></Grid>

        <Grid item xs={1}>
          <Typography variant="body1">Twitter</Typography>
        </Grid>
        <Grid item xs={11} style={{textAlign: 'center'}}>
          <Button color="primary" size="small">
            <AddCircle className={classes.iconSmall} />
            Connect Account
          </Button>
        </Grid>

      </Grid>
    </Paper>
  )
}
