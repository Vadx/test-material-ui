import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
  Drawer,
  Box,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  FormControlLabel,
  Switch,
  FormControl,
  FormLabel,
  FormGroup,
  Checkbox,
  RadioGroup,
  Radio,
  TextField
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'


const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    width: 320
  },
  heading: {
    fontSize: theme.typography.pxToRem(13),
    fontWeight: theme.typography.fontWeightRegular,
  },
  panelWrap: {
    marginBottom: '20px'
  },
  innerDetails: {
    padding: '5px 20px 8px 20px',
    marginBottom: '5px',
    borderBottom: '1px solid #eee',
    width: '100%'
  },
  innerTitle: {
    background: '#ececec',
    borderBottom: '1px solid #e5e5e5',
    padding: '8px 20px'
  },
  innerForm: {
    borderBottom: '1px solid #e5e5e5',
    padding: '20px 20px'
  },
  formControl: {
    marginBottom: '25px'
  }
}))

const PanelSummary = withStyles({
  root: {
    backgroundColor: '#3c4656',
    color: '#fff',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 28,
    '&$expanded': {
      minHeight: 28,
    },
    '& .MuiIconButton-root': {
      color: '#fff',
      padding: '8px'
    }
  },
  content: {
    margin: '5px 0',
    '&$expanded': {
      margin: '5px 0',
    }
  },
  expanded: {},
})(ExpansionPanelSummary);

const PanelDetails = withStyles(theme => ({
  root: {
    padding: 0,
    flexDirection: 'column'
  },
}))(ExpansionPanelDetails)


const ControlLabel = withStyles(theme => ({
  root: {
    '& .MuiTypography-body1': {
      fontSize: theme.typography.pxToRem(13),
    }
  },
}))(FormControlLabel)


export function Filter(props) {
  const classes = useStyles()
  const { onClose, open } = props
  function handleClose() {
    onClose(false)
  }

  const [value, setValue] = React.useState('female')
  function handleChange(event) {
    setValue(event.target.value)
  }

  return (
    <Drawer anchor="right" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <Box className={classes.root}>
        <ExpansionPanel className={classes.panelWrap}>
          <PanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Advanced Filters</Typography>
          </PanelSummary>
          <PanelDetails>
            <Typography variant="button" className={classes.innerTitle}>Audience</Typography>
            <Box className={classes.innerForm}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                  <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
                  <FormControlLabel value="other" control={<Radio color="primary" />} label="All" />
                </RadioGroup>
              </FormControl>
              <FormControl component="fieldset">
                <FormLabel component="legend">Assign responsibility</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox value="13-17" color="primary" />}
                    label="13-17"
                  />
                  <FormControlLabel
                    control={<Checkbox value="18-24" color="primary" />}
                    label="18-24"
                  />
                  <FormControlLabel
                    control={<Checkbox value="25-34" color="primary" />}
                    label="25-34"
                  />
                   <FormControlLabel
                    control={<Checkbox value="35-44" color="primary" />}
                    label="35-44"
                  />
                   <FormControlLabel
                    control={<Checkbox value="45-54" color="primary" />}
                    label="45-54"
                  />
                  <FormControlLabel
                    control={<Checkbox value="55-64" color="primary" />}
                    label="55-64"
                  />
                  <FormControlLabel
                    control={<Checkbox value="64" color="primary" />}
                    label="64+"
                  />
                </FormGroup>
              </FormControl>
            </Box>

            <Typography variant="button" className={classes.innerTitle}>Influencers Living In</Typography>
            <Box className={classes.innerForm}>
              <TextField
                fullWidth
                multiline
                rows="3"
                margin="dense"
                variant="outlined"
              />
            </Box>

            <Typography variant="button" className={classes.innerTitle}>Channel Category</Typography>
            <Box className={classes.innerForm}>ttete</Box>

            <Typography variant="button" className={classes.innerTitle}>Saved Filters</Typography>
            <Box className={classes.innerForm}>ttete</Box>

            <Typography variant="button" className={classes.innerTitle}>Instagram</Typography>
            <Box className={classes.innerForm}>ttete</Box>

            <Typography variant="button" className={classes.innerTitle}>Audience</Typography>
            <Box className={classes.innerForm}>ttete</Box>
          </PanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <PanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Columns Visibility</Typography>
          </PanelSummary>
          <PanelDetails style={{padding: '5px 0'}}>
            <Box className={classes.innerDetails}>
              <ControlLabel control={<Switch value="checked1" size="small" color="primary" />} label="Rating" />
            </Box>
            <Box className={classes.innerDetails}>
              <ControlLabel control={<Switch value="checked2" size="small" color="primary" />} label="YouTube Subscribers" />
            </Box>
            <Box className={classes.innerDetails}>
              <ControlLabel control={<Switch value="checked3" size="small" color="primary" />} label="YouTube Est. Cost" />
            </Box>
            <Box className={classes.innerDetails}>
              <ControlLabel control={<Switch value="checked4" size="small" color="primary" />} label="Instagram Followers" />
            </Box>
            <Box className={classes.innerDetails}>
              <ControlLabel control={<Switch value="checked5" size="small" color="primary" />} label="Instagram Avg. Cost" />
            </Box>
            <Box className={classes.innerDetails}>
              <ControlLabel control={<Switch value="checked6" size="small" color="primary" />} label="Instagram Avg. Likes" />
            </Box>
            <Box className={classes.innerDetails}>
              <ControlLabel control={<Switch value="checked7" size="small" color="primary" />} label="Instagram Avg. Comments" />
            </Box>
            <Box className={classes.innerDetails}>
              <ControlLabel control={<Switch value="checked8" size="small" color="primary" />} label="Facebook Likes" />
            </Box>
            <Box className={classes.innerDetails}>
              <ControlLabel control={<Switch value="checked9" size="small" color="primary" />} label="Twitter Followers" />
            </Box>
          </PanelDetails>
        </ExpansionPanel>
      </Box>
    </Drawer>
  )
}

Filter.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}