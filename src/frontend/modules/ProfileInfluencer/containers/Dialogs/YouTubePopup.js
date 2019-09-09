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


export function YouTubePopup(props) {
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
                  <img style={{ width: 210, height: 118 }} alt={'title'} src={'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ'} />
                  <Typography gutterBottom variant="body2">Don Diablo @ Tomorrowland Main Stage 2019 | Official…</Typography>
                  <Typography variant="caption" color="textSecondary">
                    12K likes {` • `} 396M views
                  </Typography>
                  <Typography gutterBottom variant="caption" color="textSecondary" component="div">0.99% ctr</Typography>
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

YouTubePopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}