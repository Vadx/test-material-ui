import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Paper, Typography, Grid, TextField, Box, Button, Link} from '@material-ui/core'
import logo from '../../../assets/grapevine_slack.png'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  title: {
    paddingBottom: '10px',
    marginBottom: '20px',
    borderBottom: '1px solid #eee'
  },
  img: {
    backgroundSize: '100% auto',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    width: '310px',
    height: '48px',
    border: 'none',
    margin: ' 2px auto'
  },
  separate: {
    marginBottom: '20px',
    borderBottom: '1px solid #eee'
  },
}))

export function SlackIntegration () {
  const classes = useStyles()
  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Paper className={classes.root}>
          <Box style={{textAlign: 'center'}} className={classes.title}>
            <img className={classes.img} src={logo} alt="Logo" />
          </Box>
          <Typography component="p" style={{marginBottom: '15px'}}>Add real time Slack notifications for your organization</Typography>
          <Typography variant="body2" component="p" style={{marginBottom: '20px'}}>Get real-time notifications including proposals, uploads, and more. To get started, configure a <Link>new incoming webhook</Link> in your Slack integrations. Select the channel in Slack that you want notifications to go to, then add the provided "Webhook URL" in the field below.</Typography>
          <TextField
            id="outlined-slack-input"
            label="Slack webhook url"
            name="Slack"
            autoComplete="Slack webhook url"
            placeholder="https://hooks.slack.com/services/R02PPM6QE/B0BUQ0YQ4/RaaegZ1nCJZswDUJF8uc6O11"
            margin="dense"
            variant="outlined"
            fullWidth
            style={{marginBottom: '30px'}}
          />
          <Box className={classes.separate}></Box>
          <Box textAlign="right">
            <Button variant="contained" color="primary">Save changes</Button>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  )
}
