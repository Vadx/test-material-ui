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
    src: 'https://picsum.photos/id/11/210/210',
    likes: '12K likes',
    comments: '120 comments',
  },
  {
    src: 'https://picsum.photos/id/22/210/210',
    likes: '8K likes',
    comments: '20 comments',
  },
  {
    src: 'https://picsum.photos/id/24/210/210',
    likes: '20K likes',
    comments: '220 comments',
  }
]

function GetSponsored() {
  return (
    <Box 
      style={{border: '3px dashed #ccc'}}
      textAlign="center"
      width={210}
      p={2}
    >
      <Typography variant="subtitle1" gutterBottom>Get Sponsored</Typography>
      <Typography variant="caption" color="textSecondary" component="div" gutterBottom>View available Grapevine campaigns</Typography>
      <Fab size="medium" color="primary">
        <Add fontSize="large" />
      </Fab>
    </Box>
  )
}

export function SponsoredPostsTab() {
  const classes = useStyles()
  return (
    <Box py={3}>
      <Grid container justify="space-between" spacing={2}>
        {data.map((item, index) => (
          <Grid key={index} item>
              <Box width={210} mb={3}>
                <img style={{ width: 210, height: 201 }} alt={item.title} src={item.src} />
                <Box>
                  <img className={classes.extendedIcon} src={Instagram} alt="Instagram" />
                  <Typography variant="caption" color="textSecondary">{`${item.likes} • ${item.comments}`}</Typography>
                </Box>
              </Box>
          </Grid>
        ))}
      </Grid>
      <Route path={['/brand']} component={GetSponsored} />
    </Box>
  )
}