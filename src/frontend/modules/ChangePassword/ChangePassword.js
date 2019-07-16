import React from 'react'
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

export default function ChangePassword () {
  const classes = useStyles()
  return (
    <Grid 
      container
      justify="center"
      style={{ marginTop: '5%'}}>
      <Paper className={classes.paper}>
        <Box style={{textAlign: 'center'}}><img className={classes.img} src={logo} alt="Logo" /></Box>
        <TextField
          id="outlined-old-pass"
          label="Old password"
          type="password"
          name="password"
          autoComplete="Old password"
          margin="normal"
          variant="outlined"
          style={{width: '100%'}}
        />

        <TextField
          id="outlined-new-password"
          label="New password"
          type="password"
          name="password"
          autoComplete="New password"
          margin="normal"
          variant="outlined"
          style={{width: '100%'}}
        />

        <TextField
          id="outlined-password-again"
          label="Password (again)"
          type="password"
          name="password"
          autoComplete="Password (again)"
          margin="normal"
          variant="outlined"
          style={{width: '100%'}}
        />

        <Box display="flex" flexDirection="column" alignItems="stretch" paddingTop="15px">
          <Button size="large" variant="contained" color="primary">Change my password</Button>
        </Box>
      </Paper>
    </Grid>
  )
}
