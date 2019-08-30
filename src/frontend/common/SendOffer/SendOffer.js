import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Button, 
  Dialog, 
  DialogTitle,
  DialogActions,
  DialogContent,
  Typography,
  IconButton,
  Grid,
  TextField,
  Tooltip,
  FormControl,
  Select,
  MenuItem,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from '@material-ui/core'

import {Close, Delete, Help} from '@material-ui/icons'

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  }
})

const useStyles = makeStyles(theme => ({
  wrapper: {
    padding: theme.spacing(2)
  },
  containerForm: {
    marginBottom: '20px',
    paddingBottom: '15px',
    borderBottom: '1px solid #e3e3e3'
  },
  staff: {
    background: '#ffeffb',
    padding: theme.spacing(2)
  },
  line: {
    borderBottom: '1px solid #ccc',
    marginBottom: theme.spacing(1)
  },
  grayTable: {
    background: '#fafafa',
    border: '1px solid #eee',
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
  delete: {
    padding: '5px'
  },
  icon: {
    fontSize: 18
  },
  select: {
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      background: '#fff'  
    }
  },
  formWrap: {
    position: 'relative'
  },
  help: {
    position: 'absolute',
    top: '-1px',
    right: 2,
    fontSize: 15,
    color: '#999'
  }
}))

const Title = withStyles(styles)(props => {
  const { children, classes, onClose } = props
  return (
    <DialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <Close />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
})

const StyledDialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(DialogContent)

const StyledDialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(DialogActions)

export function SendOffer(props) {
  const classes = useStyles()
  const { onClose, open } = props
  function handleClose() {
    onClose(false)
  }

  // Select
  const [values, setValues] = React.useState({
    campaign: '',
    name: '',
  })

  const inputLabel = React.useRef(null)

  function handleChangeSelect(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <Dialog maxWidth="md" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <Title id="customized-dialog-title" onClose={handleClose}>Sending Offer: User Name</Title>
        <StyledDialogContent className={classes.wrapper} dividers>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Typography align="center" gutterBottom variant="h6">Madison Miller</Typography>
              <Typography align="center" gutterBottom variant="caption" component="div">
                <Typography component="span" gutterBottom variant="subtitle2">549,207</Typography> YouTube Subscribers
              </Typography>
              <Typography align="center" gutterBottom variant="caption" component="div">
                <Typography component="span" gutterBottom variant="subtitle2">121,304</Typography> Instagram Followers
              </Typography>
            </Grid>

            <Grid item xs={8}>
              <FormControl className={classes.select} variant="outlined" margin="dense" fullWidth style={{marginBottom: '25px'}}>
                <InputLabel ref={inputLabel} htmlFor="outlined-simple">Invite To Campaign</InputLabel>
                <Select
                  value={values.campaign}
                  onChange={handleChangeSelect}
                  input={<OutlinedInput 
                    name="campaign" id="outlined-simple" />}
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value={10}>Campaign 1</MenuItem>
                  <MenuItem value={20}>Campaign 2</MenuItem>
                  <MenuItem value={30}>Campaign 3</MenuItem>
                </Select>
              </FormControl>

              <Box className={classes.grayTable}>
                <Grid container spacing={2} className={classes.line}>
                  <Grid item xs={3}>
                    <Typography color="textSecondary" variant="body2">DELIVERABLES</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography color="textSecondary" variant="body2">DUE DATE</Typography>
                  </Grid>
                </Grid>
                
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={3}>
                    <Typography variant="body2">YouTube Video</Typography>
                    <Typography variant="caption" color="textSecondary">Minimum: $0</Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      id="date"
                      variant="outlined" 
                      margin="dense" 
                      fullWidth
                      type="date"
                      defaultValue="2017-05-24"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    /> 
                  </Grid>
                  <Grid item xs={3}>
                  <TextField
                      fullWidth
                      margin="dense"
                      className={classes.input}
                      type="number"
                      id="outlined-adornment-amount"
                      variant="outlined"
                      value="100"
                      InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                      }}
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton aria-label="delete" className={classes.delete}>
                      <Delete className={classes.icon} size="small" />
                    </IconButton>
                  </Grid>
                </Grid>

                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={3}>
                    <Typography variant="body2">Instagram Post</Typography>
                    <Typography variant="caption" color="textSecondary">Minimum: $0</Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      id="date"
                      variant="outlined" 
                      margin="dense" 
                      fullWidth
                      type="date"
                      defaultValue="2017-05-24"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    /> 
                  </Grid>
                  <Grid item xs={3}>
                  <TextField
                      fullWidth
                      margin="dense"
                      className={classes.input}
                      type="number"
                      id="outlined-adornment-amount"
                      variant="outlined"
                      value="100"
                      InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                      }}
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton aria-label="delete" className={classes.delete}>
                      <Delete className={classes.icon} size="small" />
                    </IconButton>
                  </Grid>
                </Grid>

                <Box pt={1}>
                  <Button size="small" color="primary">+ YouTube</Button>
                  <Typography component="span" color="textSecondary"> | </Typography>
                  <Button size="small" color="primary">+ Instagram</Button>
                </Box>
              </Box>

              <Box className={classes.formWrap}>
                <Tooltip
                  title={
                    <React.Fragment>
                      <Typography gutterBottom>Offer Message Tips</Typography>
                      <Typography variant="caption" gutterBottom>Introduce your brand and share what you like about this {"creator’s"} content! Great offer messages typically answer these questions:</Typography> 
                      <Typography variant="caption" component="ul"> 
                          <li>What would you like the creator to do for you? Do you have a specific type of video or post in mind?</li> 
                          <li>Are there any extra requests for this specific creator that are not mentioned in the campaign brief?</li> 
                          <li>Is there a specific date that videos or posts should be launched?</li> 
                          <li>Are you willing to negotiate? Creators get many invitations, and sometimes {"won’t"} be able to accept offers that are much lower than the suggestion minimum dollar amount.</li> 
                      </Typography> 
                      <Typography variant="caption">Keep in mind that negotiations and creative review are typically the longest phase of campaign creation. Invite the creator to chat on the phone to complete your campaign much more quickly!</Typography>
                    </React.Fragment>
                  }
                >
                  <Help size="small" className={classes.help} />
                </Tooltip>

                <TextField
                  id="outlined-multiline-flexible"
                  label="Messcampaign To Creator"
                  multiline
                  fullWidth
                  rows="4"
                  margin="normal"
                  helperText="Expert Tip: Campaigns are completed much faster after a kick-off call. Suggest a time to chat!"
                  variant="outlined"
                  placeholder="Introduce your brand and provide them with details about what you're looking for..."
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>

            </Grid>
          </Grid>
            
        </StyledDialogContent>
        <StyledDialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">Review and Confirm</Button>
        </StyledDialogActions>
    </Dialog>
  )
}

SendOffer.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}