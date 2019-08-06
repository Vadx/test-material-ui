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
  TextField,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Switch
} from '@material-ui/core'
import {Close} from '@material-ui/icons'

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  }
})

const useStyles = makeStyles(theme => ({
  containerForm: {
    marginBottom: '20px',
    paddingBottom: '15px',
    borderBottom: '1px solid #e3e3e3'
  },
  staff: {
    background: '#ffeffb',
    padding: theme.spacing(2)
  }
}))

const StylesPanel = withStyles({
  root: {
    border: 'none',
    boxShadow: 'none',
    background: 'none',
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 0,
    },
  },
  expanded: {},
})(ExpansionPanel)

const TitlePanel = withStyles({
  root: {
    paddingLeft: 0,
    minHeight: 46,
    '&$expanded': {
      minHeight: 46,
    },
  },
  content: {
    '&$expanded': {
      margin: '2px 0',
    },
  },
  expanded: {},
})(ExpansionPanelSummary)

const Details = withStyles(theme => ({
  root: {
    padding: theme.spacing(1),
  },
}))(ExpansionPanelDetails);

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
}))(DialogContent);

const StyledDialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(DialogActions)

export function ManageCampaign(props) {
  const classes = useStyles()
  const { onClose, open } = props
  function handleClose() {
    onClose(false)
  }
  
  const [checked, setChecked] = React.useState(true)
  const toggleChecked = () => {
    setChecked(prev => !prev)
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <Title id="customized-dialog-title" onClose={handleClose}>Manage Campaign</Title>
        <StyledDialogContent dividers>
          <Box className={classes.containerForm}>
            <TextField
              id="outlined-name-input"
              label="Marketplace Display Name"
              name="name"
              autoComplete="Marketplace Display Name:"
              variant="outlined"
              margin="dense"
              fullWidth
            />
            <Typography display="block" variant="caption" color="textSecondary" style={{marginBottom: '20px'}}>How your brand's name should appear to creators for this campaign (defaults to test company)</Typography>
            
            <FormLabel component="legend">Campaign Status:</FormLabel>
            <FormControlLabel
              control={<Switch size="small" color="primary" checked={checked} onChange={toggleChecked} />}
              // label="Small"
            />
            {checked ? (
                 <Typography variant="body2" component="span">Active - Currently accepting proposals</Typography>
               ) : (
                 <Typography variant="body2" component="span">Filled - Not accepting new proposals</Typography>)
            }
          </Box>

          <Box className={classes.containerForm}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Accept Proposals For:</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox value="US" color="primary" />}
                  label="Only creators from the US?"
                />
                <FormControlLabel
                  control={<Checkbox value="youtube" color="primary" />}
                  label="Youtube Videos"
                />
                <FormControlLabel
                  control={ <Checkbox value="instagram" color="primary" /> }
                  label="Instagram Posts"
                />
              </FormGroup>
            </FormControl>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                id="outlined-name-input"
                label="Minimum Instagram Followers"
                name="follovers"
                type="number"
                autoComplete="Minimum Instagram Followers:"
                variant="outlined"
                margin="dense"
                value={1}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <Typography display="block" color="textSecondary" variant="overline">Estimated cost per post</Typography>
              <Typography display="block" color="textSecondary" variant="button">Coming soon</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={3} style={{marginBottom: '20px'}}>
            <Grid item xs={6}>
              <TextField
                id="outlined-name-input"
                label="Minimum YouTube Subscribers"
                name="subscribers"
                type="number"
                autoComplete="Minimum Instagram Followers:"
                variant="outlined"
                margin="dense"
                value={1}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <Typography display="block" color="textSecondary" variant="overline">Estimated cost per video</Typography>
              <Typography display="block" color="textSecondary" variant="button">Predicting...</Typography>
            </Grid>
          </Grid>

          <Box className={classes.staff}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Staff only</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox value="US" color="primary" />}
                  label="Use Grapevine's shortened links in descriptions"
                />
              </FormGroup>
              <Typography color="textSecondary" variant="caption">Disabling shortened links will allow creators to upload videos without including a bit.ly link to your site that Grapevine provides. Without that link, Grapevine will not be able to track clicks or conversions on your videos. </Typography>
            </FormControl>

            <StylesPanel>
              <TitlePanel aria-controls="panel1a-content" id="panel1a-header">
                <Typography variant="body2">Add a custom agreement</Typography>
              </TitlePanel>
              <Details>
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  fullWidth
                  rows="4"
                  margin="dense"
                  variant="outlined"
                  placeholder="Creators will be required to agree to these terms prior to applying to your campaign or accepting an your invite."
                />
              </Details>
            </StylesPanel>
          </Box>
        </StyledDialogContent>
        <StyledDialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Save changes
          </Button>
        </StyledDialogActions>
    </Dialog>
  )
}

ManageCampaign.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}