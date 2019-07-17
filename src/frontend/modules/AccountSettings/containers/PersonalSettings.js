import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { 
  Paper, 
  Typography, 
  Grid, 
  TextField, 
  FormControlLabel, 
  Checkbox, 
  Button, 
  Box,
  Avatar} from '@material-ui/core'
import { deepOrange } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  title: {
    paddingBottom: '10px',
    marginBottom: '10px',
    borderBottom: '1px solid #eee'
  },
  styleAvatar: {
    marginRight: 20,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
}))

export function PersonalSettings () {
  const [state, setState] = React.useState({
    checkedB: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked })
  }

  const classes = useStyles()
  
  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3" className={classes.title}>Personal settings</Typography>
          <Typography variant="caption" component="p" color="textSecondary" style={{marginBottom: '20px'}}>Applied only to your account and will not affect other users connected to your company. </Typography>
          <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            margin="dense"
            variant="outlined"
            fullWidth
            style={{marginBottom: '20px'}}
          />
          <TextField
            id="outlined-phone-input"
            label="Phone number"
            name="phone"
            autoComplete="Phone number"
            margin="dense"
            variant="outlined"
            fullWidth
            style={{marginBottom: '10px'}}
          />
          <FormControlLabel
            style={{marginBottom: '30px'}}
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange('checkedB')}
                value="checkedB"
                color="primary"
              />
            }
            label="Notify me by text message about my active campaigns"
          />
          <Typography variant="subtitle2" gutterBottom mb={1}>My avatar:</Typography>
          <Grid container alignItems="center" mb={0.5}>
            <Grid item>
              <Avatar className={classes.styleAvatar}>H</Avatar>
            </Grid>
            <Grid item>
              <Button
                  variant="contained"
                  component="label"
                  size="small"
                >
                Upload File
                <input
                  type="file"
                  style={{ display: "none" }}
                />
              </Button>
            </Grid>
          </Grid>
          <Box mb={2}>
            
          </Box>
          <Typography variant="caption" component="p" color="textSecondary" style={{marginBottom: '20px'}}>Appears next to your name in the Message Center</Typography>
          <Box textAlign="right">
            <Button variant="contained" color="primary">Save changes</Button>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  )
}
