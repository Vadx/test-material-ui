import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Paper, 
  Typography, 
  Grid,
  TextField,
  Box,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  title: {
    paddingBottom: '10px',
    marginBottom: '10px',
    borderBottom: '1px solid #eee'
  }
}))

export function CompanySettings () {
  const [state, setState] = React.useState({
    checkedB: true
  })

  const classes = useStyles()

  const [values, setValues] = React.useState({
    industry: '',
    proposals: ''
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  function handleChangeSelect(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }))
  }

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked })
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3" className={classes.title}>Company settings</Typography>
          <Typography variant="caption" component="p" color="textSecondary" style={{marginBottom: '20px'}}>Shared settings for all users on your account. <Link>Invite your team</Link></Typography>
          <TextField
            id="outlined-name-input"
            label="Name"
            name="name"
            autoComplete="Name"
            margin="dense"
            variant="outlined"
            fullWidth
            style={{marginBottom: '20px'}}
          />
          <TextField
            id="outlined-website-input"
            label="Website"
            name="website"
            autoComplete="Website"
            margin="dense"
            variant="outlined"
            fullWidth
            style={{marginBottom: '20px'}}
          />
          <FormControl variant="outlined" margin="dense" style={{marginBottom: '20px'}} fullWidth>
            <InputLabel ref={inputLabel} htmlFor="outlined-simple">Industry</InputLabel>
            <Select
              value={values.industry}
              onChange={handleChangeSelect}
              input={<OutlinedInput labelWidth={labelWidth} name="industry" id="outlined-simple" />}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={1}>Beauty & Fashion</MenuItem>
              <MenuItem value={2}>Technology & Gadgets</MenuItem>
              <MenuItem value={3}>Fitness & Exercise</MenuItem>
              <MenuItem value={4}>Travel & Adventure</MenuItem>
              <MenuItem value={5}>Cooking & Food</MenuItem>
              <MenuItem value={6}>Men's Lifestyle</MenuItem>
              <MenuItem value={7}>Film & Music Entertainment</MenuItem>
              <MenuItem value={8}>Marketplaces</MenuItem>
              <MenuItem value={9}>Apps & Software</MenuItem>
              <MenuItem value={10}>Gaming</MenuItem>
              <MenuItem value={11}>Other</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="outlined" margin="dense" style={{marginBottom: '5px'}} fullWidth>
            <InputLabel ref={inputLabel} htmlFor="outlined-simple-proposuls">Batch new proposals</InputLabel>
            <Select
              value={values.proposals}
              onChange={handleChangeSelect}
              name="proposals"
              input={<OutlinedInput labelWidth={labelWidth} name="proposuls" id="outlined-simple-proposuls" />}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={12}>Individual</MenuItem>
              <MenuItem value={13}>Daily Digest</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="caption" component="p" color="textSecondary" style={{marginBottom: '20px'}}>Send email for new campaign proposals</Typography>

          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange('checkedB')}
                value="checkedB"
                color="primary"
              />
            }
            label="Weekly content reports"
          />
          <Typography variant="caption" component="p" color="textSecondary" style={{marginBottom: '20px'}}>Get weekly summary of content performance</Typography>
          <Box textAlign="right">
            <Button variant="contained" color="primary">Save changes</Button>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  )
}
