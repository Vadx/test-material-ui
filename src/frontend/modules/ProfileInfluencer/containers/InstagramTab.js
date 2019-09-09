import React from 'react'
import { Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Typography,
  Grid,
  Fab
} from '@material-ui/core'
import { Add } from '@material-ui/icons'
import Instagram from '../../../assets/instagram.svg'
import { InstagramPopup } from './Dialogs/InstagramPopup'

const useStyles = makeStyles(theme => ({
  extendedIcon: {
    marginRight: theme.spacing(1),
    width: 14,
    height: 14,
    position: 'relative',
    top: 2
  }
}))

const data = [
  {
    src: 'https://picsum.photos/id/10/210/210',
    likes: '12K likes',
    comments: '120 comments',
  },
  {
    src: 'https://picsum.photos/id/20/210/210',
    likes: '8K likes',
    comments: '20 comments',
  },
  {
    src: 'https://picsum.photos/id/25/210/210',
    likes: '20K likes',
    comments: '100 comments',
  },
  {
    src: 'https://picsum.photos/id/30/210/210',
    likes: '20K likes',
    comments: '125 comments',
  },
  {
    src: 'https://picsum.photos/id/40/210/210',
    likes: '12K likes',
    comments: '10 comments',
  },
  {
    src: 'https://picsum.photos/id/50/210/210',
    likes: '8K likes',
    comments: '14 comments',
  },
]

function AddVideo() {
  return (
    <Box 
      style={{border: '3px dashed #ccc'}}
      textAlign="center"
      width={210}
      p={2}
    >
      <Typography variant="subtitle1" gutterBottom>Add a new Instagram post</Typography>
      <Typography variant="caption" color="textSecondary" component="div" gutterBottom>Build out your portfolio by adding the content you're most proud of</Typography>
      <Fab size="medium" color="primary">
        <Add fontSize="large" />
      </Fab>
    </Box>
  )
}

export function InstagramTab() {
  const classes = useStyles()

  // Dialog Settings
  const [open, setOpen] = React.useState(false);
  function handleClickOpen() {
    setOpen(true)
  }
  const handleClose = value => {
    setOpen(false)
  }

  return (
    <Box py={3}>
      <Grid container justify="space-between" spacing={2}>
        {data.map((item, index) => (
          <Grid key={index} item>
              <Box width={210} mb={3} onClick={handleClickOpen} style={{cursor: 'pointer'}}>
                <img style={{ width: 210, height: 201 }} alt={item.title} src={item.src} />
                <Box>
                  <img className={classes.extendedIcon} src={Instagram} alt="Instagram" />
                  <Typography variant="caption" color="textSecondary">{`${item.likes} • ${item.comments}`}</Typography>
                </Box>
              </Box>
          </Grid>
        ))}
      </Grid>
      <Route path={['/creator']} component={AddVideo} />
      <InstagramPopup open={open} onClose={handleClose} />
    </Box>
  )
}