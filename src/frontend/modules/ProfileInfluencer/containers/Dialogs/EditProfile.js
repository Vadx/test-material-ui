import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import {
  Avatar,
  Button,
  Box, 
  Dialog, 
  DialogTitle,
  DialogActions,
  DialogContent,
  Typography,
  TextField,
  IconButton,
  Link,
  FormControlLabel,
  Checkbox
} from '@material-ui/core'

import {Close} from '@material-ui/icons'

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
  avatar: {
    width: 140,
    height: 140,
    margin: 'auto'
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

export function EditProfile(props) {
  const classes = useStyles()
  const { onClose, open } = props
  function handleClose() {
    onClose(false)
  }
  return (
    <Dialog maxWidth="md" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <Title id="customized-dialog-title" onClose={handleClose}>Edit Profile</Title>
        <StyledDialogContent className={classes.wrapper} dividers>
          <Box mb={2}>
            <Avatar className={classes.avatar} />
          </Box>
          <Box>
            <Typography variant="subtitle2">Profile photo: <Typography variant="caption" color="textSecondary">(currently)</Typography></Typography>
            <Link variant="caption">influencer/avatar/44884218_345707102882519_2446069589734326272_n.jpg_nc_htinstagram.fbom19-1.fna.fbcdn.net</Link>
          </Box>
          <Box mb={2}>
            <FormControlLabel
              control={
                <Checkbox 
                  value="checkedA" 
                  color="primary"
                />
              }
              label="Clear"
            />
          </Box>
          <Box mb={2}>
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
          </Box>
          <TextField
            id="outlined-multiline-flexible"
            label="Interests and bio"
            multiline
            fullWidth
            rows="3"
            margin="normal"
            helperText="Max-characters: 200"
            variant="outlined"
            placeholder="Tell brands what you're looking for and why they should work with you."
            InputLabelProps={{
              shrink: true,
            }}
          />
           
        </StyledDialogContent>
        <StyledDialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">Save</Button>
        </StyledDialogActions>
    </Dialog>
  )
}

EditProfile.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}