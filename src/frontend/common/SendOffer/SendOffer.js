import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import {
  Button, 
  Dialog, 
  DialogTitle,
  DialogActions,
  DialogContent,
  Typography,
  IconButton
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

  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <Title id="customized-dialog-title" onClose={handleClose}>Sending Offer: User Name</Title>
        <StyledDialogContent dividers>
          sdsdsd
            
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