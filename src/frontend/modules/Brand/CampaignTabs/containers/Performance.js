import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Paper, 
  Typography, 
  Grid, 
  Box, 
  TextField, 
  Portal,
  Button,
  Link
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 3),
  },
  title: {
    paddingBottom: '10px',
    marginBottom: '30px',
    borderBottom: '1px solid #eee'
  },
  formWrap: {
    padding: theme.spacing(2, 2),
    backgroundColor: '#f5f5f5',
    border: '1px solid #e3e3e3',
    borderRadius:' 2px',
    boxShadow: 'inset 0 1px 1px rgba(0,0,0,.05)'
  },
  form: {
    background: '#fff',
    marginBottom: '20px',
    borderRadius: '5px'
  },
  code: {
    padding: '2px 4px',
    fontSize: '100%',
    color: '#c7254e',
    backgroundColor: '#f9f2f4',
    borderRadius: '2px'
  }
}))

export function Performance () {
  const classes = useStyles()
  const [show, setShow] = React.useState(false)
  const container = React.useRef(null)

  function handleClick() {
    setShow(!show)
  }

  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <Typography className={classes.title} variant="h6" component="h5">Track how many customers sign up after viewing your campaign videos</Typography>
        <Grid container style={{marginBottom: '20px'}}>
          <Grid item xs={2}>
            <Typography variant="subtitle2">Step 1:</Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="caption">Copy and paste the following code before the <Typography component="span" className={classes.code}>{'</'}body{'>'}</Typography> tag on the page of your website where you want to track actions. For example, to track registrations, place the code on your 'registration completed' web page. To include a monetary value for each conversion, edit the code to assign a conversion value using the <Typography component="span" className={classes.code}>data-amount=""</Typography> field.</Typography>
          </Grid>
         
        </Grid>

        <Grid container style={{marginBottom: '40px'}}>

          <Grid item xs={2}>
            <Typography variant="subtitle2">Step 2:</Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography component="div" variant="caption" gutterBottom>Once you've added the code, be sure to load the page where you placed the tracking code. Then click the 'validate tracking' button below.</Typography>
            <Link style={{marginBottom: 10}} component="button" onClick={handleClick}>Show more</Link>
            <div>
              {show ? (
                <Portal container={container.current}>
                  <Typography variant="caption">Visiting this page sets a test cookie on your browser. When you complete a transaction on your site, if the tracking code is installed correctly, we'll look for it and mark this script as installed correctly. </Typography>
                </Portal>
              ) : null}
            </div>
            <div ref={container} />
          </Grid>
        </Grid>

        <Box className={classes.formWrap}>
          <TextField
            fullWidth
            multiline
            rows="3"
            margin="dense"
            variant="outlined"
            placeholder="A few descriptive sentences about what your campaign is, what your goals are, and anything else the creators should know before they apply."
            value={'code'}
            className={classes.form}
            
          />
          <Button variant="contained" color="primary">Validate tracking code</Button>
        </Box>
      </Paper>
    </React.Fragment>
    
  )
}
