import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box, 
  Typography, 
  Grid,
  Tooltip,
  TextField,
  InputAdornment
} from '@material-ui/core'
import {ToggleButton, ToggleButtonGroup} from '@material-ui/lab'
import {HelpOutline} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    // padding: theme.spacing(3, 2),
  },
  headline: {
    background: '#66aca9',
    borderBottom: '1px dashed #66aca9',
    padding: theme.spacing(1, 2),
    color: '#fff'
  },
  content: {
    padding: theme.spacing(2, 2),
  },
  titleAudience: {
    padding: theme.spacing(1, 2),
    background: '#7d8390',
    borderRadius: '5px 5px 0 0',
    borderBottom: '1px DASHED #777',
    color: '#fff',
    textAlign: 'center'
  },
  contentAudience: {
    padding: theme.spacing(4, 3),
    background: '#4a5363'
  },
  label: {
    color: '#fff'
  },
  icon: {
    fontSize: '14px',
    marginLeft: '5px',
    color: '#7ad1ce'
  },
  input: {
    '& .MuiOutlinedInput-root': {
      background: '#fff',
      borderRadius: '5px'
    }
  },
  togglesWrap: {
    marginBottom: '40px',
    width: '100%'
  },
  toggleButtonTwo: {
    width: '50%',
    marginLeft: '0 !important',
  },
  toggleButton: {
    width: '33.3333333%',
    marginLeft: '0 !important'
  },
  toggleButtonFull: {
    width: '100%',
    marginLeft: '0 !important'
  },
  togglesAge: {
    display: 'flex',
    flexDirection: 'column'
  }
}))

export function LeftForm () {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    amount: '20000',
  })
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  } 

  const [social, setSocials] = React.useState(() => [''])
  const handleSocials = (event, newSocial) => {
      setSocials(newSocial)
  }

  const [gender, setGender] = React.useState(() => [''])
  const handleGender = (event, newGender) => {
      setGender(newGender)
  }

  const [geography, setGeography] = React.useState(() => [''])
  const handleGeography = (event, newGeography) => {
      setGeography(newGeography)
  }

  const [age, setAge] = React.useState(() => [''])
  const handleAge = (event, newAge) => {
      setAge(newAge)
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.headline}>
        <Typography variant="button" component="h6">Campaign Overview</Typography>
      </Box>
      <Box className={classes.content}>
        <Grid container spacing={3} style={{marginBottom: '30px'}}>
          <Grid item xs={8}>
            <Box display="flex" alignItems="center">
              <Typography variant="subtitle2" className={classes.label}>Campaign Name</Typography>
              <Tooltip title="This is visible to all eligible creators in the marketplace. We suggest that you choose a title that is brief and descriptive." placement="right-start">
                <HelpOutline className={classes.icon} color="primary" />
              </Tooltip>
            </Box>
            <TextField
              fullWidth
              margin="dense"
              variant="outlined"
              className={classes.input}
              placeholder="E.g. Summer product launch for Acme Co!"
            />
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" alignItems="center">
              <Typography variant="subtitle2" className={classes.label}>Estimated Budget</Typography>
              <Tooltip title="An estimate of how much you plan to spend on this campaign. The amount specificied is for internal use by our team to help your brand align with the right influencers. This is not shared with creators, and you will not be charged for this amount upon campaign creation." placement="right-start">
                <HelpOutline className={classes.icon} color="primary" />
              </Tooltip>
            </Box>
            <TextField
              fullWidth
              margin="dense"
              className={classes.input}
              type="number"
              id="outlined-adornment-amount"
              variant="outlined"
              value={values.amount}
              onChange={handleChange('amount')}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />
          </Grid>
        </Grid>

        <Typography variant="button" component="h6" className={classes.titleAudience}>Audience Targeting</Typography>
        <Box className={classes.contentAudience}>
          <Grid container spacing={3}>
            <Grid item xs={7}>
              <Box display="flex" alignItems="center">
                <Typography gutterBottom variant="subtitle2" className={classes.label}>Social Networks</Typography>
                <Tooltip title="Choose at least one network for your content to appear on." placement="right-start">
                  <HelpOutline className={classes.icon} color="primary" />
                </Tooltip>
              </Box>
              
              <ToggleButtonGroup size="large" value={social} onChange={handleSocials} className={classes.togglesWrap}>
                <ToggleButton className={classes.toggleButtonTwo} value="youtube">YouTube</ToggleButton>
                <ToggleButton className={classes.toggleButtonTwo} value="instagram">Instagram</ToggleButton>
              </ToggleButtonGroup>

              <Box display="flex" alignItems="center">
                <Typography gutterBottom variant="subtitle2" className={classes.label}>Gender</Typography>
                <Tooltip title="If you are are running a targeted campaign, or have gender specific content, you can indicate the target gender of your audience (notnecessarily the creator's gender)." placement="right-start">
                  <HelpOutline className={classes.icon} color="primary" />
                </Tooltip>
              </Box>
              
              <ToggleButtonGroup size="large" value={gender} onChange={handleGender} className={classes.togglesWrap}>
                <ToggleButton className={classes.toggleButtonTwo} value="men">Men</ToggleButton>
                <ToggleButton className={classes.toggleButtonTwo} value="women">Women</ToggleButton>
              </ToggleButtonGroup>

              <Box display="flex" alignItems="center">
                <Typography gutterBottom variant="subtitle2" className={classes.label}>Geography</Typography>
                <Tooltip title="Where is your target audience? Grapevine has influencers in over 130 countries." placement="right-start">
                  <HelpOutline className={classes.icon} color="primary" />
                </Tooltip>
              </Box>
              
              <ToggleButtonGroup size="large" value={geography} onChange={handleGeography} style={{width: '100%'}}>
                <ToggleButton className={classes.toggleButton} value="usa">USA</ToggleButton>
                <ToggleButton className={classes.toggleButton} value="uk">UK</ToggleButton>
                <ToggleButton className={classes.toggleButton} value="other">Other</ToggleButton>
              </ToggleButtonGroup>
              
            </Grid>
            <Grid item xs={5}>
              <Box display="flex" alignItems="center">
                <Typography gutterBottom variant="subtitle2" className={classes.label}>Geography</Typography>
                <Tooltip title="Where is your target audience? Grapevine has influencers in over 130 countries." placement="right-start">
                  <HelpOutline className={classes.icon} color="primary" />
                </Tooltip>
              </Box>
              
              <ToggleButtonGroup value={age} onChange={handleAge} className={classes.togglesAge}>
                <ToggleButton className={classes.toggleButtonFull} value="13-17">13-17</ToggleButton>
                <ToggleButton className={classes.toggleButtonFull} value="18-24">18-24</ToggleButton>
                <ToggleButton className={classes.toggleButtonFull} value="25-34">25-34</ToggleButton>
                <ToggleButton className={classes.toggleButtonFull} value="35-44">35-44</ToggleButton>
                <ToggleButton className={classes.toggleButtonFull} value="45-54">45-54</ToggleButton>
                <ToggleButton className={classes.toggleButtonFull} value="55-64">55-64</ToggleButton>
                <ToggleButton className={classes.toggleButtonFull} value="65+">65+</ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}
