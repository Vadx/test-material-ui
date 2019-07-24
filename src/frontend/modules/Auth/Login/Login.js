import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {Paper, Typography, Grid, Button, Box, TextField, Link} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  paper: {
    maxWidth: 380,
    padding: theme.spacing(3, 2),
    margin: theme.spacing(2, 2),
  },
  title: {
    marginBottom: 30,
  },
  subtitle: {
    color: '#8d919a',
  },
  instagram: {
    background: '#365888',
    color: '#fff',
    marginBottom: 20
  },
  youtube: {
    background: '#d44839',
    color: '#fff'
  },
  textField: {
    width: '100%'
  },
}))

export function Login () {
  const classes = useStyles()
  const AdapterButton = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />)
  const AdapterLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />)

  return (
    <Grid 
      container
      alignItems="stretch"
      justify="center"
      style={{ marginTop: '5%'}}>
      <Grid item style={{display: 'flex'}}>
          <Paper className={classes.paper} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <Box marginBottom="40px">
              <Typography variant="h6" component="h3" className={classes.title}>I'm an Influencer</Typography>
              <Box marginBottom="30px" fontFamily="fontFamily" lineHeight="1.5" className={classes.subtitle}>You make great content on YouTube and Instagram and are looking for sponsorship opportunities from cool brands to support your channel.</Box>
              <Box fontFamily="fontFamily" lineHeight="1.5" className={classes.subtitle}>Signup or login with your social media accounts.</Box>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="stretch">
              <Button variant="contained" size="large" className={classes.instagram}>Instagram</Button>
              <Button variant="contained" size="large" className={classes.youtube}>Youtube</Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <Typography variant="h6" component="h3" className={classes.title}>I'm a Brand</Typography>
            <Box fontFamily="fontFamily" lineHeight="1.5" className={classes.subtitle}>You’re looking for influencers to promote your company. If you don't have an account yet, <Link to="/">signup here</Link>.</Box>
            <TextField
              id="outlined-email-input"
              label="Email"
              className={classes.textField}
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
            />
            <Box fontFamily="fontFamily" fontSize={12} textAlign="right">
              <Link component={AdapterLink} to="/forgot-password">Forget password?</Link>
            </Box>  
            <Box display="flex" flexDirection="column" alignItems="stretch" paddingTop="15px">
              <Button component={AdapterButton} to="/brand/campaigns" size="large" variant="contained" color="primary">Sign in</Button>
            </Box>
          </Paper>
        </Grid>
    </Grid>
  )
}
