import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import {
  Grid, 
  Dialog, 
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  Box
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import Instagram from '../../../../assets/instagram.svg'
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
  extendedIcon: {
    marginRight: theme.spacing(1),
    width: 14,
    height: 14,
    position: 'relative',
    top: 2
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


export function InstagramPopup(props) {
  const classes = useStyles()
  const { onClose, open } = props
  function handleClose() {
    onClose(false)
  }
  return (
    <Dialog maxWidth="md" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <Title id="customized-dialog-title" onClose={handleClose}>Post Detail</Title>
        <StyledDialogContent className={classes.wrapper} dividers>
          <Grid container>
            <Grid item xs={3}>
              <Box width={210}>
                <img style={{ width: 210, height: 210 }} alt={'title'} src={'https://picsum.photos/id/10/210/210'} />
                <Box>
                  <img className={classes.extendedIcon} src={Instagram} alt="Instagram" />
                  <Typography variant="caption" color="textSecondary">12K likes {` • `} 396M views</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h4" gutterBottom>Title</Typography>
              <Typography variant="h6" gutterBottom>Brand Review</Typography>
              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={2}>
                  <Rating name="size-small" value={2} readOnly size="small" />
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body1" component="span">User Name</Typography>
                </Grid>
                <Grid item  xs={6} style={{textAlign: 'right'}}>
                  <Typography color="textSecondary" variant="caption">2019-08-06</Typography>
                </Grid>
              </Grid>
              <Box mb={2}>
                <Typography variant="caption">By | <Typography variant="caption" style={{color: '#DBAF00'}}>Verified Review</Typography></Typography>
              </Box>
              <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
              <Typography variant="h6" gutterBottom>Description</Typography>
              <Typography variant="body2">#ad #test</Typography>
            </Grid>
          </Grid>
        </StyledDialogContent>
    </Dialog>
  )
}

InstagramPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}