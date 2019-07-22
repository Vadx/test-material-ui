import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {Paper, Grid, Button, Box, TextField} from '@material-ui/core'
import logo from '../../assets/logo-dark.png'

const useStyles = makeStyles(theme => ({
  paper: {
    maxWidth: 380,
    minWidth: 300,
    padding: theme.spacing(3, 2),
    margin: theme.spacing(2, 2),
  },
  img: {
    backgroundSize: '100% auto',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    width: '140px',
    height: '32px',
    border: 'none',
    margin: ' 2px auto'
  }
}))

export function ForgotPassword () {
  const classes = useStyles()
  const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />)

  return (
    <Grid 
      container
      justify="center"
      style={{ marginTop: '10%'}}>
      <Paper className={classes.paper}>
        <Box style={{textAlign: 'center'}}><img className={classes.img} src={logo} alt="Logo" /></Box>
        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          style={{width: '100%'}}
        />
        <Box display="flex" flexDirection="column" alignItems="stretch" paddingTop="15px">
          <Button component={AdapterLink} to="/login" size="large" variant="contained" color="primary">Reset my password</Button>
        </Box>
      </Paper>
    </Grid>
  )
}
